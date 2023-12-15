import enDictionary from './en';
import deDictionary from './de';
import { Languages, Language } from '../types/global.types';

const languages: Languages = {
  en: enDictionary,
  de: deDictionary,
};

export const getDictionary = (lang: Language) => {
  if (languages[lang]) {
    return languages[lang];
  } else {
    throw new Error('Locale not found');
  }
};
