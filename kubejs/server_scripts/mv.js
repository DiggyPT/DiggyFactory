// priority: 0
ServerEvents.recipes(event => {
    //Phillips catalyst recipe
    event.recipes.gtceu.mixer("kubejs:pc_recipe")
        .itemInputs("gtceu:chromium_trioxide_dust", "2x gtceu:silicon_dust")
        .itemOutputs("3x gtceu:phillips_catalyst_dust")
        .duration(400)
        .EUt(96)

    event.remove({id:'ftbquests:screen_1'})
    event.recipes.gtceu.assembler("kubejs:ftbscreen")
        .itemInputs("4x gtceu:steel_plate", "4x gtceu:glass_plate", '2x gtceu:cupronickel_rod', '#gtceu:circuits/lv')
        .inputFluids(Fluid.of("gtceu:tin", 144))
        .itemOutputs("8x ftbquests:screen_1")
        .duration(200)
        .EUt(16)
})