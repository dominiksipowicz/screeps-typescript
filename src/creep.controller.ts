import {CREEP_ROLE} from "./constants";

export class CreepController {
    private harvesters: Creep[] = _.filter(Game.creeps, (creep) => creep.memory.role === CREEP_ROLE.harvester);
    private builders: Creep[] = _.filter(Game.creeps, (creep) => creep.memory.role === CREEP_ROLE.builder);
    private upgraders: Creep[] = _.filter(Game.creeps, (creep) => creep.memory.role === CREEP_ROLE.upgrader);
    private Spawn = Game.spawns.Spawn1;

    public checkCreepsCount() {

        if (this.harvesters.length < 3) {
            this.createCreep(CREEP_ROLE.harvester);
        } else if (this.upgraders.length < 3) {
            this.createCreep(CREEP_ROLE.upgrader);
        } else if (this.builders.length < 3) {
            this.createCreep(CREEP_ROLE.builder);
        }
    }

    public visualizaCreepSpawning() {
        if (this.Spawn.spawning) {
            const spawningCreep = Game.creeps[Game.spawns.Spawn1.spawning.name];
            this.Spawn.room.visual.text(
                "🛠️" + spawningCreep.memory.role,
                this.Spawn.pos.x + 1,
                this.Spawn.pos.y,
                {align: "left", opacity: 0.8});
        }
    }

    public createCreep(type: CREEP_ROLE) {
        const newName = type + Game.time;
        console.log("Spawning new " + type + ": " + newName);
        this.Spawn.spawnCreep([ WORK, CARRY, CARRY, MOVE, MOVE ],
            newName,
            {memory: {role: type}});
    }

}
