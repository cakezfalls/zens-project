const { loadFixture, ethers, expect } = require("./setup");
const { parseEther } = ethers;

describe("ZENS", function () {
  async function deployZensFixture() {
    const [owner, user] = await ethers.getSigners();
    const ZensFactory = await ethers.getContractFactory("ZENS");
    const zens = await ZensFactory.deploy();
    await zens.waitForDeployment();
    return { owner, user, zens };
  }

  it("should check not a owner", async function () {
    const { zens, user } = await loadFixture(deployZensFixture);

    await expect(
      zens.connect(user).setPriceForYear(parseEther("0.1"))
    ).to.be.revertedWith("You are not a owner");
  });

  it("should check a owner", async function () {
    const { zens, owner } = await loadFixture(deployZensFixture);

    await expect(zens.setPriceForYear(parseEther("0.1"))).to.not.be.reverted;
  });

  it("should set domain", async function () {
    const { zens, user } = await loadFixture(deployZensFixture);
    await zens.setPriceForYear(ethers.parseEther("0.1"));
    await expect(
      zens.connect(user).setDomain("dosha.zens", 4, {
        value: ethers.parseEther("0.4"),
      })
    ).to.not.be.reverted;
  });

  it("should fail if not enough ETH", async function () {
    const { zens, user } = await loadFixture(deployZensFixture);
    await zens.setPriceForYear(ethers.parseEther("0.1"));
    await expect(
      zens.connect(user).setDomain("dosha.zens", 4, {
        value: ethers.parseEther("0.2"),
      })
    ).to.revertedWith("Not enought money");
  });

  it("should get domain successfully", async function () {
    const { zens, user } = await loadFixture(deployZensFixture);
    await zens.setPriceForYear(ethers.parseEther("0.1"));
    await zens.connect(user).setDomain("dosha.zens", 4, {
      value: ethers.parseEther("0.4"),
    });

    expect(await zens.getDomain("dosha.zens")).to.equal(user.address);
  });

  it("should extend domain for 2 years", async function () {
    const { zens, user } = await loadFixture(deployZensFixture);
    await zens.setPriceForYear(ethers.parseEther("0.1"));
    await zens.connect(user).setDomain("dosha.zens", 2, {
      value: ethers.parseEther("0.2"),
    });
    await expect(
      zens.connect(user).extendDomain(2, "dosha.zens", {
        value: parseEther("0.2"),
      })
    ).to.not.be.reverted;
  });

  it("should owner withdraw money", async function () {
    const { zens, user } = await loadFixture(deployZensFixture);
    await zens.setPriceForYear(ethers.parseEther("0.1"));
    await zens.connect(user).setDomain("dosha.zens", 2, {
      value: ethers.parseEther("0.2"),
    });
    await expect(zens.withdraw(parseEther("0.2"))).to.not.be.reverted;
  });
});
