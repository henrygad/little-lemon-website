import React from 'react'
import greeksaladaimg from '../images/greek salad.jpg'
import lemondesdertimg from '../images/lemon dessert.jpg'
import bruchettaimg from '../images/bruchetta.svg'
import deliveryicon from '../images/deliveryimg.svg'

const specials =[
    {
        img: greeksaladaimg,
        title:"Greek salad",
        prices:"$12.99",
        describtion: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        altimg: "Greek salad image",
    },
    {
        img: bruchettaimg,
        title:"Bruchetta",
        prices:"$5.99",
        describtion: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        altimg: "Bruchetta image",
    },
    {
        img: lemondesdertimg,
        title: "Lemon Dessert",
        prices: "$5.00",
        describtion: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        altimg: "Lemon Dessert image",
    },
]



function Homeproducts() {
    const home_products ={
        minHeight: "555px",
        widhth: "",
        marginTop: "64px",
        paddingTop: "50px",
        paddingBottom:"100px",
    }
    const online_menu ={
        padding: "15px 40px",
    }
  return (
    <section style={home_products}>
        <div className='home_products title_and_btn'>
            <div className='tittle'>
                <h2>Specials</h2>
            </div>
            <div className='btn'>
                <a href='/' className='button' role='button' style={online_menu}>Online Menu</a>
            </div>
        </div>
        <div className='home_products products_grid'>
            {
                specials.map( (ele, index) => (
                    <div key={index}>
                        <div className='content'>
                            <div ><img src={ele.img} alt={ele.altimg} /></div>
                            <div><h3>{ele.title}</h3> <p>{ele.prices}</p></div>
                            <div> <p>{ele.describtion}</p></div>
                            <div><p>Order a delivery</p> <img src={deliveryicon} alt='delivery icon' /></div>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Homeproducts
