const WorldGenLayers = Java.loadClass("com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers")

GTCEuServerEvents.oreVeins(event => {
  
        event.add("overworld/covellite", vein => {
        vein.weight(64)
        vein.density(0.25)
        vein.clusterSize(35)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(32, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.get('covellite')).size(2, 2))
                .layer(l => l.weight(2).mat(GTMaterials.get('enargite')).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.get('pyrite')).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.get('barite')).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('covellite'))
            .placement("above")
        )
    })
})


