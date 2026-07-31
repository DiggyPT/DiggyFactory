StartupEvents.registry('item', event => {
    
    function makeItem(registry, name)
    {
        event.create(registry)
        .displayName(name)
        .texture("kubejs:item/tnt/" + registry)
    }

    function makeGelledExplosive(grade)
    {
        makeItem("gelled_explosive_" + grade, "Gelled Explosive")
    }

    makeGelledExplosive("5")
    makeGelledExplosive("20")
    makeGelledExplosive("100")
    makeGelledExplosive("500")
    makeGelledExplosive("2k")
    makeGelledExplosive("10k")
})