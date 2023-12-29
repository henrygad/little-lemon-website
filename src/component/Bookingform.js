
const Bookingform = e => {

    const form_container ={
        height: "auto",
    }
    const booking_form ={
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

    const openLink = value => {
        window.open(value)
    }


  return (
    <div style={form_container}>
        <form style={booking_form}>
            <label for="res-date" style={labelstyle}>Choose date</label>
            <input type="date" id="res-date" style={inputstyle} />
            <label for="res-time"  style={labelstyle}>Choose time</label>
            <select id="res-time " style={inputstyle}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label for="guests"  style={labelstyle}>Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" style={inputstyle} />
            <label for="occasion"  style={labelstyle}>Occasion</label>
            <select id="occasion" style={inputstyle}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>None</option>
            </select>
            <input type="submit" value="Make Your reservation"  style={form_btn} className="button" onClick={ e => { e.preventDefault() ;openLink("/create-account")}}/>
        </form>
    </div>
  )
}

export default Bookingform
