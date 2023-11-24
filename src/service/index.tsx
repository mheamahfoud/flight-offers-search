import axios, { AxiosResponse } from "axios";
import { getAuth } from "../auth/AuthHelpers";
import { SearchModel } from "../pages/home/components/search-filter/filterCities/model";
const auth = getAuth()

export async function getCities(keyword: string): Promise<SearchModel[]> {

    return axios.get(`v1/reference-data/locations?subType=CITY&&keyword=${keyword}`, {
        headers: {
            Authorization: `${auth?.token_type} ${auth?.access_token}`
        }
    }).then((d: AxiosResponse<{ data: SearchModel[] }>) => d.data?.data)

}
export async function getOfferFlights(url: string): Promise<any> {

    return axios.get(`/v2/shopping/flight-offers${url}`, {
        headers: {
            Authorization: `${auth?.token_type} ${auth?.access_token}`
        }
    }).then((d: AxiosResponse<any>) => d.data)

}