import {
    FC, useContext, useEffect, useRef, useState,
} from "react";
import * as authHelper from './AuthHelpers'
import React from "react";
import { WithChildren } from "../helpers/react18MigrationHelpers";
import { AuthModel } from "./model";
import Spinner from "../components/Spinner";
import {  getToken } from "./request";

import { SearchModel } from "../pages/home/components/search-filter/filterCities/model";
type FilterQuery = {
    dep: SearchModel | null,
    ret: SearchModel | null, adults: number,
    infants: number, children: number,
    originLocationCode: string | null,
    destinationLocationCode: string | null,
    departureDate: string | null,
    returnDate: string | null,
    currency: string,

}
type ContextProps = {
    auth: AuthModel | undefined,
    saveAuth: (auth: AuthModel | undefined) => void
    filter: FilterQuery,
    changeDtae: () => void
    //  {
    //     dep: SearchModel | null,
    //     ret: SearchModel | null, adults: number,
    //     infants: number, children: number,
    //     originLocationCode: string | null,
    //     destinationLocationCode: string | null

    // },
    updateFilter: (updates: Partial<any>) => void
    countriesCode?: any

};
const initialQueryState = {
    originLocationCode: null,
    destinationLocationCode: null,
    departureDate: null,
    returnDate: null,
    dep: null,
    ret: null,
    adults:1,
    infants: 0,
    children: 0,
    currency: 'SAR'

}
const initContextPropsState = {
    auth: authHelper.getAuth(),
    saveAuth: () => { },
    filter: initialQueryState,
    updateFilter: () => { },
    changeDtae: () => {}
};


const AuthContext = React.createContext<ContextProps>(
    initContextPropsState
);

const useAuth = () => {
    return useContext(AuthContext)
}


const ContextProvider: FC<WithChildren> = ({ children }) => {
    const [auth, setAuth] = useState<AuthModel | undefined>(authHelper.getAuth())
    const [filter, setFilter] = useState<FilterQuery>(initialQueryState)


    const updateFilter = (updates: Partial<FilterQuery>) => {
        const updatedState = { ...filter, ...updates }
        if (updates.dep) {
            updatedState.originLocationCode = updates.dep.iataCode;
        }
        if (updates.ret) {
            updatedState.destinationLocationCode = updates.ret.iataCode;

        }
        setFilter(updatedState)
    }

    const saveAuth = (auth: AuthModel | undefined) => {
        setAuth(auth)
        if (auth) {
            authHelper.setAuth(auth)
        } else {
            authHelper.removeAuth()
        }
    }
    const changeDtae = () => {
        const updatedState = { ...filter }
        let depTemP = updatedState.dep;
        let retTemp = updatedState.ret
        if (depTemP) {
            updatedState.ret = depTemP;
            updatedState.destinationLocationCode = depTemP.iataCode
        }
        if (retTemp) {
            updatedState.dep = retTemp;
            updatedState.originLocationCode = retTemp.iataCode

        }
        setFilter(updatedState)
    }

    // const {
    //     isFetching,
    //     data: countriesCode,
    // } = useQuery(
    //     `${'countries-code'}`,
    //     () => {
    //         return getCountriesCode();
    //     },

    // )
    return (
        <AuthContext.Provider value={{ auth, saveAuth, filter, updateFilter,  changeDtae }}>
            {/* {isFetching ? <Spinner /> : children} */}
            {children}
        </AuthContext.Provider>
    );
};


const AuthInit: FC<any> = ({ children }) => {
    const {  saveAuth } = useAuth()
    const didRequest = useRef(false)
    const [showSplashScreen, setShowSplashScreen] = useState(true)
    // We should request user by authToken (IN OUR EXAMPLE IT'S API_TOKEN) before rendering the application
    useEffect(() => {

        const requestUser = async () => {
            try {
                if (!didRequest.current) {
                    const res = (await getToken())
                    if (res) {
                        saveAuth({ access_token: res.access_token, token_type: res.token_type })
                        // setCurrentUser(res?.user)
                    }
                }
            } catch (error) {
                console.error(error)
                if (!didRequest.current) {
                    //  logout()
                }
            } finally {

                setShowSplashScreen(false)
            }

            return () => (didRequest.current = true)
        }

        if (!false) {
            requestUser()
        } else {
            //  logout()
            setShowSplashScreen(false)
        }
        // eslint-disable-next-line
    }, [])

    return showSplashScreen ? <Spinner /> : <>{children}</>
}
export { ContextProvider, useAuth, AuthInit };
