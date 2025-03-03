import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDatail from '../../Components/ProductDetail'

function Home() {

    const context = useContext(ShoppingCartContext)
    
    const renderView = () => {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
      } else {
        return (
          <div>No resultados</div>
        )
      }
    } 
    
    return (
        <Layout>
            <div className='flex items-center relative justify-center w-80 mb-4'>
                <h1 className='font-medium text-xl'>Productos exclusivos</h1>
            </div>
            <input 
                type='text' 
                placeholder="Buscar productos"
                className='w-80 mb-4 p-3 border-2 border-indigo-500 rounded-lg focus:outline-none'
                onChange={(event) => context.setSearchByTitle(event.target.value)}
            />
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
               { renderView() }
            </div>
            <ProductDatail />
        </Layout>
    )
}

export default Home
