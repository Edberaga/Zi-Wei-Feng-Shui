import Image from "next/image";
import Link from "next/link";

import Navbar from "./components/navbar";
import About from "./components/about";
import Services from "./components/services";
import AgencyTab from "./components/agencyTab";
import Cta from "./components/cta";
import Client from "./components/client";
import Blogs from "./components/blog";
import GetInTouch from "./components/getInTuoch";
import Footer from "./components/footer";
import Switcher from "./components/switcher";

export default function Home() {
  return (
  <>
  <Navbar/>
  <section className="relative overflow-hidden md:py-48 py-40 bg-red-500/5 dark:bg-red-500/20" id="home">
    <div className="container relative mt-8">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
        <div>
<<<<<<< HEAD
          <h1 className="font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl mb-5">Your Life with Zi Wei Feng Shui</h1>
=======
          <h1 className="font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl mb-5">Transform Your Life with Saysheji</h1>
>>>>>>> 9fa47566525da8c30c095c9d9a480eb3884601f2
          <p className="text-slate-400 text-lg max-w-xl">
            Unlock the ancient wisdom of the stars to bring balance, prosperity, and harmony into your life. Explore personalized solutions tailored to your unique destiny.
          </p>
          
          <div className="mt-6">
              <Link href="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-red-500 text-white">Contact Us <i className="mdi mdi-chevron-right ms-1"></i></Link>
          </div>
        </div>

        <div className="lg:ms-8">
          <div className="relative">
            <Image src='/images/compass.png' width={380} height={0} sizes="100vw" style={{width:'100%', height:'auto', padding: '25px'}} className="relative top-16" alt="Zi Wei Feng Shui"/>
          </div>
        </div>
      </div>
    </div>
  </section>

  <About/>
  <Services/>
  <AgencyTab/>
  <Cta/>
  <Client/>
  <Blogs/>
  <GetInTouch/>
  <Footer/>
  <Switcher/>
  </>
  );
}