const Ownable = artifacts.require("../contracts/ownable.sol");
const ProductRegistry = artifacts.require("../contracts/productRegistry.sol");
const UserProfiles = artifacts.require("../contracts/userProfiles.sol");
const SupplyChain = artifacts.require("../contracts/supplyChain.sol");
const ProductQuality = artifacts.require("../contracts/productQuality.sol");

module.exports = function(deployer) {
  deployer.deploy(Ownable);
  deployer.deploy(ProductRegistry);
  deployer.deploy(UserProfiles);
  deployer.deploy(SupplyChain);
  deployer.deploy(ProductQuality);
};