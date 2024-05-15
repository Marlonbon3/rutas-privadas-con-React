import { Route, Routes } from "react-router-dom";
import {Navbar} from "../Navbar";
import {HomePage, DashboardPage, LoginPage, RegisterPage, ValorantPage, JuegosGratis} from "../pages"
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return <>
    <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />}/>
          <Route path="login" element ={<LoginPage />}/>
          <Route path="register" element ={<RegisterPage />}/>
          <Route path="dashboard" element ={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }/>
          <Route path="ValorantPage" element ={<ValorantPage />}/>
          <Route path="JuegosGratis" element ={<JuegosGratis />}/>

        </Route>
    </Routes>
  </>;
}

