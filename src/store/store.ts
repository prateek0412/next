import { Actions, State } from "@/common/type/types";
import { create } from "zustand";
import { STATUS } from "../common/constants/constants";

export const useStore = create<State & Actions>()((set) => ({
  tasks: [],
  addTask: (title, description?) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: "123", title, description, status: STATUS.TODO },
      ],
    })),
  removeTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  updateTask: (id, status) => {},
}));
