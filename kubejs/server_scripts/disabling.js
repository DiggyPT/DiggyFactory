// priority: 0
ServerEvents.recipes(event => {
    /*
    DISABLING RECIPES
    */
    //removing create processing stuffs
    event.remove({ output: 'create:mechanical_press' })
    event.remove({ output: 'create:mechanical_mixer' })
    event.remove({ output: 'create:millstone' })
    event.remove({ output: 'create:crushing_wheel' })
    event.remove({ output: 'create:encased_fan' })

    //removing default curvy pipes (because only curvy pipes allowed are gregtech pipes!)
    event.remove({ output: 'curvy_pipes:small_item_pipe' })
    event.remove({ output: 'curvy_pipes:small_fluid_pipe' })
    event.remove({ output: 'curvy_pipes:small_energy_pipe' })

    //removing ae2 processing stuffs
    event.remove({ output: 'ae2:inscriber' })
    event.remove({ output: 'ae2:charger' })
})