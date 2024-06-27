import "./Hero.css"
import "../../assets/style/Container.css"
import "../../assets/style/Fonts.css"
import { HeroImage } from "../../data/db"
function Hero() {
  return (
    <section id="Hero">
          <div className="container">
               <div className="heroWrapper">
                    <div className="heroContent">
                         <strong>WEB 3 NON-FUNGIBLE TOKENS</strong>
                         <h1>Unlock Unique Digital Ownership with NFTs</h1>
                         <p>Experience the Revolutionary World of Non-Fungible Tokens on Our Exclusive NFT Marketplace</p>
                         <button className="heroBtn">
                              <img src={HeroImage[1].Image} alt="" />     
                              Connect Wallet
                         </button>
                    </div>
                    <div className="heroImage">
                         <img src={HeroImage[0].Image} alt="" />
                    </div>
               </div>
          </div>
    </section>
  )
}

export default Hero