import { createContext, useContext } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const LogoContext = createContext();

LogoProvider.propTypes = {
  children: PropTypes.any,
};

function LogoProvider({ children }) {
  const [isHovered, setIsHover] = useState(() => false);

  return (
    <LogoContext.Provider value={{ isHovered, setIsHover }}>
      {children}
    </LogoContext.Provider>
  );
}
export function useLogo() {
  return useContext(LogoContext);
}

export default LogoProvider;
