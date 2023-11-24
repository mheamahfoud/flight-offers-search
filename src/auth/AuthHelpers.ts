import { AxiosError, AxiosResponse } from "axios"
import { toast } from "react-toastify";
import { AuthModel } from "./model";

const AUTH_LOCAL_STORAGE_KEY = 'kt-auth-react-v'
const getAuth = (): AuthModel | undefined => {
  if (!localStorage) {
    return
  }

  const lsValue: string | null = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY)
  if (!lsValue) {
    return
  }

  try {
    const auth: AuthModel = JSON.parse(lsValue) as AuthModel
    if (auth) {
      // You can easily check auth_token expiration also
      return auth
    }
  } catch (error) {
    console.error('AUTH LOCAL STORAGE PARSE ERROR', error)
  }
}

const setAuth = (auth: AuthModel) => {
  if (!localStorage) {
    return
  }

  try {
    const lsValue = JSON.stringify(auth)
    localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, lsValue)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE SAVE ERROR', error)
  }
}

const removeAuth = () => {
  if (!localStorage) {
    return
  }

  try {
    localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE REMOVE ERROR', error)
  }
}

export function setupAxios(axios: any) {
  const baseUrl = import.meta.env.VITE_APP_API_URL
  axios.defaults.baseURL = baseUrl



  axios.interceptors.request.use((config: any) => {
    // const auth = getAuth()
    // if (auth && auth.access_token) {
    //   config.headers.Authorization = `${auth.token_type} ${auth.access_token}`;
    // }
    //  const token = localStorage.getItem("token");

    // if (token) config.headers.Authorization = `token ${token}`;
    return config;
  });
  const responseInterceptor = (response: AxiosResponse) => {
    return response;
  };
  axios.interceptors.response.use(responseInterceptor, (error: AxiosError) => {
    const { data } = error.response as any;
    if (error.response) {

      switch (error.response?.status) {
        case 400:
          toast.error(data.errors[0]?.detail);
          break;
        case 401:
          toast.error(data.errors[0]?.detail);
          break;
        case 403:
          toast.error(data.errors[0]?.detail);
          break;
        case 404:
          toast.error("Not Found", {
            style: { background: "red", color: "white" },
          });
          break;
        case 405:
          toast.error(data.errors[0]?.detail);
          break;
        case 500:
          toast.error(data.errors[0]?.detail);
          break;
      }
    }
    return Promise.reject(error.response);
  });


}

export { getAuth, setAuth, removeAuth, AUTH_LOCAL_STORAGE_KEY }
