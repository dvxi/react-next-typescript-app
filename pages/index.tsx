import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { Canvas } from "@react-three/fiber";
import { Floor } from '../components/Floor';
import { Box } from '../components/Box';
import { LightBulb } from '../components/LightBulb';
import OrbitControls from '../components/OrbitControls';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.scene}>
      <Navbar/>
      <h1>Index</h1>
      <Link href="See ninja listing"></Link>
      <Footer/>
    </div>
  )
}

export default Home
