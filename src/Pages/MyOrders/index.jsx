import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrdersCard  from '../../Components/OrdersCard'
import { Link } from 'react-router-dom'

function MyOrders() {
    const context = useContext(ShoppingCartContext)

    return (
        <Layout>
            <div className='flex items-center relative justify-center w-80'>
                <h1>My Orders</h1>
            </div>
            {
                context.order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard 
                        key={order.key}
                        totalPrice={order.totalPrice}
                        totalProducts={order.totalProducts}
                        orderDate={order.date} 
                        />
                    </Link>
                ))
            }
        </Layout>
    )
}

export default MyOrders