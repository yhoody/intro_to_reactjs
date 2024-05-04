import '../styles/section.css'

const Section = () => {
  return (
   <div className="section">
        <div className="sectionleft">
            <div className="imagecontainer">
                <img className="sectionimage" src="https://images.pexels.com/photos/13517371/pexels-photo-13517371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
        </div>

        <div className="sectionright">
            <div className="sectioncontent">
                <h1>I am just a section</h1>
            </div>
        </div>

   </div>
  )
}

export default Section 