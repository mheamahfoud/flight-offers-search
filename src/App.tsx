// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { LayoutSplashScreen } from "./layouts/LayoutSplashScreen";
import './App.css'


const App = () => {

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Outlet />
    </Suspense>
  );
};

export { App };
