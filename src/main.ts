import { ErrorMapper } from "utils/ErrorMapper";

import { CREEP_ROLE } from "./constants";
import { CreepController } from "./creep.controller";
import { RoleBuilder } from "./role.builder";
import { RoleHarvester } from "./role.harvester";
import { RoleUpgrader } from "./role.upgrader";

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  console.log(`Current game tick is ${Game.time}`);

  // Automatically delete memory of missing creeps
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }
  }

  const creepController: CreepController = new CreepController();

  creepController.checkCreepsCount();
  creepController.visualizaCreepSpawning();

  for (const name in Game.creeps) {
    const creep = Game.creeps[name];
    switch (creep.memory.role) {
      case CREEP_ROLE.harvester: RoleHarvester.run(creep); break;
      case CREEP_ROLE.upgrader: RoleUpgrader.run(creep); break;
      case CREEP_ROLE.builder: RoleBuilder.run(creep); break;
    }
  }

});
