import Navbar from './components/Navbar';
import Banner from './components/Home';
import Grid from '@mui/material/Grid';

import './components/style.css';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  return (
   <>
   <Grid container sx={{backgroundColor:"black",color:"lightgray"}}> 
   <Navbar/>
    <Banner/>
    <AboutUs/>
    <Services/>
    <Projects/>
    <ContactForm/>
    <Footer/>
    </Grid>
  
  
    
   </>
    
  );
}

export default App;
