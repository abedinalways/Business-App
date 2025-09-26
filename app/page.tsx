import Footer from "@/Components/layout/Footer";
import Navbar from "@/Components/layout/Navbar";
import Banner from "@/Components/section/Banner";
import Build from "@/Components/section/Build";
import Comments from "@/Components/section/Comments";
import FAQ from "@/Components/section/FAQ";
import Features from "@/Components/section/Features";


export default function Home() {
  return (
    <main>
      <div className="w-11/12 lg:max-w-7xl mx-auto">
        <Navbar />
        <Banner />
        <Features />
        <Build />
        <Comments />
        <FAQ />
      </div>
      <Footer/>
    </main>
  );
}
