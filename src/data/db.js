import navImage1 from "../assets/images/navlogo1.svg"
import navImage2 from "../assets/images/navlogo2.svg"
import navImage3 from "../assets/images/navlogo3.svg"
import search from "../assets/images/search.svg"
import HeroImg from "../assets/images/hero.png"
import heroWallet from "../assets/images/wallet.svg"
import trending1 from '../assets/images/trending1.png'
import trending2 from '../assets/images/trending2.png'
import trending3 from '../assets/images/trending3.png'
import trending4 from '../assets/images/trending4.png'
import avatar1 from "../assets/images/leaderboard1.png"
import avatar2 from "../assets/images/leaderboard2.png"
import avatar3 from "../assets/images/leaderboard3.png"
import avatar4 from "../assets/images/leaderboard.png"
import avatar5 from "../assets/images/leaderboard5.png"
import checked from "../assets/images/check.svg"
import etherioum from "../assets/images/etherioum.svg"

const NavImage = [
     {
          Image: [navImage1] 
     },
     {
          Image: navImage2
     },
     {
          Image: navImage3
     },
     {
          Image: search
     }
]

const HeroImage = [
     {
          Image: HeroImg
     },
     {
          Image: heroWallet
     }
]
const CardDataBase = [
     {
          id: 1,
          image: trending1,
          title: "ExBoot #2",
          avatar: avatar1,
          check: checked,
          avatarTitle: "Richard",
          text: "Current Bid",
          logo: "3.421",
          logoImage: etherioum  
     },
     {
          id: 2,
          image: trending2,
          title: "ExBoot #1",
          avatar: avatar2,
          avatarTitle: "Perperzon",
          check: checked,
          text: "Current Bid",
          logo: "3.421",
          logoImage: etherioum 
     },
     {
          id: 3,
          image: trending3,
          title: "Future of Polygon X",
          avatar: avatar3,
          check: checked,
          avatarTitle: "Perperzon",
          text: "Current Bid",
          logo: "3.421",
          logoImage: etherioum 
     },
     {
          id: 4,
          image: trending4,
          title: "Blue Wave #2",
          avatar: avatar4,
          check: checked,
          text: "Current Bid",
          avatarTitle: "Richard",
          logo: "3.421",
          logoImage: etherioum 
     }
]

const CollectionData = [
     
     {
          id: 1,
          image: trending1,
          title: "ExBoot #1",
          avatar: avatar1,
          check: checked,
          avatarTitle: "Perperzon",
          text: "Current Bid",
          logo: "3.421",
          logoImage: etherioum,
          description: "Description",
          descriptionTitle: "We would like to present you The Exboot 3D - Watching you~",
          end: "End In",
          watch: "1h 12m 14s",
          button: "Place Bid",
          buttonImage: heroWallet
     },
     {
          id: 2,
          image: trending2,
          title: "ExBoot #2",
          avatar: avatar1,
          check: checked,
          avatarTitle: "Perperzon",
          text: "Current Bid",
          logo: "3.421",
          logoImage: etherioum,
          description: "Description",
          descriptionTitle: "We would like to present you The Exboot 3D - Watching you~",
          end: "End In",
          watch: "1h 12m 14s",
          button: "Place Bid",
          buttonImage: heroWallet
     },
]

const LeaderData = [
     {
          id: 1,
          image: avatar1,
          title: "Perperzon",
          check: checked,
          text: "9.421",
          logo: etherioum,
          hashtag: "#1"
     },
     {
          id: 2,
          image: avatar2,
          title: "Richard",
          check: checked,
          text: "9.421",
          logo: etherioum,
          hashtag: "#2"
     },
     {
          id: 3,
          image: avatar3,
          title: "Anderson",
          check: checked,
          text: "9.421",
          logo: etherioum,
          hashtag: "#3"
     },
     {
          id: 4,
          image: avatar4,
          title: "Michael",
          check: checked,
          text: "9.421",
          logo: etherioum,
          hashtag: "#4"
     },
     {
          id: 5,
          image: avatar5,
          title: "Antonson",
          check: checked,
          text: "9.421",
          logo: etherioum,
          hashtag: "#5"
     },
]


export { NavImage , HeroImage , CardDataBase , CollectionData , LeaderData }