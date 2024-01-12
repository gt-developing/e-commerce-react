import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDatail from '../../Components/ProductDetail'

function Home() {

    const context = useContext(ShoppingCartContext)
    
    return (
        <Layout>
            <div className='flex items-center relative justify-center w-80 mb-4'>
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>
            <input 
                type='text' 
                placeholder="Search a products"
                className='w-80 mb-4 p-3 border-2 border-indigo-500 rounded-lg focus:outline-none'
                onChange={(event) => {
                    context.setSearchValue(event.target.value);
                }}
            />
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {
                    context.items?.map(item => (
                        <Card key={item.id} data={item} />
                    ))
                }
            </div>
            <ProductDatail />
        </Layout>
    )
}

export default Home
