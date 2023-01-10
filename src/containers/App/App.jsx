import { useEffect, useMemo } from "react";
import { useRootContext } from "../../context/Root";
import Login from "../Login";
import Root from "../Root";
import "./App.css";

function App() {
  const {
    state: { user },
    fetchCurrentUser,
  } = useRootContext();

  const currentUsername = useMemo(
    () => sessionStorage.getItem("currentUsername"),
    []
  );

  useEffect(() => {
    if (currentUsername) {
      fetchCurrentUser(currentUsername);
    }
  }, [currentUsername]);

  if (!user && !currentUsername) {
    return <Login />;
  }

  return <Root />;
}

export default App;
