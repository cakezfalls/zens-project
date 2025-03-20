import react, { useState } from 'react';
import './Content.css'



export default function Content() {
    const [value, setValue] = useState('');
    const [domains, setDomains] = useState ([]);

    function handleChange (e) {
        const input = e.target.value;
        setValue (input);

        if (input.trim() === '') {
            setDomains([]);
        } else {
            setDomains ([{name: `${input}.zero`, status: 'available'}])
        }
    }

    


    return (
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
                     className="font-satoshi w-85 h-13 rounded-2xl mt-11 bg-amber-50 pl-3.5 placeholder:text-[#7A839F]"
                     placeholder="Search for a name"
                        />

                <ul className="mt-3 border p-2">
                     {domains.map((domain, index) => (
                        <li key={index} className="flex justify-between">
                            <span>{domain.name}</span>
                            <span className="text-green-500">{domain.status}</span>
                        </li>
                         ))}
                </ul>
            </div>
        </div>
    )
}

{/* <div className="p-5">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="border p-2 w-full"
        placeholder="Введите текст..."
      />
      
      {domains.length > 0 && (
        <ul className="mt-3 border p-2">
          {domains.map((domain, index) => (
            <li key={index} className="flex justify-between">
              <span>{domain.name}</span>
              <span className="text-green-500">{domain.status}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} */}