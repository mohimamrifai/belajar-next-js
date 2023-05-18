import React from 'react'

export default function post({params}) {
    const {slug} = params;

    // ambil data post berdasarkan slug


  return (
    <div>
        <p>halaman post</p>
        <h1>Halaman post dengan slug :  {slug}</h1>
    </div>
  )
}
