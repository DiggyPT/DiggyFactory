ServerEvents.recipes(event => {
    event.remove({ output: 'gtceu:neutron_reflector' })
	event.recipes.gtceu.assembler("kubejs:neutron_reflector_make")
        .itemInputs("gtceu:ruridit_plate", "4x gtceu:double_beryllium_plate", '2x gtceu:double_tungsten_carbide_plate', 'diggycore:neutron')
        .inputFluids(Fluid.of("gtceu:tin_alloy", 4608))
        .itemOutputs("gtceu:neutron_reflector")
        .duration(4000)
        .EUt(120)
})