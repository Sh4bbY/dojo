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
```

Once this is done you should be able to run the following npm tasks:
- `yarn test`: runs test-suites for all unit-tests
- `yarn playground`: run nodemon on file `./src/playground.ts` and watch for changes
- `yarn lint`: run static code checks


### Start Implementing

When you checkout the repository, you'll find different sections in the src folder like `src/basics/01-numbers`.
this section consists of a `numbers.spec.ts` file, that contains the test-suite used for `numbers.ts`.
In `numbers.ts` you'll find several function signatures that are not yet implemented.

It's your job now to start implementing the desired functionality and satisfy the unit tests.

---
**NOTE**

You can skip parts of the test-suite by prefixing a `describe(...)` function with an 'x' (change it to `xdescribe(...)`).

To execute only a particular test-suite (eg. basics/01-numbers). Run `yarn test src/basics/01-numbers`

---
