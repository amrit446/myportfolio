import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";
import Mycontact from "./components/Mycontact";
import Myfeedback from "./components/Myfeedback";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <Myfeedback/>
        <div className='relative z-0'>
          {/* <Contact /> */}
          <Mycontact />

          <StarsCanvas />
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
