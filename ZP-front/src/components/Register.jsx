import { useState } from "react";
import YearSlide from "./YearSlide";
import '../App';


export default function Register(props) {
    const [years, setYears] = useState(1)
    const [currency, setCurrency] = useState('ETH')

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
                    <h3  className="font-satoshi text-2xl text-[#23252E] mt-5">Register {props.name}</h3>
                    <div className="flex justify-between w-[594px] h-[68px] mt-6 border-2 rounded-[100px]">
                    <button
                        onClick={years > 1 ? handleRemoveYears : undefined}
                        disabled={years === 1}
                        className={`w-11 h-11 m-3 flex items-center justify-center rounded-full bg-[#5A6CDE] transition ${years === 1 ? 'opacity-50 cursor-not-allowed bg-[#5A6CDE26]' : 'hover:cursor-pointer'}`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#FFFFFF"
                                className="w-5 h-5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                            </svg>
                        </button>
                         {years > 0  && <p className='font-satoshi-bold text-xl p-[22px]'>{years} year</p>}
                    <button 
                        onClick={years < 10 ? handleAddYears : undefined} 
                        className={`w-11 h-11 m-3 flex items-center justify-center rounded-full bg-[#5A6CDE] transition ${years === 10 ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer'}`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#FFFFFF"
                                className="w-5 h-5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M6 12h12"  />
                            </svg>
                    </button>   
                    </div>
                    <div className="flex flex-col justify-center items-center w-[594px] h-[236px] bg-[#5A6CDE26] bg-opacity-15 mt-6 rounded-2xl">
                        <button className="bg-[#5A6CDE] w-11 h-11 rounded-3xl mt-5"></button>
                        <span className="font-satoshi-medium text-base text-center px-5">Extending for multiple years will save money on network costs by avoiding yearly transactions.</span>
                        <YearSlide years={years}/>
                    </div>
                    <div className="flex justify-between w-[594px] h-11 mt-6">
                        <div className="flex items-center gap-1">
                            <img src="/public/img/gas.svg" alt="gas" className="w-6 h-6 opacity-60" />
                            <span className="font-satoshi-medium text-base text-[#7A839F]">0.20 Gwei</span>
                        </div>
                        <div className='flex justify-center items-center w-[168px] h-11 bg-[#f2f3f5] rounded-full'>
                            <button onClick={() => setCurrency('ETH')}
                                className={`m-1 px-6 py-2 rounded-full font-semibold transition 
                                ${currency === 'ETH'
                                ? 'bg-[#5A6CDE] text-white'
                                : 'text-gray-500'
                                }`}> ETH 
                            </button>
                            <button  onClick={() => setCurrency('USD')}
                                className={`m-1 px-6 py-2 rounded-full font-semibold transition
                                ${currency === 'USD'
                                ? 'bg-[#5A6CDE] text-white'
                                : 'text-gray-500'
                            }`}> USD 
                            </button>
                        </div>
                    </div>
                    <div className="font-satoshi-medium text-base w-[594px] h-[154px] mt-6">
                            <div className="flex justify-between items-center text-[#7A839F] rounded-[100px] h-[46px] px-5 py-3 bg-[#7A839F1A] bg-opacity-10">
                            <span>1 year extension</span>
                            <span>0.0014 ETH</span>
                        </div>
                        <div className="flex justify-between items-center text-[#7A839F] rounded-[100px] my-2 h-[46px] px-5 py-3 bg-[#7A839F1A] bg-opacity-10">
                            <span>Transaction fee</span>
                            <span>0.0005 ETH</span>
                        </div>
                        <div className="flex justify-between items-center rounded-[100px] h-[46px] px-5 py-3 bg-[#7A839F1A] bg-opacity-10">
                            <span>Estimated total</span>
                            <span>0.0019 ETH</span>
                        </div>
                    </div>
                  
                    <button className="font-satoshi-medium text-base text-[#FFFFFF] w-[594px] h-11 mt-6 bg-[#5A6CDE] rounded-full hover:cursor-pointer">Buy</button>
                </div>
            </div>
        </div>
        
        
    )
}