GTCEuStartupEvents.registry('gtceu:material', event => {
   event.create('covellite')
        .ore()
        .color(0x4673a0).iconSet('fine')
        .components('1x copper, 1x sulfur');

   event.create('enargite')
        .ore()
        .color(0xc2b9a8).iconSet('fine')
        .components('3x copper, 1x arsenic, 4x sulfur');
})