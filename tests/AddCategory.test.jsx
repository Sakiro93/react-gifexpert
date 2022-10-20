import { render } from "@testing-library/react"
import { AddCategory } from "../src/components/AddCategory"

describe('Pruebas en AddCategory', () => { 
    test('Debe cambiar el valor de la caja de texto', () => { 
        render(<AddCategory />)
     })
 })