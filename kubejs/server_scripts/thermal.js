// priority: 0
ServerEvents.recipes(event => {
    event.recipes.gtceu.compressor("kubejs:crafting/rubber_from_thermal")
        .itemInputs("thermal:cured_rubber")
        .itemOutputs("gtceu:rubber_plate")
        .duration(120)
        .EUt(16)

    event.remove({id:'thermal:rubber_from_dandelion'})
    event.remove({id:'thermal:rubber_from_vine'})
    event.remove({id:'systeams:boilers/stirling'})
    event.remove({id:'systeams:boilers/upgrades/stirling_upgrade'})
    event.remove({id:'thermal:dynamo_stirling'})
    event.remove({id:'systeams:boilers/upgrades/stirling_downgrade'})
    event.remove({id:'thermal:device_water_gen'})
    event.remove({id:'thermal:redstone_servo'})
    event.remove({id:'thermal:device_tree_extractor'})
    event.remove({id:'thermal:machine_frame'})
    event.remove({id:'thermal:machine_bottler'})

    event.remove({id:'thermal:parts/signalum_gear'})
    event.remove({id:'thermal:parts/lumium_gear'})
    event.remove({id:'thermal:parts/enderium_gear'})

    event.remove({id:'gtceu:smelting/smelt_dust_signalum_to_ingot'})
    event.remove({id:'gtceu:smelting/smelt_dust_lumium_to_ingot'})
    event.remove({id:'gtceu:smelting/smelt_dust_enderium_to_ingot'})

    //WOVEN FABRIC PREOCESSING LINE

    event.recipes.gtceu.chemical_reactor("kubejs:crafting/chloroprene_make")
        .inputFluids(Fluid.of("gtceu:butadiene", 500), Fluid.of("gtceu:chlorine", 1000))
        .outputFluids(Fluid.of("gtceu:chloroprene", 500), Fluid.of("gtceu:hydrochloric_acid", 500))
        .duration(200)
        .EUt(16)

    event.remove({id:'gtceu:electrolyzer/decomposition_electrolyzing_potassium_bisulfate'})
    event.recipes.gtceu.electrolyzer("kubejs:crafting/potassium_persulfate_make")
        .itemInputs("2x gtceu:potassium_bisulfate_dust")
        .itemOutputs("gtceu:potassium_persulfate_dust")
        .outputFluids(Fluid.of("gtceu:hydrogen", 500))
        .duration(120)
        .EUt(20)

    event.recipes.gtceu.chemical_reactor("kubejs:crafting/potassium_bisulfate_make")
        .itemInputs("gtceu:potassium_chloride_dust")
        .inputFluids(Fluid.of("gtceu:sulfuric_acid", 500))
        .outputFluids(Fluid.of("gtceu:hydrochloric_acid", 500))
        .itemOutputs("gtceu:potassium_bisulfate_dust")
        .duration(200)
        .EUt(16)

    event.recipes.gtceu.electric_blast_furnace("kubejs:crafting/potassium_chloride_make")
        .itemInputs("2x gtceu:potassium_dust")
        .inputFluids(Fluid.of("gtceu:chlorine", 1000))
        .itemOutputs("2x gtceu:potassium_chloride_dust")
        .duration(600)
        .EUt(64)

    event.remove({id:'thermal:diving_fabric'})
    event.recipes.gtceu.cutter("kubejs:crafting/marine_fabric_make")
        .itemInputs("1x gtceu:neoprene_ingot")
        .itemOutputs("4x thermal:diving_fabric")
        .duration(100)
        .EUt(20)

    //Aqueous accumulator
    event.recipes.gtceu.assembler("kubejs:crafting/aqueous_accumulator_make")
        .itemInputs("6x gtceu:cobalt_plate", "4x gtceu:bronze_small_fluid_pipe", "1x thermal:redstone_servo", "1x gtceu:lv_electric_pump")
        .itemOutputs("1x thermal:device_water_gen")
        .duration(100)
        .EUt(20)

    //servo
    event.shaped(
      Item.of('thermal:redstone_servo', 1),
        [
          'R',
          'M',
          'R'
        ],
        {
            R: 'gtceu:red_alloy_rod',
            M: 'gtceu:lv_electric_motor'
        }
     )
    
     function fullReplace(object) {
        event.replaceInput(
        { input: 'gtceu:' + object },
        'gtceu:' + object, 'thermal:' + object)

        event.replaceOutput(
        { output: 'gtceu:' + object },
        'gtceu:' + object, 'thermal:' + object)
     }

     function fullReplace2(replaced, replacer) {
        event.replaceInput(
        { input: replaced },
        replaced, replacer)

        event.replaceOutput(
        { output: replaced },
        replaced, replacer)
     }

     fullReplace('signalum_block')
     fullReplace('signalum_ingot')
     fullReplace('signalum_nugget')
     fullReplace('signalum_plate')
     fullReplace('signalum_dust')
     fullReplace('signalum_gear')
     fullReplace('lumium_block')
     fullReplace('lumium_ingot')
     fullReplace('lumium_nugget')
     fullReplace('lumium_plate')
     fullReplace('lumium_dust')
     fullReplace('lumium_gear')
     fullReplace('enderium_block')
     fullReplace('enderium_ingot')
     fullReplace('enderium_nugget')
     fullReplace('enderium_plate')
     fullReplace('enderium_dust')
     fullReplace('enderium_gear')

     fullReplace2('gtceu:cinder_flour_dust', 'create:cinder_flour')
     fullReplace2('gtceu:chocolate_ingot', 'create:bar_of_chocolate')

    //Signalum in alloy smelter
    event.recipes.gtceu.alloy_smelter("kubejs:crafting/signalum_alloy_smelter")
        .itemInputs("2x gtceu:red_alloy_ingot", "2x #forge:ingots/silver")
        .itemOutputs("4x thermal:signalum_ingot")
        .duration(120)
        .EUt(16)

    //Signalum in mixer
    event.recipes.gtceu.mixer("kubejs:crafting/signalum_mixer")
        .itemInputs('4x #forge:dusts/copper', '#forge:dusts/silver', "4x minecraft:redstone")
        .itemOutputs("4x thermal:signalum_dust")
        .duration(120)
        .EUt(20)

    event.custom({
        "type": "thermal:bottler",
        "ingredients": [
            { "item": "gtceu:steel_ingot" },
            { "fluid": "gtceu:zinc", "amount": 144 }
        ],
        "result": [{ "item": "gtceu:galvanized_steel_ingot" }]
    })

    event.shaped(
      Item.of('systeams:stirling_boiler', 1),
        [
          ' G ',
          'RCR',
          'PSP'
        ],
        {
            G: 'minecraft:glass',
            R: 'thermal:cured_rubber',
            C: 'gtceu:copper_foil',
            P: 'gtceu:potin_plate',
            S: 'thermal:signalum_gear'
        }
    )

    event.shaped(
      Item.of('thermal:device_tree_extractor', 1),
        [
          'WGW',
          'PSP',
          'FRF'
        ],
        {
            G: 'gtceu:ceramic_steel_gear',
            R: '#forge:rods/invar',
            W: '#forge:treated_wood',
            P: 'gtceu:potin_plate',
            S: 'thermal:redstone_servo',
            F: '#forge:frames/treated_wood'
        }
    )

    //make sticky resin
    event.recipes.gtceu.fluid_solidifier("kubejs:crafting/sticky_resin_make")
        .notConsumable("1x gtceu:nugget_casting_mold")
        .inputFluids(Fluid.of("thermal:resin", 75))
        .itemOutputs("gtceu:sticky_resin")
        .duration(60)
        .EUt(7)
    
    //make uncured rubber
    event.recipes.gtceu.fluid_solidifier("kubejs:crafting/uncured_rubber_make")
        .notConsumable("1x gtceu:ingot_casting_mold")
        .inputFluids(Fluid.of("thermal:latex", 150))
        .itemOutputs("thermal:rubber")
        .duration(100)
        .EUt(7)

    event.shapeless(
     Item.of('thermal:rubberwood_sapling', 1),
     [
       'gtceu:rubber_sapling',
     ])

    event.shapeless(
     Item.of('gtceu:rubber_sapling', 1),
     [
       'thermal:rubberwood_sapling',
     ])

    event.shaped(
      Item.of('thermal:machine_frame', 1),
        [
          'TTT',
          'GWG',
          'CMC'
        ],
        {
            T: '#forge:plates/tin',
            G: 'gtceu:tempered_glass',
            W: '#gtceu:tools/crafting_wrenches',
            C: 'gtceu:conductive_mixed_salts_alloy_single_wire',
            M: '#forge:plates/magnetic_steel'
        }
    )

    event.shaped(
      Item.of('thermal:machine_bottler', 1),
        [
          'LBL',
          'GMG',
          'CFC'
        ],
        {
            L: '#kubejs:circuits/lmv',
            G: 'gtceu:tempered_glass',
            B: 'minecraft:bucket',
            C: '#forge:springs/copper',
            M: 'thermal:machine_frame',
            F: 'thermal:rf_coil'
        }
    )

    //make thermal mixture
    event.recipes.gtceu.chemical_reactor("kubejs:crafting/thermal_mixture_ye")
        .itemInputs('#forge:dusts/copper')
        .inputFluids(Fluid.of("thermal:light_oil", 120))
        .outputFluids(Fluid.of("gtceu:thermal_mixture", 120))
        .duration(100)
        .EUt(7)

    //make therm
    event.recipes.gtceu.chemical_reactor("kubejs:crafting/therm_make")
        .itemInputs("gtceu:sodium_dust")
        .inputFluids(Fluid.of("gtceu:thermal_mixture", 120))
        .outputFluids(Fluid.of("gtceu:therm", 144))
        .duration(100)
        .EUt(7)
})