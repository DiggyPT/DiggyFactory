ItemEvents.tooltip(event => {
    function addTooltip(voltage, machine, tip) { //this one is for gregtech machines.
        event.addAdvanced('gtceu:' + voltage + '_' + machine, (item, advanced, text) => {
         text.add(1, Text.gray(tip))
        })
    }

    function addTooltipDC(voltage, machine, tip) { //this one is for diggycore machines.
        event.addAdvanced('diggycore:' + voltage + '_' + machine, (item, advanced, text) => {
         text.add(1, Text.gray(tip))
        })
    }

    //DC at the end: for DiggyCore machines
    function addAdvTooltips(machine, adv1, adv2) {
        addTooltip('uhv', machine, adv1)
        addTooltip('uev', machine, adv1)
        addTooltip('uiv', machine, adv2)
        addTooltip('uxv', machine, adv2)
        addTooltip('opv', machine, adv2)
    }

    function addAdvTooltipsDC(machine, adv1, adv2) {
        addTooltipDC('uhv', machine, adv1)
        addTooltipDC('uev', machine, adv1)
        addTooltipDC('uiv', machine, adv2)
        addTooltipDC('uxv', machine, adv2)
        addTooltipDC('opv', machine, adv2)
    }

    function addGeneralTooltips(machine, basic1, basic2, adv1, adv2) {
        addTooltip('lv', machine, basic1)
        addTooltip('mv', machine, basic1)
        addTooltip('hv', machine, basic1)
        addTooltip('ev', machine, basic1)
        addTooltip('iv', machine, basic2)
        addTooltip('luv', machine, basic2)
        addTooltip('zpm', machine, basic2)
        addTooltip('uv', machine, adv1)
        addAdvTooltips(machine, adv1, adv2)
    }

    function addGeneralTooltipsDC(machine, basic1, basic2, adv1, adv2) {
        addTooltipDC('lv', machine, basic1)
        addTooltipDC('mv', machine, basic1)
        addTooltipDC('hv', machine, basic1)
        addTooltipDC('ev', machine, basic1)
        addTooltipDC('iv', machine, basic2)
        addTooltipDC('luv', machine, basic2)
        addTooltipDC('zpm', machine, basic2)
        addTooltipDC('uv', machine, adv1)
        addAdvTooltipsDC(machine, adv1, adv2)
    }

    addAdvTooltips('electric_furnace', 'Atom Stimulator', 'Kinetic Exciter')
    addAdvTooltips('alloy_smelter', 'Metal Amalgamator', 'Atom Superimposer')
    addAdvTooltips('arc_furnace', 'Short Circuit Heater', 'Who needs a Rotary Hearth Furnace?')
    addAdvTooltips('assembler', 'Assembly Constructor', 'Ultimate Workbench')
    addAdvTooltips('autoclave', 'Encumbrance Unit', 'Reverse Macerator')
    addAdvTooltips('bender', 'Matter Deformer', 'Everything Squisher')
    addAdvTooltips('brewery', 'Brew Rusher', 'Give me a Drink, Bartender')
    addAdvTooltips('canner', 'Can Actuator', 'Just get in there already!')
    addAdvTooltips('centrifuge', 'Molecular Tornado', 'Molecular Catastrophe')
    addAdvTooltips('chemical_bath', 'Chemical Dunktron', 'Chemical Swimming Pool')
    addAdvTooltips('chemical_reactor', 'Reaction Catalyzer', 'Forcing Chemicals to react with each other')
    addAdvTooltips('compressor', 'Matter Constrictor', 'Universal Compactor')
    addAdvTooltips('cutter', 'Object Divider', 'Omni Separator')
    addAdvTooltips('distillery', 'Fraction Splitter', 'Fluid Segregator')
    addAdvTooltips('electrolyzer', 'Atomic Ionizer', 'Parter of the Seas')
    addAdvTooltips('electromagnetic_separator', 'EMF Dispeller', 'Electroweak Exploiter')
    addAdvTooltips('extractor', 'Liquefying Sucker', 'Omega Melter')
    addAdvTooltips('extruder', 'Shape Driver', 'Geometry Applicator')
    addAdvTooltips('fermenter', 'Respiration Controller', 'Do you really need this much Fermented Biomass?')
    addAdvTooltips('fluid_heater', 'Thermal Imbuer', 'Big Heaty')
    addAdvTooltips('fluid_solidifier', 'Fluid Petrificator', 'Mega Caster')
    addAdvTooltips('forge_hammer', 'Impact Modulator', 'Absolute Smasher')
    addAdvTooltips('forming_press', 'Surface Shifter', 'Super Stamper')
    addAdvTooltips('lathe', 'Rotation Grinder', 'Rotary Deformer')
    addAdvTooltips('scanner', 'Electron Microscope', 'Quark Viewer')
    addAdvTooltips('mixer', 'Matter Homogenizer', 'It WILL Blend')
    addAdvTooltips('ore_washer', 'Miniature Car Wash', 'Miniature Tank Wash')
    addAdvTooltips('packer', 'Amazon Warehouse', 'Warehouse Supercomplex')
    addAdvTooltips('polarizer', 'Magnetic Field Rearranger', 'Electron Manipulator')
    addAdvTooltips('laser_engraver', 'Exact Photon Cannon', 'Photon Mass Driver')
    addAdvTooltips('sifter', 'Pulsation Filter', 'Mass Filtration Apparatus')
    addAdvTooltips('thermal_centrifuge', 'Fire Cyclone', 'Industrial Venus')
    addAdvTooltips('wiremill', 'Wire Transfigurator', 'Super Strecher')
    addAdvTooltips('circuit_assembler', 'Computation Factory', 'IBM Factory')
    addAdvTooltips('macerator', 'Shape Eliminator', 'And to dust we shall return')

    addGeneralTooltipsDC('apiary', 'This isn´t Forestry...', 'Bee City', 'Bee Metropolis', 'Bee Ecumenopolis')
    addGeneralTooltips('bio_reactor', 'Biochemistry is Fun!', 'Genetic Modulator', 'Game of Life', 'Playing God')
});