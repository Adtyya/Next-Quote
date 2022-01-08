import axios from 'axios';
import { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';

interface isHome{
  isRandQoutest: Array<any>
}

const Home = (props: isHome)=>{
  
  const [show, setShow] = useState<Array<any>>([]); 

  const {isRandQoutest} = props;
  const showRand = ()=>{
    Router.push('/');
    console.log('halo');
    setShow(isRandQoutest);
  }
  const deleteRand =()=>{
    setShow([])
  }

  return(
    <>
    <div className="container mx-auto">
      <div className="mx-5">
        <h1 className='text-3xl text-center font-bold text-black py-5'>Quotess</h1>
        <div className="text-center pb-3 hover:underline underline-offset-8">
          <Link href='/by-title/search'>Search by title</Link>
        </div>
        <div className="flex w-full justify-center space-x-3 my-5">
            <button className='bg-slate-50 border border-black px-3 py-1 rounded hover:bg-black hover:text-white' onClick={showRand}>Generate random</button>
            <button className='bg-slate-50 border border-black px-3 py-1 rounded hover:bg-red-600 hover:text-white' onClick={deleteRand}>delete</button>
        </div>
        <div className="columns-1 md:columns-4 gap-3 w-full space-y-3 pb-12 border-black
        ">
        {show.map((show,index)=>{
          return(
            <div key={index} className='bg-slate-50 break-inside-avoid text-black rounded border border-inherit shadow-xl px-5 py-3'>
                <h3 className='text-2xl font-bold mb-3'>{show.anime}</h3>
                <h5 className='text-md mb-3 font-medium'>{show.character}</h5>
                <div>
                  <p className='opacity-75'> 
                    {show.quote}
                  </p>
                </div>
            </div>
          )
        })}
        </div>
      </div>

    </div>
    </>
  )
}
export default Home;

Home.getInitialProps = async function(){
  const randomQoutes = await axios.get('https://animechan.vercel.app/api/quotes');
  const showRandQoutes = await randomQoutes.data;
  return{
    isRandQoutest: showRandQoutes,
  } 
}
