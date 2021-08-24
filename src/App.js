import './App.scss';

import Slider from './components/Slider';
import Title from './components/Title';
import Stat from './components/Stat';
import Competition from './components/Competition';
import Member from './components/Member';
import Contact from './components/Contact';
import Map from './components/Map';
import Menu from './components/Menu';
import SocialMedia from './components/SocialMedia';
import Redbg from './components/RedBg';

import headerSlider from './assets/headerSlider';
import logo from './assets/logo.png'

import Tunisia from './assets/icons/Tunisia';
import Globe from './assets/icons/Globe';
import Trophy from './assets/icons/Trophy';
import Medal from './assets/icons/Medal';
import robolympix from './assets/logos/robolympix.png'
import Address from './assets/icons/Address';
import Phone from './assets/icons/Phone';
import Mail from './assets/icons/Mail';

import aeroday from './assets/logos/aeroday.jpg'
import BlueBg from './components/BlueBg';

function App() {
  return (
    <div className="App">
      <div className="row">
      <div className="col">
          <img src={logo} className="logo" alt="aerobotix"/>
        </div>
        <div className="col" style={{ overflowWrap : "unset" }}>
          <Menu />
          <svg className="menuBg" viewBox="0 0 1063 217" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 -39.7701C31.2952 108.467 306.884 349.294 1158.88 126.708C1937.44 -76.6944 2155.8 -132.996 2175.49 -137.673L2176.06 -137.699C2177.44 -138.096 2177.35 -138.114 2175.49 -137.673L0 -39.7701Z" fill="#E91921"/>
          </svg>
        </div>
      </div>
      <div className="container-xxl">
        <section className="row header" >
          <div className="col"  >
            <Slider images={headerSlider} height="580px" width="714px" />
          </div>
          <div className="col" >
            <Title title="Learn" size="L" color="blue" style={{ margin : "20px" }} />
            <Title title="Create" size="L" color="blue"  style={{ margin : "20px" }} />
            <Title title="Innovate" size="L" color="blue"  style={{ margin : "20px" }} />
          </div>
        </section>


        <section className="row" style={{ display: "flex", alignItems: "center", marginBottom : "300px" }}>
          <div className="col">
            <Title title="About us" size="M" color="red" style={{ margin : "50px 30px" }} />
            <p className="info">
                The AeRobotiX club is a non-profit science club.
              It is the result of the merger of the Mechatronics and Embedded Orders clubs of INSAT.
              AeRobotiX operates in the realization of robotic and automated applications having utility in vital areas such as industry, home automation, aeronautics, automotive and security.
              In addition, AeRobotiX has a glorious history of its regular participation in national and international competitions, particularly in the field of robotics.
              AeRobotiX offers its members excellent technical training, accompanied by exceptional managerial experience.
              Through the various club activities, the member strengthens his academic training at INSAT through real confrontations with members of his team and professionals working with our club. 
            </p>
          </div>
          <div className="col stats" >
              <div className="date" ><h1>SINCE </h1><Title title="2005" size="S" color="blue" /> </div>
              <div className="couple">
                <Stat number="+100" icon={<Tunisia />} fullname="local participation" />
                <Stat number="17" icon={<Globe />} fullname="international participation" />
              </div>
              <div className="couple">
                <Stat number="23" icon={<Trophy />} fullname="Trophies" />
                <Stat number="35" icon={<Medal />} fullname="Medals" />
              </div>
          </div>  
        </section>

        <section className="sliders">
          <section className="row"  >
            <div className="col" >
              <Title title="Robotics" size="M" color="blue" />
              <p className="description"> In addition, AeRobotiX has a glorious history of its regular participation in national and international competitions, particularly in the field of robotics.</p>
              <Slider images={headerSlider} height="711px" width="95%" />
            </div>
          </section>
          <section className="row">
            <div className="col" >
              <Title title="Aeronautics" size="M" color="blue" />
              <p className="description"> In addition, AeRobotiX has a glorious history of its regular participation in national and international competitions, particularly in the field of robotics.</p>
              <Slider images={headerSlider} height="711px" width="95%" />
            </div>
          </section>
        </section>


          <Title className="row" style={{ marginBottom : "50px" }} title="Competitions" size="M" color="red" />
        <section className="row" id="competitions" >
          <div className="col" style={{ display: "flex", justifyContent: "center", alignItems :"center" }}>
            <Competition 
              compName="RobOlympix" 
              description="Après le succès énorme de l'Aeroday, AeRobotiX INSAT continue à innover et lance son premier événement de robotique RobOlympiX.
                          De nouveaux challenges vous attendent!
                          Rejoignez l'olympiade "
              color="red"
              logo={robolympix}
              link="https://robolympix.com/"
            />
          </div>
          <div className="col" style={{ display: "flex", justifyContent: "center", alignItems :"center" }}>
            <Competition
              compName="Aeroday" 
              description="Tunisian Aeroday est la journée nationale de l'aéronautique en Tunisie.
              Ceci n'a plus de secret pour personne, puisque l'Aeorday acquiert une renommée ascendante: C'est une journée réunissant d’importants industriels opérant sur les marchés internationaux, et ce notamment en présence de ministres , professeurs , industriels et étudiants tunisiens.
              "
              color="blue"
              logo={aeroday}
              link="http://www.aeroday.tn/"
            />
          </div>
        </section>


        <section className="row" style={{ marginTop : "700px" }} id="committee" >
          <div className="col">
            <Title title="Committee" size="M" color="red" />
            <div className="warpper">
              <Member fullname="Marouene Kaaniche" role="President" />
            </div>
            <div className="warpper">
              <Member fullname="Mohamed Yassine Brahem " role="Vice-president" />
              <Member fullname="Ilef Rjiba " role="General secretary" />
              <Member fullname="Ghofrane Sedraoui " role="Treasurer" />
              <Member fullname="Raed Khochtali " role="Chef équipe A" />
            </div>
            <div className="warpper">
              <Member fullname="Wala Zoghlami " role="Aeronautical manager" />
              <Member fullname="Ahmed Aziz Ben Gandia " role="Exhibition manager" />
              <Member fullname="Ahmed Bechir Mezhoud" role="Media manager" />
              <Member fullname=" Walid Brini " role="Training manager" />
            </div>
            <div className="warpper">
              <Member fullname="Ahmed Dhia Labidi " role="Materials and logistics manager" />
              <Member fullname="Eya Mallat " role="Human resources manager" />
              <Member fullname="Abderrazek Abid " role="Sponsoring Manager" />
            </div>
          </div>
        </section>


        <section className="row" id="joinus" >
          <div className="col" >
            <Title title="Join us" color="red" size="M" />
            <iframe title="isncription" style={{ marginTop : "80px" }} src="https://docs.google.com/forms/d/e/1FAIpQLSc-0bJ0sC_AIuiCUu92yzf5j10aK77TByN7_LJLpGNxvtRPdA/viewform?embedded=true" width="100%" height="1800" frameBorder="0" marginHeight="0" marginWidth="0">Chargement…</iframe>
          </div>
        </section>


        <section className="row" id="contact" styl={{ marginBottom : "0px" }} >
          <div className="col" style={{paddingBottom : "90px"}}>
          <Contact icon={<Address />} content="Centre urbain nord 1080 Tunis, Tunisia." />
          <Contact icon={<Mail />} content="contact@aerobotix-insat.com" />
          <Contact icon={<Phone />} content="+216 52 761 507" />
          </div>
          <div className="col">
            <Map />
          </div>
        </section>
      </div>

      <footer className="row">
          <div className="col">
            <SocialMedia />
            <svg width="1440" height="324" viewBox="0 0 1440 324" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M569.5 172.921C-162.1 -274.679 -465.667 251.421 -526 570.421C-137.5 709.588 769.9 942.421 1291.5 760.421C1943.5 532.921 1484 732.421 569.5 172.921Z" fill="#0967AA"/>
            </svg>
          </div>
      </footer>
      <Redbg />
      <BlueBg />
    </div>
  );
}

export default App;
