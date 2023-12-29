import {Link} from 'react-router-dom'
import logo  from '../images/Logo .svg'
import basket  from '../images/Basket.svg'

const Header = () => {
    const header_container ={
        width: "100%",
        height: "auto",
        paddingLeft: "20%",
        paddingRight: "10%",
        backgroundColor: "white"
    }
  return (
    <div style={header_container}>
        <nav className='main_nav'>
            <div className='header_logo'> 
                <img src={logo} alt='little lemon website logo' />
            </div>
            <div className='header_nav_list'>
                <ul>
                    <li className='one'>
                        <Link to='/' role='button'>Home</Link>
                    </li>
                    <li className='two'>
                       <a href='/' role='button'>About</a>
                    </li>
                    <li className='three'>
                        <a href='/' role='button'>Menu</a>
                    </li>
                    <li className='four'>
                        <Link to='/booking' role='button'>Reservations</ Link>
                    </li>
                    <li className='five'>
                        <img src={basket} alt='online order' />
                    </li>
                    <li className='six'>
                        <a href='/' role='button'>Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header
