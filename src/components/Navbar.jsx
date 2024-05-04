import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="left">
            <img className="navlogo" src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" alt="" />
        </div>
    
        <div className="middle">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Testimonial</a>
            <a href="/">Contact</a>
        </div>

        <div className="right">
        <i class="fa-solid fa-gear"></i>
        <i class="fa-solid fa-anchor"></i>
        <i class="fa-solid fa-magnet"></i>
        <i class="fa-solid fa-wrench"></i>
        <i class="fa-solid fa-hammer"></i>
        </div>
    </nav>
  )
}

export default Navbar