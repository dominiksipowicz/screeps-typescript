import {RoleBuilder} from "./role.builder";

export class RoleHarvester {

  public static run(creep: Creep) {

    if (creep.carry.energy < creep.carryCapacity) {
      const sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0], {visualizePathStyle: {stroke: "#ffaa00"}});
      }
    } else {
      const targets = creep.room.find(FIND_MY_STRUCTURES, {
        filter: (structure: Structure) => {
          return (
                structure.structureType === STRUCTURE_EXTENSION
                // || structure.structureType === STRUCTURE_CONTAINER // for dropped resource
                || structure.structureType === STRUCTURE_SPAWN
                || structure.structureType === STRUCTURE_TOWER
              )
              && (structure as StructureSpawn).energy < (structure as StructureSpawn).energyCapacity;
        }
      });
      if (targets.length > 0 && creep.transfer(targets[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
        creep.moveTo(targets[0], {visualizePathStyle: {stroke: "#ffffff"}});
      } else { // if it's idle change role to builder
        RoleBuilder.run(creep);
      }
    }
  }

}
