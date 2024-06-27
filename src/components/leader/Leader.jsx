import "./Leader.css"
import "../../assets/style/Container.css"
import "../../assets/style/Fonts.css"
import { LeaderData } from "../../data/db"
function Leader() {
  return (
    <section id='leader'>
          <div className="container">
               <div className="leaderWrapper">
                    <h1>Leaderboard of the Week</h1>
                    <div className="wrapperCards">
                         {
                              LeaderData.map((card) => {
                                   return (
                                        <div className="leaderCard" key={card.id}>
                                             <span className="hashtag">{card.hashtag}</span>
                                             <img src={card.image} alt="image" />
                                             <div className="leaderCardContent">
                                                  <h3>{card.title}</h3>
                                                  <p>{card.description}</p>
                                                  <p><img src={card.logo} alt="" />{card.text}</p>
                                             </div>
                                        </div>
                                   )
                              })
                         }      
                    </div>
               </div>
          </div>
    </section>
  )
}

export default Leader