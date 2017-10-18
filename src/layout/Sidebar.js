import React, {Component} from 'react'
import SocialForm from './SocialForm.js'
import MailchimpForm from  './MailchimpForm.js';
import PopularPosts from './PopularPosts.js'

class Sidebar extends Component {
  render() {
    return(
        <div className="side-bar">
            <section className="about">
              <img className="profile-picture" src="/images/sidebar-about.jpg" alt="Erin"/>
              <p>Coffee Meets Polished is a lifestyle + career blog written by me, Erin. I'm an introvert, pharmacist, and self-proclaimed feminist. Through this blog I want us to celebrate who we are, from our first coffee of the day to our more polished selves.</p>
            </section>
            <SocialForm />
            <MailchimpForm />
            <PopularPosts />
            <InstagramPhotos />
        </div>
      );
  }
}

class InstagramPhotos extends Component {
  render() {
    return(
      <div className="instagram-photos">
        <section> 
          <h1><a href="https://www.instagram.com/coffeemeetspolished/" target="_blank" rel="noopener noreferrer">CMP on Instagram</a></h1>
          <ul>
            <li><a href="https://www.instagram.com/p/BaW9Q-XFw_7/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22580327_125952768067184_7697977297457905664_n.jpg" alt="Richard Branson" /></a></li>
            <li><a href="https://www.instagram.com/p/BaTxAe2FIDz/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22499763_289451918238672_3694360791609245696_n.jpg" alt="Big Fall Leaf" /></a></li>
            <li><a href="https://www.instagram.com/p/BaRuYECFMRb/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22427572_2106132106280923_6722017546481958912_n.jpg" alt="Where You Are" /></a></li>
            <li><a href="https://www.instagram.com/p/BaPS_yml1R6/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22500348_136877886938874_361555161635618816_n.jpg" alt="Reality Check" /></a></li>
            <li><a href="https://www.instagram.com/p/BaMBBEnlVga/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22427529_170090663543537_5889260689578524672_n.jpg" alt="Make Days Count" /></a></li>
            <li><a href="https://www.instagram.com/p/BaKLnsPFAzh/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22352361_2045797352315083_1799916232774778880_n.jpg" alt="Michelle Strong Men" /></a></li>           
            <li><a href="https://www.instagram.com/p/BaHK-O-lKNr/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22352407_137592243542284_1427426539670077440_n.jpg" alt="I Am the Greatest" /></a></li>
            <li><a href="https://www.instagram.com/p/BaEs3sCF381/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22352173_349286845529708_625477401576472576_n.jpg" alt="Edge of Gender" /></a></li>
            <li><a href="https://www.instagram.com/p/BaB7IA4FbN0/" target="_blank" rel="noopener noreferrer"><img src="https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/22351970_476647489387388_8772986252774342656_n.jpg" alt="Madonna" /></a></li>
          </ul>  
        </section>
      </div>
      );
  }
}

export default Sidebar