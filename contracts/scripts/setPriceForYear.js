const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0xECeC3d668E123b9964F946c366d42d6F903D09cf";
  const ZENS = await ethers.getContractAt("ZENS", contractAddress);

  const tx = await ZENS.setPriceForYear(ethers.parseEther("0.001"));
  await tx.wait();

  console.log("✅ Установлена цена за год: 0.001 ETH");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
