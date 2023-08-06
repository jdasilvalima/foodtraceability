// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./ownable.sol";

/**
 * @title AccessControl
 * @dev The AccessControl contract manages the access authorizations to the various stakeholders. 
 * It ensures that only authorized actors can add information or perform actions on the contract. 
 * For example, the farmer can add information at the beginning, but the consumer can only consult.
 */

//TO REDO
contract AccessControl is Ownable {

  mapping(address => bool) public isAgriculteur;
  mapping(address => bool) public isDistributeur;
  mapping(address => bool) public isDetailant;
  mapping(address => bool) public isConsommateur;

  modifier onlyAgriculteur() {
    require(isAgriculteur[msg.sender], "Only agriculteurs can perform this action");
    _;
  }

  modifier onlyDistributeur() {
    require(isDistributeur[msg.sender], "Only distributeurs can perform this action");
    _;
  }

  modifier onlyDetailant() {
    require(isDetailant[msg.sender], "Only detailants can perform this action");
    _;
  }

  modifier onlyConsommateur() {
    require(isConsommateur[msg.sender], "Only consommateurs can perform this action");
    _;
  }

  function setAgriculteur(address _addr, bool _status) public onlyOwner {
    isAgriculteur[_addr] = _status;
  }

  function setDistributeur(address _addr, bool _status) public onlyOwner {
    isDistributeur[_addr] = _status;
  }

  function setDetailant(address _addr, bool _status) public onlyOwner {
    isDetailant[_addr] = _status;
  }

  function setConsommateur(address _addr, bool _status) public onlyOwner {
    isConsommateur[_addr] = _status;
  }
}
