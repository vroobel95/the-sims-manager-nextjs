'use client';

import { useLocale } from '@/app/lib/i18n/LocaleContext';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function LanguageSelector() {
  const { locale, setLocale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en-US', name: 'English' },
    { code: 'pl-PL', name: 'Polski' },
  ] as const;

  const handleLanguageChange = (
    newLocale: (typeof languages)[number]['code']
  ) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === locale)?.name || 'English';

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white text-sm font-medium'
        aria-label='Change language'
      >
        {currentLanguage}
        <ChevronDownIcon
          className={`w-4 h-4 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-50 border border-gray-200 overflow-hidden'>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                locale === lang.code
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
