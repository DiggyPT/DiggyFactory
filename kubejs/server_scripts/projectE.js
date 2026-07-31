// priority: 0
ServerEvents.recipes(event => {
     function matterRecipe(input, output) {
        event.shaped(
      Item.of('kubejs:' + output + '_alch_matter', 1),
        [
          'AAA',
          'MMM',
          'AAA'
        ],
        {
            A: 'projecte:aeternalis_fuel',
            M: 'kubejs:' + input + '_alch_matter'
        }
    )
     }

    matterRecipe("pink", "magenta")
    matterRecipe("magenta", "purple")
    matterRecipe("purple", "violet")
    matterRecipe("violet", "blue")
    matterRecipe("blue", "cyan")
    matterRecipe("cyan", "green")
    matterRecipe("green", "lime")
    matterRecipe("lime", "yellow")
    matterRecipe("yellow", "orange")
    matterRecipe("orange", "white")
    matterRecipe("white", "clay")
    matterRecipe("clay", "fading")

    event.shaped(
      Item.of('kubejs:pink_alch_matter', 1),
        [
          'AAA',
          'MMM',
          'AAA'
        ],
        {
            A: 'projecte:aeternalis_fuel',
            M: 'projecte:red_matter'
        }
    )

    
    event.remove({ output: 'projecte:philosophers_stone' })
    event.remove({ output: 'biomancy:primordial_core' })
    event.remove({ output: 'projecte:collector_mk1' })
    event.remove({ output: 'projecte:relay_mk1' })
    event.remove({ output: 'projecte:alchemical_chest' })
    event.remove({ output: 'projecte:repair_talisman' })

    event.shaped(
      Item.of('projecte:alchemical_chest', 1),
        [
          'LMH',
          'SES',
          'IWI'
        ],
        {
            L: 'projecte:low_covalence_dust',
            M: 'projecte:medium_covalence_dust',
            H: 'projecte:high_covalence_dust',
            S: "#forge:stone",
            I: "minecraft:iron_ingot",
            W: "#forge:chests/wooden",
            E: "gtceu:exquisite_diamond_gem",
        }
    )
})