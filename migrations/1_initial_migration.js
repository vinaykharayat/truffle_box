const myToken = artifacts.require("myToken");

module.exports = (deployer) => {
    deployer.deploy(myToken);
}