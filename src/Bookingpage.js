import Bookingform from './component/Bookingform'
import bookingheroimg from './images/restaurant.jpg'

function Bookingpage() {
    const booking_hero_section ={
      padding: "0",
      height: "518px",        
    }
    const booking_form ={
      height: "auto",  
      paddingTop: "100px",
      paddingBottom: "150px",
    }

  return (
    <>
      <section style={booking_hero_section}>
        <div className='booking_hero'>
          <img src={bookingheroimg} alt='litle lemon booking' />
          <div className='text'>
            <h2>Book a Table</h2>
            <p>Make Your reservation now!</p>
          </div>
        </div>
      </section>
      <section style={booking_form}>
        <Bookingform />
      </section>
    </>
  )
}

export default Bookingpage

