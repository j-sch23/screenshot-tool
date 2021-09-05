import Head from 'next/head'
import { useState } from 'react';
export default function Home() {
const [img, setImg] = useState('');
const getImg = async () => {
  await fetch('')
    .then(res => console.log(res))
}
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
    <img src={img}></img>
<a href="/api/screenshot?url=https://www.google.com" className="bg-gray-200 p-2 rounded-lg"> click me</a>
<button onClick={() => { setImg('/api/screen?url=https://www.google.com')}} className="bg-gray-200 p-2 rounded-lg"> click me for single img</button>
    </div>
  )
}
