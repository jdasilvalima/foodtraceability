// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./ownable.sol";

/**
 * @title ProductRegistry
 * @dev The ProductRegistry contract is used to register and manage the products.
 */
contract ProductRegistry is Ownable {

  enum Unit { Kg, Gram, Pound, Ounce, Ton, Liter, Milliliter, Gallon, Piece }
    
  struct Product {
    uint256 productId;
    string name;
    string origin;
    uint256 quantity;
    Unit unit;
    uint256 timestamp;
  }
  
  Product[] public products;

  modifier verifyIfProductIdExists(uint256 _id) {
    require(_id < products.length, "Product does not exist");
    _;
  }
  
  function addProduct(string memory _name, string memory _origin, uint256 _quantity, Unit _unit) public onlyOwner {
    uint256 productId = products.length;
    uint256 timestamp = block.timestamp;
    Product memory newProduct = Product(productId, _name, _origin, _quantity, _unit, timestamp);
    products.push(newProduct);
  }
  
  function getProductCount() public view returns (uint256) {
    return products.length;
  }
  
  function getProduct(uint256 _productId) public view 
    verifyIfProductIdExists(_productId)
    returns (uint256, string memory, string memory, uint256, Unit, uint256)
  {
    Product memory product = products[_productId];
    return (product.productId, product.name, product.origin, product.quantity, product.unit, product.timestamp);
  }
}
