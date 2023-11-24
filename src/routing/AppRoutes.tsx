

import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./MainRoutes";
import { App } from "../App";




const { PUBLIC_URL } = import.meta.env;
const AppRoutes: FC = () => {
    return (
        // <RouterProvider router={PrivateRoutes1} />

        <BrowserRouter basename={PUBLIC_URL}>
            <Routes>
                <Route element={<App />}>
                    <Route path="/*" element={<MainRoutes />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export { AppRoutes };
