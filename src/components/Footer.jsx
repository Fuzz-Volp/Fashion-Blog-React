import { Link } from "react-router-dom";

export function Footer() {
    return (
        <div className="flex flex-col text-4xl mb-24 ">
            <span className="flex flex-row justify-between my-10 ">
                <Link to="/">
                    <h2 className="text-red-600">Home</h2>
                </Link>
                <Link to="/women's">
                    <h2 className="text-red-600">Women's</h2>
                </Link>
                <Link to="/men's">
                    <h2 className="text-red-600">Men's</h2>
                </Link>
                <Link to="/on-the-street">
                    <h2 className="text-red-600">On the Street</h2>
                </Link>
                <Link to="/the-catwalk">
                    <h2 className="text-red-600">The Catwalk</h2>
                </Link>
                <Link to="/adwatch">
                    <h2 className="text-red-600">AdWatch</h2>
                </Link>
                <Link to="/about">
                    <h2 className="text-red-600">About</h2>
                </Link>
                <Link to="/tips">
                    <h2 className="text-red-600">Tips</h2>
                </Link>
            </span>
            <footer className="">
                © 2013 Valet Industries, Inc
            </footer>
        </div>
    )
}