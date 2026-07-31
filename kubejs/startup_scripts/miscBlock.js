console.info('Hello, World! (Loaded startup scripts)')

//This is where the miscellaneous blocks are registered
//yep

let numbers8 = ["1", "2", "3", "4", "5", "6", "7", "8"]
let numbers5 = ["1", "2", "3", "4", "5"]

StartupEvents.registry('block', event => {
  event.create('geometry_bricks') // Create a new block
    .displayName('Geometry Bricks') // Set a custom name
    .soundType('stone') // Set a material (affects the sounds and some properties)
    .hardness(1.5) // Set hardness (affects mining time)
    .resistance(6.0) // Set resistance (to explosions, etc)
    //.tagBlock('my_custom_tag') // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock('my_namespace:my_other_tag') // Tag the block with `#my_namespace:my_other_tag`
    //.tagBlock('minecraft:mineable/axe') //can be mined faster with an axe
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    .tagBlock('minecraft:needs_stone_tool') // the tool tier must be at least iron

  /*event.create('gold_casing')
    .displayName('Gold Casing')
    .soundType('stone')
    .hardness(1.5)
    .resistance(6.0)
    .requiresTool(true)
    .tagBlock('create:casing')
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')*/

    event.create('excavator_bricks')
       .displayName('Excavator Bricks')
       .soundType('stone')
       .hardness(1.5)
       .resistance(6.0)
       .requiresTool(true)
       .tagBlock('minecraft:mineable/pickaxe')
       .tagBlock('minecraft:needs_stone_tool')

    //get noob
    event.create('bronze_plated_excavator_bricks')
       .displayName('Bronze-Plated Excavator Bricks')
       .soundType('stone')
       .hardness(3)
       .resistance(8.0)
       .requiresTool(true)
       .tagBlock('minecraft:mineable/pickaxe')
       .tagBlock('minecraft:needs_iron_tool')

    //hope this works lmao

    //conic casing
    event.create('conic_casing')
       .displayName('Conic Casing')
       .soundType('metal')
       .hardness(4)
       .resistance(8.0)
       .requiresTool(true)
       .tagBlock('minecraft:mineable/pickaxe')
       .tagBlock('minecraft:needs_iron_tool')

    //poly reaction casing
    event.create('poly_reaction_casing')
       .displayName('Poly Reaction Casing')
       .soundType('metal')
       .hardness(2)
       .resistance(4.0)
       .requiresTool(true)
       .tagBlock('minecraft:mineable/pickaxe')
       .tagBlock('minecraft:needs_iron_tool')

    //payload receiver tube
    event.create('payload_receiver_tube')
       .displayName('Payload Receiver Tube')
       .soundType('metal')
       .hardness(2)
       .resistance(4.0)
       .requiresTool(true)
       .tagBlock('minecraft:mineable/pickaxe')
       .tagBlock('minecraft:needs_iron_tool')

    //spaceflight casing
    event.create('spaceflight_casing')
       .displayName('Spaceflight Casing')
       .soundType('metal')
       .hardness(2)
       .resistance(4.0)
       .requiresTool(true)
       .tagBlock('minecraft:mineable/pickaxe')
       .tagBlock('minecraft:needs_iron_tool')

    //electromagnet casing
    event.create('electromagnet_casing')
       .displayName('Electromagnet Casing')
       .soundType('metal')
       .hardness(4)
       .resistance(8.0)
       .requiresTool(true)
       .tagBlock('minecraft:mineable/pickaxe')
       .tagBlock('minecraft:needs_iron_tool')

    //radiation collector
    event.create('radiation_collector')
       .displayName('Radiation Collector')
       .soundType('metal')
       .hardness(4)
       .resistance(8.0)
       .requiresTool(true)
       .tagBlock('minecraft:mineable/pickaxe')
       .tagBlock('minecraft:needs_iron_tool')

    numbers8.forEach(el_numero => {
        event.create('rainbow_flicker_light_' + el_numero)
       .displayName('Flickering Rainbow Light ' + el_numero)
       .soundType('metal')
       .hardness(4)
       .resistance(8.0)
       .requiresTool(true)
       .tagBlock('minecraft:mineable/pickaxe')
       .tagBlock('minecraft:needs_iron_tool')
    })

    numbers5.forEach(el_numero => {
       event.create('uns_flag_' + el_numero)
       .displayName('United Northamerican States Flag ' + el_numero)
       .soundType('metal')
       .hardness(4)
       .resistance(8.0)
       .requiresTool(true)
       .tagBlock('minecraft:mineable/pickaxe')
       .tagBlock('minecraft:needs_iron_tool')
    })
})