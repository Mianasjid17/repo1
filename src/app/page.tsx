import Header from './component/Header';
import HeroSection from './component/Hero_Section';
import Footer from './component/Footer';
//import Header from './component/Header';
import HomePage from './pages';
export default function Home() {
  return (
    <div>
      <Header/>
      <HomePage/>
      <HeroSection />
      <Footer/>
      
    </div>
  );
}
