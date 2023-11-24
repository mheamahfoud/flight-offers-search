import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppRoutes } from "./routing/AppRoutes";
import "./index.css";
import './assets/style.css'
// import { AuthProvider } from "./ContextProvider";
import { AuthInit, ContextProvider } from "./auth/ContextProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setupAxios } from "./auth/AuthHelpers";
import axios from "axios";

setupAxios(axios)
// setupAxios(axios)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 36000000,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  },
});
const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <ToastContainer position="top-right" hideProgressBar />
      <ContextProvider>
        <AuthInit>
          <AppRoutes />

        </AuthInit>
      </ContextProvider>


      {/* </AuthProvider> */}
    </QueryClientProvider>
  );
}
