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
})