console.info('Hello, World! (Loaded startup scripts)')

GTCEuStartupEvents.registry('gtceu:material', event => {
    //ATP
    event.create('atp')
        .liquid()
        .components('10x carbon', '16x hydrogen', '5x nitrogen', '13x oxygen', '3x phosphorus') //C10H16N5O13P3
        .color('0xdde330')

    //ADP
    event.create('adp')
        .liquid()
        .components('10x carbon', '15x hydrogen', '5x nitrogen', '19x oxygen', '2x phosphorus') //C10H15N5O10P2
        .color('0xe3bf30')

    //NADPH
    event.create('nadph')
        .liquid()
        .components('21x carbon', '29x hydrogen', '7x nitrogen', '17x oxygen', '3x phosphorus') //C21H29N7O17P3
        .color('0x308ce3')

    //NADP+
    event.create('nadp_mais')
        .liquid()
        .components('21x carbon', '28x hydrogen', '7x nitrogen', '17x oxygen', '3x phosphorus') //C21H28N7O17P3
        .color('0x103ee6')

    //RuBP
    event.create('rubp')
        .liquid()
        .components('5x carbon', '12x hydrogen', '11x oxygen', '2x phosphorus') //C5H12O11P2
        .color('0xd97ea5')

    //3-PGA
    event.create('3_pga')
        .liquid()
        .components('3x carbon', '7x hydrogen', '7x oxygen', '1x phosphorus') //C3H7O7P
        .color('0xc96783')

    //1,3-BPG
    event.create('1_3_bpg')
        .liquid()
        .components('3x carbon', '8x hydrogen', '10x oxygen', '2x phosphorus') //C3H8O10P2
        .color('0xba5468')

    //PGAL
    event.create('pgal')
        .liquid()
        .components('3x carbon', '7x hydrogen', '6x oxygen', '1x phosphorus') //C3H7O6P
        .color('0xa84040')

    //Glucose
    event.create('glucose')
        .dust()
        .components('6x carbon', '12x hydrogen', '6x oxygen') //C6H12O6
        .color(0xdedace).iconSet('rough')

    //H+
    event.create('h_plus')
        .liquid()
        .components('1x hydrogen') //uhhh
        .color('0x7b7fc9')

    //Organics Extraction Fluid
    event.create('organics_extraction_fluid')
        .liquid()
        .color(0xc2c738)
})