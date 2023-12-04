import { STATUS } from "../constants/constants";
export type Status = STATUS.DONE | STATUS.TODO | STATUS.IN_PROGRESS;

export type Task = {
  id: string;
  title: string;
  description?: string;
  status: Status;
};

export type State = {
  tasks: Task[];
};

export type Actions = {
  addTask: (title: string, description?: string) => void;
  removeTask: (id: string) => void;
  updateTask: (id: string, status: Status) => void;
};
