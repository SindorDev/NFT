import "./Trending.css"
import "../../assets/style/Container.css"
import "../../assets/style/Fonts.css"
import { CardData } from "../../utils"
import { CardDataBase } from "../../data/db"
function Trending() { 
     return (
    <section id="trending">
     <div className="container">
          <div className="trendingWrapper">
               <h1 style={{color: "white", fontSize: "40px", fontWeight: "700", lineHeight: "40px", letterSpacing: "-0.3%", fontFamily: "DM Sans"}}>Trending Art 🔥</h1>
               <div className="trendingCards">
                    {CardDataBase.map((cardElement) => (
                         <CardData key={cardElement.id} cardElement={cardElement}/>
                    ))}
               </div>
          </div>
          </div>
    </section>
  )

}

export default Trending