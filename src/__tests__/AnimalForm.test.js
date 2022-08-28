import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimalForm from '../components/AnimalForm'
import userEvent from '@testing-library/user-event'

test('renders without errors', () => {
   render(<AnimalForm />)
})

test('form is filled out + submit adds new animal', () => {
   //Render:
   render(<AnimalForm />)

   //Query for all inputs:
   const speciesInput = screen.getByLabelText(/species/i)
   const ageInput = screen.getByLabelText(/age/i)
   const notesInput = screen.getByLabelText(/notes/i)

   //Type into inputs:
   userEvent.type(speciesInput, 'Tiger')
   userEvent.type(ageInput, '16')
   userEvent.type(notesInput, 'Docile, kind, + loves treats')

   //Assert:
   expect(speciesInput).toHaveValue('Tiger')

   //Negative Assertion:
   const noTigerText = screen.queryByText(/tiger/i)

   // expect(noTigerText).not.toBeNull()
   expect(noTigerText).toBeNull()

   //Query for the button:
   const button = screen.getByRole('button', { name: /submit/i })

   //Click the button:
   userEvent.click(button)

   //Query for the text "Tiger":
   const newAnimal = screen.queryByText(/tiger/i)

   //Assert:
   expect(newAnimal).toBeInTheDocument()
})