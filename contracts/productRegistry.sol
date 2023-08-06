// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./ownable.sol";

/**
 * @title ProductRegistry
 * @dev The ProductRegistry contract is used to register and manage the products.
 */
contract ProductRegistry is Ownable {
    
  struct Product {
    uint256 productId;
    string name;
    string origin;
    string batch;
    uint256 timestamp;
  }
  
  Product[] public products;
  
  function addProduct(string memory _name, string memory _origin, string memory _batch) public onlyOwner {
    uint256 productId = products.length;
    uint256 timestamp = block.timestamp;
    Product memory newProduct = Product(productId, _name, _origin, _batch, timestamp);
    products.push(newProduct);
  }
  
  function getProductCount() public view returns (uint256) {
    return products.length;
  }
  
  function getProduct(uint256 _productId) public view returns (uint256, string memory, string memory, string memory, uint256) {
    require(_productId < products.length, "Product does not exist");
    Product memory product = products[_productId];
    return (product.productId, product.name, product.origin, product.batch, product.timestamp);
  }
}
