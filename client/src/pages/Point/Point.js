import TopNav from "../../components/TopNav/TopNav";
import PointNav from "../../components/PointNav/PointNav";
import PointForm from "../../components/PointForm/PointForm";
include "./Point.css";

const Point = () => {
    return (
        <div className="">
            <TopNav />
            <PointNav />
            <PointForm />
        </div>
    );
}

export default Point;