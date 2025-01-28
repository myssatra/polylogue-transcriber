import {createContext, useContext} from "react";
import {observer, useLocalObservable} from "mobx-react-lite";


export const createAppStore = (props: any) => {
    return {
        THEME: props.THEME || false,
        setTheme: function(value: boolean) {
            this.THEME = value
        },
        toggleTheme: function() {
            this.THEME = !this.THEME
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
    if (!store) throw new Error('Use App store within provider!');
    return store;
};
