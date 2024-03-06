import React from 'react'
import CarsForm from '../(components)/CarsForm'
import Link from 'next/link'

function page() {
  return (
    <div>
      <CarsForm />
      <div className='bg-red-500'>
      <Link href={"/Admin/CarDb"}>Go to Db</Link>
      </div>
    </div>
  )
}

export default page