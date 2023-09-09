// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;
import "./productRegistry.sol";

/**
 * @title SupplyChain
 * @dev The SupplyChain contract manages the traceability of the supply chain. 
 * It connects the different actors and products throughout the process.
 */
contract SupplyChain is ProductRegistry {
  
  enum SupplyChainStage { Created, Harvested, Processed, Packed, ForSale, Sold, Shipped, Received }
  
  struct ProductStage {
    uint256 productId;
    SupplyChainStage stage;
    address productOwner;
    uint256 timestamp;
  }
  
  mapping(uint256 => ProductStage[]) public productStages;
  
  function recordStage(uint256 _productId, SupplyChainStage _stage, address _productOwner) public 
    onlyOwner 
    verifyIfProductIdExists(_productId)
  {
    ProductStage memory newStage = ProductStage(_productId, _stage, _productOwner, block.timestamp);
    productStages[_productId].push(newStage);
  }
  
  function getProductStagesCount(uint256 _productId) public view 
    verifyIfProductIdExists(_productId) 
    returns (uint256) 
  {
    return productStages[_productId].length;
  }
  
  function getProductStage(uint256 _productId, uint256 _stageIndex) public view 
    verifyIfProductIdExists(_productId) 
    returns (uint256, SupplyChainStage, address, uint256) 
  {
    require(_stageIndex < productStages[_productId].length, "Stage does not exist");
    ProductStage memory stage = productStages[_productId][_stageIndex];
    return (stage.productId, stage.stage, stage.productOwner, stage.timestamp);
  }

  function getProductOwner(uint256 _productId) public view 
    verifyIfProductIdExists(_productId) 
    returns (address) 
  {
    uint256 lastStage = getProductStagesCount(_productId);
    address lastProductOwner;
    (,,lastProductOwner,) = getProductStage(_productId, lastStage - 1);
    return lastProductOwner;
  }
}
