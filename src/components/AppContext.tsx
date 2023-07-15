import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { EThemeMode } from '../types/themes';
import GlobalStyle from './GlobalStyle';
import Header from './Header/Header';
import MainHelmet from './MainHelmet/MainHelmet';

export interface AppContextProps {
  theme: EThemeMode;
  setTheme: Dispatch<SetStateAction<EThemeMode>>;
}

interface IAppContainerProps {
  children: ReactElement;
}

export const AppContext = createContext<AppContextProps>({
  theme: EThemeMode.LIGHT,
  setTheme: () => {},
});

export const useAppContext = () => useContext(AppContext);

const AppContainer = ({ children }: IAppContainerProps) => {
  const [theme, setTheme] = useState<EThemeMode>(EThemeMode.DARK);

  return (
    <AppContext.Provider
      value={{
        theme: theme,
        setTheme,
      }}
    >
      <MainHelmet />
      <GlobalStyle />
      <Header />
      {children}
    </AppContext.Provider>
  );
};

export default AppContainer;
