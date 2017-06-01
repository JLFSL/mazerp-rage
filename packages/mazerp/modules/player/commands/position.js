module.exports = {
    command: {
        aliases: ["pos"],
        name: "Position",
        execute: (player, message, arguments) => {
            console.log("Player:");
            console.log(`  Position: ${player.position.x}, ${player.position.y}, ${player.position.z}`);
            console.log(`  Heading: ${player.heading}`);

            if (player.vehicle) {
                console.log("\nVehicle:");
                console.log(`  Model: ${player.vehicle.model}`);
                console.log(`  Position: ${player.vehicle.position.x}, ${player.vehicle.position.y}, ${player.vehicle.position.z}`);
                console.log(`  Rotation: ${player.vehicle.rotation.x}, ${player.vehicle.rotation.y}, ${player.vehicle.rotation.z}`);
            }
        }
    }
};