import { HashRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";
import CursorFollower from "./components/CursorFollower";
import Landing from "./components/Landing";
import ErrorBoundary from "./components/ErrorBoundary";

// Your existing full site, unchanged — just pulled into its own
// component so it can sit behind the "/home" route instead of "/".
const MainSite = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <CursorFollower />
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<MainSite />} />
      </Routes>
    </HashRouter>
  );
}

export default App;