import Image from 'next/image'
import { Inter } from '@next/font/google'
import AddToDo from "@/app/components/AddToDo";



export default function Home() {
  return (
    <main>
      <AddToDo/>
    </main>
  )
}
