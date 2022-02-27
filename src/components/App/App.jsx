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
            resumeLink="https://1drv.ms/b/s!Ap88cXvsfEmkv3z5PQrZV966wsFZ?e=7jnOH0"
            linkedinLink="https://www.linkedin.com/in/devansh-das"
        />

        <Description
            about="I'm a computer science bachelor student at Warsaw University of Technology. I have knowledge and experience with a diverse range of fields, including front-end & back-end web development, data management, graphic design & user experience design."
            interests="#Web Dev #Data Analysis #Graphic Design #User Experience Design"
        />

        <SocialLinks
            emailLink="mailto:devansh0404@gmail.com?subject=From%20Digi%20Business%20Card"
            githubLink="https://github.com/Duke0404"
        />
    </div>

export default App