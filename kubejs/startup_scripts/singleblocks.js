GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('ion_exchanger')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 1) //item input & output, fluid input & output
        .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create('froth_flotator')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 1) //item input & output, fluid input & output
        .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create('bee_infuser')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 1, 0) //item input & output, fluid input & output
        .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create('bio_reactor')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 3, 3) //item input & output, fluid input & output
        .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ion_exchanger', 'simple') 
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV)
        .definition((tier, builder) =>
            builder
        .langValue(GTValues.VLVH[tier] + " Ion Exchanger " + GTValues.VLVT[tier])
        .recipeType('ion_exchanger')
        .workableTieredHullModel('gtceu:block/machines/ion_exchanger')
        )

    event.create('froth_flotator', 'simple') 
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV)
        .definition((tier, builder) =>
            builder
        .langValue(GTValues.VLVH[tier] + " Froth Flotator " + GTValues.VLVT[tier])
        .recipeType('froth_flotator')
        .workableTieredHullModel('gtceu:block/machines/froth_flotator')
        )

    event.create('bio_reactor', 'simple') 
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV)
        .definition((tier, builder) =>
            builder
        .langValue(GTValues.VLVH[tier] + " Bio-Reactor " + GTValues.VLVT[tier])
        .recipeType('bio_reactor')
        .workableTieredHullModel('gtceu:block/machines/bio_reactor')
        )
}); 