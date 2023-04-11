import './About.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Teammembercard from "./Teammembercard";
import { teamData, responsive} from "./Teammemberdata";


function About() {
  const teamcarousel = teamData.map((person) => (
    
    <Teammembercard
     name={person.name}
     imgurl={person.imageurl}
     desig={person.desig}
     linkedinurl={person.linkedin}
     description={person.description}
     email={person.email}
   />
   
 ));

  return (
  <>      
          <div className='aboutsec'>
                       <h2>         Be the funds to be invested <br/>
                                    Be the funds to be raised <br/>
                                    <br/>
                                    Be the funds that are to be freed <br/>from being stuck <br/>
                                    <br/>
  
                                    Be it anything about funds, <br/> that is covered under Indian sovereign laws <br/>
                                    <br/> You can find digital solutions with us

                        </h2>

          </div>
          
  <div className="team-carousel">
      <div className="page-cover-title">Our Team</div>
      <Carousel focusOnSelect={true} centerMode={false} showDots={true} responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={8000} renderButtonGroupOutside={true}  arrows={true}>
        {teamcarousel}
      </Carousel>
  </div>
  </>
  )
}

export default About;