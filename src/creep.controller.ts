import {CREEP_ROLE} from "./constants";

export class CreepController {

    public checkCreepsCount() {
        const harvesters = _.filter(Game.creeps, (creep) => creep.memory.role === CREEP_ROLE.harvester);
        const builders = _.filter(Game.creeps, (creep) => creep.memory.role === CREEP_ROLE.builder);
        const upgraders = _.filter(Game.creeps, (creep) => creep.memory.role === CREEP_ROLE.upgrader);

        if (harvesters.length < 3) {
            this.createCreep(CREEP_ROLE.harvester);
        } else if (upgraders.length < 3) {
            this.createCreep(CREEP_ROLE.upgrader);
        } else if (builders.length < 3) {
            this.createCreep(CREEP_ROLE.builder);
        }
    }

    public visualizaCreepSpawning() {
        if (Game.spawns.Spawn1.spawning) {
            const spawningCreep = Game.creeps[Game.spawns.Spawn1.spawning.name];
            Game.spawns.Spawn1.room.visual.text(
                "🛠️" + spawningCreep.memory.role,
                Game.spawns.Spawn1.pos.x + 1,
                Game.spawns.Spawn1.pos.y,
                {align: "left", opacity: 0.8});
        }
    }

    public createCreep(type: CREEP_ROLE) {
        const newName = type + Game.time;
        console.log("Spawning new " + type + ": " + newName);
        Game.spawns.Spawn1.spawnCreep([ WORK, CARRY, CARRY, MOVE, MOVE ],
            newName,
            {memory: {role: type}});
    }

}
