const UserProfiles = artifacts.require("UserProfiles");

contract("UserProfiles", (accounts) => {
  let userProfilesInstance;

  const owner = accounts[0];
  const farmer = accounts[1];

  before(async () => {
    // ARRANGE
    userProfilesInstance = await UserProfiles.new({ from: owner });
  });

  describe("Set User Profile", () => {
    it("should set a user profile correctly", async () => {
      // ARRANGE
      const farmerName = "Farmer Name";
      const farmerLocation = "Farm Location";
      const farmerRole = 1;

      // ACT
      const result = await userProfilesInstance.setUserProfile(
        farmerName,
        farmerLocation,
        farmerRole,
        farmer,
        { from: owner }
      );

      const user = await userProfilesInstance.userProfiles(farmer);

      // ASSERT
      assert.equal(result.receipt.status, true, "Transaction failed");

      assert.equal(user.name, farmerName, "Profile name mismatch");
      assert.equal(user.role.toNumber(), farmerRole, "Profile role mismatch");
    });
  });

  describe("Get User Profile", () => {
    it("should get a user profile correctly", async () => {
      const user = await userProfilesInstance.getUserProfile(farmer);

      // ASSERT - Vérifier que le profil correspond aux données définies
      assert.equal(user[0], "Farmer Name", "Profile name mismatch");
      assert.equal(user[1].toNumber(), 1, "Profile role mismatch");
    });
  });
});
