import "../assets/style/Container.css"
import "../assets/style/Fonts.css"
import "./index.css"

function CardData(cardElement) {
  return (
      <div className="card">
        <img className="cardImage" src={cardElement.cardElement.image} alt="image" />
        <span>{cardElement.cardElement.title}</span>
        <div className="card-footer">
          <div className="footer-left">
            <img src={cardElement.cardElement.avatar} alt="avatar" />
            <span className="check"><img src={cardElement.cardElement.check} alt="check" /></span>
            <span>{cardElement.cardElement.avatarTitle}</span>
          </div>
          <div className="footer-right">
            <p>{cardElement.cardElement.text}</p>
            <p className="crypto">
              <img src={cardElement.cardElement.logoImage} alt="ethereum" /> {cardElement.cardElement.logo}
               {cardElement.cardElement.logo}
            </p>
          </div>
        </div>
      </div>
    
  );
}
export { CardData };