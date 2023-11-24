import { FC } from 'react';
import { FLightData } from '../core/model';
import {  convertIsoDurationToArabic } from '../../../helpers';
import moment from 'moment';
import FlightIC from '../../home/components/icons/FlightIC';
import styles from './style.module.css'
import clsx from 'clsx';
interface Props {
    item: FLightData

}
const FLightItem: FC<Props> = ({ item }) => {

    return (
        <>
            {
                item.itineraries.map((itinerary) => {
                    return (
                        <>
                            {
                                itinerary.segments.map((segment) => {
                                    return (
                                        <div className="bg-white my-4 flex py-6 ">

                                            <div className='flex w-2/3  px-4 '>
                                                <div className="flex  justify-center w-1/4">
                                                    <div className=" flex  justify-center items-center  flex-col gap-2 relative" >
                                                        {/* <span><img src={carrierICon} width={60} height={60}></img></span> */}
                                                        <span className={`flight-image i-${segment.carrierCode.toLocaleLowerCase()}`}></span>
                                                        <span>{segment.carrierCode}</span>
                                                    </div>
                                                </div>
                                                <div className="w-2/4 flex flex-col justify-between items-center">
                                                    <p className="flex gap-4 fs-3 items-center justify-center">

                                                        <span className='flex flex-col'>
                                                            <span className="text-2xl text-[#114aaf] ">{moment(segment.departure.at).format("HH:MM")}</span>
                                                            <span className=' text-sm'>{segment.departure.iataCode}</span>
                                                        </span>
                                                        <span>
                                                            <FlightIC />
                                                        </span>
                                                        <span className='flex flex-col'>
                                                            <span className="text-2xl text-[#114aaf] ">{moment(segment.arrival.at).format("HH:MM")}</span>
                                                            <span className=' text-sm'>{segment.arrival.iataCode}</span>
                                                        </span>

                                                    </p>

                                                    <p className="text-sm text-[#b3b3b3]"> {convertIsoDurationToArabic(itinerary.duration)} (رحلة مباشرة)</p>
                                                </div>

                                                <div className="w-1/4 gap-1 flex  items-center   justify-center flex-col">
                                                    <span className="flex" >
                                                    </span>
                                                    <span className="color-sheep">الاقل سعراً</span>
                                                </div>

                                            </div>


                                            
                                            <div className={clsx("h-full", "min-h-[100px]", "relative" ,styles['flight-hole'])} style={{ border: "1px dashed #8f8f8f" }} >

                                            </div>
                                            <div className="flex flex-col justify-end items-center px-8  w-1/3 gap-3">
                                                <p className=" text-secondary text-2xl" style={{ direction: 'ltr' }}>{item.price.total} <span className="text-sm">{item.price.currency}</span>
                                                </p>

                                                <button className=' bg-secondary  w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                                    اختيار
                                                </button>

                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </>

                    )
                })
            }
        </>

    );
}

export default FLightItem;
