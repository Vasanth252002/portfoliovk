import './App.css';
import 'animate.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Certs from './components/Certs/Certs';
import NavBar from './components/NavBar/NavBar';
import Socials from './components/Socials/Socials';
import Contact from './components/Contact/Contact';
import SkillSet from './components/SkillSet/SkillSet';


function App() {
  return (
    <>
    <NavBar />
    <Banner />
    
      <About /> 
    

<AnimationOnScroll animateIn='animate__fadeInDown' offset={20} animateOnce={true}><SkillSet /></AnimationOnScroll> 
<AnimationOnScroll animateIn='animate__fadeInDown' offset={20} animateOnce={true}><Contact /></AnimationOnScroll> 
<AnimationOnScroll animateIn='animate__fadeInDown' offset={20} animateOnce={true}><Certs /></AnimationOnScroll> 
<AnimationOnScroll animateIn='animate__fadeInDown' offset={20} animateOnce={true}><Socials /></AnimationOnScroll> 
<AnimationOnScroll animateIn='animate__fadeInDown' offset={20} animateOnce={true}><Footer /></AnimationOnScroll> 
    </>
  );
}

export default App;
