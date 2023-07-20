import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'



function Home() {
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery({
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
    console.log(data);
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
    <main className=' py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
      {
        products?.map((product) => {
          return <section className='text-white w-full h-full mx-auto' key={product.id}>
            <div className='w-full h-full md:1/4  px-4 flex gap-4'>
              <div className="w-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-md p-2 object-fill h-80" src={product.image} alt="productImage" />

                <div className="p-5">

                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">{product.title}</h5>

<p className='text-black font-semibold text-xl py-2'>${product.price}</p>
                  <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none cursor-pointer" onClick={() => { navigate(`/product/${product.id}`) }}>
                    View Product
                    <AiOutlineArrowRight />

                  </span>
                </div>
              </div>
            </div>



          </section>
        })
      }


    </main>
  )
}

export default Home
