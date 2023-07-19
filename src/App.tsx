/* eslint-disable @typescript-eslint/no-non-null-assertion */
import "./App.css";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "./hooks/hook";
import { setLoading, setUser } from "./redux/api/userSlice";
import { auth } from "./lib/firebase";
function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
