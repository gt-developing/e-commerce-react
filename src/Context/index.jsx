import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const ShoppingCartContext = createContext()

/* Por que usaremos un estado global
Para que, cuando nuestro proyecto vaya 
aumentando su complejidad, no sé vuelva tedioso estar 
pasando la información que componetes, hermanos, hijos, padres, 
necesitan entré sí.
También, por que es mas facil debuggear errores teniendo 
una sola fuente de la verdad en cuanto almacenamiento 
para nuestra aplicación a la vez que lo hace mas legible 
y facil de mantener. 😃 */
export const ShoppingCartProvider = ({children}) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
      }
    //estado para contadora
    const [count, setCount] = useState(0)
    //estado para abrir y cerrar ProductDatail, entonces recibe un booleano
    // Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}