// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./userProfiles.sol";
import "./productRegistry.sol";

/**
 * @title ProductQuality
 * @dev The ProductQuality contract can store information on quality testing, certifications, etc.
 */
contract ProductQuality is UserProfiles, ProductRegistry {
  struct QualityInfo {
    uint256 productId;
    string productBatch;
    string verificationName;
    string result;
    uint256 timestamp;
  }

  mapping(uint256 => QualityInfo[]) public qualityInfos;

  function addQualityInfo(uint256 _productId, string memory _productBatch, string memory _testName, string memory _result) public 
    onlyRole(msg.sender, Role.Laboratory)
    verifyIfProductIdExists(_productId)
  {
    uint256 timestamp = block.timestamp;
    QualityInfo memory newQualityInfo = QualityInfo(_productId, _productBatch, _testName, _result, timestamp);
    qualityInfos[_productId].push(newQualityInfo);
  }

  function addCertificationInfo(uint256 _productId, string memory _productBatch, string memory _certificationName, string memory _result) public 
    onlyRole(msg.sender, Role.Auditor)
    verifyIfProductIdExists(_productId)
  {
    uint256 timestamp = block.timestamp;
    QualityInfo memory newQualityInfo = QualityInfo(_productId, _productBatch, _certificationName, _result, timestamp);
    qualityInfos[_productId].push(newQualityInfo);
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
}