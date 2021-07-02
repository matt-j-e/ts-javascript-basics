# TypeScript Basics

# Re-doing the Manchester Codes JavaScript Basics project in TypeScript

As part of my first steps in getting to grips with TypeScript I thought it might be a good idea to work through the JavaScript basics tasks from the Manchester Codes Fundamentals module but this time using TypeScript.

To do that I had to adapt the project slightly to get Jest to work with TypeScript.

## Setting up the project to use Jest with TypeScript

In your terminal, navigate to the directory inside which you want your new project directory to live then follow the steps below:

    mkdir [PROJECT-NAME]
    cd [PROJECT-NAME]
    mkdir src __tests__
    git init
    npm init [setting - test command: jest]
    echo /node_modules > .gitignore

If you have typescript & ts-node installed globally:

    npm install jest @types/jest ts-jest -D
Otherwise:

    npm install jest @types/jest ts-jest typescript ts-node -D

Create a `jest.config.js` file...

    touch jest.config.js

Add the following code to `jest.config.js`.

```javascript
module.exports = {
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}
```

I'm unsure of the technical ins and outs of this but TypeScript seems to require the use of ES6-style modules, which Jest doesn't like. The above code seems to help Jest to manage ES6 modules (along with `"esModuleInterop": true,` in tsconfig.json - see later step).


Next, create a `tsconfig.json` file with the command...

    tsc --init


Edit `tsconfig.json` file as follows:

    "rootDir": "./src",` [and uncomment]
    "esModuleInterop": true,` [and uncomment - probably already set up like this]

Use ES6 import statements at the top of your test files. Eg. for `numbers.test.ts`:

    import { power, round, roundUp, roundDown, abs, quotient } from "../src/numbers";`

Build your functions in the `src` directory and export each function in the ES6 way. Eg:

```javascript
export const power = (x: number, y: number): number => {
  return Math.pow(x, y);
}
``` 

Just run `npm test` as normal and it should all be hunky dory!
