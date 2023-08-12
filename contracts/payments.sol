// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./ownable.sol";
import "./IERC20.sol"; 

/**
 * @title Payments
 * @dev If payments are involved in the supply chain, a payment contract can be used 
 * to manage transactions between stakeholders, using tokens or Ether.
 */
contract Payments is Ownable {

  // The token contract
  IERC20 public token;

  // Initialize the token contract
  constructor(address _tokenAddress) {
    token = IERC20(_tokenAddress); 
  }

  // Transfer tokens from the owner to the recipient
  function makePayment(address _recipient, uint256 _amount) public onlyOwner {
    token.transfer(_recipient, _amount);
  }
}