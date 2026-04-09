StartupEvents.registry('fluid', event => {
    let ketchup = event
    .create('ketchup')
    .displayName('Ketchup')
    .stillTexture('kubejs:block/ketchup_still')
    .flowingTexture('kubejs:block/ketchup_flowing')
    .bucketColor(0xB73131)

    ketchup.bucketItem.texture("kubejs:item/ketchup_bucket")
})