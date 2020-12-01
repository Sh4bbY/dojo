Coding Dojo
===========

## Getting Started

```bash
# clone the repository
git clone git@github.com:Sh4bbY/dojo.git

# navigate into the repository
cd dojo

# install dependencies
yarn

# create *.solution.ts files from *.template.ts files
yarn solutions
```

Once this is done you should be able to run the following npm tasks:
- `yarn solutions`: create `*.solution.ts` files from `*.template.ts` if solution file does not exist
- `yarn test`: run linter and test-suites for all unit-tests
- `yarn play`: run nodemon on file `./src/playground.ts` and watch for changes
- `yarn lint`: run static code checks
- `yarn rover`: run webpack-dev-server and bring up mars-rover mission-control
- `yarn solar`: run webpack-dev-server and bring up solar-system-simulation

### Order Recommendation

Before you dig into mars-rover missions, you first should complete a decent amount of basic and advanced challenges.

So start with the basics before you head over to advanced or web.

### Start Implementing

When you checkout the repository, you'll find different sections in the src folder like `src/basics/01-numbers`.
this section consists of a `numbers.spec.ts` file, that contains the test-suite used for `numbers.ts`.
In `numbers.ts` you'll find several function signatures that are not yet implemented.

It's your job now to start implementing the desired functionality and satisfy the unit tests.

---
**NOTE**

You can skip parts of the test-suite by prefixing a `describe(...)` function with an 'x' (change it to `xdescribe(...)`).

To execute only a particular test-suite (eg. basic/numbers). Run `yarn jest src/basic/numbers`

---
