// priority: 0
ServerEvents.recipes(event => {
    //Phillips catalyst recipe
    event.recipes.gtceu.mixer("kubejs:pc_recipe")
        .itemInputs("gtceu:chromium_trioxide_dust", "2x gtceu:silicon_dust")
        .itemOutputs("3x gtceu:phillips_catalyst_dust")
        .duration(400)
        .EUt(96)

    //integrated LMV circuit
    event.recipes.gtceu.circuit_assembler("kubejs:lmv_ic")
        .itemInputs("kubejs:treated_printed_circuit_board", "2x gtceu:basic_integrated_circuit", '2x #gtceu:resistors', '2x #gtceu:diodes', "1x gtceu:nickel_single_wire", "3x gtceu:ge_element_bolt")
        .itemOutputs("2x kubejs:decent_integrated_circuit")
        .duration(300)
        .EUt(20)

    event.remove({input: 'gtceu:basic_integrated_circuit', output: 'gtceu:good_integrated_circuit'})
    event.remove({input: 'gtceu:good_integrated_circuit', output: 'gtceu:advanced_integrated_circuit'})

    //updated integrated MV circuit

    event.recipes.gtceu.circuit_assembler("kubejs:mv_ic")
        .itemInputs("gtceu:phenolic_printed_circuit_board", "2x kubejs:decent_integrated_circuit", '2x #gtceu:resistors', '2x #gtceu:diodes', "4x gtceu:fine_gold_wire", "4x gtceu:silver_bolt")
        .itemOutputs("2x gtceu:good_integrated_circuit")
        .duration(400)
        .EUt(24)

    //integrated MHV circuit

    event.recipes.gtceu.circuit_assembler("kubejs:mhv_ic")
        .itemInputs("2x gtceu:good_integrated_circuit", "2x gtceu:ilc_chip", 'gtceu:cpu_chip', '4x #gtceu:diodes', "6x gtceu:fine_zinc_wire", "4x gtceu:tin_alloy_bolt")
        .itemOutputs("2x kubejs:improved_integrated_circuit")
        .duration(400)
        .EUt(24)

    //updated integrated HV circuit

    event.recipes.gtceu.circuit_assembler("kubejs:hv_ic")
        .itemInputs("2x kubejs:improved_integrated_circuit", '2x gtceu:ilc_chip', '2x gtceu:ram_chip', '4x #gtceu:transistors', "8x gtceu:fine_electrum_wire", "8x gtceu:annealed_copper_bolt")
        .itemOutputs("gtceu:advanced_integrated_circuit")
        .duration(800)
        .EUt(30)

    event.remove({id:'ftbquests:screen_1'})
    event.recipes.gtceu.assembler("kubejs:ftbscreen")
        .itemInputs("4x gtceu:steel_plate", "4x gtceu:glass_plate", '2x gtceu:cupronickel_rod', '#gtceu:circuits/lv')
        .inputFluids(Fluid.of("gtceu:tin", 144))
        .itemOutputs("8x ftbquests:screen_1")
        .duration(200)
        .EUt(16)
})