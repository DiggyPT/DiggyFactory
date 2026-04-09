ProjectEEvents.setEMC(event => {
    // sets the absolute emc value of an item
    //event.setEMC("minecraft:cobblestone", 10000) // alias. setEMCAfter

    // sets the emc of an item before anything else happens
    // this can sometimes result in this emc value not being
    // set, but also it allows for emc values to be generated
    // from this one; i.e crafting recipes
    event.setEMCBefore("minecraft:diamond_block", 73728);
})