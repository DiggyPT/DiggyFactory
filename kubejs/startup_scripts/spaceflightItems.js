console.info('Hello, World! (Loaded startup scripts)')

Platform.mods.kubejs.name = 'DiggyFactory'
Platform.mods.minecraft.name = 'Take a guess buddy'

StartupEvents.registry('item', event => {
    event.create('earth_observation_satellite')
    .displayName("Earth Observation Satellite")
    .texture("kubejs:item/space/eos")

    event.create('basic_rocket_thruster')
    .displayName("Basic Rocket Thruster")
    .texture("kubejs:item/space/basic_rocket_thruster")

    event.create('satellite_carrier_rocket')
    .displayName("Satellite Carrier Rocket")
    .texture("kubejs:item/space/satellite_carrier_rocket")

    event.create('satellite_position_card')
    .displayName("Satellite Position Card")
    .texture("kubejs:item/space/satellite_position_card")

    event.create('earth_data_card')
    .displayName("Earth Data Card")
    .texture("kubejs:item/space/earth_data_card")

    event.create('niobium_doped_boule')
    .displayName("Niobium-doped Monocrystalline Silicon Boule")
    .texture("kubejs:item/circuit_components/niobium_doped_boule")

    event.create('niobium_doped_wafer')
    .displayName("Niobium-doped Wafer")
    .texture("kubejs:item/circuit_components/niobium_doped_wafer")

    event.create('space_grade_processing_wafer')
    .displayName("Space-Grade Processing Wafer")
    .texture("kubejs:item/circuit_components/space_grade_processing_wafer")

    event.create('space_grade_processing_chip')
    .displayName("Space-Grade Processing Chip")
    .texture("kubejs:item/circuit_components/space_grade_processing_chip")
})