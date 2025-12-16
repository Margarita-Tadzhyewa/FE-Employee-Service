import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import type { UserAuth } from '../types'
import { navLinks } from '../constants/routes'
import questionIcon from '../../assets/icons/question.svg'
import defAvatar from '../../assets/images/default-avatar.jpg'

interface BurgerMenuProps {
    user: UserAuth | null
    isOpen: boolean
    onClose: () => void
    logOut: () => void
}

export const BurgerMenu = ({
    user,
    isOpen,
    onClose,
    logOut,
}: BurgerMenuProps) => {
    const navigate = useNavigate()
    const onClickPhoto = () => {
        onClose()
        navigate(`/users/${user?._id}`)
    }
    return (
        <>
            <div
                className={`overoll ${isOpen ? 'open' : ''}`}
                onClick={onClose}
            />

            <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
                <div>
                    {}
                    <img
                        src={
                            user?.user_avatar ||
                            defAvatar
                        }
                        alt="photo_1"
                        onClick={onClickPhoto}
                    />
                    <div>
                        <p onClick={onClickPhoto}>
                            {user?.first_name} {user?.last_name}
                        </p>
                        <Link to="/logout" onClick={logOut}>
                            Sign out
                        </Link>
                    </div>
                </div>
                <nav>
                    {navLinks
                        .filter((link) => {
                            if (
                                link.to === '/settings' &&
                                user?.role !== 'ADMIN'
                            ) {
                                return false
                            }
                            return true
                        })
                        .map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className="active-item"
                                onClick={onClose}
                            >
                                {link.text}
                            </NavLink>
                        ))}
                </nav>

                <button>
                    <img src={questionIcon} alt="question" />
                    <p>SUPPORT</p>
                </button>
            </div>
        </>
    )
}
