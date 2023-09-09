// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;
import "./userProfiles.sol";
import "./productRegistry.sol";
import "./supplyChain.sol";

/**
 * @title ProductQuality
 * @dev The ProductQuality contract can store information on quality testing, certifications, etc.
 */
contract ProductQuality is UserProfiles, ProductRegistry, SupplyChain {
  struct QualityInfo {
    uint256 productId;
    string productBatch;
    string verificationName;
    string result;
    bool isValid;
    uint256 timestamp;
  }

  mapping(uint256 => QualityInfo[]) public qualityInfos;

  event WarningQualityTestFailed(address productOwner, QualityInfo productQualityInfo);

  function addQualityInfo(uint256 _productId, string memory _productBatch, string memory _testName, string memory _result, bool _isValid) public 
    onlyRole(msg.sender, Role.Laboratory)
    verifyIfProductIdExists(_productId)
  {
    uint256 timestamp = block.timestamp;
    QualityInfo memory newQualityInfo = QualityInfo(_productId, _productBatch, _testName, _result, _isValid, timestamp);
    qualityInfos[_productId].push(newQualityInfo);
    warnProductOwner(newQualityInfo);
  }

  function getQualityInfoCount(uint256 _productId) public view verifyIfProductIdExists(_productId) returns (uint256) {
    return qualityInfos[_productId].length;
  }

  function getProductQualityInfo(uint256 _productId, uint256 _indexInfo) public view
    verifyIfProductIdExists(_productId)
    returns (uint256, string memory, string memory, uint256) 
  {
    require(_indexInfo < qualityInfos[_productId].length, "Quality info does not exist");
    QualityInfo memory info = qualityInfos[_productId][_indexInfo];
    return (info.productId, info.verificationName, info.result, info.timestamp);
  }

  function warnProductOwner(QualityInfo memory _productQualityInfo) public
  {
    if(_productQualityInfo.isValid) {
      return;
    }

    address productOwner = getProductOwner(_productQualityInfo.productId);
    emit WarningQualityTestFailed(productOwner, _productQualityInfo);
  }
}