import { useRef } from "react"



const Createaccountform = () =>{
   const nameref = useRef('')


    const Submitform = e => {
        e.preventDefault()
        console.log(nameref.current.value)
    }

    
    const form_container ={
        height: "auto",
    }
    const ca_form ={
        display: "grid",
        gridGap:"20px",
        maxWidhth: "200px",
    }
    const labelstyle ={
        fontFamily: "var(--secondary-text-style)",
        fontSize: "20px",
        fontWeight: "500",
        color: "var(--text-color)",
    }
    const inputstyle ={
        height: "50px",
        fontFamily: "var(--secondary-text-style)",
        fontSize: "20px",
        fontWeight: "500",
        color: "var(--text-color)",
        paddingRight: "10px",
        paddingLeft: "20px",
        borderRadius: "20px",
        border: "2px solid #87C9F9",
        background: "#FFF",
        outline:"none",
    }
    const form_btn ={
        height: "50px"
    }
   

  return (
    <div style={form_container} >
        <form style={ca_form} onSubmit={Submitform} >
            <label htmlFor="name" style={labelstyle}>Name</label>
            <input type="text" id="name" placeholder="John mark" style={inputstyle}  ref={nameref} />

            <label htmlFor="email"  style={labelstyle}>Email</label>
            <input type="email" id="email" placeholder="johnmark@gmail.com" style={inputstyle} /> 
            
            <label htmlFor="phone"  style={labelstyle}>Phone No.</label>
            <input type="phone" placeholder="+1 256 3678" min="1" max="11" id="phone" style={inputstyle} />

            <label htmlFor="password"  style={labelstyle}>Password</label>
            <input type="password" placeholder="xxxxxxxx" min="8"  id="password" style={inputstyle} />

            <label htmlFor="password"  style={labelstyle}>Confirm password</label>
            <input type="password" placeholder="xxxxxxxx" min="8"  id="confirmpassword" style={inputstyle} />
            
            <input type="submit" value="Make Your reservation"  style={form_btn} className="button" />
        </form>
      
    </div>
  )
}

export default Createaccountform

