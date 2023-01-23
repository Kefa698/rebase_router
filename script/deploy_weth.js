async function main() {
    const Accumulator = await ethers.getContractFactory("ERC20Token")

    const accumulator = await Accumulator.deploy()
    await accumulator.deployed()
    console.log("Contract deployed to address:", accumulator.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
