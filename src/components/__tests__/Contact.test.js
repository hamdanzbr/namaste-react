import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"




describe('contact page tests',()=>{
    test('should load contact us component', () => { 
        render(<Contact/>);
    
        const heading=screen.getByRole('heading')
    
        // assretion
        expect(heading).toBeInTheDocument()
    
     })
    
    
     test('Should button is there',()=>{
    
        render(<Contact/>)
        const button=screen.getByRole('button')
    
        // assertion
        expect(button).toBeInTheDocument() 
     })
    
     test('should submit text is there',()=>{
        render(<Contact/>)
    
        const submit=screen.getByText('Submit')
    
        // assertion
        expect(submit).toBeInTheDocument()
        
     })
    
     test('should be Message placeholder',()=>{
        render(<Contact/>)
    
        const placeholder=screen.getByPlaceholderText('Message')
    
        expect(placeholder).toBeInTheDocument()
        // console.log(placeholder);
        
        
     })
    
     test('should load input boxes',()=>{
        render(<Contact/>)
    
        const inputbox=screen.getAllByRole('textbox')
    
        console.log(inputbox[0]);
        
    
        expect(inputbox.length===2).toBeTruthy()
     })
})

