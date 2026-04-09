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

    event.create('marine')
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

    addExtensiveMaterialSet('dy', 'dysprosium', GTMaterialIconSet.METALLIC, '6cec04')
    addExtensiveMaterialSet('pr', 'praseodymium', GTMaterialIconSet.METALLIC, 'b7a9b3')
    addExtensiveMaterialSet('pa', 'protactinium', GTMaterialIconSet.METALLIC, '6600ff')
    addBasicMaterialSet('np', 'neptunium', GTMaterialIconSet.SHINY, '3a64e4')
    addBasicMaterialSet('sc', 'scandium', GTMaterialIconSet.METALLIC, 'c35555')
    addBasicMaterialSet('ge', 'germanium', GTMaterialIconSet.DULL, '9da8be')
    addBasicMaterialSet('se', 'selenium', 'noisy', 'a7dbec')
    addBasicMaterialSet('te', 'tellurium', GTMaterialIconSet.SHINY, '009900')
    addBasicMaterialSet('gd', 'gadolinium', GTMaterialIconSet.DULL, 'c19f15')
    addBasicMaterialSet('tb', 'terbium', GTMaterialIconSet.DULL, 'dfb8ff')
    addBasicMaterialSet('rb', 'rubidium', 'noisy', '800000')
    addBasicMaterialSet('re', 'rhenium', GTMaterialIconSet.METALLIC, 'ccffff')
    addBasicMaterialSet('sr', 'strontium', GTMaterialIconSet.BRIGHT, 'ff9900')
    addBasicMaterialSet('zr', 'zirconium', GTMaterialIconSet.BRIGHT, '66ffff')
    addBasicMaterialSet('tl', 'thallium', GTMaterialIconSet.BRIGHT, 'ff6666')
    addBasicMaterialSet('po', 'polonium', GTMaterialIconSet.BRIGHT, 'db2498')
    addBasicMaterialSetSec('ra', 'radium', GTMaterialIconSet.METALLIC, '00ff00', 'ffff80')
    addBasicMaterialSet('tc', 'technetium', GTMaterialIconSet.METALLIC, '687787')
    addBasicMaterialSet('hf', 'hafnium', GTMaterialIconSet.SHINY, 'bf94eb')
    addBasicMaterialSet('ta', 'tantalum', GTMaterialIconSet.DULL, '8a995c')
    //Buncha Lanthanides and actinides
    addBasicMaterialSet('ac', 'actinium', GTMaterialIconSet.METALLIC, '684c31')
    addBasicMaterialSet('cm', 'curium', GTMaterialIconSet.SHINY, '60e1b6')
    addBasicMaterialSet('bk', 'berkelium', GTMaterialIconSet.SHINY, '00a0a0')
    addBasicMaterialSet('cf', 'californium', GTMaterialIconSet.BRIGHT, 'cc0099')
    addBasicMaterialSet('ho', 'holmium', GTMaterialIconSet.SHINY, 'f77eb2')
    addBasicMaterialSet('er', 'erbium', 'noisy', '45a2c9')
    addBasicMaterialSet('tm', 'thulium', GTMaterialIconSet.METALLIC, '4729bc')
    addBasicMaterialSet('yb', 'ytterbium', 'noisy', 'ffea00')
    addBasicMaterialSet('es', 'einsteinium', GTMaterialIconSet.DULL, '44cf7a')
    addBasicMaterialSet('fm', 'fermium', GTMaterialIconSet.BRIGHT, 'ffe5b8')
    addBasicMaterialSet('md', 'mendelevium', GTMaterialIconSet.METALLIC, '2600e6')
    addBasicMaterialSet('no', 'nobelium', GTMaterialIconSet.SHINY, 'ff2600')
    addBasicMaterialSet('lr', 'lawrencium', GTMaterialIconSet.DULL, 'c185ae')
    addBasicMaterialSet('pm', 'promethium', GTMaterialIconSet.BRIGHT, '006600')
    //Superheavy elements (period 7)
    addBasicMaterialSet('rf', 'rutherfordium', GTMaterialIconSet.DULL, '336699')
    addBasicMaterialSet('db', 'dubnium', GTMaterialIconSet.BRIGHT, 'ed7f35')
    addBasicMaterialSet('sg', 'seaborgium', GTMaterialIconSet.SHINY, '32afb8')
    addBasicMaterialSet('bh', 'bohrium', GTMaterialIconSet.DULL, 'df944e')
    addBasicMaterialSet('hs', 'hassium', 'noisy', '8db4a2')
    addBasicMaterialSet('mt', 'meitnerium', GTMaterialIconSet.SHINY, '73e864')
    addBasicMaterialSet('rg', 'roentgenium', GTMaterialIconSet.SHINY, '48445a')
    addBasicMaterialSet('cn', 'copernicium', GTMaterialIconSet.BRIGHT, 'b7fa00')
    addBasicMaterialSet('nh', 'nihonium', GTMaterialIconSet.METALLIC, '9a7474')
    addBasicMaterialSet('fl', 'flerovium', GTMaterialIconSet.DULL, 'c05959')
    addBasicMaterialSet('mc', 'moscovium', GTMaterialIconSet.BRIGHT, 'd5624d')
    addBasicMaterialSet('lv', 'livermorium', GTMaterialIconSet.METALLIC, 'e77d36')
    addBasicMaterialSet('ts', 'tennessine', GTMaterialIconSet.BRIGHT, 'f5c724')
    addDust('fr', 'francium', GTMaterialIconSet.GLASS, '0000cc')
    addDust('at', 'astatine', GTMaterialIconSet.FINE, '034f03')
    addFluid('og', 'oganesson', 'db2424')
    
    //Crescides, superactinides and megaheavy elements (period 8)
    addExtensiveMaterialSet('Ao', 'armstrongium', GTMaterialIconSet.BRIGHT, '339966')
    addBasicMaterialSet('Hw', 'hawkine', GTMaterialIconSet.SHINY, '6dcab3')
    addBasicMaterialSet('Kp', 'keplerum', GTMaterialIconSet.DULL, 'cc9900')
    addBasicMaterialSet('Bv', 'belusovium', GTMaterialIconSet.METALLIC, 'f0583d')

    //naquide elements (period 9)
    addExtensiveMaterialSet('Fn', 'feynmanium', GTMaterialIconSet.METALLIC, '9999ff')
})