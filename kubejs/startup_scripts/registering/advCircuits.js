console.info('Hello, World! (Loaded startup scripts)')

//Moleculartronic processors!
//MTP zeptochip (LuV)
StartupEvents.registry('item', event => {
event.create('moleculartronic_processor_zeptochip')
    .displayName("Moleculartronic Processor Zeptochip")
    .texture("kubejs:item/circuit/moleculartronic_processor_zeptochip")
    .tag("gtceu:circuits/luv")})

//MTP (ZPM)
StartupEvents.registry('item', event => {
event.create('moleculartronic_processor')
    .displayName("Moleculartronic Processor")
    .texture("kubejs:item/circuit/moleculartronic_processor")
    .tag("gtceu:circuits/zpm")})

//MTP assembly (UV)
StartupEvents.registry('item', event => {
event.create('moleculartronic_processor_assembly')
    .displayName("Moleculartronic Processor Assembly")
    .texture("kubejs:item/circuit/moleculartronic_processor_assembly")
    .tag("gtceu:circuits/uv")})

//MTP supercomputer (UHV)
StartupEvents.registry('item', event => {
event.create('moleculartronic_processor_computer')
    .displayName("Moleculartronic Processor Supercomputer")
    .texture("kubejs:item/circuit/moleculartronic_processor_computer")
    .tag("gtceu:circuits/uhv")})

//MTP mainframe (UEV)
StartupEvents.registry('item', event => {
event.create('moleculartronic_processor_mainframe')
    .displayName("Moleculartronic Processor Mainframe")
    .texture("kubejs:item/circuit/moleculartronic_processor_mainframe")
    .tag("gtceu:circuits/uev")})


//Piston Mechanism (ULV) (Yes piston mechanism is in the advanced circuits script, because im not gonna make a new script just for it...)
StartupEvents.registry('item', event => {
event.create('pneumatic_mechanism')
    .displayName("Piston Mechanism")
    .texture("kubejs:item/pneumatic_mechanism")
    .tag("gtceu:circuits/ulv")})

//Aerospace Control processors!
//ACP (Sputnik Aerospace, SAS)
StartupEvents.registry('item', event => {
event.create('aerospace_control_processor')
    .displayName("Aerospace Control Processor")
    .texture("kubejs:item/circuit/aerospace_control_processor")
    .tag("gtceu:circuits/sas")})

//ACP assembly (Van Braun Aerospace, VBAS)
StartupEvents.registry('item', event => {
event.create('aerospace_control_processor_assembly')
    .displayName("Aerospace Control Processor Assembly")
    .texture("kubejs:item/circuit/aerospace_control_processor_assembly")
    .tag("gtceu:circuits/vbas")})

//ACP supercomputer (Argo Aerospace, ArAS)
StartupEvents.registry('item', event => {
event.create('aerospace_control_processor_computer')
    .displayName("Aerospace Control Processor Supercomputer")
    .texture("kubejs:item/circuit/aerospace_control_processor_computer")
    .tag("gtceu:circuits/aras")})

//ACP mainframe (Alcubierre Aerospace, AlAS)
StartupEvents.registry('item', event => {
event.create('aerospace_control_processor_mainframe')
    .displayName("Aerospace Control Processor Mainframe")
    .texture("kubejs:item/circuit/aerospace_control_processor_mainframe")
    .tag("gtceu:circuits/alas")})