# Q+A:

Do we need to install anything when testing or does it come with the CRA library?
- react testing library (rtl) comes preinstalled when created with create-react-app

How often will we be testing in the real world? How often do you run tests? Toward the end of a build, or throughout?
1. Depends on the company 
   - some require test driven development (TDD) 
      - before you write the code, you will write the test
         - ex: before you write the counter component, you will write the tests for the actions of how you want the component to work.
               - this will automatically have tests fail, but as you are writing the code/finished with writing the code, they will (hopefully) pass
      - this gives you good coverage + less bugs
         - will slow you down a little
   
   - Testing is always a good thing
      - advocate for testing if there is none

2. This depends:
   - if you are doing TDD, the tests will always be running in the background as you are working on the code
   - If you are testing after coding (Development Mode), you will test after the code is built (Testing Mode)
      - the test runner is not running in the background

3. Most companies will have continuous integration + deployment
   - every time you push code, the tests will run in github
      - you can see if the tests are passing in your pull request
      - last "catch all" before pushing code to production (main branch)
   - this helps in a team environment
      - makes sure that is someone pushed code before you, that the code is not breaking b/c you did not plan on their code 

How can we get intellisense for jest and react testing library in VScode?
- Unsure/can't find

Are there websites like edabit or execute program that are made for practicing testing?
- Unsure

