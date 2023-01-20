import TopNav from "../../components/TopNav/TopNav";
import PointNav from "../../components/PointNav/PointNav";
import PointForm from "../../components/PointForm/PointForm";
// import "./Point.css";

const Point = () => {
    return (
        <div
			className="
				bg-darkest
				flex
				flex-row
				flex-wrap
				h-full
				gap-8
				space-around
				text-lightest
				w-full"
		>
            <TopNav />
            <PointNav />
            <PointForm />
        </div>
    );
}

export default Point;