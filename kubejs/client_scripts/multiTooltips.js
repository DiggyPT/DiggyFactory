ItemEvents.tooltip(event => {
    //Primitive Excavator
    event.addAdvanced('gtceu:primitive_excavator', (item, advanced, text) => {
     text.add(1, Text.white('Early automatic Mining'))
    })

    //Steam Animal Trapper
    event.addAdvanced('gtceu:steam_animal_trapper', (item, advanced, text) => {
     text.add(1, Text.white('Puts Animals in Cages'))
    })

    //Steam Ranch
    event.addAdvanced('gtceu:steam_ranch', (item, advanced, text) => {
     text.add(1, Text.white('Automatic Animal breeding'))
    })

    //Steam Butcher
    event.addAdvanced('gtceu:steam_butcher', (item, advanced, text) => {
     text.add(1, Text.white('Makes meat'))
    })

    //Launch Pad
    event.addAdvanced('gtceu:launch_pad', (item, advanced, text) => {
     text.add(1, Text.yellow('A machine that sets up and launches uncrewed rockets.'))
    })
});