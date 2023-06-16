"use client"
import { FormControl, TextField } from '@mui/material'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="bg-white h-screen w-screen">
        <div className="h-screen w-full overflow-hidden relative">
          <Image fill style={{ objectFit: "contain", overflow: "hidden" }} src={"/sample2.png"} alt='texto da promoção' />
        </div>
        <div className="bg-amarelo h-full w-full p-4 flex justify-center items-center flex-col">
          <div className='flex flex-col'>
            <h1 className='text-4xl font-bold text-roxo'>Não vai ficar de fora</h1>
            <h1 className='text-6xl font-extrabold text-verde'>né?</h1>
            <h1 className='text-4xl font-bold text-roxo'>Vem falar com a gente</h1>
            <h1 className="text-6xl font-bold text-roxo">e ganhar o <span className='font-extrabold text-verde'>DESCONTO!</span></h1>
          </div>
          <Image className='mt-20' width={200} height={200} src={"/zap2.png"} alt='whatsapp' onClick={() => { window.location.href = "https://google.com/about" }}/>
        </div>
    </div>
  )
}