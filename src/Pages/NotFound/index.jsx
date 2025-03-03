import Layout from '../../Components/Layout'

function NotFound() {
    return (
        <Layout>
            <div className='flex justify-center w-full h-full pt-10'>
                <figure className='flex flex-col gap-1'>
                    <span className='font-medium text-xl'>Error 404</span>
                    <span className='font-ligth text-md mb-6'>Chismosa</span>
                </figure>
            </div>
        </Layout>
    )
}

export default NotFound