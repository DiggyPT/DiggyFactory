// priority: 0
ServerEvents.recipes(event => {
    event.shaped(
      //Pneumatic Mechanism
      Item.of('kubejs:pneumatic_mechanism', 2), // arg 1: output (1: the item, 2: the amount)
        [
          'RGR',
          'BPB', // arg 2: the shape (array of strings)
          'HGF'
        ],
        {
            R: 'gtceu:long_copper_rod',
            G: 'gtceu:small_iron_gear',  //arg 3: the mapping object
            B: 'gtceu:bronze_small_fluid_pipe',
            P: 'gtceu:bronze_plate',
            H: '#gtceu:tools/crafting_hammers',
            F: '#gtceu:tools/crafting_files'
        }
     )

    //Ceramic steel
    event.recipes.gtceu.alloy_smelter("gtceu:ceramic_steel_ingot_make")
        .itemInputs("minecraft:iron_ingot", "minecraft:brick")
        .itemOutputs("2x gtceu:ceramic_steel_ingot")
        .duration(100)
        .EUt(24)

    event.recipes.gtceu.alloy_smelter("gtceu:ceramic_steel_ingot2")
        .itemInputs("gtceu:iron_dust", "minecraft:brick")
        .itemOutputs("2x gtceu:ceramic_steel_ingot")
        .duration(100)
        .EUt(20)

    event.recipes.gtceu.alloy_smelter("gtceu:ceramic_steel_ingot3")
        .itemInputs("minecraft:iron_ingot", "gtceu:brick_dust")
        .itemOutputs("2x gtceu:ceramic_steel_ingot")
        .duration(100)
        .EUt(20)

    event.recipes.gtceu.alloy_smelter("gtceu:ceramic_steel_ingot4")
        .itemInputs("gtceu:iron_dust", "gtceu:brick_dust")
        .itemOutputs("2x gtceu:ceramic_steel_ingot")
        .duration(100)
        .EUt(16)

    //Bronze machine casing (to use ulv circuits)
    event.remove({ output: 'gtceu:bronze_machine_casing' })
    event.shaped(
      Item.of('gtceu:bronze_machine_casing', 1), // arg 1: output (1: the item, 2: the amount)
        [
          'PPP',
          'UHU', // arg 2: the shape (array of strings)
          'PPP'
        ],
        {
            U: '#gtceu:circuits/ulv',
            P: 'gtceu:bronze_plate',
            H: '#gtceu:tools/crafting_hammers',
        }
     )

    //Bricked bronze casing (to use ulv circuits)
    event.remove({ output: 'gtceu:bronze_brick_casing' })
    event.shaped(
      Item.of('gtceu:bronze_brick_casing', 1), // arg 1: output (1: the item, 2: the amount)
        [
          'PPP',
          'UHU', // arg 2: the shape (array of strings)
          'BBB'
        ],
        {
            U: '#gtceu:circuits/ulv',
            P: 'gtceu:bronze_plate',
            H: '#gtceu:tools/crafting_hammers',
            B: 'minecraft:bricks',
        }
     )

     event.smelting('minecraft:flint', 'minecraft:gravel') //Output comes first

     /*//Primitive blast furnace
     event.remove({ output: 'gtceu:primitive_blast_furnace' })
     event.shaped(
     Item.of('gtceu:primitive_blast_furnace', 1),
        [
          'HRV',
          'PFR',
          'IRV'
        ],
        {
            F: 'gtceu:firebricks',
            P: '#forge:plates/iron',
            R: '#forge:rods/iron',
            V: 'gtceu:vacuum_tube',
            H: '#gtceu:tools/crafting_hammers',
            I: '#gtceu:tools/crafting_files',
        }
     )*/

     //less tedious chad recipe. no need to thank me!
     event.shaped(
     Item.of('gtceu:paper_dust', 2),
        [
          'WWW',
          ' M '
        ],
        {
            W: '#minecraft:planks',
            M: '#gtceu:tools/crafting_mortars',
        }
     )

     //Animal cage
    event.shaped(
        Item.of('kubejs:animal_cage', 4),
          [
           'PPP',
           'BBB',
           'PPP'
          ],
          {
              B: 'minecraft:iron_bars',
              P: 'gtceu:iron_plate',
       }
    )

    function replaceItem(replaced, replacer){
        event.replaceInput(
        { input: replaced }, replaced, replacer)
    }

    /*replaceItem('create:iron_sheet', 'gtceu:iron_plate')
    replaceItem('create:copper_sheet', 'gtceu:copper_plate')
    replaceItem('createdeco:zinc_sheet', 'gtceu:zinc_plate')
    replaceItem('create:zinc_ingot', 'gtceu:zinc_ingot')*/

    event.shaped(
        Item.of('gtceu:ulv_energy_input_hatch', 1),
          [
           'HWR',
           'WIW',
           'LWL'
          ],
          {
              L: 'gtceu:lead_single_wire',
              I: 'gtceu:magnetic_iron_rod',
              W: 'gtceu:wrought_iron_plate',
              H: '#gtceu:tools/crafting_hammers',
              R: '#gtceu:tools/crafting_wrenches',
       }
    )

    event.shaped(
        Item.of('gtceu:industrial_steam_casing', 2),
          [
           'SPS',
           'RWR',
           'SPS'
          ],
          {
              P: '#forge:plates/bronze',
              S: 'gtceu:bronze_screw',
              R: 'gtceu:bronze_rod',
              W: '#gtceu:tools/crafting_wrenches',
       }
    )

    event.remove({input: 'gtceu:raw_covellite', output: 'gtceu:covellite_dust', type: 'minecraft:smelting' })
    event.remove({input: 'gtceu:raw_enargite', output: 'gtceu:enargite_dust', type: 'minecraft:smelting' })
    event.remove({id:'create:item_application/andesite_casing_from_log'})
    event.remove({id:'create:item_application/andesite_casing_from_wood'})
    event.remove({id:'create:item_application/copper_casing_from_log'})
    event.remove({id:'create:item_application/copper_casing_from_wood'})
    event.remove({id:'create:item_application/railway_casing'})

    event.remove({output: 'gtceu:chocolate_block'})
    event.remove({input: 'gtceu:chocolate_block'})

    event.shaped(
        Item.of('gtceu:ulv_input_bus', 1),
          [
           'HWR',
           'WCW',
           'LWL'
          ],
          {
              L: 'gtceu:lead_single_wire',
              C: 'minecraft:chest',
              W: 'gtceu:wrought_iron_plate',
              H: '#gtceu:tools/crafting_hammers',
              R: '#gtceu:tools/crafting_wrenches',
       }
    )

    event.shaped(
        Item.of('minecraft:iron_ingot', 1),
          [
           'NNN',
           'NNN',
           'NNN'
          ],
          {
              N: 'minecraft:iron_nugget',
       }
    )

    event.shaped(
        Item.of('gtceu:wrought_iron_ingot', 1),
          [
           'NNN',
           'NNN',
           'NNN'
          ],
          {
              N: 'gtceu:wrought_iron_nugget',
       }
    )

    event.remove({id:'gtceu:compressor/compressed_fireclay'})
    event.recipes.gtceu.compressor("kubejs:fireclay_make")
        .itemInputs("gtceu:fireclay_dust")
        .itemOutputs("gtceu:compressed_fireclay")
        .duration(15)
        .EUt(4)

    event.recipes.gtceu.alloy_smelter("kubejs:make_rubber_no_sulphur")
        .itemInputs("1x gtceu:netherrack_dust", "6x gtceu:raw_rubber_dust")
        .itemOutputs("gtceu:rubber_ingot")
        .duration(140)
        .EUt(12)

    //Lunar boiler LP
    event.shaped(
      Item.of('diggycore:lp_steam_lunar_boiler', 1),
        [
          'GGG',
          'LMH',
          'PCP'
        ],
        {
            L: 'projecte:low_covalence_dust',
            M: 'projecte:medium_covalence_dust',
            H: 'projecte:high_covalence_dust',
            C: 'gtceu:bronze_brick_casing',
            P: 'gtceu:bronze_small_fluid_pipe',
            G: 'minecraft:purple_stained_glass',
        }
     )

    //Lunar boiler HP
    event.shaped(
      Item.of('diggycore:hp_steam_lunar_boiler', 1),
        [
          'GGG',
          'LMH',
          'PCP'
        ],
        {
            L: 'projecte:low_covalence_dust',
            M: 'projecte:medium_covalence_dust',
            H: 'projecte:high_covalence_dust',
            C: 'gtceu:steel_brick_casing',
            P: 'gtceu:steel_small_fluid_pipe',
            G: 'minecraft:purple_stained_glass',
        }
     )
})