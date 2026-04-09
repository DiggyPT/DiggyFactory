ItemEvents.tooltip(event => {
    //Moleculartronic processors
    event.addAdvanced('kubejs:moleculartronic_processor_zeptochip', (item, advanced, text) => {
     text.add(1, Text.gray('Making custom Molecules to do your Bidding'))
     text.add(2, Text.lightPurple('LuV-Tier Circuit'))
    })

    event.addAdvanced('kubejs:moleculartronic_processor', (item, advanced, text) => {
     text.add(1, Text.gray('Making custom Molecules to do your Bidding'))
     text.add(2, Text.lightPurple('ZPM-Tier Circuit'))
    })

    event.addAdvanced('kubejs:moleculartronic_processor_assembly', (item, advanced, text) => {
     text.add(1, Text.gray('Making custom Molecules to do your Bidding'))
     text.add(2, Text.lightPurple('UV-Tier Circuit'))
    })

    event.addAdvanced('kubejs:moleculartronic_processor_computer', (item, advanced, text) => {
     text.add(1, Text.gray('Making custom Molecules to do your Bidding'))
     text.add(2, Text.lightPurple('UHV-Tier Circuit'))
    })

    event.addAdvanced('kubejs:moleculartronic_processor_mainframe', (item, advanced, text) => {
     text.add(1, Text.gray('Making custom Molecules to do your Bidding'))
     text.add(2, Text.lightPurple('UEV-Tier Circuit'))
    })

    //Pneumatic mechanism
    event.addAdvanced('kubejs:pneumatic_mechanism', (item, advanced, text) => {
     text.add(1, Text.gray('Not a Circuit!'))
     text.add(2, Text.darkRed('ULV-Tier'))
    })

    //Aerospace control processors

    event.addAdvanced('kubejs:aerospace_control_processor', (item, advanced, text) => {
     text.add(1, Text.gray('Processing Orbital Trajectories'))
     text.add(2, Text.gray('SAS-Tier Circuit'))
    })

    event.addAdvanced('kubejs:aerospace_control_processor_assembly', (item, advanced, text) => {
     text.add(1, Text.gray('Processing Cislunar Trajectories'))
     text.add(2, Text.gray('VBAS-Tier Circuit'))
    })

    event.addAdvanced('kubejs:aerospace_control_processor_computer', (item, advanced, text) => {
     text.add(1, Text.gray('Processing Interplanetary Trajectories'))
     text.add(2, Text.gray('ArAS-Tier Circuit'))
    })

    event.addAdvanced('kubejs:aerospace_control_processor_mainframe', (item, advanced, text) => {
     text.add(1, Text.gray('Processing Interstellar Trajectories'))
     text.add(2, Text.gray('AlAS-Tier Circuit'))
    })

    //Inbetween circuits!!!
    //LMV
    //Decent electronic circuit
    event.addAdvanced('kubejs:decent_electronic_circuit', (item, advanced, text) => {
     text.add(1, Text.gray('Your first Intermediate Circuit'))
     text.add(2, Text.red('LMV-Tier'))
    })

     //Decent integrated circuit
    event.addAdvanced('kubejs:decent_integrated_circuit', (item, advanced, text) => {
     text.add(1, Text.gray('Smaller and more powerful'))
     text.add(2, Text.gold('LMV-Tier'))
    })

    /* //Program chip processor
    event.addAdvanced('kubejs:program_chip_processor', (item, advanced, text) => {
     text.add(1, Text.gray('A Superior Intermediate Circuit'))
     text.add(2, Text.yellow('LMV-Tier'))
    }) */

    //MHV
    //Improved integrated circuit
    event.addAdvanced('kubejs:improved_integrated_circuit', (item, advanced, text) => {
     text.add(1, Text.gray('Smaller and more powerful'))
     text.add(2, Text.gold('MHV-Tier'))
    }) /*

    //Microprocessor array
    event.addAdvanced('kubejs:microprocessor_array', (item, advanced, text) => {
     text.add(1, Text.gray('Amazing Computation Speed!'))
     text.add(2, Text.yellow('MHV-Tier'))
    })

    //HEV
    //Microprocessor system
    event.addAdvanced('kubejs:microprocessor_system', (item, advanced, text) => {
     text.add(1, Text.gray('Amazing Computation Speed!'))
     text.add(2, Text.yellow('HEV-Tier'))
    })

    //EIV
    //Microprocessor server
    event.addAdvanced('kubejs:microprocessor_server', (item, advanced, text) => {
     text.add(1, Text.gray('Amazing Computation Speed!'))
     text.add(2, Text.yellow('EIV-Tier'))
    })*/

    //Circuit components

    //Treated Circuit Board
    event.addAdvanced('kubejs:treated_circuit_board', (item, advanced, text) => {
     text.add(1, Text.gray('A Decent Board'))
    })

    //Treated Printed Circuit Board
    event.addAdvanced('kubejs:treated_printed_circuit_board', (item, advanced, text) => {
     text.add(1, Text.gray('A Decent Circuit Board'))
    })

    //Rectifier
    event.addAdvanced('kubejs:rectifier', (item, advanced, text) => {
     text.add(1, Text.gray('Basic Electronic Component'))
    })

    //Covellite
    event.addAdvanced('gtceu:raw_covellite', (item, advanced, text) => {
     text.add(1, Text.yellow('CuS'))
    })

    //Enargite
    event.addAdvanced('gtceu:raw_enargite', (item, advanced, text) => {
     text.add(1, Text.yellow('Cu₃AsS₄'))
    })

    //Baryte
    event.addAdvanced('gtceu:raw_baryte', (item, advanced, text) => {
     text.add(1, Text.yellow('BaSO₄'))
    })
    
    //SPACEFLIGHT
    //Earth observation satellite
    event.addAdvanced('kubejs:earth_observation_satellite', (item, advanced, text) => {
     text.add(1, Text.yellow('Collects Data from our world from Space'))
    })

    //Ore processing warning
    function addOreProcessingWarning(item, replacer) {
    event.addAdvanced(item, (item, advanced, text) => {
     text.add(2, Text.darkRed('Contrary to what is in the ore processing diagram, this is not a smelting result to the ore! It smelts to ' + replacer + '.'))
    })
    }

    addOreProcessingWarning('gtceu:covellite_dust', 'copper')
    addOreProcessingWarning('gtceu:enargite_dust', 'copper')

    //Deprecation warnings
    function addDeprecationTooltip(item) {
    event.addAdvanced(item, (item, advanced, text) => {
     text.add(2, Text.darkRed('This object has been disabled!').bold(true))
    })
    }

    //Backend warnings
    function addBackendTooltip(item) {
    event.addAdvanced(item, (item, advanced, text) => {
     text.add(2, Text.darkRed('This object is used behind the scenes and can´t be made normally!').bold(true))
    })
    }

    addDeprecationTooltip('create:mechanical_press')
    addDeprecationTooltip('create:mechanical_mixer')
    addDeprecationTooltip('create:millstone')
    addDeprecationTooltip('create:crushing_wheel')
    addDeprecationTooltip('create:encased_fan')
    addDeprecationTooltip('curvy_pipes:small_item_pipe')
    addDeprecationTooltip('curvy_pipes:small_fluid_pipe')
    addDeprecationTooltip('curvy_pipes:small_energy_pipe')
    addDeprecationTooltip('ae2:inscriber')
    addDeprecationTooltip('ae2:charger')
    addBackendTooltip('gtceu:signalum_ingot')
    addBackendTooltip('gtceu:signalum_gear')
    addBackendTooltip('gtceu:signalum_nugget')
    addBackendTooltip('gtceu:signalum_dust')
    addBackendTooltip('gtceu:signalum_block')
});