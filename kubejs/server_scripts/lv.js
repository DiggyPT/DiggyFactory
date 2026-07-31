// priority: 0
ServerEvents.recipes(event => {
    //CMSC
    event.shapeless(
    Item.of('gtceu:conductive_mixed_salts_compound_dust', 2),
    [
       'minecraft:redstone',
       'gtceu:salt_dust',
       'gtceu:rock_salt_dust',
    ])

    //CMSA
    event.recipes.gtceu.alloy_smelter("kubejs:cmsa_recipe_ingot")
        .itemInputs("minecraft:iron_ingot", "gtceu:conductive_mixed_salts_compound_dust")
        .itemOutputs("1x gtceu:conductive_mixed_salts_alloy_ingot")
        .duration(60)
        .EUt(24)

    event.recipes.gtceu.alloy_smelter("kubejs:cmsa_recipe_dust")
        .itemInputs("gtceu:iron_dust", "gtceu:conductive_mixed_salts_compound_dust")
        .itemOutputs("1x gtceu:conductive_mixed_salts_alloy_ingot")
        .duration(60)
        .EUt(20)

    //Rectifier
    event.recipes.gtceu.assembler("kubejs:rectifier_make")
        .itemInputs("gtceu:annealed_copper_foil", "gtceu:tin_dust")
        .inputFluids(Fluid.of("gtceu:steel", 144))
        .itemOutputs("1x kubejs:rectifier")
        .duration(100)
        .EUt(20)

    event.recipes.gtceu.mixer("kubejs:si_ge_make")
        .itemInputs("gtceu:silicon_dust", "gtceu:germanium_dust")
        .itemOutputs("1x gtceu:silicon_germanium_dust")
        .duration(60)
        .EUt(20)
})