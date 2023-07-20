import React, { useState } from 'react'
import {MdClose} from 'react-icons/md'
import {useQuery} from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import axios from 'axios';

 
  

function Search({setShowSearch}) {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const onchange = (e)=>{
    setQuery(e.target.value);
}
    const { isLoading, error, data, isFetching } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          axios
            .get('https://fakestoreapi.com/products')
            .then((res) => res.data),
      })
    
      if (isLoading) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message
    
      let products = []
    
      if (data) {
        // console.log(data);
        products = [...data]
      }
      console.log("products", products);
      if (isLoading) {
        console.log(isLoading);
      }
    
      if (error) {
        console.log(error);
      }
  return (
    <section className='w-full h-screen fixed top-0 bg-white '>
        <div className='flex items-center justify-center  px-4 md:px-8 py-6 max-w-screen-lg mx-auto'>
            <div className='w-full'>
                <input type='text' placeholder='search...' autoFocus onChange={onchange} value={query} className='w-full outline-none border-none text-2xl'/>
            </div>
            <MdClose size={34} onClick={()=>setShowSearch(false)}/>
        </div>
        <div className='w-full mx-auto p-0 md:w-[800px]'>
          {products?.length ? (
            <div className=' overflow-hidden h-screen pb-5 md:pb-32 my-5'>
            {products?.filter((f)=>{
            if(!query?.length){
              return null;
            }else if (f?.title.toLowerCase().includes(query.toLowerCase())){
              return f;
            }
            return false; 
           })
           .map((f)=>(
            <div className=' cursor-pointer flex gap-2 items-center px-3 border border-b-2 border-solid border-gray-500 py-5' key={f?.id} onClick={()=>{
                navigate("/product/" + f?.id)
                setShowSearch(false);}}>

                    <div className='bg-black w-[60px] h-[60px] flex-shrink-0'>
                        <img src={f?.image} alt='' className='w-full h-full'/>
                    </div>
                    <div className='overflow-hidden'>
                        <span className='text-ellipsis overflow-hidden text-base block mb-3 font-bold'>{f?.title}</span>
                        <span className='text-ellipsis overflow-hidden text-base block mb-3 font-medium'>{f?.description}</span>
                        
                    </div>
                </div>
          ))}
            </div>
            
          ): null}
       
        </div>
       
        
    </section>
  )
}

export default Search
