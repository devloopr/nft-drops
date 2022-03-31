import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";


function NFTDropPage() {


// auth
const connectWithMetamask = useMetamask();
const adress = useAddress();
const disconnect = useDisconnect();

//----

console.log(adress)



  return (

<div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>

    {/* // left */}
    <div className='lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-800'>
        <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
            <div className='rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2'>
                 <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72' src='https://links.papareact.com/8sg' alt='' />
            </div>
        </div>
        <div className='text-center p-5 space-y-2'>
            <h1 className='text-4xl font-bold text-white'>STIFAM APES</h1>
            <h2 className='text-xl text-gray-300'>hello hello helloo</h2>
        </div>
    </div> 

    {/* // right */}
    <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
        {/* header  */}
        <header className='flex items-center justify-between'>
            <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>the <span className='font-extrabold underline decoration-pink-600/50'>stiifam</span> marketplace</h1>
            <button onClick={() => adress ? disconnect() : connectWithMetamask()} className='rounded-full bg-rose-400 px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base'>
            {adress ? 'Sign Out' : 'Sign In'}
            </button>
        </header>

        <hr className='my-2 border'/>
        {adress && <p className='text-center text-xssmall text-rose-400'>You're logged in with wallet {adress.substring(0,5)}.......{adress.substring(adress.length -5 )}</p>}

        {/* content */}

        <div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center'>
            <div className='rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2 mb-10'>
                <img className='w-80 rounded-xl object-cover lg:h-40' src='https://links.papareact.com/bdy' alt='' />
            </div>
            <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>The stiiFam Monkey biz club</h1>
            <p className='pt-2 text-xl text-green-500'>21/38 NFT's claimed</p>
        </div>

        {/* mint buttton */}
        <button className='mt-10 font-bold h-16 w-full bg-red-600 text-white rounded-full'>Mint NFT (0.01 eth)</button>
    </div>
</div>
  )
}

export default NFTDropPage