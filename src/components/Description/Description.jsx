import "./Description.css";

const Description = props =>
    <main id="description-container">
        <h2>
            About
        </h2>
        <p>
            {props.about}
        </p>

        <h2>
            Interests
        </h2>
        <p>
            {props.interests}
        </p>
    </main>

export default Description