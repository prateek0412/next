import { APIRequest } from "@/types/components.types";
import { getAuthToken } from "./functionHelper";

export const API = async <T>(request: APIRequest<T>): Promise<T> => {
  const { URL, METHOD, DATA, TOKEN } = request;
  try {
    const headers: Record<string, string> = {
      Accept: 'application/json',
      Authorization: `Bearer ${TOKEN ? TOKEN : 
        getAuthToken()
      }`,
    };

    let body;

    if (DATA instanceof FormData) {
      body = DATA;
    } else {
      body = JSON.stringify(DATA);
      headers['Content-Type'] = 'application/json;charset=UTF-8';
    }

    const response = await fetch(URL, {
      method: METHOD,
      headers: headers,
      body: body,
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(errorData || 'Request failed');
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
