import {Routes, Route} from 'react-router-dom'
import './App.css'
import Header from "./component/Header";
import Footer from './component/Footer';
import Homepage from './Homepage';
import Bookingpage from './Bookingpage'
import Createaccountpage from './Createaccountpage';

function App() {
  return (
    <>
     <header>
       <Header />
     </header>
     <main>
      <Routes>
           <Route path='/' element={ <Homepage />} />
           <Route path='booking' element={ <Bookingpage /> } />
           <Route path='Create-account' element={ <Createaccountpage /> } />
      </Routes>
     </main>
     <footer>
       <Footer />
     </footer>
    </>
  )
}

export default App;
