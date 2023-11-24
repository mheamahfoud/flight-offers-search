import { Route, Routes } from "react-router-dom";
import MasterLayout from "../layouts/MasterLayout";
import HomePage from "../pages/home";
import FlightPage from "../pages/flights";
"../pages/landing";
const MainRoutes = () => {
    // const HomePage = lazy(() => import('../pages/home'))
    // const FlightPage = lazy(() => import('../pages/flights'))
   
    return (
        <Routes>
            <Route element={<MasterLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<HomePage />} />
                <Route path={'/flights'} element={<FlightPage />} />

            </Route>
        </Routes>
    );
};

export { MainRoutes };
