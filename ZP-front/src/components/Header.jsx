import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { Link } from 'react-router-dom';






export default function Header() { 
    const { isConnected } = useAccount()
    
   
    return  isConnected ? ( 
        <div className='flex justify-between px-10 pt-10'>
                <Link to='/'>
                    <img className = 'w-25 h-5' src="/img/ZENS.png" alt="logo-image"/>
                </Link>
            <div className='flex gap-5'>
                <div>
                    <Link to='/names'>
                        <button className='bg-[#5A6CDE] rounded-4xl w-30 h-11 hover:cursor-pointer'>My Names</button>
                    </Link>
                </div>
                <img className='w-11 h-11'src="/img/burger-white.png" alt="burger-button" />
                <ConnectButton  chainStatus='icon' showBalance={false} label='Connect'/>
            </div>
        </div>  
    ) : ( 
        <div className='flex justify-between px-10 pt-10'>
                <img className = 'w-25 h-5' src="/img/ZENS.png" alt="logo-image"/>
            <div className='flex gap-5'>
                <img className='w-11 h-11'src="/img/burger-white.png" alt="burger-button" />                
                <ConnectButton  chainStatus='icon' showBalance={false} label='Connect'/>
            </div>
        </div>
        )
};

