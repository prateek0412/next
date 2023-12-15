import { UI_TEXT } from '@/common/constants/constants';
import { ReactNode } from 'react';

export interface IRootLayout {
  children: ReactNode;
}

export enum Language {
  EN = 'en',
  DE = 'de',
  // Add more languages as needed
}

type Translations = {
  [key: string]: string;
};

export type Languages = {
  [key in Language]: Translations;
};

export type Dictionary = {
  [keys in UI_TEXT]: string;
};

export interface ServerSideState {
  [GlobalKeys.USERS_LANGUAGE]: any;
  // Add other keys here if needed with their respective types
}

export enum GlobalKeys {
  USERS_LANGUAGE = 'usersLanguage',
  // Add other keys here if needed
}
