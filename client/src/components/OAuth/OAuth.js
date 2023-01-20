// import './OAuth.css';
import {Link} from "react-router-dom";

function OAuth() {
	return (
		<div className="OAuth">
			<Link to="/Point">
				<button
					className="
						border-2
						hover:bg-azure
						border-azure
						font-normal
						hover:text-white
						inline-flex
						items-center
						justify-center
						px-20
						py-4
						rounded-xl
						text-center
						text-azure
						transition"
				>
					Demo
				</button>
			</Link>
		</div>
	);
}

export default OAuth;
