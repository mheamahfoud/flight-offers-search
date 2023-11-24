
import { useQueryResponseCarries } from '../core/QueryResponseProvider';
import CheckBox from '../../../components/CheckBox';
import { useListView } from '../core/QueryListViewProvider';
import clsx from 'clsx';

const Carrier = () => {
    const { onSelectCarrier,selectedCarrier,onSelectCarrierAll } = useListView();
    const handleClick = (value: string) => {
        onSelectCarrier(value)
    }

    const carrieres = useQueryResponseCarries();
    return (
        <div className='border-b border-t border-[#a6caff] py-4 gap-3  flex flex-col'>
            <div className=' flex justify-between items-center'>
                <h6 className=" text-secondary text-lg">خطوط الطيران</h6>
                <span className={clsx("text-center", "inline-block", "underline",  "cursor-pointer", carrieres.length==selectedCarrier.length ? " text-gray-400":"text-[#38bca8]")} onClick={()=>onSelectCarrierAll()} >تحديد الكل</span>

            </div>
            {
                carrieres.map((option) => {
                    return (
                        <CheckBox onClick={handleClick} value={option.value} checked={selectedCarrier.includes(option.value)} key={option.value} >
                            {option.text}
                        </CheckBox>


                    )

                })
            }
        </div >
    );
}

export default Carrier;
