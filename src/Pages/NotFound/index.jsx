import Layout from '../../Components/Layout'

function NotFound() {
    return (
        <Layout>
            <div className='flex justify-center w-full h-full pt-10'>
                <figure className='flex flex-col gap-1'>
                    <span className='font-medium text-xl'>Not page found</span>
                    <span className='font-ligth text-md mb-6'>Its just a 404 Error!</span>
                    <img className='w-full h-full object-cover rounded-lg' src="https://i.pinimg.com/originals/6b/6a/fc/6b6afc2be990fd04a1c9ad98385a3fd2.gif" alt="sad-inside-out" />
                </figure>
            </div>
        </Layout>
    )
}

export default NotFound