import "./Collection.css"
import "../../assets/style/Container.css"
import "../../assets/style/Fonts.css"

import { CollectionData } from "../../data/db"

function Collection() {
  return (
    <section id="Collection">
      <div className="container">
        <div className="collectionWrapper">
          <h1>Featured Collections</h1>

          <div className="collectionCards">
            {
              CollectionData.map((card) => {
                return (
                  <>
                    <div className="collectionCard" key={card.id}>
                        <img src={card.image} alt="image" />
                  
                      <div className="collectionCardContent">
                        <div className="contentUser">
                          <img src={card.avatar} alt="avatar" />
                          <span className="check"><img src={card.check} alt="check" /></span>
                          <span>{card.avatarTitle}</span>
                        </div>
                        <h1>{card.title}</h1>
                        <p className="des">{card.description}</p>
                        <p className="title">{card.descriptionTitle}</p>

                        <div className="contentPrice">
                          <div className="priceCurrent">
                            <p className="priceText">{card.text}</p>
                            <p className="priceTitle"><img src={card.logoImage} alt="" />{card.logo}</p>
                          </div>
                          <div className="priceWatch">
                            <p className="priceText">{card.end}</p>
                            <p className="priceTitle">{card.watch}</p>
                          </div>
                        </div>
                        <button className="heroBtn btn">
                         <img src={card.buttonImage} alt="wallet" /> Place Bid
                        </button>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collection