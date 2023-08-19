const ProductRegistry = artifacts.require("ProductRegistry");

contract("ProductRegistry", (accounts) => {
  const owner = accounts[0];
  let productRegistryInstance;

  const productName = "Product1";
  const productOrigin = "Origin1";
  const productQuantity = 15;
  const productUnit = 0;

  before(async () => {
    // ARRANGE
    productRegistryInstance = await ProductRegistry.new({ from: owner });
  });

  describe("Add Product", () => {
    it("should add a product with correct details", async () => {
      const result = await productRegistryInstance.addProduct(
        productName,
        productOrigin,
        productQuantity,
        productUnit,
        { from: owner }
      );
  
      assert.equal(result.receipt.status, true, "Transaction failed");
  
      // ACT - Retrieve the added product
      const product = await productRegistryInstance.products(0);
  
      // ASSERT
      assert.equal(product.name, productName, "Product name mismatch");
      assert.equal(product.origin, productOrigin, "Product origin mismatch");
      assert.equal(product.quantity.toNumber(), productQuantity, "Product quantity mismatch");
      assert.equal(product.unit.toNumber(), productUnit, "Product unit mismatch");
    });
  })

  describe("Product Count", () => {
    it("should return the product count", async () => {
      // ACT
      const productCount = await productRegistryInstance.getProductCount();

      // ASSERT
      assert.equal(productCount.toNumber(), 1);
    });

    it("should return the correct product count", async () => {
      // ARRANGE
      await productRegistryInstance.addProduct("Product2", "Origin2", 20, 1, { from: owner });
      await productRegistryInstance.addProduct("Product3", "Origin3", 5, 2, { from: owner });
      await productRegistryInstance.addProduct("Product4", "Origin4", 10, 0, { from: owner });

      // ACT
      const productCount = await productRegistryInstance.getProductCount();
  
      // ASSERT
      assert.equal(productCount.toNumber(), 4, "The number of products must correspond to the number of additions");
    });
  })

  describe("verifyIfProductIdExists Modifier", () => {
    it("should allow a valid product ID", async () => {
      const productId = 0;

      // ACT
      const product = await productRegistryInstance.getProduct(productId);

      // ASSERT
      assert.equal(product[1], productName, "Product name mismatch");
    });

    it("should revert for an invalid product ID", async () => {
      const invalidProductId = 10;

      // ACT
      try {
        await productRegistryInstance.getProduct(invalidProductId);
        assert.fail("The function must not be called with an invalid product ID");
      } catch (error) {
        // ASSERT
        assert.include(
          error.message,
          "Product does not exist",
          "The function should return an error for an invalid product ID"
        );
      }
    });
  });

  describe("getProduct Function", () => {
    it("should return product details for a valid product ID", async () => {
      const productId = 0;
      const product = await productRegistryInstance.getProduct(productId);

      // ASSERT
      assert.equal(product[1], productName, "Product name mismatch");
      assert.equal(product[2], productOrigin, "Product origin mismatch");
      assert.equal(product[3].toNumber(), productQuantity, "Product quantity mismatch");
      assert.equal(product[4].toNumber(), productUnit, "Product unit mismatch");
    });
  });
});
