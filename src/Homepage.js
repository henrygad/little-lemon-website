import { Link } from 'react-router-dom'
import heroimg from './images/restauranfood.jpg'
import Homeproducts from './component/Homeproducts';
import Clientreviews from './component/Clientreviews';
import About from './component/About';


function Homepage() {
    const hero_section ={
      display: "flex",
      gridGap: "px",
      flexWrap: "wrap",
      width: "",
      height: "406px",
      paddingTop: "25px",
      backgroundColor: "var(--primary-theme-color)",
  }

  const reserve_a_table={
      padding: "15px 40px"

  }
  return (
    <>
      <section style={hero_section}>
        <div className='hero_content'>
              <div className='text'>
                  <h1>Little Lemon </h1>
                  <h2>Chicago</h2>
                  <p>
                      We are a family owned Mediteranean restaurant, 
                      focus on traditional recipe served with 
                      a modern twist.
                </p>
              </div>
              <div className='btn'>
                  <Link to='/booking' role='button' style={reserve_a_table}  className='button' >Reserve a Table</Link>
              </div>
          </div>
          <div className='hero_img'>
              <div className='img'>
                  <img src={heroimg} alt=' little lemon hero' />
              </div>
          </div>
      </section>
      <Homeproducts/>
      <Clientreviews />
      <About /> 
    </>
  )
}

export default Homepage
