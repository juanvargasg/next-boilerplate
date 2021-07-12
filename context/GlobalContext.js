import {useState, useEffect, createContext} from 'react';
import {getWindowDimensions} from '../utilities/utilities';

// Creation of the context
const GlobalContext = createContext();

/**
 * Allows consuming components to subscribe to context changes
 * @param {component} children
 */
 const GlobalProvider = ({children}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const dimensions = getWindowDimensions();
    setMenuIsOpen(dimensions.width >= 992);
  }, []);

  return (
    <GlobalContext.Provider value={{menuIsOpen, setMenuIsOpen}}>
      {children}
    </GlobalContext.Provider>
  )
}

export {GlobalProvider};
export default GlobalContext;
