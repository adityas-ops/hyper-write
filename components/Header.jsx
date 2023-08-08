import Link from 'next/link'
import React from 'react'

const navItem = ["Examples","Info","FAQ"]


function Header() {
  return (
   <>
    <header className='w-full min-h-[4.5rem] fixed top-0  z-[1000] bg-[#0c1a2f] bg-[url(/images/texture.svg)] px-[3%]'>
    <div class="w-full  min-h-[4.5rem] gap-x-4 gap-y-4 grid-rows-auto grid-cols-[1fr,max-content,1fr] auto-cols-[1fr] justify-between items-center content-stretch mx-auto grid">
        <nav className=' hidden lg:flex justify-start font-inter items-center ml-[-1rem] w-full'>
        {
            navItem.map((item,index)=>{
                return(
                    <Link key={index} href="/" className=' text-[#fcfbf5] text-[1rem] tracking-[0.5px] mx-0 font-[500] py-[0.5rem] px-[1rem]'>
                        {item}
                    </Link>
                )
            })
        }
        </nav>
        <button className='lg:hidden flex flex-col w-[48px] h-[48px] justify-center mr-[0.5px]'>
           <div className='w-[24px] h-[2px] bg-[#fcfbf5] ' />
           <div className='w-[24px] h-[2px] bg-[#fcfbf5] my-[6px] ' />
           <div className='w-[24px] h-[2px] bg-[#fcfbf5] ' />
        </button>
        {/* second element  */}
        <Link href="/" class="navbar3_logo-link w-nav-brand" aria-label="home">
        <img src="https://uploads-ssl.webflow.com/63fcd79d410b22ddf397e1b8/64ca76921c099a01a3f61bdc_logo%20assistant.png" loading="lazy" sizes="48px"   alt="" class="w-[48px] h-[48px]"/>
        </Link>
        {/* third element */}
        <div className='w-full hidden sm:flex  justify-end'>
        <Link href="/" className='bg-[linear-gradient(#3a6ff8,#3052cd)]  ml-[1rem] py-[0.5rem] px-[1rem] rounded-[0.6rem]'>
            Try it
        </Link>
        </div>
    </div>
    </header>
   </>
  )
}

export default Header