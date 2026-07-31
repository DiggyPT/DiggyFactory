const WorldGenLayers = Java.loadClass("com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers")
const DiggyMetallurgicAndGems = Java.loadClass("net.phoenix.diggycore.common.data.materials.DiggyMetallurgicAndGems")

GTCEuServerEvents.oreVeins(event => {
  
    // Meteoric Iron
    event.add("luna_meteoric_iron", vein => {
        vein.weight(50)
        vein.density(0.5)
        vein.clusterSize(32)
        vein.layer("ad_astra_moon")
        vein.dimensions(["ad_astra:moon"])
        vein.heightRangeUniform(10, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(DiggyMetallurgicAndGems.METEORIC_IRON).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Iron).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Olivine).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(DiggyMetallurgicAndGems.METEORIC_IRON)
            .placement("above")
        )
    })

    event.add("moon/lunar_sapphire", vein => {
        vein.weight(64)
        vein.density(0.25)
        vein.clusterSize(32)
        vein.layer("ad_astra_moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(32, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(DiggyMetallurgicAndGems.LUNAR_SAPPHIRE).size(2, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Sapphire).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.GreenSapphire).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Olivine).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(DiggyMetallurgicAndGems.LUNAR_SAPPHIRE)
            .placement("above")
        )
    })

    event.add("overworld/covellite", vein => {
        vein.weight(64)
        vein.density(0.25)
        vein.clusterSize(35)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(32, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(DiggyMetallurgicAndGems.COVELLITE).size(2, 2))
                .layer(l => l.weight(2).mat(DiggyMetallurgicAndGems.ENARGITE).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Barite).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(DiggyMetallurgicAndGems.COVELLITE)
            .placement("above")
        )
    })
})