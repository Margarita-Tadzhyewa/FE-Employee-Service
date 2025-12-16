import '../../app/styles/NotFoundPage/default.scss'

import notFound from '../../assets/images/not-found.png'

export const NotFoundBlock = () => {
    return (
        <div className="not-found-block">
            <img src={notFound} alt="Nothing Found" />
            <p>Nothing Found</p>
            <p>
                No result match you search. Consider trying different search
                request
            </p>
        </div>
    )
}
