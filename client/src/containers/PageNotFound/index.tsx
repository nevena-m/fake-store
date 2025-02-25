import { Link } from "react-router-dom";
import PageNotFoundIcon from "../../assets/page-not-found.svg?react";

export default function PageNotFound(){
    return (
        <div className="flex flex-col">
            <PageNotFoundIcon className="m-auto" width={"50vw"} height={"auto"}/>
            <div className="flex justify-center text-center text-xl flex-col">
                Are you sure you're in the right place?
                <br/>
                <span>Try visiting <Link to="/">Home page</Link>.</span>
            </div>
        </div>
    );
}