'use client'
import Main from '../components/Main';
import Featured from '../components/Featured';
import Food from '../components/Food';
import Contact from '../components/Contact';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="text-black">
    <Nav/>
    <div id="Home">
    <Main/>
    </div>
    <div id="Featured">
    <Featured/>
    </div>
    <div id="Food">
    <Food/>
    </div>
    <div id="Contact">
    <Contact/>
    </div>
    <Footer/>
    </div>
  )
}
