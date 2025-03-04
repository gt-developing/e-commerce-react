import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import Layout from '../../Components/Layout'
import { Link } from 'react-router-dom'

function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === 'last') index = context.order?.length-1

    return (
        <Layout>
            <div className='flex items-center relative justify-center w-80 mb-6'>
                <Link to='/my-orders' className='absolute left-0'>
                    <div className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                </Link>
                <h1 className='font-medium text-xl'>Mi pedido</h1>
            </div>
            <div className='flex flex-col w-80'>
                {
                context.order?.[index]?.product.map(product => (
                    <OrderCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                    />
                ))
                }
            </div>
        </Layout>
    )
}

export default MyOrder