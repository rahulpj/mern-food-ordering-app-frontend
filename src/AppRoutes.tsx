import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import AuthCallbackPage from "./pages/AuthCallbackPage.tsx";
import UserProfilePage from "./pages/UserProfilePage.tsx";
import ProtectedRoute from "./auth/ProtectedRoute.tsx";
import ManageRestaurantPage from "./pages/ManageRestaurantPage.tsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      ></Route>
      <Route path="/auth-callback" element={<AuthCallbackPage />}></Route>
      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        ></Route>
        <Route
          path="/manage-restaurant"
          element={
            <Layout>
              <ManageRestaurantPage />
            </Layout>
          }
        ></Route>
      </Route>

      <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
};

export default AppRoutes;
