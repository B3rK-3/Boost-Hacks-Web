import './App.css';
import Recap from './comps/Recap/recap'
import Header from './comps/Header';
import Sponsor from './comps/Sponsors';
import waveDown from './imgs/wavedown.svg';
import Footer from './comps/Footer/index'

function App() {
  return (
    <>
      <section className="all overflow-hidden">
        <Header className="header" />
        <section className='TOP'>
          <div class="wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
          </div>
        </section>
        <Recap />
        <section className="spacer layer1"></section>
        <Sponsor />
        <img src={waveDown} className='mt-[-10px] waveDown' />
        <section className='FOOTER 2xxs:h-[220px]'><Footer /></section>

      </section>
      
    </>
  );
}

export default App;
