const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0xbb24E585C4c577Be9c3B8026A06F81975E6171FC";
  const ZENS = await ethers.getContractAt("ZENS", contractAddress);

  const tx = await ZENS.setPriceForYear(ethers.parseEther("0.003"));
  await tx.wait();

  console.log("✅ Установлена цена за год: 0.003 ETH");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
