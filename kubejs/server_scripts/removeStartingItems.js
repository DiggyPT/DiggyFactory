PlayerEvents.loggedIn(event => {
    const { player, server } = event;

    if (!player.persistentData.first_join_diggyfactory) {
        player.persistentData.first_join_diggyfactory = true;

        server.scheduleInTicks(60, () => {
            server.runCommandSilent(`clear "${player.username}" bountiful_saplings:sprout_axe`);
            server.runCommandSilent(`clear "${player.username}" bountiful_saplings:sprout_hoe`);
        });
    }
});