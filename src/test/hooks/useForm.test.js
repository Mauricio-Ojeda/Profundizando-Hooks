import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('pruebas en useForm', () => {

    const initialFormState = {
        name:'Mauricio',
        surname:'Ojeda'
    };

    test('debe de regresar un formulario por defecto', () => {
        const { result } = renderHook( () => useForm(initialFormState) )
        const [values, handleInputChange, reset] = result.current;
        
        expect( values ).toEqual( initialFormState );
        expect( typeof values ).toBe( 'object' );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
        
    })    
    
    test('debe cambiar el valor del formulario (solo el Name)', () => {
        
        const { result } = renderHook( () => useForm(initialFormState) )
        const [ , handleInputChange ] = result.current;
        
        act( () => {
            handleInputChange( { 
                target : { 
                    name: 'name', 
                    value:'Carlos'
                    } 
                } 
            );
        })

        const [ valuesForm ] = result.current;
        
        expect( valuesForm ).toEqual({...initialFormState, name:'Carlos'});
        
    })    
    
    test('debe reestablecerse el formulario con Reset', () => {
        const { result } = renderHook( () => useForm(initialFormState) )
        const [ , handleInputChange, reset ] = result.current;
        
        act( () => {
            handleInputChange( { 
                target : { 
                    name: 'name', 
                    value:'Carlos'
                    } 
                } 
            );
            reset();
        })

        const [ valuesForm ] = result.current;
                
        expect( valuesForm ).toEqual( initialFormState );
        
    })    
})
