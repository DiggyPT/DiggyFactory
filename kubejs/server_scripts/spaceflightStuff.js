// priority: 0
ServerEvents.recipes(event => {
    //Earth observation satellite
    event.recipes.gtceu.assembler("kubejs:eos")
        .itemInputs("gtceu:hv_sensor", "2x gtceu:solar_panel", 'gtceu:mv_machine_hull', '2x #gtceu:circuits/hv', '4x gtceu:gold_single_cable', '2x gtceu:advanced_power_thruster')
        .inputFluids(Fluid.of("gtceu:white_dye", 288))
        .itemOutputs("kubejs:earth_observation_satellite")
        .duration(300)
        .EUt(480)

    /*//Rocket thruster
    event.recipes.gtceu.assembler("kubejs:rocket_thruster")
        .itemInputs("4x gtceu:double_red_steel_plate", "4x gtceu:red_steel_screw", '2x kubejs:aerospace_control_processor', '3x gtceu:advanced_power_thruster', '4x gtceu:gold_small_fluid_pipe', 'gtceu:hv_electric_motor', '2x gtceu:gold_simple_cable')
        .inputFluids(Fluid.of("gtceu:electrum", 288))
        .itemOutputs("kubejs:basic_rocket_thruster")
        .duration(300)
        .EUt(480)*/

    //Satellite carrying rocket
    event.recipes.gtceu.assembler("kubejs:satellite_carrier_rocket")
        .itemInputs("4x gtceu:spacefaring_steel_rod", "gtceu:double_spacefaring_steel_plate", 'gtceu:spacefaring_steel_plate', '8x gtceu:stainless_steel_plate', '2x gtceu:aluminium_frame', '3x kubejs:basic_rocket_thruster', '2x kubejs:aerospace_control_processor', '4x gtceu:cleanroom_glass')
        .inputFluids(Fluid.of("gtceu:polyvinyl_chloride", 288))
        .itemOutputs("kubejs:satellite_carrier_rocket")
        .duration(300)
        .EUt(480)

    //Niobium boule
    event.recipes.gtceu.electric_blast_furnace("kubejs:niobium_boule_make")
        .itemInputs("48x gtceu:silicon_dust", "4x gtceu:niobium_dust", '2x gtceu:small_gallium_arsenide_dust')
        .inputFluids(Fluid.of("gtceu:nitrogen", 4000))
        .itemOutputs("kubejs:niobium_doped_boule")
        .duration(12000)
        .EUt(480)
        .blastFurnaceTemp(2000)

    //Niobium Wafers
    event.recipes.gtceu.cutter("kubejs:niobium_wafer_make")
        .itemInputs('kubejs:niobium_doped_boule')
        .itemOutputs("kubejs:niobium_doped_wafer")
        .duration(400)
        .EUt(360)

    //Niobium Wafers
    event.recipes.gtceu.laser_engraver("kubejs:niobium_processing_wafer_make")
        .itemInputs('kubejs:niobium_doped_wafer')
        .notConsumable('gtceu:magenta_glass_lens')
        .itemOutputs("kubejs:space_grade_processing_wafer")
        .duration(900)
        .EUt(120)

    //Niobium Chip
    event.recipes.gtceu.cutter("kubejs:niobium_processing_chip_make")
        .itemInputs('kubejs:space_grade_processing_wafer')
        .itemOutputs("8x kubejs:space_grade_processing_chip")
        .duration(900)
        .EUt(120)

    //Aerospace control processor
    event.recipes.gtceu.circuit_assembler("kubejs:aerospace_control_processor")
        .itemInputs("gtceu:plastic_printed_circuit_board", "kubejs:space_grade_processing_chip", '2x ae2:logic_processor', '4x #gtceu:capacitors', '4x kubejs:rectifier', '4x gtceu:fine_cobalt_wire')
        .itemOutputs("2x kubejs:aerospace_control_processor")
        .duration(300)
        .EUt(480)

    //Spacefaring Steel
    event.recipes.gtceu.mixer("kubejs:spacefaring_steel")
        .itemInputs('6x gtceu:iron_dust', 'gtceu:cobalt_dust', '2x gtceu:aluminium_dust', 'gtceu:nickel_dust')
        .itemOutputs("8x gtceu:spacefaring_steel_dust")
        .duration(300)
        .EUt(480)

    //Spaceflight casing
    event.recipes.gtceu.assembler("kubejs:spaceflight_casing")
        .itemInputs("2x gtceu:spacefaring_steel_frame", "kubejs:space_grade_processing_chip", 'gtceu:clean_machine_casing', '3x gtceu:silver_single_cable')
        .inputFluids(Fluid.of("gtceu:polytherm", 288))
        .itemOutputs("4x kubejs:spaceflight_casing")
        .duration(300)
        .EUt(480)

    //Launch Pad
    event.remove({output: 'ad_astra:launch_pad'})
    event.recipes.gtceu.assembler("kubejs:launch_pad")
        .itemInputs("8x diggycore:heavy_duty_plating_tier_1_plate", "16x gtceu:double_iron_plate")
        .itemOutputs("ad_astra:launch_pad")
        .duration(400)
        .EUt(480)

    // Rockets
    //YOOOO THX MONIFACTORY DEVS
    event.remove({ id: /nasa_workbench/ })
    const rocket = [
        ["tier_1_rocket", "steel", "heavy_duty_plating_tier_1"],
        ["tier_2_rocket", "desh", "heavy_duty_plating_tier_2"],
        ["tier_3_rocket", "ostrum", "heavy_duty_plating_tier_3"],
        ["tier_4_rocket", "calorite", "heavy_duty_plating_tier_4"],
    ]

    rocket.forEach(([rocket, tier, platematerial]) => {
        event.custom({
            "type": "ad_astra:nasa_workbench",
            "ingredients": [
                {
                    "item": "ad_astra:rocket_nose_cone"
                },
                {
                    "item": `diggycore:${platematerial}_plate`
                },
                {
                    "item": `diggycore:${platematerial}_plate`
                },
                {
                    "item": `diggycore:${platematerial}_plate`
                },
                {
                    "item": `diggycore:${platematerial}_plate`
                },
                {
                    "item": `diggycore:${platematerial}_plate`
                },
                {
                    "item": `diggycore:${platematerial}_plate`
                },
                {
                    "item": "ad_astra:rocket_fin"
                },
                {
                    "item": `ad_astra:${tier}_tank`
                },
                {
                    "item": `ad_astra:${tier}_tank`
                },
                {
                    "item": "ad_astra:rocket_fin"
                },
                {
                    "item": "ad_astra:rocket_fin"
                },
                {
                    "item": `ad_astra:${tier}_engine`
                },
                {
                    "item": "ad_astra:rocket_fin"
                }
            ],
            "result": {
                "count": 1,
                "id": `ad_astra:${rocket}`
            }
        })
    })

    //Steel engine
    event.remove({output: 'ad_astra:steel_engine'})
    event.recipes.gtceu.assembler("kubejs:steel_engine_make")
        .itemInputs("1x gtceu:steel_frame", "4x gtceu:mv_electric_motor", "2x diggycore:heavy_duty_plating_tier_1_rod")
        .itemOutputs("ad_astra:steel_engine")
        .duration(200)
        .EUt(480)

    //NASA Workbench
    event.remove({output: 'ad_astra:nasa_workbench'})
    event.recipes.gtceu.assembler("kubejs:nasa_workbench")
        .itemInputs("1x gtceu:ev_assembler", "2x gtceu:hv_robot_arm", "4x diggycore:heavy_duty_plating_tier_1_plate", "1x gtceu:spacefaring_steel_gear", "4x kubejs:aerospace_control_processor")
        .itemOutputs("ad_astra:nasa_workbench")
        .duration(200)
        .EUt(480)

    //Steel fin
    event.remove({output: 'ad_astra:rocket_fin'})
    event.recipes.gtceu.assembler("kubejs:rocket_fin_make")
        .itemInputs("6x diggycore:heavy_duty_plating_tier_1_plate", "3x diggycore:double_heavy_duty_plating_tier_1_plate", "4x gtceu:spacefaring_steel_rod")
        .itemOutputs("ad_astra:rocket_fin")
        .duration(200)
        .EUt(480)

    //Gas tank
    event.remove({ output: 'ad_astra:gas_tank' })
    event.shaped(
    Item.of('ad_astra:gas_tank', 1),
       [
         'R ',
         'SH',
         'HH'
       ],
       {
           R: 'diggycore:heavy_duty_plating_tier_1_rod',
           S: 'gtceu:lv_super_tank',
           H: 'diggycore:heavy_duty_plating_tier_1_plate'
        }
    )

    //Large gas tank
    event.remove({ output: 'ad_astra:large_gas_tank' })
    event.shaped(
    Item.of('ad_astra:large_gas_tank', 1),
       [
         'PRP',
         'HGH',
         'HGH'
       ],
       {
           R: 'diggycore:heavy_duty_plating_tier_1_rod',
           G: 'ad_astra:gas_tank',
           H: 'diggycore:heavy_duty_plating_tier_1_plate',
           P: 'kubejs:aerospace_control_processor'
        }
    )
})