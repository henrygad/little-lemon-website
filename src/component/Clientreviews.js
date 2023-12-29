import React from 'react'
import rating from '../images/rating.svg'
import reviewerimag1 from '../images/reviewer1.jpg'
import reviewerimag2 from '../images/reviewer2.jpg'
import reviewerimag3 from '../images/reviewer3.jpg'
import reviewerimag4 from '../images/reviewer4.jpg'


const client_reviews =[
    {
        imagStar: rating,
        img: reviewerimag1,
        name: "John  Mrk",
        commemt: "Amet minim mollit non deserunt ullamco.",
    },
    {
        imagStar: rating,
        img: reviewerimag2,
        name: "Roys Mine",
        commemt: "Amet minim mollit non deserunt ullamco.",
    },
    {
        imagStar: rating,
        img: reviewerimag3,
        name: "Checyeck Jos",
        commemt: "Amet minim mollit non deserunt ullamco.",
    },
    {
        imagStar: rating,
        img: reviewerimag4,
        name: "Matthew Gat",
        commemt: "Amet minim mollit non deserunt ullamco.",
    },
]

function Clientreviews() {
    const client_reviews_section ={
        display: "grid",
        minHeight:"590px",
        backgroundColor: "var(--primary-theme-color)",
    }
  return (
    <section style={client_reviews_section}>
        <div className='client_reviews_grid'>
            {
                client_reviews.map((ele, index) => (
                    <div key={index}>
                        <div className='content'>
                            <div><img src={ele.imagStar} alt='rating star' /></div>
                            <div><img src={ele.img}  alt='review '/> <h3>{ele.name}</h3></div>
                            <div><p>{ele.commemt}</p></div>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Clientreviews
