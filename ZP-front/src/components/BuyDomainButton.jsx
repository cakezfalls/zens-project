import { ethers } from "ethers";
import ZENS_ABI from "../../contracts/artifacts/contracts/ENS.sol/abi.json";
import { ZENS_CONTRACT_ADDRESS } from "../config";

function BuyDomainButton(props) {
  const [txHash, setTxHash] = useState(null);
  const [error, setError] = useState("");

  const handleBuy = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        ZENS_CONTRACT_ADDRESS,
        ZENS_ABI,
        signer
      );

      const domainName = {props.name};
      const years = {props.years};
      const priceInEth = ethers.parseEther({props.value});

      const tx = await contract.setDomain(domainName, years, {
        value: priceInEth,
      });

      await tx.wait();
      setTxHash(tx.hash);

    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
    }
  };
}

export default buyDomain;
