// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./ownable.sol";

/**
 * @title Roles
 * @dev The Roles contract defines the roles of the various stakeholders (farmer, distributor, retailer, consumer, etc.).
 */
contract Roles is Ownable {
  mapping(address => Role) public userRoles;

  enum Role {
    None,
    Agriculteur,
    Distributeur,
    Detailant,
    Consommateur
  }

  modifier onlyRole(Role _role) {
    require(
      userRoles[msg.sender] == _role,
      "You don't have the required role"
    );
    _;
  }

  function setRole(address _user, Role _role) public onlyOwner {
    userRoles[_user] = _role;
  }
}
