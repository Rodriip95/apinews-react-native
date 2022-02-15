import React, {useReducer} from 'react';
import {reducer} from './reducer';

type NewType = {
  title: string;
  description: string;
  image: string;
};

type UserType = {
  name: string;
  mail: string;
  photo: string;
};

interface AppContextInterface {
  user: UserType;
  favorites: NewType[];
}

export const AppContext =
  React.createContext<AppContextInterface>(initialState);

const initialState: AppContextInterface = {
  user: {
    name: 'User Name Test',
    mail: 'user@test.com',
    photo: 'asd.jpg',
  },
  favorites: [],
};

const AppContextProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
