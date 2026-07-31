
GTCEuStartupEvents.registry('gtceu:dimension_marker', event => {
        event.create('ad_astra:venus')
        .iconSupplier(() => Item.of('df_planets:venus_marker').getItem())
        .tier(0)
        .overrideName('Venus')

        event.create('ad_astra:mercury')
        .iconSupplier(() => Item.of('df_planets:mercury_marker').getItem())
        .tier(0)
        .overrideName('Mercury')

        event.create('ad_astra:moon')
        .iconSupplier(() => Item.of('df_planets:luna_marker').getItem())
        .tier(0)
        .overrideName('Moon')
})