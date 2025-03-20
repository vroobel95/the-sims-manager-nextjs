'use client';

import { patchAspiration } from '@/app/lib/aspirations/data';
import {
  AspirationFormData,
  aspirationFormSchema,
} from '@/app/lib/aspirations/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';

interface FormProps {
  aspirationId: string;
  defaultValues?: AspirationFormData;
  // onSubmit: (data: AspirationFormData) => void;
}

export default function Form({ aspirationId, defaultValues }: FormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AspirationFormData>({
    resolver: zodResolver(aspirationFormSchema),
    defaultValues,
  });

  const [preview, setPreview] = useState<string | null>(
    defaultValues?.iconFile || null
  );
  console.log(preview);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setPreview(URL.createObjectURL(file));
        setValue('iconFile', file);
      }
    },
    [setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1,
  });

  const handleSubmitAspiration = (data: AspirationFormData) => {
    patchAspiration(aspirationId, data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitAspiration)}
      className='flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg'
    >
      <label className='text-sm font-semibold'>Aspiration name</label>
      <input
        {...register('name')}
        placeholder='Enter aspiration name'
        className='border p-2 rounded-md'
      />
      {errors.name && (
        <p className='text-red-500 text-sm'>{errors.name.message}</p>
      )}

      <div
        {...getRootProps()}
        className='border-dashed border-2 p-4 rounded-lg text-center cursor-pointer bg-gray-50 hover:bg-gray-100'
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className='text-blue-500'>Drop here icon</p>
        ) : (
          <p>Drag & drop icon or click to choose from file explorer</p>
        )}
      </div>

      {preview && (
        <Image
          src={preview}
          alt='Preview'
          width={64}
          height={64}
          className='mt-2 border rounded-md'
        />
      )}

      <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>
        Save
      </button>
    </form>
  );
}
