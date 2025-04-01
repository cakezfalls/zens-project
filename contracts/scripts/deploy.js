async function main() {
    const ZENS = await hre.ethers.getContractFactory("ZENS");
    const zens = await ZENS.deploy(); 
  
    await zens.waitForDeployment();
  
    console.log(`ZENS deployed to: ${zens.target || zens.address}`);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  