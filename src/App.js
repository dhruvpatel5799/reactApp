//root component
//default component

import { createContext, Fragment, useContext, useState } from "react";
import Menu from "./components/Menu";

//centralised state
export const centralState = createContext();

const App = (props) => {
  //read the context
  const cState = useContext(centralState);

  //central state
  const [store, setStore] = useState({
    IsLoggedIn: false,
    ValidUserEmail: 'Tina@xyz.com',
    ValidPassword: 'Tina'
  });

  return (
    <centralState.Provider value={{store,setStore}}>
      <Menu />
    </centralState.Provider>
  );
}
export default App;
