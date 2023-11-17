import React from 'react'
import Navigation from './Navigation'


function UiPage() {
  return (
    <>
    <div
        className="w-full h-screen flex flex-wrap bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/announcement-delicious-chocolate-with-almonds_52683-4298.jpg?w=740&t=st=1699336611~exp=1699337211~hmac=8a288da72af45c929c7cbda631518e81eeaa6e8b5c0176d5745c6bb839b9de31')`,
        }}>

          <div className='h-20 my-auto justify-left'>
            <p className='text-right text-4xl text-yellow-300 font-bold '>A Life</p>
            <p className='text-4xl text-yellow-300 font-bold '>Full Of Celebration</p>
            <button className='border-yellow-300 border-2 rounded-full mt-5 px-2 py-1 text-white tracking-wide'>Shop Now</button>
          </div>
    </div>
    {/* about us section */}
        <div className='text-white h-auto w-full bg-cover bg-no-repeat flex'
            style={{
            backgroundImage: `url('https://st4.depositphotos.com/13349494/21452/i/450/depositphotos_214526122-stock-photo-top-view-various-delicious-chocolate.jpg')`,
            }}>

            <div className='flex-col flex-wrap'>
            <div className="w-full my-10 mx-auto">
                <div className='w-full max-w-3xl mx-auto border-transparent border-1 rounded-lg px-5 py-5 backdrop-blur-sm bg-stone-800/40'>
                    <p className='text-yellow-300 text-2xl font-bold mb-3'>About us</p>
                    <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis recusandae dolor alias, tempora pariatur natus officiis eius tempore, similique illo odio voluptatibus neque ex repellat facere nobis adipisci veritatis esse!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam neque adipisci reprehenderit, sequi tempora unde saepe repudiandae, officia autem labore vitae doloremque ducimus consectetur. Alias magnam accusamus suscipit harum nesciunt!</p>
                </div>
            </div>

            <div className='flex justify-center gap-16'>
                <div className='flex-col mx-10 space-y-4 w-1/4'>
                <img src="" alt="" />
                    <div>
                        
                        <p className='text-amber-500 font-semibold'>Natural & Organic Product</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </div>
                    <img src="" alt="" />

                    <div>
                        <img src="" alt="" />
                        <p className='text-amber-500 font-semibold'>Gift Packaging</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>

                    <div>
                        <img src="" alt="" />
                        <p className='text-amber-500 font-semibold'>Best Quality Cocoa</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis .</p>
                    </div>
                </div>

                <div className='flex-col w-1/4 mb-16'>
                    <p className='text-amber-500 font-semibold'>Our sweet are unique</p>
                    <p className='text-amber-500 font-semibold'>For sweet Lover</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed debitis recusandae dolorem dolorum nesciunt, eum, eveniet magnam dicta quisquam consequatur minima! Ad, illo? Aliquid, nisi voluptatibus. Suscipit, eaque? Facere, sint.</p>
                    <button className='border-yellow-300 border-2 rounded-full mt-5 px-2 py-1 text-white tracking-wide'>Read More</button>
                </div>
            </div>
            </div>
            
        </div>

        <div className='text-white w-full bg-cover bg-no-repeat flex h-auto justify-center gap-5 px-5 py-5'
        style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/chocolate-candies-background_495832-158.jpg')`,}}
        >
            
            <div className='flex-col backdrop-blur-sm bg-stone-800/40 w-1/4 px-3 py-3'>
                {/* <img src="https://cdn2.vectorstock.com/i/1000x1000/51/06/order-vector-30565106.jpg" alt="" /> */}
                <p  className='text-amber-500 font-semibold'>Easy to order</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti corporis nihil. Distinctio excepturi ab iste possimus omnis explicabo alias dolorum. Deleniti illo consequuntur corrupti quasi ipsa laudantium deserunt nostrum!</p>
            </div>

            <div className='flex-col backdrop-blur-sm bg-stone-800/40 w-1/4 px-3 py-3'>
                {/* <img className='h-30 w-30' src="data:image/png;base64,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" alt="" /> */}
                <p  className='text-amber-500 font-semibold'>Fast Delivery</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quidem rem iure quaerat corrupti labore corporis assumenda, illum id unde fugiat tempore dicta excepturi nesciunt officiis. Neque quis harum obcaecati.</p>
            </div>

            <div className='flex-col backdrop-blur-sm bg-stone-800/40 w-1/4 px-3 py-3'>
            {/* <img src="https://storage.googleapis.com/stateless-ceoblognation-com/sites/3/2022/12/quality-500958_640.jpg" alt="" /> */}
                <p  className='text-amber-500 font-semibold'>Best Quality</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minima soluta quis dolorum, nihil commodi voluptas, vitae ex possimus voluptatibus cum earum cumque et, porro assumenda nostrum. Voluptas, corporis delectus.</p>
            </div>
            
            
        </div>

        
    </>
  )
}

export default UiPage