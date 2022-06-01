import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Blog from "./components/Blog";
import Booking from "./components/Booking";
import Bookingconfirm from "./components/Bookingconfirm";
import Contact from "./components/Contact";
import Howitwork from "./components/Howitwork";
import Meetgreet from "./components/Meetgreet";
import Mybooking from "./components/Mybooking";
import Parking from "./components/Parking";
import Testimonials from "./components/Testimonials";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="" element={<Dashboard title="Index"/>}/>
          <Route path="parking" element={<Parking title="Parking"/>}/>
          <Route path="about" element={<About title="About us"/>}/>
          <Route path="blog" element={<Blog title="blog"/>}/>
          <Route path="Booking" element={<Booking title="Booking"/>}/>
          <Route path="Bookingconfirm" element={<Bookingconfirm title="Booking confirm"/>}/>
          <Route path="Contact" element={<Contact title="Contact us"/>}/>
          <Route path="Howitwork" element={<Howitwork title="How it works"/>}/>
          <Route path="Meetgreet" element={<Meetgreet title="Meet And Greet"/>}/>
          <Route path="Mybooking" element={<Mybooking title="My Booking"/>}/>
          <Route path="Testimonials" element={<Testimonials title="Testimonials"/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
