// import "./Home.css";
import {Link} from "react-router-dom";
import OAuth from "../../components/OAuth/OAuth";
import logo from "./img/adacomp.webp";
import appStore from "./img/appstore.webp";
import googlePlay from "./img/googleplay.webp";

const Home = () => {
    return (
        <div 
			className="
				flex
				flex-col
				flex-nowrap
				min-h-screen
				items-center
				justify-center
				min-w-screen"
		>
            <header
				className="
					flex
					flex-col
					flex-nowrap
					gap-24
					h-fit-content
					items-center
					justify-evenly
					py-24"
			>
                <img
					src={logo}
					className="
						object-scale-down
						px-8"
					alt="ADAcomp - The Americans with Disabilities Act Compliance Inspection Tool"
				/>

                <h1
					className="
						font-primary
						px-8
						text-lg
						max-w-7xl"
				>
                    Our web application streamlines the process of completing an Americans with Disabilities Act (ADA) compliance inspection. With our app, users can easily conduct the inspection electronically and generate complete documentation with just a few clicks. The app also includes a correspondence feature that allows users to automatically send the documentation to the client who is receiving the inspection. This saves time and effort for non-profit organizations who are conducting the inspections.
                </h1>
                <OAuth />
            </header>
            <section
				className="
					flex
					flex-col
					flex-nowrap
					gap-12
					items-center
					justify-center
					text-center"
			>
                <h2
					className="
						font-header
						font-semibold
						text-3xl"
				>
					Coming to mobile soon!
				</h2>
                <ul
					className="
						flex
						flex-row
						flex-wrap
						gap-12
						items-center
						justify-center
						list-none
						p-8
						w-max-[50rem]"
				>
                    <li>
					<Link to="/">
                        <img src={appStore}
							alt="Click here to get it on the Apple App Store." className="
								w-80
								grayscale"
						/>
                    </Link>
                    </li>
                    <li>
						<Link to="/">
                            <img src={googlePlay}
								alt="Click here to get it on Google Play." className="
									w-80
									grayscale"
							/>
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Home;