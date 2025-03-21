import react, { useState } from 'react';
import './Content.css'
import Register from './Register';



export default function Content() {
    const [value, setValue] = useState('');
    const [domains, setDomains] = useState ([]);
    const [pick, setPick] = useState(false)
    const [selectDomain, setSelectDomain] = useState('')

    function handleChange (e) {
        const input = e.target.value;
        setValue (input);

        if (input.trim() === '') {
            setDomains([]);
        } else {
            setDomains ([
                {name: `${input}.zero`, status: 'available'},
                {name: `${input}.zens`, status: 'available'},
                {name: `${input}.zeth`, status: 'available'},

            ])
        }
    }

    function handlePickDomain(domainName) {
        setPick(!pick);
        setSelectDomain(domainName)
    }

    


    return pick === false  ? (
        <div className='flex flex-col justify-center items-center mt-40'>
            <h1 className='font-satoshi text-5xl text-gradient'>
                <p>Your Web3 username</p>
            </h1>
            <div className='mt-3 text-s text-[#7A839F]'>
                <p className='w-110 text-center'>Your identity across web3, one name for all your crypto addresses, and your decentralised website</p>
            </div>
            <div>
                <input
                    type="text"
                     value={value}
                     onChange={handleChange}
                     className="font-satoshi w-85 h-13 rounded-2xl mt-11 bg-amber-50 pl-3.5 placeholder:text-[#7A839F] border-2 border-transparent focus: ring-2 ring-[#9CA9FF] outline-none"
                     placeholder="Search for a name"
                        />

                <ul className='mt-3  bg-amber-50 rounded-2xl'>
                     {domains.map((domain, index) => (
                        <li onClick = {()=>handlePickDomain(domain.name)} key={index} className="flex items-center justify-between p-4 hover:bg-[#F0F0F0] rounded-2xl cursor-pointer ">
                            <span>{domain.name}</span>
                            <span className="px-3 py-1 text-green-600 bg-green-100 rounded-lg">{domain.status}</span>
                        </li>
                         ))}
                </ul>
            </div>
        </div>
    ) : (
      <Register name={selectDomain}/>
    )
}
