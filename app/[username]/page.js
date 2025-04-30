import React from 'react'
import PaymentPage from '@/components/PaymentPage'

const Username = async ({params}) => {
  return (
    <>
    {/* await params.username */}
    <PaymentPage username= {params.username}/>
  </>
  )
}

export default Username