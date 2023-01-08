async function main() {
    const Accumulator = await ethers.getContractFactory("RebaseRouter")
    const factory = "0x61F6Aeea6dDEC1796E3e5762d8b1a4cBD1e157A3"
    const WETH = "0x63481f4017C00BE371bAbfA694968832E5d55113"
    const arguments = [factory, WETH]
    // Start deployment, returning a promise that resolves to a contract object
    const accumulator = await Accumulator.deploy(factory,WETH)
    await accumulator.deployed()
    console.log("Contract deployed to address:", accumulator.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
