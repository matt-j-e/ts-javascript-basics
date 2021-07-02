# TypeScript Basics

## Re-doing the Manchester Codes JavaScript Basics tasks in TypeScript

### Setting up the project to use Jest with TypeScript

    mkdir [PROJECT_NAME]
    cd [PROJECT_NAME]
    git init
    mkdir src __tests__
    npm init
      test command: jest
    echo /node_modules > .gitignore

If you have typescript & ts-node installed globally:

    npm install jest @types/jest ts-jest -D
Otherwise:

    npm install jest @types/jest ts-jest typescript ts-node -D

Then

    touch jest.config.js

Add the following code to `jest.config.js`. This seems to help Jest to manage ES6 modules (along with `"esModuleInterop": true,` in tsconfig.json )

```javascript
module.exports = {
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}
```

Create a tsconfig.json file with the command

    tsc --init


Edit tsconfig.json file as follows:

    "rootDir": "./src",` [and uncomment]
    "esModuleInterop": true,` [probably already  set to this]

Use ES6 import statements at the top of your test files. Eg. for `numbers.test.ts`:

    import { power, round, roundUp, roundDown, abs, quotient } from "../src/numbers";`

In the src files just export each function in the ES6 way. Eg:

```javascript
export const power = (x: number, y: number): number => {
  return Math.pow(x, y);
}
``` 

Just run `npm test` as normal and it should all be hunky dory!
