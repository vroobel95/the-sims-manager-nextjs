'use client';

import { patchAspiration } from '@/app/lib/aspirations/data';
import {
  AspirationFormData,
  aspirationFormSchema,
} from '@/app/lib/aspirations/schemas';
import Button from '@/app/ui/button';
import Modal from '@/app/ui/modal';
import { zodResolver } from '@hookform/resolvers/zod';
import { clsx } from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';

interface FormProps {
  aspirationId: string;
  defaultValues?: AspirationFormData;
  // onSubmit: (data: AspirationFormData) => void;
}

export default function Form({ aspirationId, defaultValues }: FormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDiscardModal, setShowDiscardModal] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isDirty, isValid },
  } = useForm<AspirationFormData>({
    mode: 'onChange',
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

  const handleSubmitAspiration = async (data: AspirationFormData) => {
    try {
      setIsSubmitting(true);
      await patchAspiration(aspirationId, data);
    } catch (error) {
      console.error('Failed to update aspiration:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className='flex items-center justify-center h-full w-full pt-5'>
        <form
          onSubmit={handleSubmit(handleSubmitAspiration)}
          className='flex flex-col gap-2 w-full max-w-2xl space-y-8 p-6 bg-white shadow-lg rounded-xl m-4 overflow-y-auto'
        >
          <div className='flex flex-col gap-2 space-y-3 mb-8'>
            <label className='block text-base font-medium text-gray-900'>
              Aspiration Name
            </label>
            <div className='relative'>
              <input
                {...register('name')}
                placeholder='Enter aspiration name'
                className={clsx(
                  'block w-full px-4 py-3 rounded-lg border bg-white text-gray-900 text-base',
                  'transition-colors duration-200 ease-in-out',
                  'focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500',
                  errors.name
                    ? 'border-red-300 placeholder-red-300'
                    : 'border-gray-300 placeholder-gray-400'
                )}
              />
              {errors.name && (
                <p className='mt-1.5 text-sm text-red-500 flex items-center gap-1'>
                  <svg
                    className='h-4 w-4'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                      clipRule='evenodd'
                    />
                  </svg>
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>

          <div className='flex flex-col gap-2 space-y-3 mb-8'>
            <label className='block text-base font-medium text-gray-900'>
              Icon
            </label>
            <div
              {...getRootProps()}
              className={clsx(
                'relative border-2 border-dashed rounded-xl p-8',
                'transition-colors duration-200 ease-in-out cursor-pointer',
                'flex flex-col items-center justify-center text-center',
                isDragActive
                  ? 'border-blue-400 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400 bg-gray-50/50 hover:bg-gray-50'
              )}
            >
              <input {...getInputProps()} />
              <svg
                className={clsx(
                  'w-12 h-12 mb-4',
                  isDragActive ? 'text-blue-500' : 'text-gray-400'
                )}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
              {isDragActive ? (
                <p className='text-blue-500 text-base'>Drop the icon here</p>
              ) : (
                <div className='space-y-1'>
                  <p className='text-base text-gray-700'>
                    Drag & drop your icon here
                  </p>
                  <p className='text-sm text-gray-500'>
                    or click to select a file
                  </p>
                </div>
              )}
            </div>

            {preview && (
              <div className='mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200'>
                <div className='flex items-center gap-4'>
                  <Image
                    src={preview}
                    alt='Icon preview'
                    width={48}
                    height={48}
                    className='rounded-lg shadow-sm'
                  />
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm font-medium text-gray-900 truncate'>
                      Icon Preview
                    </p>
                    <p className='text-sm text-gray-500 truncate'>
                      The icon will be displayed at 48x48 pixels
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className='pt-6 flex gap-4'>
            <Button
              onClick={() => {
                if (isDirty) {
                  setShowDiscardModal(true);
                } else {
                  router.push('/main/database/aspirations');
                }
              }}
              className={clsx(
                'flex-1 bg-white !text-gray-900 border border-gray-300 justify-center',
                'hover:bg-gray-50 cursor-pointer transition-colors duration-200'
              )}
              type='button'
            >
              Cancel
            </Button>
            <Button
              type='submit'
              className={clsx(
                'flex-1 justify-center transition-all duration-200',
                !isDirty || !isValid
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              )}
              disabled={isSubmitting || !isDirty || !isValid}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    ></path>
                  </svg>
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </Button>
          </div>
        </form>
      </div>
      <Modal
        isOpen={showDiscardModal}
        onClose={() => setShowDiscardModal(false)}
        title='Discard Changes?'
        description='You have unsaved changes. Are you sure you want to leave this page? Your changes will be lost.'
        primaryAction={{
          label: 'Discard',
          onClick: () => {
            setShowDiscardModal(false);
            router.push('/main/database/aspirations');
          },
        }}
        secondaryAction={{
          label: 'Keep Editing',
          onClick: () => setShowDiscardModal(false),
        }}
      />
    </>
  );
}
