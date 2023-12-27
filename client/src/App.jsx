
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import Layout from "./Layout/MainLayout";
import AccountPage from "./Pages/AccountPage";
import AdminPage from "./Pages/AdminPage";
import HomePage from "./Pages/Homepage";
import LoginPage from "./Pages/LoginPage";
import SignUPPage from "./Pages/SignUpPage";
import PrivateRouter from "./router/PrivateRouter";

function App() {


  return (  
    <BrowserRouter>
    <Routes>
      < Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<SignUPPage/>}/>
        <Route element={<PrivateRouter roles={["admin","user"]}/>} >
        <Route path="/account" element={<AccountPage/>}/>
        </Route>
        <Route element={<PrivateRouter roles={["admin"]}/>} >
        <Route path="/admin" element={<AdminPage/>}/>
      </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
