import { ReactNode } from "react";

export interface APIRequest<T> {
  URL: string;
  METHOD: string;
  DATA?: T;
  TOKEN?: string;
}
