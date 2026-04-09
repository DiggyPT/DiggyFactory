// priority: 0
ServerEvents.recipes(event => {
    //EBF controller
    event.remove({ output: 'gtceu:electric_blast_furnace' })
    event.shaped(
    Item.of('gtceu:electric_blast_furnace', 1),
       [
         'FFF',
         'CIC',
         'TCT'
       ],
       {
           F: 'minecraft:furnace',
           I: 'gtceu:heatproof_machine_casing',
           T: 'gtceu:tin_single_cable',
           C: 'kubejs:decent_electronic_circuit',
        }
    )

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

    //Decent electronic circuit
    event.remove({ output: 'kubejs:decent_electronic_circuit' })
    event.shaped(
    Item.of('kubejs:decent_electronic_circuit', 1),
       [
         'RGR',
         'CBC',
         'NNN'
       ],
       {
           R: 'kubejs:rectifier',
           G: 'gtceu:ge_element_plate',
           C: 'gtceu:basic_electronic_circuit',
           B: 'kubejs:treated_printed_circuit_board',
           N: 'gtceu:nickel_single_cable',
        }
    )

    //Treated circuit board
    event.recipes.gtceu.assembler("kubejs:tcb_make")
        .itemInputs("gtceu:wood_dust")
        .inputFluids(Fluid.of("gtceu:creosote", 288))
        .itemOutputs("1x kubejs:treated_circuit_board")
        .duration(120)
        .EUt(20)

    //Treated printed circuit board
    event.shaped(
    Item.of('kubejs:treated_printed_circuit_board', 1),
       [
         'NNN',
         'NBN',
         'NNN'
       ],
       {
           B: 'kubejs:treated_circuit_board',
           N: 'gtceu:nickel_single_wire',
        }
    )

    //Rectifier
    event.recipes.gtceu.assembler("kubejs:rectifier_make")
        .itemInputs("gtceu:annealed_copper_foil", "gtceu:tin_dust")
        .inputFluids(Fluid.of("gtceu:steel", 144))
        .itemOutputs("1x kubejs:rectifier")
        .duration(100)
        .EUt(20)

    //Good electronic circuit (first mv circuit)
    event.remove({ output: 'gtceu:good_electronic_circuit' })
    event.shaped(
    Item.of('gtceu:good_electronic_circuit', 1),
       [
         'DSD',
         'CBC',
         'WCW'
       ],
       {
           B: 'gtceu:phenolic_printed_circuit_board',
           W: 'gtceu:copper_single_wire',
           S: 'gtceu:steel_plate',
           D: 'gtceu:diode',
           C: 'kubejs:decent_electronic_circuit',
        }
    )

    event.recipes.gtceu.circuit_assembler("kubejs:make_first_mv_circuit_ca")
        .itemInputs("gtceu:phenolic_printed_circuit_board", "2x kubejs:decent_electronic_circuit", '2x #gtceu:diodes', "2x gtceu:copper_single_wire")
        .itemOutputs("1x gtceu:good_electronic_circuit")
        .duration(300)
        .EUt(30)

    //printed treated circuit board better recipe
    event.recipes.gtceu.chemical_reactor("kubejs:ptcb_chem")
        .itemInputs("4x gtceu:nickel_single_wire", "kubejs:treated_circuit_board")
        .inputFluids(Fluid.of("gtceu:hydrochloric_acid", 100))
        .itemOutputs("1x kubejs:treated_printed_circuit_board")
        .duration(300)
        .EUt(30)

    //first lmv circuit in circuit assembler recipe
    event.recipes.gtceu.circuit_assembler("kubejs:make_first_lmv_circuit_ca")
        .itemInputs("kubejs:treated_printed_circuit_board", "2x gtceu:basic_electronic_circuit", '2x kubejs:rectifier', "2x gtceu:nickel_single_wire")
        .itemOutputs("1x kubejs:decent_electronic_circuit")
        .duration(300)
        .EUt(30)

    event.recipes.gtceu.autoclave("kubejs:crafting/cardboard_pulp")
        .itemInputs('gtceu:bio_chaff')
        .inputFluids(Fluid.of("minecraft:water", 700))
        .itemOutputs("create:pulp")
        .duration(200)
        .EUt(16)

    event.recipes.gtceu.bender("kubejs:crafting/cardboard_make")
        .itemInputs('create:pulp')
        .itemOutputs("create:cardboard")
        .circuit(1)
        .duration(120)
        .EUt(16)
    
    event.recipes.gtceu.mixer("kubejs:si_ge_make")
        .itemInputs("gtceu:silicon_dust", "gtceu:ge_element_dust")
        .itemOutputs("1x gtceu:silicon_germanium_dust")
        .duration(60)
        .EUt(20)
})