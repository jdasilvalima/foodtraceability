const SupplyChain = artifacts.require("SupplyChain");

contract("SupplyChain", (accounts) => {
  const owner = accounts[0];
  const farmer = accounts[1];
  const distributor = accounts[2];
  const productId = 0;

  let supplyChainInstance;

  before(async () => {
    // ARRANGE
    supplyChainInstance = await SupplyChain.new({ from: owner });
  });

  describe("Add Stage", () => {
    it("should record product stages correctly", async () => {
      // ARRANGE
      const productName = "Product1";
      const productOrigin = "Origin1";
      const productQuantity = 10;
      const productUnit = 0;

      await supplyChainInstance.addProduct(
        productName,
        productOrigin,
        productQuantity,
        productUnit,
        { from: owner }
      );

      // ACT
      await supplyChainInstance.recordStage(productId, 1, farmer); // Harvested
      await supplyChainInstance.recordStage(productId, 3, farmer); // Packed
      await supplyChainInstance.recordStage(productId, 2, distributor); // Processed

      const stage0 = await supplyChainInstance.productStages(productId, 0);
      const stage1 = await supplyChainInstance.productStages(productId, 1);
      const stage2 = await supplyChainInstance.productStages(productId, 2);

      // ASSERT
      assert.equal(stage0.stage.toNumber(), 1, "Product stage mismatch");
      assert.equal(stage0.productOwner, farmer, "Product owner mismatch");
      assert.equal(stage1.stage.toNumber(), 3, "Product stage mismatch");
      assert.equal(stage1.productOwner, farmer, "Product owner mismatch");
      assert.equal(stage2.stage.toNumber(), 2, "Product stage mismatch");
      assert.equal(stage2.productOwner, distributor, "Product owner mismatch");
    });
  });

  describe("Get Stages Count", () => {
    it("should retrieve product stages count correctly", async () => {
      // ACT
      const productCount = await supplyChainInstance.getProductStagesCount(productId);

      // ASSERT
      assert.equal(productCount.toNumber(), 3, "Product stages count mismatch");
    });
  });

  describe("Get Product Stage", () => {
    it("should retrieve a specific product stage", async () => {
      // ACT
      const prodoctStage = await supplyChainInstance.getProductStage(productId, 2);

      // ASSERT
      assert.equal(prodoctStage[0].toNumber(), 0, "Product id mismatch");
      assert.equal(prodoctStage[1].toNumber(), 2, "Product stage mismatch");
      assert.equal(prodoctStage[2], distributor, "Product owner mismatch");
    });
  });

  describe("Get Product Owner", () => {
    it("should retrieve the current product owner", async () => {
      // ACT
      const prodoctOwner = await supplyChainInstance.getProductOwner(productId);

      // ASSERT
      assert.equal(prodoctOwner, distributor, "Product owner mismatch");
    });
  });
});
