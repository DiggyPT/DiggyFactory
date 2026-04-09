console.info('Hello, World! (Loaded startup scripts)')

GTCEuStartupEvents.registry('gtceu:material', event => {

    //CMSA
    event.create('conductive_mixed_salts_alloy')
        .ingot()
        .components('1x salt', '1x rock_salt', '1x redstone', '1x iron')
        .color(0x9b5050).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)
        .cableProperties(32, 1, 0, true) //voltage, amperage, loss per block, is superconductor

    //CMSC
    event.create('conductive_mixed_salts_compound')
        .dust()
        .components('1x salt', '1x rock_salt', '1x redstone')
        .color(0xbf4545).iconSet(GTMaterialIconSet.METALLIC)

    //Ceramic steel
    event.create('ceramic_steel')
        .ingot()
        .liquid()
        .components('1x brick', '1x iron')
        .color(0xb2875c).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FRAME)

    event.create('phillips_catalyst')
        .dust()
        .components('1x chromium_trioxide', '2x silicon')
        .color(0x77577f).iconSet(GTMaterialIconSet.METALLIC)

    event.create('chloroprene')
        .liquid()
        .components('1x butadiene', '1x chlorine')
        .color('0x00cc99')
    
    event.create('neoprene')
        .ingot()
        .liquid().iconSet(GTMaterialIconSet.ROUGH)
        .components('1x butadiene', '1x chlorine')
        .color('0x00e070')

    event.create('potassium_persulfate')
        .dust()
        .components('2x potassium', '2x sulfur', '8x oxygen')
        .color(0xffccff).iconSet(GTMaterialIconSet.FINE)

    event.create('potassium_bisulfate')
        .dust()
        .components('1x potassium', '1x hydrogen', '1x sulfur', '4x oxygen')
        .color(0xff99cc).iconSet(GTMaterialIconSet.FINE)

    event.create('potassium_chloride')
        .dust()
        .components('1x potassium', '1x chlorine')
        .color(0xff9999).iconSet(GTMaterialIconSet.FINE)

    //Signalum
    event.create('signalum')
        .ingot()
        .liquid()
        .components('3x copper', '1x silver', '4x redstone')
        .color(0xffffff).iconSet('signalum')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)

    //Lumium
    event.create('lumium')
        .ingot()
        .liquid()
        .components('3x tin', '1x silver', '2x glowstone')
        .color(0xffffff).iconSet('lumium')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)

    //Enderium
    event.create('enderium')
        .ingot()
        .liquid()
        .components('3x lead', '1x diamond', '2x ender_pearl')
        .color(0xffffff).iconSet('enderium')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)

    //Galvanized Steel
    event.create('galvanized_steel')
        .ingot()
        .liquid()
        .components('1x steel', '1x zinc')
        .color(0x708feb).iconSet('marine')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FRAME)

    //Cinder flour
    event.create('cinder_flour')
        .dust()
        .components('8x sulfur', '2x carbon', '1x gold')
        .color(0xffffff).iconSet('cinder_flour')

    //Chocolate
    event.create('chocolate')
        .ingot()
        //.components('8x sulfur', '2x carbon', '1x gold')
        .color(0xffffff).iconSet('chocolate')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)

    //Spacefaring Steel
    event.create('spacefaring_steel')
        .ingot()
        .liquid()
        .components('6x steel', '1x cobalt', '2x aluminium', '1x nickel')
        .color(0xea1f1f).iconSet('marine')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FRAME)

    //Polytherm
    event.create('polytherm')
        .ingot()
        .liquid().iconSet(GTMaterialIconSet.ROUGH)
        .components('3x sulfur', '4x carbon', '1x copper', '2x sodium')
        .color('0x00e6b8')

    //Therm
    event.create('therm')
        .liquid()
        .components('3x sulfur', '4x carbon', '1x copper', '2x sodium')
        .color('0x00c3d1')

    //Thermal Mixture
    event.create('thermal_mixture')
        .liquid()
        .components('3x sulfur', '1x oxygen', '4x carbon', '1x copper')
        .color('0x4669d2')

    //Silicon Germanium
    event.create('silicon_germanium')
        .dust()
        .components('1x silicon', '1x germanium')
        .color(0x6c7480).iconSet('metallic')
})