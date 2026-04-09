StartupEvents.registry('item', event => {
    
    function makeItem(registry, name)
    {
        event.create(registry)
        .displayName(name)
        .texture("kubejs:item/alchemy/" + registry)
    }

    function makeAlchMatter(colourLower, colourUpper)
    {
        makeItem(colourLower + "_alch_matter", colourUpper + " Matter")
    }

    makeAlchMatter("orange", "Orange")
    makeAlchMatter("yellow", "Yellow")
    makeAlchMatter("lime", "Lime")
    makeAlchMatter("green", "Green")
    makeAlchMatter("cyan", "Cyan")
    makeAlchMatter("blue", "Blue")
    makeAlchMatter("violet", "Violet")
    makeAlchMatter("magenta", "Magenta")
    makeAlchMatter("purple", "Purple")
    makeAlchMatter("pink", "Pink")
    makeAlchMatter("white", "White")
    makeAlchMatter("clay", "Clay")
    makeAlchMatter("fading", "Fading")

    makeItem("ecoverse_shell", "Ecoverse Shell")
    makeItem("blank_ecoverse", "Blank Ecoverse")
    makeItem("marine_ecoverse", "Marine Ecoverse")
})