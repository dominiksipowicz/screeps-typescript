// type shim for nodejs' `require()` syntax
declare const require: (module: string) => any;

interface CreepMemory {
  [building: string]: any;
}
