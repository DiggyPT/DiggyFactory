//thanks for the script puff
let gtceuItemsToAnnihilate = [
    "signalum_ingot", "signalum_dust", "signalum_plate", "signalum_gear", "signalum_nugget", "signalum_block", "chocolate_ingot", "cinder_flour_dust", "chocolate_block",
    "lumium_ingot", "lumium_dust", "lumium_plate", "lumium_gear", "lumium_nugget", "lumium_block",
    "enderium_ingot", "enderium_dust", "enderium_plate", "enderium_gear", "enderium_nugget", "enderium_block",
]
let createItemsToAnnihilate = ["zinc_nugget", "zinc_ingot", "brass_nugget", "brass_ingot", "brass_sheet", "copper_sheet"]



JEIEvents.hideItems(event => {
    gtceuItemsToAnnihilate.forEach(item => {
        event.hide('gtceu:' + item)
    })

    CreateItemsToAnnihilate.forEach(item => {
       event.hide('create:' + item)
    })
})