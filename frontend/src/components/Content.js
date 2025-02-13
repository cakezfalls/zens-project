import react from 'react';
import '../Content.css'



const Content = () => {
    return (
        <div className='main-wrapper'>
            <h1 className='title'>
                <p>Your Web3 username</p>
            </h1>
            <div className='description'>
                <p>Your identity across web3, one name for all your crypto addresses, and your decentralised website</p>
            </div>
            <div className='search-bar'>
                <input className='search-input' placeholder='Search for a name'></input>
            </div>
        </div>
    )
}

export default Content;