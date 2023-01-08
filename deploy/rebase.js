const { network } = require("hardhat")
const { developmentChains, VERIFICATION_BLOCK_CONFIRMATIONS } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const waitBlockConfirmations = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS

    log("----------------------------------------------------")
    const factory = "0xA7b8Bb12ca66C42006c78bF1FAAC6489e3C6c9bC"
    const WETH = "0xca5D80d51D358D206adc2126Dd8D061A725b39a6"
    const arguments = [factory, WETH]
    const rebase = await deploy("RebaseRouter", {
        from: deployer,
        args: arguments,
        log: true,
        waitConfirmations: waitBlockConfirmations,
    })

    // Verify the deployment
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(rebase.address, arguments)
    }
    log("----------------------------------------------------")
}

module.exports.tags = ["all", "rebase"]
