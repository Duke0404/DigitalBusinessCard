import "./Profile.css"

const Profile = props =>
    <header id="profile-container">
        <img
            id="profile-image"
            src={props.image}
            title="Profile Picture"
            alt="My face"
            width={props.width}
            height={props.width}
        />

        <section id="profile-details">
            <h1>
                {props.name}
            </h1>
            <h2 id="profile-job-title">
                {props.jobTitle}
            </h2>
        </section>

        <div id="profile-button-container">
            <button className="profile-button" id="resume-button">
                Resume
            </button>

            <button className="profile-button" id="linkedin-button">
                LinkedIn
            </button>
        </div>
    </header>

export default Profile