// import { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';




export default function Header() { 
    // const [button, setButton] = useState (false);

    // function handleClickButton () {
    //     console.log("Кнопка нажата!");
    //     setButton(!button)
    // }


    return (
        <div className='flex justify-between px-10 pt-10'>
                <img className = 'w-25 h-5' src="/public/img/ZENS.png" alt="logo-image"/>
            <div className='flex gap-5'>
                <img className='w-11 h-11'src="/public/img/burger-white.png" alt="burger-button" />
                {/* <button className='w-25 h-10 bg-[#5A6CDE] rounded-3xl'>Connect</button> */}
                <ConnectButton chainStatus='icon' showBalance={false} label='Connect'/>;
            </div>
        </div>  
    )
};

