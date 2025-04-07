import { ethers } from "ethers";
import { useState } from "react";
import Toast from "./Toast";
import ZENS_ABI from "../../../contracts/artifacts/contracts/ZENS.sol/ZENS.json";
import { ZENS_CONTRACT_ADDRESS } from "../../config";

export default function BuyDomainButton({ name, years, value }) {
  const [toast, setToast] = useState(null);
  const [error, setError] = useState(null);

  const handleBuy = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        ZENS_CONTRACT_ADDRESS,
        ZENS_ABI.abi,
        signer
      );

      const tx = await contract.setDomain(name, years, {
        value: ethers.parseEther(value.toString()),
      });

      await tx.wait();
      setToast({
        message: `✅ Transaction sent: ${tx.hash.slice(0, 10)}...`,
        type: "success",
      });
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");

      setToast({
        message: `❌ ${err.message || "Transaction failed"}`,
        type: "error",
      });
    }
  };

  return (
    <>
      <button
        onClick={handleBuy}
        className="font-satoshi-medium text-base text-[#FFFFFF] w-[594px] h-11 mt-6 bg-[#5A6CDE] rounded-full hover:cursor-pointer"
      >
        Buy
      </button>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}
