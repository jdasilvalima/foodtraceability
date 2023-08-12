// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./ownable.sol";

/**
 * @title UserProfiles 
 * @dev The UserProfiles contract may store information about different users, including their roles, contact details, etc.
 */
contract UserProfiles is Ownable {

  enum Role { None, Farmer, Distributor, Retailer, Consumer, Laboratory, Auditor }
  
  struct UserProfile {
    string name;
    Role role;
  }

  mapping(address => UserProfile) public userProfiles;

  modifier onlyRole(address _user, Role _role) {
    Role userRole;
    (,userRole) = getUserProfile(_user);
    require(userRole == _role, "You don't have the required role");
    _;
  }

  function setUserProfile(string memory _name, Role _role, address _user) public onlyOwner {
    UserProfile memory userProfile = UserProfile(_name, _role);
    userProfiles[_user] = userProfile;
  }

  function getUserProfile(address _user) public view returns (string memory userName, Role userRole) {
    UserProfile memory userProfile = userProfiles[_user];
    return (userProfile.name, userProfile.role);
  }
}