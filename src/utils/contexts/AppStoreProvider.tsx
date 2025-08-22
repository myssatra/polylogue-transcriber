import { createContext, useContext } from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Transcription, Treeview, User } from "../lib/types";
import UserService from "../services/UserService";
import DirectoryService from "../services/DirectoryService";

export const createAppStore = (props: any) => {
  return {
    // управление темой
    THEME: props.THEME || false,
    setTheme: function (value: boolean) {
      this.THEME = value;
    },
    toggleTheme: function () {
      this.THEME = !this.THEME;
    },
    // управление выбранной транскрипцией
    selectedTranscription: null as Transcription | null,
    setSelectedTranscription: function (transcription: Transcription | null) {
      this.selectedTranscription = transcription;
    },

    user: props.User || null,
    setAuthUser: async function () {
      this.user = await UserService.getAuthUser();
    },
    logout() {
      UserService.logoutUser();
    },

    treeView: props.treeView || null as Treeview | null,
    setTreeData: async function () {
      this.treeView = await DirectoryService.getUserTreeview();
    },
    
    // Счётчик для обновления дерева
    directoryUpdated: 0,
    notifyDirectoryUpdate: function () {
      this.directoryUpdated += 1;
    },
  };
};

const Context = createContext(null);

export const AppStoreProvider = observer(({ children, ...props }: any) => {
  const store = useLocalObservable(() => createAppStore(props));
  //@ts-ignore
  return <Context.Provider value={store}>{children}</Context.Provider>;
});

export const useAppStore: any = () => {
  const store = useContext(Context);
  if (!store) throw new Error("Use App store within provider!");
  return store;
};
