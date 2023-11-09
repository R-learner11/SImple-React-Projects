import React from 'react'

function Home() {
  return (
    <>
    <div 
    style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/announcement-delicious-chocolate-with-almonds_52683-4298.jpg?w=740&t=st=1699336611~exp=1699337211~hmac=8a288da72af45c929c7cbda631518e81eeaa6e8b5c0176d5745c6bb839b9de31')`,
    }}
    className="mx-auto w-full max-w-7xl bg-no-repeat min-h-screen bg-cover">
            <aside className="relative overflow-hidden rounded-lg mobile:mx-16 mx-2 mobile:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl  mt-100 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl text-yellow-300 mobile:3xl font-bold sm:text-5xl">
                            A Life
                            <span className="text-yellow-300 mobile:block mobile:2xl text-4xl">Full Of Celebration</span>
                        </h2>
                        <button className='inline-flex border-yellow-300 border-2 rounded-full items-center px-6 py-3 text-white font-medium tracking-wide hover:opacity-75'>Shop Now</button>
                    </div>
                </div>
            </aside>

            {/* <div className="grid place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div> */}

            <div className='text-white h-auto w-full bg-cover bg-no-repeat flex'
            style={{
            backgroundImage: `url('https://st4.depositphotos.com/13349494/21452/i/450/depositphotos_214526122-stock-photo-top-view-various-delicious-chocolate.jpg')`,
            }}>

            <div className='flex-col flex-wrap'>
            <div className="w-full my-10 mx-auto gap-16">
                <div className='w-[85%] md:max-w-3xl mx-auto border-transparent border-1 rounded-lg px-5 py-5 backdrop-blur-sm bg-stone-800/40'>
                    <p className='text-yellow-300 text-2xl font-bold mb-3'>About us</p>
                    <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae dolor alias, tempora pariatur natus officiis eius tempore, similique illo odio voluptatibus neque ex repellat facere nobis adipisci veritatis esse!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
            </div>

            <div className='md:flex justify-center content-center '>
                <div className='flex-col mx-10 md:mx space-y-4 content-center md:w-1/4'>
                
                    <div className=''>
                        
                        <p className='text-amber-500 font-semibold'>Natural & Organic Product</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </div>
                    

                    <div>
                       
                        <p className='text-amber-500 font-semibold'>Gift Packaging</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>

                    <div>
                        
                        <p className='text-amber-500 font-semibold'>Best Quality Cocoa</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis .</p>
                    </div>
                </div>

                <div className='w-[80%] text-left content-center mx-10 mt-10 md:mx-0 md:mt-0  flex-col md:w-1/4 mb-16'>
                    <p className='text-amber-500 font-semibold'>Our sweet are unique</p>
                    <p className='text-amber-500 font-semibold'>For sweets Lover.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed debitis recusandae dolorem dolorum nesciunt, eum, eveniet magnam dicta quisquam consequatur minima! Ad, illo? Aliquid, nisi voluptatibus. Suscipit, eaque? Facere, sint.</p>
                    <button className='border-yellow-300 border-2 rounded-full mt-5 px-2 py-1 text-white tracking-wide'>Read More</button>
                </div>
            </div>
            </div>
            </div>

            {/* <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">What do we provide</h1> */}

            <div className='text-white w-full bg-cover bg-no-repeat h-auto justify-center gap-5 px-5 py-5'
        style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/chocolate-candies-background_495832-158.jpg')`,}}
        >
            
            <div className='md:flex justify-center gap-10 space-y-6 md:space-y-0'>
            <div className='flex-col backdrop-blur-sm bg-stone-800/40 w-full md:w-1/4 px-3 py-3'>
                <p  className='text-amber-500 font-semibold'>Easy to order</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti corporis nihil. Distinctio excepturi ab iste possimus omnis explicabo alias dolorum. Deleniti illo consequuntur corrupti quasi ipsa laudantium deserunt nostrum!</p>
            </div>

            <div className='flex-col backdrop-blur-sm bg-stone-800/40 w-full md:w-1/4 px-3 py-3'>
                <p  className='text-amber-500 font-semibold'>Fast Delivery</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quidem rem iure quaerat corrupti labore corporis assumenda, illum id unde fugiat tempore dicta excepturi nesciunt officiis. Neque quis harum obcaecati.</p>
            </div>

            <div className='flex-col backdrop-blur-sm bg-stone-800/40 w-full md:w-1/4 px-3 py-3'>
                <p  className='text-amber-500 font-semibold'>Best Quality</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minima soluta quis dolorum, nihil commodi voluptas, vitae ex possimus voluptatibus cum earum cumque et, porro assumenda nostrum. Voluptas, corporis delectus.</p>
            </div>
            </div>
            
        </div>
        </div>
    </>
  )
}

export default Home