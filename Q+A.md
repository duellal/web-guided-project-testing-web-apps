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

What is the purpose of "throw new Error('Error Message')?
- This is just to showcase what would happen
- Do not put this in your tests/code

Is there something that speeds up tests?
- Run less on your computer 
- Could be your computing power from your computer

Would tests for the form work in the App test file, b/c the form is rendered in the App?
- Yes, they would, however this is frowned upon. You could write all of your tests in the App.test.js file b/c the form component is a child of the App component.
- But the test file would be extremely long (on a bigger application). 
   - If you want to make a change inside an element nested 8 layers deep, how would you find that specific test is if you have thousands of lines of code?
      - Making a new test file for each component, makes testing more attainable

Can we test that the background image is present?
- Will answer later

Are all assertions functions that need to be invoked? How can we tell which ones require arguments + which ones simply need to be invoked w/o arugments?
- Most of the time, it will be apparent in the funciton itself
   - Example of no arguemnt: expect(header).toBeInTheDocument()
   - Example of argument: expect(2+3).toBe(5)
- If you can read through the statement and it finshes itself (english language structure), you probably don't need an argument
- If you can't read through the statement, you will need an argument to complete it

- Look at: [jest expect()](https://jestjs.io/docs/expect)

Thoughts on "grabbing" all elements before testing, so you can reference them within each test?
- It is bad to do this, b/c you want to write a fresh test, with a fresh render, + a fresh queries for each test.
- article on this: [Avoid Nesting When You're Testing](https://kentcdodds.com/blog/avoid-nesting-when-youre-testing)


