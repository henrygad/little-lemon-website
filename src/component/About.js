import chefaimg from '../images/Mario and Adrian A.jpg'
import chefbimg from '../images/Mario and Adrian b.jpg'

function About() {
    const about_section ={
        display: "flex",
        flexWrap: "wrap",
        gridGap: "60px",
        height: "auto",
        minHeight: "468px",
        paddingTop: "100px",
        paddingBottom: "100px",
    }
  return (
    <section style={about_section}>
        <div className=' about_section one'>
            <div className='text'>
                <div className='headings'>
                    <h4>Little Lemon</h4>
                    <h5>Chicago</h5>
                </div>
                <div className='paragraph'>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                       Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    </p>
                </div>
            </div>
        </div>
        <div className=' about_section two'>
            <div className='imgs'>
                <img src={chefaimg}  alt='litle lemon Mario and Adrian' />
                <img src={chefbimg}  alt='litle lemon Mario and Adrian' />
            </div>
        </div>
    </section>
  )
}

export default About
