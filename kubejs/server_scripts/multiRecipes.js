// priority: 0
ServerEvents.recipes(event => {
    //Animal trapper
    event.recipes.gtceu.steam_animal_trapper("kubejs:trap_pig")
        .itemInputs("9x minecraft:carrot", "1x kubejs:animal_cage")
        .itemOutputs("kubejs:caged_pig")
        .duration(400)
        .EUt(4)

     event.recipes.gtceu.steam_animal_trapper("kubejs:trap_pig2")
        .itemInputs("9x minecraft:potato", "1x kubejs:animal_cage")
        .itemOutputs("kubejs:caged_pig")
        .duration(400)
        .EUt(4)

    event.recipes.gtceu.steam_animal_trapper("kubejs:trap_pig3")
        .itemInputs("9x minecraft:beetroot", "1x kubejs:animal_cage")
        .itemOutputs("kubejs:caged_pig")
        .duration(400)
        .EUt(4)

    event.recipes.gtceu.steam_animal_trapper("kubejs:trap_pig4")
        .itemInputs("9x farmersdelight:onion", "1x kubejs:animal_cage")
        .itemOutputs("kubejs:caged_pig")
        .duration(400)
        .EUt(4)

    event.recipes.gtceu.steam_animal_trapper("kubejs:trap_cow")
        .itemInputs("9x minecraft:wheat", "1x kubejs:animal_cage")
        .itemOutputs("kubejs:caged_cow")
        .duration(400)
        .EUt(4)

    event.recipes.gtceu.steam_animal_trapper("kubejs:trap_sheep")
        .itemInputs("9x gtceu:wheat_dust", "1x kubejs:animal_cage")
        .itemOutputs("kubejs:caged_sheep")
        .duration(400)
        .EUt(4)

    event.recipes.gtceu.steam_animal_trapper("kubejs:trap_chicken")
        .itemInputs("9x minecraft:wheat_seeds", "1x kubejs:animal_cage")
        .itemOutputs("kubejs:caged_chicken")
        .duration(400)
        .EUt(4)

    event.recipes.gtceu.steam_animal_trapper("kubejs:trap_chicken2")
        .itemInputs("9x minecraft:beetroot_seeds", "1x kubejs:animal_cage")
        .itemOutputs("kubejs:caged_chicken")
        .duration(400)
        .EUt(4)

    event.recipes.gtceu.steam_animal_trapper("kubejs:trap_chicken3")
        .itemInputs("9x minecraft:pumpkin_seeds", "1x kubejs:animal_cage")
        .itemOutputs("kubejs:caged_chicken")
        .duration(400)
        .EUt(4)

    event.recipes.gtceu.steam_animal_trapper("kubejs:trap_chicken4")
        .itemInputs("9x minecraft:melon_seeds", "1x kubejs:animal_cage")
        .itemOutputs("kubejs:caged_chicken")
        .duration(400)
        .EUt(4)

    //Steam Ranch

    event.recipes.gtceu.steam_ranch("kubejs:breed_pig")
        .notConsumable("2x kubejs:caged_pig")
        .itemInputs("4x minecraft:carrot", "4x kubejs:animal_cage")
        .itemOutputs("4x kubejs:caged_pig")
        .duration(400)
        .EUt(4)

    event.recipes.gtceu.steam_ranch("kubejs:breed_pig2")
        .notConsumable("2x kubejs:caged_pig")
        .itemInputs("4x minecraft:potato", "4x kubejs:animal_cage")
        .itemOutputs("4x kubejs:caged_pig")
        .duration(400)
        .EUt(4)

    event.recipes.gtceu.steam_ranch("kubejs:breed_pig3")
        .notConsumable("2x kubejs:caged_pig")
        .itemInputs("3x minecraft:beetroot", "4x kubejs:animal_cage")
        .itemOutputs("4x kubejs:caged_pig")
        .duration(400)
        .EUt(4)

    event.recipes.gtceu.steam_ranch("kubejs:breed_pig4")
        .notConsumable("2x kubejs:caged_pig")
        .itemInputs("2x farmersdelight:onion", "4x kubejs:animal_cage")
        .itemOutputs("4x kubejs:caged_pig")
        .duration(400)
        .EUt(4)

    event.recipes.gtceu.steam_ranch("kubejs:breed_cow")
        .notConsumable("2x kubejs:caged_cow")
        .itemInputs("4x minecraft:wheat", "4x kubejs:animal_cage")
        .itemOutputs("4x kubejs:caged_cow")
        .duration(400)
        .EUt(4)

    event.recipes.gtceu.steam_ranch("kubejs:breed_sheep")
        .notConsumable("2x kubejs:caged_sheep")
        .itemInputs("4x minecraft:wheat", "4x kubejs:animal_cage")
        .itemOutputs("4x kubejs:caged_sheep")
        .duration(400)
        .EUt(4)

    event.recipes.gtceu.steam_ranch("kubejs:breed_chicken")
        .notConsumable("2x kubejs:caged_chicken")
        .itemInputs("4x minecraft:wheat_seeds", "4x kubejs:animal_cage")
        .itemOutputs("4x kubejs:caged_chicken")
        .duration(400)
        .EUt(4)

    event.recipes.gtceu.steam_ranch("kubejs:breed_chicken2")
        .notConsumable("2x kubejs:caged_chicken")
        .itemInputs("4x minecraft:melon_seeds", "4x kubejs:animal_cage")
        .itemOutputs("4x kubejs:caged_chicken")
        .duration(400)
        .EUt(4)

    event.recipes.gtceu.steam_ranch("kubejs:breed_chicken3")
        .notConsumable("2x kubejs:caged_chicken")
        .itemInputs("4x minecraft:melon_seeds", "4x kubejs:animal_cage")
        .itemOutputs("4x kubejs:caged_chicken")
        .duration(400)
        .EUt(4)

    event.recipes.gtceu.steam_ranch("kubejs:breed_chicken4")
        .notConsumable("2x kubejs:caged_chicken")
        .itemInputs("4x minecraft:beetroot_seeds", "4x kubejs:animal_cage")
        .itemOutputs("4x kubejs:caged_chicken")
        .duration(400)
        .EUt(4)

    //Steam butcher

    event.recipes.gtceu.steam_butcher("kubejs:kill_cow")
        .itemInputs("1x kubejs:caged_cow")
        .itemOutputs("1x minecraft:beef", "1x kubejs:animal_cage")
        .duration(400)
        .EUt(4)

    event.recipes.gtceu.steam_butcher("kubejs:kill_sheep")
        .itemInputs("1x kubejs:caged_sheep")
        .itemOutputs("1x minecraft:mutton", "1x kubejs:animal_cage")
        .duration(400)
        .EUt(4)

    event.recipes.gtceu.steam_butcher("kubejs:kill_pig")
        .itemInputs("1x kubejs:caged_pig")
        .itemOutputs("1x minecraft:porkchop", "1x kubejs:animal_cage")
        .duration(400)
        .EUt(4)

    event.recipes.gtceu.steam_butcher("kubejs:kill_chicken")
        .itemInputs("1x kubejs:caged_chicken")
        .itemOutputs("1x minecraft:chicken", "1x kubejs:animal_cage")
        .duration(400)
        .EUt(4)

    //Primitive excavator

    function addOreRecipeP(oreName){
        event.recipes.gtceu.primitive_excavator("kubejs:mine_" + oreName)
            .notConsumable("1x gtceu:raw_" + oreName)
            .itemInputs("4x minecraft:coal")
            .itemOutputs("8x gtceu:raw_" + oreName)
            .duration(400)

        addOreRecipeS(oreName)
    }

    function addOreRecipeS(oreName){
        event.recipes.gtceu.steam_excavator("kubejs:steam_mine_" + oreName)
            .notConsumable("1x gtceu:raw_" + oreName)
            .itemOutputs("8x gtceu:raw_" + oreName)
            .duration(300)
            .EUt(8)

        addOreRecipeLV(oreName)
    }

    function addOreRecipeLV(oreName){
        event.recipes.gtceu.basic_electric_excavator("kubejs:lv_mine_" + oreName)
            .notConsumable("1x gtceu:raw_" + oreName)
            .itemOutputs("8x gtceu:raw_" + oreName)
            .duration(200)
            .EUt(32)
    }

    const oresToExcavateP = ['goethite', 'yellow_limonite', 'hematite', 'malachite', 'coal', 'cassiterite', 'cassiterite_sand', 'tin']
    const oresToExcavateS = ['redstone', 'silver', 'nickel']
    const oresToExcavateLV = ['cobalt', 'diamond', 'lead', 'pentlandite']
    for(let ore of oresToExcavateP) {
        addOreRecipeP(ore)
        //thx for the array stuff deepa :D
    }
    for(let oreS of oresToExcavateS) {
        addOreRecipeS(oreS)
    }
    for(let oreLV of oresToExcavateLV) {
        addOreRecipeLV(oreLV)
    }

    event.recipes.gtceu.basic_electric_excavator("kubejs:lv_mine_gold")
            .notConsumable("1x minecraft:raw_gold")
            .itemOutputs("8x minecraft:raw_gold")
            .duration(200)
            .EUt(32)

    //Vapor distiller

    event.recipes.gtceu.vapor_distiller("kubejs:vd_germanium")
        .itemInputs("4x gtceu:raw_coal")
        .inputFluids(Fluid.of("gtceu:hydrochloric_acid", 300))
        .itemOutputs("3x gtceu:carbon_dust", "2x gtceu:small_ge_element_dust")
        .duration(200)
        .EUt(56)

    //Polymerization Chamber

    event.remove({id:'gtceu:chemical_reactor/polyethylene_from_oxygen'})
    event.remove({id:'gtceu:chemical_reactor/polyethylene_from_air'})
    event.recipes.gtceu.polymerization_chamber("kubejs:pe_make")
        .notConsumable("1x gtceu:phillips_catalyst_dust")
        .inputFluids(Fluid.of("gtceu:ethylene", 144))
        .outputFluids(Fluid.of("gtceu:polyethylene", 216))
        .duration(400)
        .EUt(164)

    event.recipes.gtceu.polymerization_chamber("kubejs:pvc_make")
        .inputFluids(Fluid.of("gtceu:vinyl_chloride", 144), Fluid.of("gtceu:air", 1000))
        .outputFluids(Fluid.of("gtceu:polyvinyl_chloride", 216))
        .duration(400)
        .EUt(164)

    event.remove({id:'gtceu:chemical_reactor/polyvinyl_chloride_from_oxygen'})
    event.remove({id:'gtceu:chemical_reactor/polyvinyl_chloride_from_air'})
    event.recipes.gtceu.polymerization_chamber("kubejs:pvc_make2")
        .inputFluids(Fluid.of("gtceu:vinyl_chloride", 144), Fluid.of("gtceu:hydrogen", 800))
        .outputFluids(Fluid.of("gtceu:polyvinyl_chloride", 216))
        .duration(360)
        .EUt(164)

    event.recipes.gtceu.polymerization_chamber("kubejs:neoprene_make")
        .notConsumable("1x gtceu:potassium_persulfate_dust")
        .inputFluids(Fluid.of("gtceu:chloroprene", 144))
        .outputFluids(Fluid.of("gtceu:neoprene", 144))
        .duration(400)
        .EUt(164)

    event.recipes.gtceu.polymerization_chamber("kubejs:polytherm_make")
        .notConsumable("1x thermal:lumium_dust")
        .inputFluids(Fluid.of("gtceu:therm", 144))
        .outputFluids(Fluid.of("gtceu:polytherm", 144))
        .duration(400)
        .EUt(164)

    //Petrothermal Goo Drilling Rig

    event.recipes.gtceu.petrothermal_goo_drilling_rig("kubejs:ptg_make")
        .notConsumable("1x thermal:slag")
        .outputFluids(Fluid.of("thermal:crude_oil", 72))
        .duration(8)
        .EUt(96)

    //Launch Pad
    event.recipes.gtceu.launch_pad("kubejs:eos_orbit")
        .itemInputs("kubejs:satellite_carrier_rocket", "kubejs:earth_observation_satellite")
        .inputFluids(Fluid.of("gtceu:rocket_fuel", 288))
        .itemOutputs("kubejs:satellite_position_card")
        .duration(2400)
        .EUt(320)

    //Data Receiver
    event.recipes.gtceu.data_receiver("kubejs:eos_data")
        .itemInputs("kubejs:satellite_position_card")
        .itemOutputs("kubejs:earth_data_card")
        .duration(240)
        .EUt(320)

    //Wind Generator
    event.recipes.gtceu.wind_generator("kubejs:wind_to_power")
        .notConsumable("gtceu:iron_rod")
        .duration(10)
        .EUt(-16)

    //Waterwheel
    event.recipes.gtceu.waterwheel("kubejs:waterwheel_make_power")
        .inputFluids(Fluid.of("minecraft:water", 16000))
        .duration(10)
        .EUt(-32)

    //Decay Generator
    event.recipes.gtceu.decay_generator("kubejs:dg_decay_the_uranium_now")
        .itemInputs("gtceu:uranium_235_rod")
        .itemOutputs("gtceu:lead_rod")
        .duration(120)
        .EUt(-32)
})