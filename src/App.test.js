//Test suite must contain @ least 1 test or it will fail
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'

/* 
Throughout the testing, react/jest is making a lot of assertions:
   - Inside the render:
      - If the component breaks, the test will break
*/

test('Render header', () => {
   //Arrange:
   //Render the App component
   // const { debug } = render(<App />)
   //const container = render(<App />)

   //Debug() console.log()s the virtual DOM:
   // debug()
   // container.debug()
   /* Why is the debug showing the form?
         - B/c the form is a child of the app
            - The Form component is rendering inside of the App component
   */

   render(<App />)

   //Act:
   //To query the DOM for the header element

   //Below throws an error b/c there is more than one heading
   //.getByRole() would be preferrable if it didn't throw an error
   // const header = screen.getByRole('heading')
   const headerText = screen.getByText(/add new animal/i)

   //Assert:
   //Is the header found on the DOM?
   expect(headerText).toBeTruthy()
   expect(headerText).toBeInTheDocument()
})


