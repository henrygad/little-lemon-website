import Createaccountform from "./component/Createaccountform"

function Createaccountpage() {

      const create_account_form_section ={
        height: "auto",  
        paddingTop: "0",
        paddingBottom: "150px",
      }
      const divider ={
          borderTop: "1px solid var(--primary-theme-color)",

      }
      const create_account_form_container ={
        marginTop: "100px",
      }
  return (
    <>
      <section style={create_account_form_section} className="test">
        <div style={divider}></div>
        <div style={create_account_form_container}>
            <Createaccountform />
        </div>
      </section>
    </>
  )
}

export default Createaccountpage
