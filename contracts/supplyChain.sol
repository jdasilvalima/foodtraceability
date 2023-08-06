// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./ownable.sol";

/**
 * @title SupplyChain
 * @dev The SupplyChain contract manages the traceability of the supply chain. 
 * It connects the different actors and products throughout the process.
 */
contract SupplyChain is Ownable {
  
  enum SupplyChainStage { Created, Harvested, Processed, Packed, ForSale, Sold, Shipped, Received }
  
  struct ProductStage {
    uint256 productId;
    SupplyChainStage stage;
    uint256 timestamp;
  }
  
  mapping(uint256 => ProductStage[]) public productStages;
  
  function recordStage(uint256 _productId, SupplyChainStage _stage) public onlyOwner {
    ProductStage memory newStage = ProductStage(_productId, _stage, block.timestamp);
    productStages[_productId].push(newStage);
  }
  
  function getProductStagesCount(uint256 _productId) public view returns (uint256) {
    return productStages[_productId].length;
  }
  
  function getProductStage(uint256 _productId, uint256 _stageIndex) public view returns (uint256, SupplyChainStage, uint256) {
    require(_stageIndex < productStages[_productId].length, "Stage does not exist");
    ProductStage memory stage = productStages[_productId][_stageIndex];
    return (stage.productId, stage.stage, stage.timestamp);
  }
}
