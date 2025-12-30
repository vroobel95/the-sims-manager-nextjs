import enUS from './translations/en-US.json';
import plPL from './translations/pl-PL.json';

type SupportedLocale = 'en-US' | 'pl-PL';
type Translations = typeof enUS;

const translations: Record<SupportedLocale, Translations> = {
  'en-US': enUS,
  'pl-PL': plPL,
};

export function getTranslation(locale: SupportedLocale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to en-US if key not found
      value = translations['en-US'];
      for (const fallbackK of keys) {
        if (value && typeof value === 'object' && fallbackK in value) {
          value = value[fallbackK];
        } else {
          return key; // Return the key itself if translation not found
        }
      }
      return value;
    }
  }

  return typeof value === 'string' ? value : key;
}

export function getAllTranslations(locale: SupportedLocale): Translations {
  return translations[locale];
}
