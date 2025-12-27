'use client';

import { HouseholdSim } from '@/app/lib/definitions';
import { useHouseholdDetail } from '@/app/lib/households/useHouseholdDetail';
import { useResidentialLots } from '@/app/lib/residentialLots/useResidentialLots';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Breadcrumbs from '../breadcrumbs';
import Spinner from '../spinner';

export default function HouseholdDetail({ id }: { id: string }) {
  const { household, isLoading, error } = useHouseholdDetail(id);
  const { lots, isLoading: lotsLoading } = useResidentialLots();
  const [isEditMode, setIsEditMode] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [name, setName] = useState<string>(household?.name || '');
  const [round, setRound] = useState<number>(household?.round || 0);
  const [funds, setFunds] = useState<number>(household?.funds || 0);
  const [imageUrl, setImageUrl] = useState<string | null>(
    household?.image_url || null
  );
  const [dragActive, setDragActive] = useState(false);
  const [selectedHouseId, setSelectedHouseId] = useState<string>(
    household?.name || ''
  );
  const [originalData] = useState({
    name: household?.name || '',
    round: household?.round || 0,
    funds: household?.funds || 0,
    imageUrl: household?.image_url || null,
    houseId: household?.name || '',
  });

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            setImageUrl(event.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageUrl(event.target.result as string);
          setHasChanges(true);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleHouseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHouseId(e.target.value);
    setHasChanges(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setHasChanges(true);
  };

  const handleRoundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRound(Number(e.target.value));
    setHasChanges(true);
  };

  const handleFundsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFunds(Number(e.target.value.replace(/,/g, '')));
    setHasChanges(true);
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setName(originalData.name);
    setRound(originalData.round);
    setFunds(originalData.funds);
    setImageUrl(originalData.imageUrl);
    setSelectedHouseId(originalData.houseId);
    setHasChanges(false);
  };

  useEffect(() => {
    if (household) {
      setName(household.name);
      setRound(household.round);
      setFunds(household.funds);
      setImageUrl(household.image_url || null);
      setSelectedHouseId(household.name || '');
    }
  }, [household]);

  const handleSave = async () => {
    // TODO: Implement save API call
    setIsEditMode(false);
    setHasChanges(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this household?')) {
      // TODO: Implement delete API call
    }
  };

  if (isLoading || lotsLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className='flex items-center justify-center py-12'>
        <div className='bg-red-50 border border-red-200 rounded-lg p-6 max-w-md'>
          <h3 className='text-red-900 font-semibold mb-2'>
            Error Loading Household
          </h3>
          <p className='text-red-700 text-sm'>
            {error instanceof Error
              ? error.message
              : 'Failed to load household details'}
          </p>
        </div>
      </div>
    );
  }

  if (!household) {
    return (
      <div className='flex items-center justify-center py-12'>
        <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-md'>
          <h3 className='text-gray-900 font-semibold mb-2'>Not Found</h3>
          <p className='text-gray-600 text-sm'>
            This household could not be found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-5'>
      <Breadcrumbs customLabel={household.name} />
      <div>
        <h1 className='text-4xl font-bold text-gray-900'>{household.name}</h1>
      </div>

      <div className='bg-white rounded-2xl border border-gray-200 p-8 shadow-sm'>
        <div className='flex items-center justify-between mb-8 pb-5 border-b border-gray-200'>
          <h2 className='text-xl font-semibold text-gray-900'>Details</h2>
          <div className='flex gap-3'>
            {!isEditMode ? (
              <>
                <button
                  onClick={handleEdit}
                  className='inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors'
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className='inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors'
                >
                  Delete
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleCancel}
                  className='inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors'
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={!hasChanges}
                  className={`inline-flex items-center px-4 py-2 font-medium rounded-lg transition-colors ${
                    hasChanges
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Save
                </button>
              </>
            )}
          </div>
        </div>

        <form className='flex flex-col gap-3 space-y-8'>
          <div>
            <label className='block text-sm font-semibold text-gray-900 mb-4'>
              Household Image
            </label>
            {!isEditMode ? (
              <div className='flex justify-center'>
                {imageUrl ? (
                  <div className='w-64 h-64 rounded-xl overflow-hidden shadow-md'>
                    <Image
                      src={imageUrl}
                      alt={household.name}
                      className='w-full h-full object-cover'
                      width={40}
                      height={40}
                    />
                  </div>
                ) : (
                  <div className='w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-md'>
                    <svg
                      className='w-24 h-24 text-gray-400'
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
                  </div>
                )}
              </div>
            ) : (
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-xl p-8 transition-all ${
                  dragActive
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 bg-gray-50 hover:border-gray-400'
                }`}
              >
                <div className='flex flex-col items-center justify-center'>
                  {imageUrl ? (
                    <div className='w-40 h-40 mb-6 rounded-lg overflow-hidden'>
                      <Image
                        src={imageUrl}
                        alt={household.name}
                        className='w-full h-full object-cover'
                        width={40}
                        height={40}
                      />
                    </div>
                  ) : (
                    <div className='w-40 h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-6 flex items-center justify-center'>
                      <svg
                        className='w-16 h-16 text-gray-400'
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
                    </div>
                  )}
                  <p className='text-sm text-gray-600 mb-4 text-center'>
                    Drag and drop an image here or click to select
                  </p>
                  <input
                    type='file'
                    id='image-upload'
                    accept='image/*'
                    onChange={handleFileInput}
                    className='hidden'
                  />
                  <label
                    htmlFor='image-upload'
                    className='inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg cursor-pointer transition-colors'
                  >
                    Choose Image
                  </label>
                </div>
              </div>
            )}
          </div>

          <div className='grid grid-cols-2 gap-8'>
            <div>
              <label className='block text-sm font-semibold text-gray-900 mb-3'>
                Name
              </label>
              <input
                type='text'
                value={name}
                onChange={handleNameChange}
                readOnly={!isEditMode}
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-0 ${
                  isEditMode
                    ? 'bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    : 'bg-gray-50'
                }`}
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-900 mb-3'>
                Round
              </label>
              <input
                type='number'
                value={round}
                onChange={handleRoundChange}
                readOnly={!isEditMode}
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-0 ${
                  isEditMode
                    ? 'bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    : 'bg-gray-50'
                }`}
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-900 mb-3'>
                House
              </label>
              {isEditMode ? (
                <select
                  value={selectedHouseId}
                  onChange={handleHouseChange}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                >
                  <option value=''>Select a house</option>
                  {lots?.map((lot) => (
                    <option key={lot.id} value={lot.id}>
                      {lot.address}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type='text'
                  value={household.name || 'N/A'}
                  readOnly
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-0'
                />
              )}
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-900 mb-3'>
                Funds
              </label>
              <div className='relative'>
                <span className='absolute left-4 top-2 text-gray-500 font-medium'>
                  $
                </span>
                <input
                  type='text'
                  value={funds.toLocaleString()}
                  onChange={handleFundsChange}
                  readOnly={!isEditMode}
                  className={`w-full pl-7 pr-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-0 ${
                    isEditMode
                      ? 'bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      : 'bg-gray-50'
                  }`}
                />
              </div>
            </div>

            <div className='col-span-2 sm:col-span-1'>
              <label className='block text-sm font-semibold text-gray-900 mb-3'>
                Wealth
              </label>
              <div className='relative'>
                <span className='absolute left-4 top-2 text-gray-500 font-medium'>
                  $
                </span>
                <input
                  type='text'
                  value={
                    household.wealth ? household.wealth.toLocaleString() : 'N/A'
                  }
                  readOnly={!isEditMode}
                  className={`w-full pl-7 pr-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-0 ${
                    isEditMode
                      ? 'bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      : 'bg-gray-50'
                  }`}
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      <div>
        <div className='mb-8'>
          <h2 className='text-2xl font-bold text-gray-900'>
            Household Members
          </h2>
          <p className='text-gray-600 text-sm mt-1'>
            {household.assigned_sims?.length || 0} sims
          </p>
        </div>
        {household.assigned_sims && household.assigned_sims.length > 0 && (
          <div className='grid grid-cols-4 gap-6'>
            {household.assigned_sims.map((sim: HouseholdSim) => (
              <div
                key={sim.id}
                className='group relative flex flex-col items-center overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1'
              >
                <div className='relative w-full h-40 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center'>
                  <svg
                    className='w-12 h-12 text-blue-300'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div className='w-full p-4 text-center bg-white'>
                  <p className='text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300'>
                    {sim.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
