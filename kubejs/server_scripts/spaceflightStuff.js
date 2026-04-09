// priority: 0
ServerEvents.recipes(event => {
    //Earth observation satellite
    event.recipes.gtceu.assembler("kubejs:eos")
        .itemInputs("gtceu:hv_sensor", "2x gtceu:solar_panel", 'gtceu:mv_machine_hull', '2x #gtceu:circuits/hv', '4x gtceu:gold_single_cable', '2x gtceu:advanced_power_thruster')
        .inputFluids(Fluid.of("gtceu:white_dye", 288))
        .itemOutputs("kubejs:earth_observation_satellite")
        .duration(300)
        .EUt(480)

    //Rocket thruster
    event.recipes.gtceu.assembler("kubejs:rocket_thruster")
        .itemInputs("4x gtceu:double_red_steel_plate", "4x gtceu:red_steel_screw", '2x kubejs:aerospace_control_processor', '3x gtceu:advanced_power_thruster', '4x gtceu:gold_small_fluid_pipe', 'gtceu:hv_electric_motor', '2x gtceu:gold_simple_cable')
        .inputFluids(Fluid.of("gtceu:electrum", 288))
        .itemOutputs("kubejs:basic_rocket_thruster")
        .duration(300)
        .EUt(480)

    //Satellite carrying rocket
    event.recipes.gtceu.assembler("kubejs:satellite_carrier_rocket")
        .itemInputs("4x gtceu:spacefaring_steel_rod", "gtceu:double_spacefaring_steel_plate", 'gtceu:spacefaring_steel_plate', '8x gtceu:stainless_steel_plate', '2x gtceu:aluminium_frame', '3x kubejs:basic_rocket_thruster', '2x kubejs:aerospace_control_processor', '4x gtceu:cleanroom_glass')
        .inputFluids(Fluid.of("gtceu:polyvinyl_chloride", 288))
        .itemOutputs("kubejs:satellite_carrier_rocket")
        .duration(300)
        .EUt(480)

    //Niobium boue
    event.recipes.gtceu.electric_blast_furnace("kubejs:niobium_boule_make")
        .itemInputs("48x gtceu:silicon_dust", "4x gtceu:niobium_dust", '2x gtceu:small_gallium_arsenide_dust')
        .inputFluids(Fluid.of("gtceu:nitrogen", 4000))
        .itemOutputs("kubejs:niobium_doped_boule")
        .duration(12000)
        .EUt(480)
})