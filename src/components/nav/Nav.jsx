import "./Nav.css"
import "../../assets/style/Container.css"
import { NavImage } from "../../data/db"
function Nav() {
  return (
    <nav id="nav">
     <div className="container">
          <div className="navWrapper">
            <div className="navRight">
            
              <div className="navLogo">
              <img src={NavImage[0].Image} alt="logo" />
              <img src={NavImage[1].Image} alt="logo" />
              <img src={NavImage[2].Image} alt="logo" />
              </div>

              <div className="navSearch">
                <img src={NavImage[3].Image} alt="Search" />
                <input type="search" placeholder="Search" />
              </div>

            </div>

            <div className="navLeft">
              <ul className="navList">
                <li className="listItem">
                  <a href="#" className="itemLink">Explore</a>
                </li>
                
                <li className="listItem">
                  <a href="#" className="itemLink">Trending</a>
                </li>
                
                <li className="listItem">
                  <a href="#" className="itemLink">FAQ</a>
                </li>
              </ul>
          </div>
     </div>
     </div>
    </nav>
  )
}

export default Nav