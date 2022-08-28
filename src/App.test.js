//Testing:
//Gives confidence in the code

/* 3 Main Types of Tests:

1. End to End (with Cypress)
   - Run the project in an actual browser
   - Run as many user scenarios as possible
   - Take a long time to run
   - Take a lot of computing power (compared to the other two below)
   - Broad focus/coverage of testing (backend, front end, UI experience)

2. Integration (React Testing Library, Enzyme)
   - Test how different pieces of the code work or integrate together
       - Smaller in focus/coverage

3. Unit  (Jest)
   - Test a single unit of code to make sure it always runs correctly under various different scenarios
      -example scenario: one function within a component
*/

//Integration test:
test('test name', () => {
   //if the test does not throw an error, the test will pass
   //if the test does throw an error, the test will fail
   // throw new Error('This test broke, because we told it to break'); //Do not throw errors in the tests ... that is built into react testing library (RTL/rtl)
})

/* jest - test runner:
      - lets us run the tests in the terminal when there is no environment in the terminal
      - used for assertions (global functions)
      - uses global functions to structure the tests
         - test, describe, it functions

   Nesting: 'it' functions are nested in decribe functions which are nested within the test functions
*/

describe('testing', () => {
   it('should pass all the tests', () => {
      console.log('It passed!')
   })
})


