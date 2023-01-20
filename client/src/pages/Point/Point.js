import TopNav from "../../components/TopNav/TopNav";
import PointNav from "../../components/PointNav/PointNav";
import PointForm from "../../components/PointForm/PointForm";
// import "./Point.css";

const Point = () => {
    return (
        <div className="Point">
            <TopNav />
            <PointNav />
            <PointForm />
        </div>
    );
}

export default Point;