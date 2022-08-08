import { useState } from "react";

export default function useAuth(initialValue) {
  const [isAuth, setIsAuth] = useState(initialValue);
  function Email() {
    setTimeout(() => {
      setIsAuth(true);
    }, 1000);
  }
  function Password() {
    setTimeout(() => {
      setIsAuth(false);
    }, 1000);
  }
  return [isAuth, Email,Password];
}
