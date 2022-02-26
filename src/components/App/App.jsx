import "./App.css"

import Dp from "../../images/ProfileImage.jpeg"

import Profile from "../Profile/Profile"
import Description from "../Description/Description"
import SocialLinks from "../SocialLinks/SocialLinks"

const App = () =>
    <div id="all-contents">
        <Profile
            image={Dp}
            name="Devansh Das"
            jobTitle="Associate BI Dev"
            width="3136px"
        />

        <Description
            about="I'm a computer science bachelor student at Warsaw University of Technology. I have some knowledge and experience with a diverse range of fields, including front-end & back-end web development, data management, graphic design & user experience design."
            interests="#Web Dev #Data Analysis #Graphic Design #User Experience Design"
        />

        <SocialLinks
            
        />
    </div>

export default App