console.info('Hello, World! (Loaded startup scripts)')

StartupEvents.registry('item', event => {

    //Electronic circuits (only one new)
    //Decent electronic circuit
    event.create('decent_electronic_circuit')
      .displayName("Decent Electronic Circuit")
      .texture("kubejs:item/circuit/decent_electronic_circuit")
      .tag("kubejs:circuits/lmv")

    //Integrated circuits
    //Decent integrated circuit
    event.create('decent_integrated_circuit')
       .displayName("Decent Integrated Circuit")
       .texture("kubejs:item/circuit/decent_integrated_circuit")
       .tag("kubejs:circuits/lmv")

    //Improved integrated circuit
    event.create('improved_integrated_circuit')
       .displayName("Improved Integrated Circuit")
       .texture("kubejs:item/circuit/improved_integrated_circuit")
       .tag("kubejs:circuits/mhv")

    //Microprocessors
    /*event.create('program_chip_processor')
      .displayName("Program Chip Processor")
      .texture("kubejs:item/circuit/program_chip_processor")
      .tag("kubejs:circuits/lmv")

    event.create('microprocessor_array')
      .displayName("Microprocessor Array")
      .texture("kubejs:item/circuit/microprocessor_array")
      .tag("kubejs:circuits/mhv")

    event.create('microprocessor_system')
      .displayName("Microprocessor System")
      .texture("kubejs:item/circuit/microprocessor_system")
      .tag("kubejs:circuits/hev")

    event.create('microprocessor_server')
      .displayName("Microprocessor Server")
      .texture("kubejs:item/circuit/microprocessor_server")
      .tag("kubejs:circuits/eiv")
    lol change of plans*/
})