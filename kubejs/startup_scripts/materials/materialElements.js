console.info('Hello, World! (Loaded startup scripts)')

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('noisy')
        .parent('metallic')

    event.create('signalum')
        .parent('metallic')

    event.create('lumium')
        .parent('metallic')

    event.create('enderium')
        .parent('metallic')

    event.create('cinder_flour')
        .parent('metallic')

    event.create('chocolate')
        .parent('metallic')
})

GTCEuStartupEvents.registry('gtceu:material', event => {

    //function to add a lot of stuff to elements
    function addExtensiveMaterialSet(symbol, name, iconset, hexcode, secHex) {
    event.create(symbol + '_element')
        .ingot()
        .components('1x ' + name)
        .color('0x' + hexcode).iconSet(iconset)
        /*if (secHex != null) {
            .secondaryColor('0x' + secHex)
        }*/
        //^i removed this because it doesnt work lol
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_SPRING_SMALL, GTMaterialFlags.GENERATE_ROD)
        .liquid()
    }

    //function to add a lil stuff to elements
    function addBasicMaterialSet(symbol, name, iconset, hexcode, secHex) {
    event.create(symbol + '_element')
        .ingot()
        .components('1x ' + name)
        .color('0x' + hexcode).iconSet(iconset)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
        .liquid()
    }

    //function to add a lil stuff to elements + secondary colour
    function addBasicMaterialSetSec(symbol, name, iconset, hexcode, secHex) {
    event.create(symbol + '_element')
        .ingot()
        .components('1x ' + name)
        .color('0x' + hexcode).iconSet(iconset)
        .secondaryColor('0x' + secHex)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
        .liquid()
    }

    //function to make dust elements
    function addDust(symbol, name, iconset, hexcode, secHex) {
    event.create(symbol + '_element')
        .dust()
        .components('1x ' + name)
        .color('0x' + hexcode).iconSet(iconset)
        .liquid()
    }

    //(read this like its a verse from jibjab 2008 year in review)
    //(only works if you pronounce element as rhyming with fuck)
    /*THIS FUNCTION WILL CREATE
    A LIQUID ELEMENT
    IF IT JUST DOES NOT DAMN WORK
    THEN I DONT GIVE A FUCK!*/
    function addFluid(symbol, name, hexcode) {
    event.create(symbol + '_element')
        .liquid()
        .components('1x ' + name)
        .color('0x' + hexcode)
    }
})