import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { CountryCodeModel } from "./model";

export async function getToken(): Promise<any> {
    const baseUrl = import.meta.env.VITE_APP_API_URL
    const client_secret = import.meta.env.VITE_APP_CLIENT_SECRET
    const client_id = import.meta.env.VITE_APP_CLIENT_ID
    const params = new URLSearchParams();
    params.append('client_id', client_id);
    params.append('client_secret', client_secret);
    params.append('grant_type', 'client_credentials');
    return axios.post(`${baseUrl}v1/security/oauth2/token`, params).then((d: AxiosResponse<any>) => d.data)
        .catch(((error) => {
            toast.error(error?.data?.error_description)

        }
        ));


}

export async function getCountriesCode(): Promise<CountryCodeModel> {
    
    return axios.get(`https://dsx9kbtamfpyb.cloudfront.net/desktop-web-fav4/locale/country-code-ar.json`).then((d: AxiosResponse<any>) => d.data)
    


}