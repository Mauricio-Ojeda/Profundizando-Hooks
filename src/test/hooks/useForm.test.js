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
        
        expect( values ).toBe( initialFormState );
        expect( typeof values ).toBe( 'object' );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
        
    })    
    
    test('debe cambiar el valor del formulario (solo el Name)', () => {
        const initialForm = {
            name:'Mauricio',
            surname:'Ojeda'
        };
        const { result, rerender } = renderHook( () => useForm(initialForm) )
        const [values, handleInputChange, reset] = result.current;
        
        rerender( { name:'Carlos' } )

        const e = { target : { name: 'Carlos' } } 
        
        console.log(values.name)

        act( () => {
            handleInputChange( e );
        })
        
        expect( values.name ).toBe('Carlos');
        
    })    
    
    test('debe reestablecerse el formulario con Reset', () => {
        const { result } = renderHook( () => useForm(initialFormState) )
        const [values, handleInputChange, reset] = result.current;
        
        expect( values ).toBe( initialFormState );
        expect( typeof values ).toBe( 'object' );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
        
    })    
})
