import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Second from './Components/Second'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    {/* <HeroBack/> */}
    <Second/>
    </>
  )
}