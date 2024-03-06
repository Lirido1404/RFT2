import Delete from '@/app/(components)/Delete'
import React from 'react'

function page({params}) {
  return (
    <div>
        <Delete id={params.id}/>
    </div>
  )
}

export default page