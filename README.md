# Screeps Typescript

AI code for my screeps game. JavaScript RPG game for programmers.

# First check the game:
* [Game Screeps](https://screeps.com/)
* [Tutorial](https://screeps.com/a/#!/sim/tutorial) 

## Basic Usage of my AI code

You will need:

 - [Node.JS](https://nodejs.org/en/download) (>= 8.0.0)
 - A Package Manager ([Yarn](https://yarnpkg.com/en/docs/getting-started) or [npm](https://docs.npmjs.com/getting-started/installing-node))
 - Rollup CLI (Optional, install via `npm install -g rollup`)


```bash
# npm
npm install

# yarn
yarn
```

create config and change your `YOUR_TOKEN`

```bash
cp screeps.sample.json screeps.json
```

to push code to the server:

```bash
rollup -c --dest main
```


## TODO

 - [ ] when nothing to build change to upgreade
 - [ ] save paths to memory for each creep (watch out for colisions)
 - [ ] build road for creeps paths or check position each time and build road
 - [ ] build extension around Spawn
 - [ ] do logic for building order
 