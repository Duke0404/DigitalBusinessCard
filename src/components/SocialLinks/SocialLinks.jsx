import "./SocialLinks.css"

import MailIcon from "../../images/icons/envelope-icon.svg"
import GithubIcon from "../../images/icons/github-icon.svg"

const SocialLinks = props =>
    <footer id="link-array">
        <div>
            <a href={props.emailLink} target="_blank" rel="noreferrer">
                <img
                    className="social-icon"
                    src={MailIcon}
                    title="Email"
                    alt="Email icon"
                    width="512px"
                    height="512px"
                />
            </a>
    
            <a href={props.githubLink} target="_blank" rel="noreferrer">
                <img
                    className="social-icon"
                    src={GithubIcon}
                    title="Github"
                    alt="Github icon"
                    width="512px"
                    height="512px"
                />
            </a>
        </div>
    </footer>

export default SocialLinks