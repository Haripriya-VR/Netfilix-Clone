import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import SignUp from "./pages/SignUp";
import Account from './pages/Account'
import LogIn from "./pages/LogIn";
import ProtectedRoute from "./Components/ProtectedRoute";



function App() {

  return (
    <>
    
  <AuthContextProvider>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<LogIn />} />
    <Route path='/signUp' element={<SignUp />}/>
    <Route path='/account' element={<ProtectedRoute> <Account /> </ ProtectedRoute>}/>
  </Routes>
</AuthContextProvider>

react.stric

    </>
  );
}

export default App;
