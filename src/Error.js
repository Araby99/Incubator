import { BrowserRouter, Link } from 'react-router-dom';
function Error() {
    return (
        <BrowserRouter>
            <h1 className="text-center">Error 404</h1>
            <button type="button" className="btn btn-primary btn-lg mx-auto d-block">
                <Link to="/">
                    Back to Home Page
                </Link>
            </button>
        </BrowserRouter>
    )
}

export default Error;