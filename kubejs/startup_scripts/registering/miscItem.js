console.info('Hello, World! (Loaded startup scripts)')

Platform.mods.kubejs.name = 'DiggyFactory'
Platform.mods.minecraft.name = 'Take a guess buddy'

StartupEvents.registry('item', event => {
    event.create('animal_cage')
    .displayName("Animal Cage")
    .texture("kubejs:item/animal_cage")

    event.create('caged_pig')
    .displayName("Caged Pig")
    .texture("kubejs:item/caged_pig")

    event.create('caged_cow')
    .displayName("Caged Cow")
    .texture("kubejs:item/caged_cow")

    event.create('caged_sheep')
    .displayName("Caged Sheep")
    .texture("kubejs:item/caged_sheep")

    event.create('caged_chicken')
    .displayName("Caged Chicken")
    .texture("kubejs:item/caged_chicken")

    event.create('compressed_excavator_clay')
    .displayName("Compressed Excavator Clay")
    .texture("kubejs:item/compressed_excavator_clay")

    event.create('excavator_brick')
    .displayName("Excavator Brick")
    .texture("kubejs:item/excavator_brick")
})