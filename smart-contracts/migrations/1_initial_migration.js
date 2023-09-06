const ProductRegistry = artifacts.require("../contracts/productRegistry.sol");
const UserProfiles = artifacts.require("../contracts/userProfiles.sol");
const SupplyChain = artifacts.require("../contracts/supplyChain.sol");

module.exports = function(deployer) {
  deployer.deploy(ProductRegistry);
  deployer.deploy(UserProfiles);
  deployer.deploy(SupplyChain);
};