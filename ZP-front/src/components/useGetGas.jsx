import { useState, useEffect } from "react";
import { ethers, formatEther, parseEther } from "ethers";
import ZENS_ABI from "../../../contracts/artifacts/contracts/ZENS.sol/ZENS.json";
import { ZENS_CONTRACT_ADDRESS } from "../../config";

export default function useGetGas({ years }) {
  const [gas, setGas] = useState(null);
  const [fee, setFee] = useState(null);
  const [yearPrice, setYearPrice] = useState(null);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const fetchGas = async () => {
      try {
        const result = await fetch(
          "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=GP8AACS2ITKUV4NQCXAM1FMVARI73A7Q93"
        );
        const data = await result.json();
        const gweiPrice = data.result.FastGasPrice;
        setGas(gweiPrice);

        const gasPrice = ethers.parseUnits(gweiPrice.toString(), "gwei");
        const gasLimit = 21000;
        const feeInWei = gasPrice * BigInt(gasLimit);
        setFee(ethers.formatEther(feeInWei));

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(
          ZENS_CONTRACT_ADDRESS,
          ZENS_ABI.abi,
          signer
        );

        const yearPrice = await contract.priceForYear();
        setYearPrice(ethers.formatEther(yearPrice));

        const total = (feeInWei + yearPrice) * BigInt(years);
        setTotal(formatEther(total));
      } catch (err) {
        console.error("Ошибка!:", err);
      }
    };
    fetchGas();

    const interval = setInterval(fetchGas, 300000);

    return () => clearInterval(interval);
  }, [years]);

  return { gas, fee, yearPrice, total };
}
