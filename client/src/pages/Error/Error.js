import { useRouteError } from "react-router-dom";
import "./Error.css";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occured.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}