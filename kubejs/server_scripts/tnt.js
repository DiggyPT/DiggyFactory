// priority: 0
ServerEvents.recipes(event => {
    //tnt x5
    event.remove({ output: 'luckytntmod:tnt_x5' })
    event.recipes.gtceu.chemical_reactor("kubejs:tnt_5_make")
        .itemInputs("4x kubejs:gelled_explosive_5", "4x minecraft:tnt")
        .inputFluids(Fluid.of("gtceu:hydrochloric_acid", 250))
        .itemOutputs("1x luckytntmod:tnt_x5")
        .duration(200)
        .EUt(120)

    //tnt x20
    event.remove({ output: 'luckytntmod:tnt_x20' })
    event.recipes.gtceu.chemical_reactor("kubejs:tnt_20_make")
        .itemInputs("4x kubejs:gelled_explosive_20", "4x luckytntmod:tnt_x5")
        .inputFluids(Fluid.of("gtceu:phthalic_acid", 250))
        .itemOutputs("1x luckytntmod:tnt_x20")
        .duration(200)
        .EUt(600)

    //tnt x100
    event.remove({ output: 'luckytntmod:tnt_x100' })
    event.recipes.gtceu.chemical_reactor("kubejs:tnt_100_make")
        .itemInputs("4x kubejs:gelled_explosive_100", "4x luckytntmod:tnt_x20")
        .inputFluids(Fluid.of("gtceu:aqua_regia", 250))
        .itemOutputs("1x luckytntmod:tnt_x100")
        .duration(200)
        .EUt(1200)

    //tnt x500
    event.remove({ output: 'luckytntmod:tnt_x500' })
    event.recipes.gtceu.chemical_reactor("kubejs:tnt_500_make")
        .itemInputs("4x kubejs:gelled_explosive_500", "4x luckytntmod:tnt_x100")
        .inputFluids(Fluid.of("gtceu:bromine", 250))
        .itemOutputs("1x luckytntmod:tnt_x500")
        .duration(200)
        .EUt(2400)

    //tnt x2,000
    event.remove({ output: 'luckytntmod:tnt_x2000' })
    event.recipes.gtceu.chemical_reactor("kubejs:tnt_2000_make")
        .itemInputs("4x kubejs:gelled_explosive_2k", "4x luckytntmod:tnt_x500")
        .inputFluids(Fluid.of("gtceu:acidic_osmium_solution", 250))
        .itemOutputs("1x luckytntmod:tnt_x2000")
        .duration(200)
        .EUt(5000)

    //tnt x10,000
    event.remove({ output: 'luckytntmod:tnt_x10000' })
    event.recipes.gtceu.chemical_reactor("kubejs:tnt_10000_make")
        .itemInputs("4x kubejs:gelled_explosive_10k", "4x luckytntmod:tnt_x2000")
        .inputFluids(Fluid.of("gtceu:fluoroantimonic_acid", 250))
        .itemOutputs("1x luckytntmod:tnt_x10000")
        .duration(200)
        .EUt(10000)
})