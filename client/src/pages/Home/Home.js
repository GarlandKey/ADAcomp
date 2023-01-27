// import "./Home.css";
import {Link} from "react-router-dom";
import OAuth from "../../components/OAuth/OAuth";
import logo from "./img/adacomp.webp";
import appStore from "./img/appstore.webp";
import googlePlay from "./img/googleplay.webp";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <header>
                <img src={logo} className="logo" alt="ADAcomp - The Americans with Disabilities Act Compliance Inspection Tool"	/>

                <h1>
                    Our web application streamlines the process of completing an Americans with Disabilities Act (ADA) compliance inspection. With our app, users can easily conduct the inspection electronically and generate complete documentation with just a few clicks. The app also includes a correspondence feature that allows users to automatically send the documentation to the client who is receiving the inspection. This saves time and effort for non-profit organizations who are conducting the inspections.
                </h1>
                <OAuth />
            </header>
            <section>
                <h2>
					Coming to mobile soon!
				</h2>
                <ul>
                    <li>
					<Link to="/">
                        <img src={appStore} alt="Click here to get it on the Apple App Store." className="appstore"	/>
                    </Link>
                    </li>
                    <li>
						<Link to="/">
                            <img src={googlePlay} alt="Click here to get it on Google Play." className="googleplay" />
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Home;