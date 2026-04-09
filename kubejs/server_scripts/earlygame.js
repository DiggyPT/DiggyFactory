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

    //Andesite alloy
    event.recipes.gtceu.alloy_smelter("kubejs:andesite_alloy_make")
        .itemInputs("minecraft:andesite", "minecraft:iron_nugget")
        .itemOutputs("2x create:andesite_alloy")
        .duration(80)
        .EUt(16)

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

     //Mechanical crafter (create)
     event.remove({ output: 'create:mechanical_crafter' })
     event.shaped(
      Item.of('create:mechanical_crafter', 3),
        [
          'U',
          'G',
          'C'
        ],
        {
            U: '#gtceu:circuits/ulv',
            G: 'create:brass_casing',
            C: 'minecraft:crafting_table',
        }
     )

     //Mechanical pump (to not remove the primitive pump of uses)
     event.remove({ output: 'create:mechanical_pump' })
     event.shapeless(
     Item.of('create:mechanical_pump', 1),
     [
       'create:cogwheel',
       'create:fluid_pipe',
       'gtceu:steel_foil',
     ])

     //Hose pulley (same thing as mechanical pump)
     event.remove({ output: 'create:hose_pulley' })
     event.shaped(
     Item.of('create:hose_pulley', 1),
        [
          'C',
          'K',
          'S'
        ],
        {
            C: 'create:copper_casing',
            K: 'minecraft:dried_kelp_block',
            S: 'gtceu:steel_plate',
        }
     )

     /*Mold recipe
     event.shaped(
     Item.of('gtceu:empty_mold', 1),
        [
          'HF',
          'WW',
          'WW'
        ],
        {
            W: 'gtceu:wrought_iron_plate',
            H: '#gtceu:tools/crafting_hammers',
            F: '#gtceu:tools/crafting_files',
        }
     )

     //Primitive blast furnace
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

     //Rose quartz
    event.remove({ output: 'create:rose_quartz' })
    event.recipes.gtceu.alloy_smelter("kubejs:rose_quartz_make")
        .itemInputs("8x minecraft:redstone", "minecraft:quartz")
        .itemOutputs("create:rose_quartz")
        .duration(80)
        .EUt(16)

    //Brass casing
    event.remove({ output: 'create:brass_casing' })
    event.shaped(
        Item.of('create:brass_casing', 1),
          [
           'BWB',
           'WRW',
           'BWB'
          ],
          {
              B: '#forge:plates/brass',
              W: '#forge:plates/treated_wood',
              R: '#gtceu:tools/crafting_wrenches',
       }
    )

    //replace precision mechanisms with lv circuits in crafting recipes
    event.replaceInput(
     { input: 'create:precision_mechanism' },
     'create:precision_mechanism',
     '#gtceu:circuits/lv')

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

    //andesite casing
    event.shaped(
        Item.of('create:andesite_casing', 2),
          [
           'AWA',
           'WSW',
           'AWA'
          ],
          {
              A: 'create:andesite_alloy',
              W: 'gtceu:wood_plate',
              S: '#gtceu:tools/crafting_saws',
       }
    )

    //copper casing
    event.shaped(
        Item.of('create:copper_casing', 2),
          [
           'AWA',
           'WSW',
           'AWA'
          ],
          {
              A: 'gtceu:copper_plate',
              W: 'gtceu:steel_plate',
              S: '#gtceu:tools/crafting_hammers',
       }
    )

    //train casing
    event.shaped(
        Item.of('create:railway_casing', 2),
          [
           'AWA',
           'WSW',
           'AWA'
          ],
          {
              A: 'gtceu:brass_plate',
              W: 'gtceu:rubber_plate',
              S: '#gtceu:tools/crafting_hammers',
       }
    )

    function replaceItem(replaced, replacer){
        event.replaceInput(
        { input: replaced }, replaced, replacer)
    }

    replaceItem('create:iron_sheet', 'gtceu:iron_plate')
    replaceItem('create:copper_sheet', 'gtceu:copper_plate')
    replaceItem('createdeco:zinc_sheet', 'gtceu:zinc_plate')
    replaceItem('create:zinc_ingot', 'gtceu:zinc_ingot')

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

    event.smelting('minecraft:copper_ingot', 'gtceu:raw_covellite') //Output comes first
    event.smelting('2x minecraft:copper_ingot', 'gtceu:raw_enargite')

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
})