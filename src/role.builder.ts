export class RoleBuilder {

  public static run(creep: Creep) {

    if (creep.memory.building && creep.carry.energy === 0) {
            creep.memory.building = false;
            creep.say("🔄 harvest");
    }

    if (!creep.memory.building && creep.carry.energy === creep.carryCapacity) {
        creep.memory.building = true;
        creep.say("🚧 build");
    }

    if (creep.memory.building) {
      const targets = creep.room.find(FIND_CONSTRUCTION_SITES);
      if (targets.length && creep.build(targets[0]) === ERR_NOT_IN_RANGE) {
        creep.moveTo(targets[0], {visualizePathStyle: {stroke: "#ffffff"}});
      }
    } else {
      const sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[1]) === ERR_NOT_IN_RANGE) {
          creep.moveTo(sources[1], {visualizePathStyle: {stroke: "#ffaa00"}});
      }
    }
  }
}
