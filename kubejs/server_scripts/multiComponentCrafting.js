// priority: 0
ServerEvents.recipes(event => {

    //Steam Animal Trapper
    event.shaped(
      Item.of('gtceu:steam_animal_trapper', 1), // arg 1: output (1: the item, 2: the amount)
        [
          'MGM',
          'MWM', // arg 2: the shape (array of strings)
          'MGM'
        ],
        {
            M: 'gtceu:steam_machine_casing',
            G: 'gtceu:ceramic_steel_gear',  //arg 3: the mapping object
            W: 'minecraft:wheat'
        }
    )

    //Steam Ranch
    event.shaped(
      Item.of('gtceu:steam_ranch', 1),
        [
          'MGM',
          'MWM',
          'MGM'
        ],
        {
            M: 'gtceu:steam_machine_casing',
            G: 'gtceu:ceramic_steel_gear',
            W: 'farmersdelight:straw'
        }
    )

    //Steam Butcher
    event.shaped(
      Item.of('gtceu:steam_butcher', 1),
        [
          'MGM',
          'MWM',
          'MGM'
        ],
        {
            M: 'gtceu:steam_machine_casing',
            G: 'gtceu:ceramic_steel_gear',
            W: 'gtceu:iron_butchery_knife'
        }
    )

    //Primitive Excavator
    event.shaped(
      Item.of('gtceu:primitive_excavator', 1),
        [
          'BFB',
          'TCT',
          'BPB'
        ],
        {
            B: 'kubejs:excavator_bricks',
            F: 'minecraft:furnace',
            T: 'gtceu:tin_plate',
            C: 'gtceu:copper_small_fluid_pipe',
            P: 'minecraft:iron_pickaxe'
        }
    )

    event.smelting('kubejs:excavator_brick', 'kubejs:compressed_excavator_clay').xp(0.35)

    //Excavator bricks
    event.shaped(
      Item.of('kubejs:excavator_bricks', 1),
        [
          'BB',
          'BB'
        ],
        {
            B: 'kubejs:excavator_brick'
        }
    )

    //Compressed excavator clay
    event.shaped(
      Item.of('kubejs:compressed_excavator_clay', 3),
        [
          'CCC',
          'GWG',
          'GGG'
        ],
        {
            C: 'minecraft:clay_ball',
            G: '#chipped:gravel',
            W: 'gtceu:brick_wooden_form'
        }
    )

    //Vapour distiller
    event.shaped(
      Item.of('gtceu:vapor_distiller', 1),
        [
          'BPB',
          'CSC',
          'TCT'
        ],
        {
            C: '#gtceu:circuits/lv',
            B: 'gtceu:bronze_frame',
            S: 'gtceu:solid_machine_casing',
            T: 'gtceu:nickel_single_cable',
            P: 'gtceu:lv_electric_pump'
        }
    )

    //Bronze plated excavator bricks
    event.shaped(
      Item.of('kubejs:bronze_plated_excavator_bricks', 2),
        [
          'HB ',
          'BEB',
          ' BS'
        ],
        {
            E: 'kubejs:excavator_bricks',
            B: 'gtceu:bronze_plate',
            S: '#gtceu:tools/crafting_screwdrivers',
            H: '#gtceu:tools/crafting_hammers'
        }
    )

    //Steam excavator
    event.shaped(
      Item.of('gtceu:steam_excavator', 1),
        [
          'EGE',
          'BRB',
          'EPE'
        ],
        {
            E: 'kubejs:bronze_plated_excavator_bricks',
            B: 'gtceu:bronze_small_fluid_pipe',
            R: 'farmersdelight:rope',
            P: 'create:mechanical_drill',
            G: 'gtceu:ceramic_steel_gear'
        }
    )

    //Poly reaction casing
    event.recipes.gtceu.assembler("kubejs:prc_make")
        .itemInputs("2x gtceu:rubber_plate", "4x gtceu:zinc_foil", "gtceu:double_cupronickel_plate", "gtceu:aluminium_small_fluid_pipe", "gtceu:small_gallium_arsenide_dust")
        .inputFluids(Fluid.of("gtceu:tin_alloy", 144))
        .itemOutputs("6x kubejs:poly_reaction_casing")
        .duration(160)
        .EUt(64)

    //Polymerization chamber controller
    event.recipes.gtceu.assembler("kubejs:pmcc_make")
        .itemInputs("gtceu:mv_machine_hull", "2x kubejs:poly_reaction_casing", "4x kubejs:improved_integrated_circuit", "2x gtceu:mv_electric_motor", "2x gtceu:bronze_rotor", "4x gtceu:invar_gear")
        .itemOutputs("gtceu:polymerization_chamber")
        .duration(120)
        .EUt(70)

    //Basic electric excavator
    event.shaped(
      Item.of('gtceu:basic_electric_excavator', 1),
        [
          'EGE',
          'BRB',
          'EPE'
        ],
        {
            E: 'gtceu:solid_machine_casing',
            B: 'kubejs:decent_electronic_circuit',
            R: 'create:rope_pulley',
            P: 'gtceu:invar_drill_head',
            G: 'gtceu:galvanized_steel_gear'
        }
    )

    //Conic casing
    event.shaped(
      Item.of('kubejs:conic_casing', 2),
        [
          'SPP',
          'RHR',
          'PPS'
        ],
        {
            S: 'gtceu:steel_screw',
            H: '#gtceu:tools/crafting_hammers',
            R: 'gtceu:steel_rod',
            P: 'gtceu:steel_plate'
        }
    )

    //Electromagnet casing
    event.shaped(
      Item.of('kubejs:electromagnet_casing', 1),
        [
          'SWS',
          'BCB',
          'ROR'
        ],
        {
            S: 'gtceu:ceramic_steel_plate',
            W: '#forge:tools/wrenches',
            B: 'gtceu:bronze_plate',
            R: 'gtceu:magnetic_iron_rod',
            O: 'gtceu:bronze_rotor',
            C: 'kubejs:conic_casing'
        }
    )

    //Radiation Collector
    event.shaped(
      Item.of('kubejs:radiation_collector', 1),
        [
          'PGP',
          'GCG',
          'PLP'
        ],
        {
            P: 'gtceu:green_sapphire_plate',
            G: 'gtceu:silicon_germanium_dust',
            C: 'kubejs:conic_casing',
            L: '#gtceu:circuits/lv'
        }
    )
})

LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.CHEST) // or multiple LootType.BLOCK, LootType.CHEST ...
        .randomChance(0.3)
        .addLoot("kubejs:compressed_excavator_clay");
});