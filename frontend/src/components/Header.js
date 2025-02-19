import react from 'react';
import '../Header.css'



const Header = () => {
    return (
        <header className='main-header'>

            <img className='ZENS-Logo'src="/img/ZENS.png" alt="ZENS" />

            <div className='right-menu'>

                <div className='burger-button'>
                    
                 <div className='line'></div> 
                 <div className='line'></div> 
                 <div className='line'></div>

                </div>

                <div className='button-container'>
                    <button className='connect-button'>Connect</button>
                </div> 
            </div> 
        </header>
    )
}

export default Header;