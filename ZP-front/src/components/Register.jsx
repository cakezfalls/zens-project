import { useState } from "react";
import YearSlide from "./YearSlide";


export default function Register(props) {

    console.log(props)
    const [years, setYears] = useState(1)

    function handleRemoveYears() {
        setYears(prev => prev - 1) 
    }

    function handleAddYears() {
        setYears(prev => prev + 1) 
    }



    return (
        <div className='flex justify-center p-[140px]'>
            <div className='bg-white w-[634px] h-[735px] rounded-3xl'>
                <div className='flex flex-col justify-center items-center'>
                    <h3  className="mt-5">Register {props.name}</h3>
                    <div className="flex justify-between w-[594px] h-[68px] mt-6 border-2 rounded-[100px]">
                         <img onClick={years > 1 ? handleRemoveYears : undefined} src="/public/img/icons minus.png" alt="minis" className={`hover:cursor-pointer p-3 ${years === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}/>
                         {years > 0  && <p className="p-[22px]">{years} year</p>}
                        <img onClick={years < 10 ? handleAddYears : undefined} src="/public/img/icons plus.png" alt="plus" className="hover:cursor-pointer p-3" />
                    </div>
                    <div className="flex justify-between w-[594px] h-11 mt-6">
                        <div className="flex gap-1">
                            <img src="/public/img/gas.png" alt="gas" className="w-6 h-6" />
                            <p>0.20 Gwei</p>
                        </div>
                        <button className="w-[168px] h-11 bg-[#7A839F] rounded-[100px]">ETH USD</button>
                    </div>
                    <div className="w-[594px] h-[154px] mt-6">
                        <div className="flex justify-between items-center rounded-[100px] h-[46px] px-5 py-3 bg-[#7A839F1A] bg-opacity-10">
                            <p>1 year extension</p>
                            <p>0.0014 ETH</p>
                        </div>
                        <div className="flex justify-between items-center rounded-[100px] my-2 h-[46px] px-5 py-3 bg-[#7A839F1A] bg-opacity-10">
                            <p>Transaction fee</p>
                            <p>0.0005 ETH</p>
                        </div>
                        <div className="flex justify-between items-center rounded-[100px] h-[46px] px-5 py-3 bg-[#7A839F1A] bg-opacity-10">
                            <p>Estimated total</p>
                            <p>0.0019 ETH</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[594px] h-[236px] bg-[#5A6CDE26] bg-opacity-15 mt-6 rounded-2xl">
                        <button className="bg-[#5A6CDE] w-11 h-11 rounded-3xl mt-5"></button>
                        <p className="text-center px-5">Extending for multiple years will save money on network costs by avoiding yearly transactions.</p>
                        <YearSlide years={years}/>
                    </div>
                    <button className="w-[594px] h-11 mt-6 bg-[#5A6CDE] rounded-full hover:cursor-pointer">Buy</button>

                </div>
            </div>
        </div>
        
        
    )
}