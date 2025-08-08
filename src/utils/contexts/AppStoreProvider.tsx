import { createContext, useContext } from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Transcription } from "../lib/types";

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
    }
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
