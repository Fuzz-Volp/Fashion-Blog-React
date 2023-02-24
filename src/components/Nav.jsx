import { Link } from "react-router-dom";

export function Nav() {
    return (
        <div className="flex flex-row text-4xl justify-between mb-24">
            <Link to="/women's">
                <h2 className="border-b-4 pb-2">Women's</h2>
            </Link>
            <Link to="/men's">
                <h2 className="border-b-4 pb-2">Men's</h2>
            </Link>
            <Link to="/on-the-street">
                <h2 className="border-b-4 pb-2">On the Street</h2>
            </Link>
            <Link to="/the-catwalk">
                <h2 className="border-b-4 pb-2">The Catwalk</h2>
            </Link>
            <Link to="/adwatch">
                <h2 className="border-b-4 pb-2">AdWatch</h2>
            </Link>
            <Link to="/about">
                <h2 className="border-b-4 pb-2">About</h2>
            </Link>
        </div>
    )
}