import {BrowserProvider, parseEther, ethers} from 'ethers'


function Ethers() {
    const fetchBalance = async () => {
        try {
        const provider = new BrowserProvider (window.ethereum);
        const signer = await provider.getSigner();
        const tx = await signer.sendTransaction({
          to: '0x1F5414560E3cF0f5c328e162591ac2DA0272c9F1',
          value: parseEther("0.0001"),
        })
        console.log(tx)
        const response = await tx.wait()
        console.log(response)
        }
        catch (err) {
          console.error (err)
        }
    }


return (
    <div style={{ padding: 20 }}>
      <button onClick={fetchBalance} className='h-10 w-10 bg-amber-400'>Send tx</button>
    </div>
  );
}



export default Ethers;