import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';




export default function Header() { 
    // const [button, setButton] = useState (false);

    const { isConnected } = useAccount()

   



    return  isConnected ? ( 
        <div className='flex justify-between px-10 pt-10'>
                <img className = 'w-25 h-5' src="/public/img/ZENS.png" alt="logo-image"/>
            <div className='flex gap-5'>
                <div>
                    <button className='bg-[#5A6CDE] rounded-4xl w-30 h-11 hover:cursor-pointer'>My Names</button>
                </div>
                <img className='w-11 h-11'src="/public/img/burger-white.png" alt="burger-button" />
                <ConnectButton  chainStatus='icon' showBalance={false} label='Connect'/>;
            </div>
        </div>  
    ) : ( 
        <div className='flex justify-between px-10 pt-10'>
                <img className = 'w-25 h-5' src="/public/img/ZENS.png" alt="logo-image"/>
            <div className='flex gap-5'>
                <img className='w-11 h-11'src="/public/img/burger-white.png" alt="burger-button" />                
                <ConnectButton  chainStatus='icon' showBalance={false} label='Connect'/>;
            </div>
        </div>
        )
};

