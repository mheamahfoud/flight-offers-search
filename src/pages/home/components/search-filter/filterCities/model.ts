export interface SearchModel {
    type: string,
    subType: string,
    name: string,
    iataCode: string,
    address: {
        countryCode: string,
        stateCode: string//"AE-ZZZ"
        cityName:string,
        cityCode:string ,
        countryName: string,
    },
    geoCode: {
        latitude: number,
        longitude: number
    }
}