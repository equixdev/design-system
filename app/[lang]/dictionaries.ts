import ru from '@/dictionaries/ru.json';
import en from '@/dictionaries/en.json';

type Locale = 'ru' | 'en';

type Dictionary = typeof ru | typeof en;

const getDictionary = async (locale: Locale) => {
  return locale === 'ru' ? ru : en;
};

export { type Locale, type Dictionary, getDictionary };
