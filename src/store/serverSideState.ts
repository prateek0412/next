import { ServerSideState, GlobalKeys } from '@/types/global.types';

let globalState: Partial<ServerSideState> = {}; // Initialize as partial

export const setGlobalState = (key: GlobalKeys, value: any) => {
  globalState[key] = value;
};

export const getGlobalState = (key: GlobalKeys): any => {
  return globalState[key];
};
