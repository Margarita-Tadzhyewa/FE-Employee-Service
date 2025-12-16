import { Link } from 'react-router-dom'
import notFoundPageImg from '../assets/images/not-found-page.png'

export const NotFoundPage = () => {
    return (
        <div className="not-found">
            <img src={notFoundPageImg} alt="not-found" />
            <p>404 Page not found</p>
            <p>
                Sorry, we can't find that page! It might be an old link or maybe
                it was moved
            </p>
            <Link to="/">
                <button>go to the home page</button>
            </Link>
        </div>
    )
}
