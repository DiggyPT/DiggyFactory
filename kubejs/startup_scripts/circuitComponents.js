console.info('Hello, World! (Loaded startup scripts)')

//Decent electronc circuit components
StartupEvents.registry('item', event => {
event.create('treated_circuit_board')
    .displayName("Treated Circuit Board")
    .texture("kubejs:item/circuit_components/treated_circuit_board")})

StartupEvents.registry('item', event => {
event.create('treated_printed_circuit_board')
    .displayName("Treated Printed Circuit Board")
    .texture("kubejs:item/circuit_components/treated_printed_circuit_board")})

StartupEvents.registry('item', event => {
event.create('rectifier')
    .displayName("Rectifier")
    .texture("kubejs:item/circuit_components/rectifier")})