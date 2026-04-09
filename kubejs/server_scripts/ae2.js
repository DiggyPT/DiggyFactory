// priority: 0
ServerEvents.recipes(event => {
    //replace ae2 certus with gt certus
    event.replaceInput(
     { input: 'ae2:certus_quartz_crystal' },
     'ae2:certus_quartz_crystal',
     '#forge:gems/certus_quartz')

    //PRESSES
    event.recipes.gtceu.forming_press("kubejs:crafting/logic_press")
        .itemInputs("gtceu:ilc_wafer", "2x gtceu:fine_gold_wire")
        .itemOutputs("ae2:logic_processor_press")
        .duration(80)
        .EUt(16)

    event.recipes.gtceu.forming_press("kubejs:crafting/calculation_press")
        .itemInputs("gtceu:ram_wafer", "2x gtceu:small_certus_quartz_dust")
        .itemOutputs("ae2:calculation_processor_press")
        .duration(80)
        .EUt(16)

    event.recipes.gtceu.forming_press("kubejs:crafting/engineering_press")
        .itemInputs("gtceu:cpu_wafer", "2x gtceu:diamond_plate")
        .itemOutputs("ae2:engineering_processor_press")
        .duration(80)
        .EUt(16)

    event.recipes.gtceu.forming_press("kubejs:crafting/silicon_press")
        .itemInputs("gtceu:ulpic_wafer", "2x gtceu:silicon_foil")
        .itemOutputs("ae2:silicon_press")
        .duration(80)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter("kubejs:crafting/charged_certus")
        .itemInputs('#forge:gems/certus_quartz', "2x gtceu:electrotine_dust")
        .itemOutputs("ae2:charged_certus_quartz_crystal")
        .duration(80)
        .EUt(16)

    event.remove({id:'ae2:transform/fluix_crystals'})
    event.recipes.gtceu.mixer("kubejs:crafting/fluix_dust")
        .itemInputs('#forge:dusts/certus_quartz', "minecraft:redstone", 'gtceu:nether_quartz_dust')
        .itemOutputs("2x ae2:fluix_dust")
        .duration(80)
        .EUt(16)

    event.recipes.gtceu.autoclave("kubejs:crafting/fluix_crystal")
        .itemInputs('ae2:fluix_dust')
        .inputFluids(Fluid.of("minecraft:water", 1000))
        .itemOutputs("ae2:fluix_crystal")
        .duration(200)
        .EUt(16)

    event.recipes.gtceu.forming_press("kubejs:crafting/printed_logic_processor")
        .notConsumable("ae2:logic_processor_press")
        .itemInputs("gtceu:gold_plate")
        .itemOutputs("ae2:printed_logic_processor")
        .duration(100)
        .EUt(20)

    event.recipes.gtceu.forming_press("kubejs:crafting/printed_calculation_processor")
        .notConsumable("ae2:calculation_processor_press")
        .itemInputs("gtceu:certus_quartz_plate")
        .itemOutputs("ae2:printed_calculation_processor")
        .duration(100)
        .EUt(20)

    event.recipes.gtceu.forming_press("kubejs:crafting/printed_engineering_processor")
        .notConsumable("ae2:engineering_processor_press")
        .itemInputs("gtceu:diamond_plate")
        .itemOutputs("ae2:printed_engineering_processor")
        .duration(100)
        .EUt(20)

    event.recipes.gtceu.circuit_assembler("kubejs:crafting/logic_processor")
        .itemInputs("gtceu:cpu_chip", "ae2:printed_logic_processor", "2x gtceu:red_alloy_bolt")
        .itemOutputs("ae2:logic_processor")
        .duration(200)
        .EUt(24)

    event.recipes.gtceu.circuit_assembler("kubejs:crafting/calculation_processor")
        .itemInputs("gtceu:cpu_chip", "ae2:printed_calculation_processor", "2x gtceu:red_alloy_bolt")
        .itemOutputs("ae2:calculation_processor")
        .duration(200)
        .EUt(24)

    event.recipes.gtceu.circuit_assembler("kubejs:crafting/engineering_processor")
        .itemInputs("gtceu:cpu_chip", "ae2:printed_engineering_processor", "2x gtceu:red_alloy_bolt")
        .itemOutputs("ae2:engineering_processor")
        .duration(200)
        .EUt(24)

    event.remove({id:'ae2:decorative/quartz_glass'})
    event.recipes.gtceu.alloy_smelter("kubejs:crafting/quartz_glass")
        .itemInputs("#forge:gems/certus_quartz", "minecraft:glass")
        .itemOutputs("2x ae2:quartz_glass")
        .duration(160)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter("kubejs:crafting/quartz_glass2")
        .itemInputs("#forge:dusts/certus_quartz", "minecraft:glass")
        .itemOutputs("2x ae2:quartz_glass")
        .duration(160)
        .EUt(16)

    event.remove({id:'ae2:materials/formationcore'})
    event.recipes.gtceu.circuit_assembler("kubejs:crafting/formation_core")
        .itemInputs("ae2:fluix_crystal", "ae2:logic_processor", "gtceu:certus_quartz_plate", "2x kubejs:rectifier")
        .itemOutputs("2x ae2:formation_core")
        .duration(180)
        .EUt(20)

    event.remove({id:'ae2:materials/annihilationcore'})
    event.recipes.gtceu.circuit_assembler("kubejs:crafting/annihilation_core")
        .itemInputs("ae2:fluix_crystal", "ae2:logic_processor", "gtceu:nether_quartz_plate", "2x gtceu:ram_chip")
        .itemOutputs("2x ae2:annihilation_core")
        .duration(180)
        .EUt(20)

    event.remove({id:'ae2:network/blocks/storagedrive'})
    event.shaped(
      Item.of('ae2:drive', 1),
        [
          'PCP',
          'FSF',
          'PCP'
        ],
        {
            C: 'ae2:engineering_processor',
            F: 'ae2:fluix_glass_cable',
            S: 'gtceu:hv_machine_casing',
            P: 'gtceu:iron_plate',
        }
    )

    event.remove({id:'ae2:network/parts/terminals'})
    event.shapeless(
     Item.of('ae2:terminal', 1),
     [
       'ae2:formation_core',
       '#ae2:illuminated_panel',
       'ae2:logic_processor',
       'ae2:annihilation_core',
       '#kubejs:circuits/mhv'
     ])

    event.remove({id:'ae2:network/blocks/energy_energy_acceptor'})
    event.shaped(
      Item.of('ae2:energy_acceptor', 1),
        [
          'PCP',
          'CMC',
          'PCP'
        ],
        {
            C: 'gtceu:copper_plate',
            M: 'gtceu:mv_energy_input_hatch',
            P: 'gtceu:wrought_iron_plate',
        }
    )
})