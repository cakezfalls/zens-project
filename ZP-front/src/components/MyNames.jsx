import '../App.css'

export default function MyNames() {
    return  (
        <div className='flex flex-col items-center mt-[110px]'>
            <h1>
                <span className='font-satoshi text-[44px] text-gradient'>My Names</span>
            </h1>
            <div className='w-[534px] h-[177px] m-5 rounded-3xl bg-white hover: cursor-pointer'>
                <div className='flex justify-between items-center p-5 border-b-1 border-[#7A839F]'>
                    <div className='flex items-center'>
                        <div className='mr-2'>
                            <img src="/public/ZERO_icons/icons/SVG/circle/icon_dark_circle.svg" alt=""  className='w-11 h-11'/>
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-satoshi-medium'>xen.zero</span>
                            <span className='font-satoshi-medium text-[#5A6CDE]'>Current period expires in 1 month</span>
                        </div>
                        
                    </div>
                    <div>
                        <div className='bg-[#eff0fc] rounded-full px-2 py-[2.5px]'>
                            <span className='text-[#5A6CDE]'>Owner</span>
                        </div>
                    </div>

                </div>
                <div className='flex justify-between items-center p-5'>
                    <div className='flex items-center'>
                        <div className='mr-2'>
                            <img src="/public/ZERO_icons/icons/SVG/circle/icon_dark_circle.svg" alt=""  className='w-11 h-11'/>
                        </div>
                        <div className='flex  flex-col'>
                            <span className='font-satoshi-medium'>xenia.zens</span>
                            <span className='font-satoshi-medium text-[#5A6CDE]'>Current period expires in 6 month</span>
                        </div>
                        
                    </div>
                    <div className='bg-[#eff0fc] rounded-full px-2 py-[2.5px]'>
                        <span className='text-[#5A6CDE]'>Owner</span>
                    </div>

                </div>
            </div>
        </div>

    )
}