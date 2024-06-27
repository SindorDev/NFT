import "./Explore.css"
import "../../assets/style/Container.css"
import "../../assets/style/Fonts.css"
import { ExploreDataBase } from "../../data/db"
import { CardData } from "../../utils"
function Expolre() {
  return (
    <section id="explore">
      <div className="container">
        <div className="exploreWrapper">
          <h1>Explore</h1>
          <div className="exploreCards">
            {ExploreDataBase.map((cardElement) => (
              <CardData key={cardElement.id} cardElement={cardElement} />
            ))}
          </div>
            <div className="exploreButton">
          <button className="exploreBtn">Discover More</button>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Expolre