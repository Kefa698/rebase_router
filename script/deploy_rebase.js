async function main() {
    const Accumulator = await ethers.getContractFactory("RebaseRouter")
    const factory = ""
    const WETH = ""
    const arguments = [factory, WETH]
    // Start deployment, returning a promise that resolves to a contract object
    const accumulator = await Accumulator.deploy(arguments,{gasLimit: 10000})
    await accumulator.deployed()
    console.log("Contract deployed to address:", accumulator.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
