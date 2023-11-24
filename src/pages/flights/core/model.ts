interface Departure {
    iataCode: string,// "CGD",
    at: string// "2023-12-06T07:05:00"
}

interface Arrival {
    iataCode: string,// "CAN",
    terminal: string,// "2",
    at: string//"2023-12-06T08:35:00"
}
interface Aircraft {
    code: string//"320"
}

interface Operating {
    carrierCode: string// "CZ"
}

interface Segment {
    departure: Departure,
    arrival: Arrival,
    carrierCode: string,// "CZ",
    number: string,// "3230",
    aircraft: Aircraft,
    operating: Operating,
    duration: string,// "PT1H30M",
    id: string,// "1",
    numberOfStops: number,// 0,
    blacklistedInEU: boolean,// false
}
interface Itinerary {

    duration: string,// "PT18H40M",
    segments: Segment[]
}

interface Fee {

    amount: string,// "0.00",
    type: string// "SUPPLIER"

}

interface Price {
    currency: string,// "EUR",
    total: string,// "1398.68",
    base: string,// "368.00",
    fees: Fee[],
    grandTotal: string,// "1398.68",
    additionalServices: [
        {
            "amount": string,// "320.00",
            "type": string,// "CHECKED_BAGS"
        }
    ]
}

interface FareDetailsBySegment {
    segmentId: string,// "1",
    cabin: string,// "ECONOMY",
    fareBasis: string,// "Z2LSRYCB",
    class: string,// "K",
    includedCheckedBags: {
        quantity: number//1
    }
}

export type FLightData = {

    price: Price,
    pricingOptions: {
        fareType: string[
        //"PUBLISHED"
        ]
    },
    includedCheckedBagsOnly: boolean,// true
    type: string,// "flight-offer",
    id: string,
    source: string,
    instantTicketingRequired: boolean,
    nonHomogeneous: false,
    oneWay: boolean,
    lastTicketingDate: string,
    lastTicketingDateTime: string,// "2023-11-25",
    numberOfBookableSeats: number,//9,
    itineraries: Itinerary[],

    validatingAirlineCodes: string[
    // "CZ"
    ],
    travelerPricings: [
        {
            travelerId: string,//"1",
            fareOption: string,// "STANDARD",
            travelerType: string,// "ADULT",
            price: {
                currency: string,// "EUR",
                total: string,// "699.34",
                base: string,// "184.00"
            },
            fareDetailsBySegment: FareDetailsBySegment[]


        },

    ]
};
// validatingAirlineCodes: string[
//     // "CZ"
// ],
//  travelerPricings: [
//         {
//             travelerId: string,//"1",
//             fareOption: string,// "STANDARD",
//             travelerType: string,// "ADULT",
//             price: {
//                 currency: string,// "EUR",
//                 total: string,// "699.34",
//                 base: string,// "184.00"
//             },
//             fareDetailsBySegment: FareDetailsBySegment[]


//         },

//     ]


export type FlightModel = {
    meta: {

    },
    data: [
        {
            price: Price,
            pricingOptions: {
                fareType: string[
                //"PUBLISHED"
                ]
            },
            includedCheckedBagsOnly: boolean,// true
            type: string,// "flight-offer",
            id: string,
            source: string,
            instantTicketingRequired: boolean,
            nonHomogeneous: false,
            oneWay: boolean,
            lastTicketingDate: string,
            lastTicketingDateTime: string,// "2023-11-25",
            numberOfBookableSeats: number,//9,
            itineraries: Itinerary[],

            validatingAirlineCodes: string[
            // "CZ"
            ],
            travelerPricings: [
                {
                    travelerId: string,//"1",
                    fareOption: string,// "STANDARD",
                    travelerType: string,// "ADULT",
                    price: {
                        currency: string,// "EUR",
                        total: string,// "699.34",
                        base: string,// "184.00"
                    },
                    fareDetailsBySegment: FareDetailsBySegment[]


                },

            ]
        }
    ],
    dictionaries: {
        locations: Locations,
        //  {
        //     "CAN": {
        //         "cityCode": "CAN",
        //         "countryCode": "CN"
        //     },
        //     "CGD": {
        //         "cityCode": "CGD",
        //         "countryCode": "CN"
        //     },
        //     "LHR": {
        //         "cityCode": "LON",
        //         "countryCode": "GB"
        //     }
        // },
        aircraft: ObjectMap,
        //  {
        //     "320": "AIRBUS A320",
        //     "789": "BOEING 787-9"
        // },
        currencies: ObjectMap
        //  {
        //     "EUR": "EURO"
        // },
        carriers: ObjectMap
        // {
        //     "CZ": "CHINA SOUTHERN AIRLINES"
        // }
    }
}
interface ObjectMap {
    [key: string]: string;
}
interface Location {
    cityCode: string;
    countryCode: string;
}

interface Locations {
    [key: string]: Location;
}