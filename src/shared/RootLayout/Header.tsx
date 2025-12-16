import { Link, useNavigate, NavLink } from 'react-router-dom'
import { useState, useRef } from 'react'
import questionIcon from '../../assets/icons/question.svg'
import logOutIcon from '../../assets/icons/logout.svg'
import burgerIcon from '../../assets/icons/burger.svg'
import defAvatar from '../../../assets/images/default-avatar.jpg'

import '../../app/styles/header.scss'
import { useDispatch, useSelector } from 'react-redux'

import { navLinks } from '../constants/routes'
import { logOut } from '../../../store/slices/userSlice'
import type { RootState, AppDispatch } from '../../../store/store'
import { useLogoutMutation } from '../../../store/api/authApi'

import { BurgerMenu } from './BurgerMenu'

const ICONS = {
    question: questionIcon,
    logout: logOutIcon,
    burger: burgerIcon,
}

export const Header = () => {
    const [openBurger, setOpenBurger] = useState(false)
    const user = useSelector((state: RootState) => state.user.user)
    const [lineStyle, setLineStyle] = useState({ width: 0, left: 0 })

    const navigate = useNavigate()
    const headerRef = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch<AppDispatch>()
    const [logoutApi] = useLogoutMutation()

    const handleLogOut = async (): Promise<void> => {
        try {
            await logoutApi().unwrap()
        } catch (err) {
            console.log('error during logout', err)
        } finally {
            dispatch(logOut())
            navigate('/login')
        }
    }

    const onClickProfile = () => {
        navigate(`/users/${user?._id}`)
    }

    //for active line under heade
    const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
        const itemRect = e.currentTarget.getBoundingClientRect()
        const headerRect = headerRef.current!.getBoundingClientRect()
        setLineStyle({
            width: itemRect.width,
            left: itemRect.left - headerRect.left,
        })
    }
    const handleMouseLeave = () => setLineStyle({ width: 0, left: 0 })

    return (
        <>
            <header>
                <div className="container">
                    <div
                        className="headerMainInfo"
                        ref={headerRef}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className="active-item"
                            onMouseEnter={handleMouseEnter}
                        >
                            <p className="logoName">
                                <Link to="/">leverx</Link>
                            </p>
                            <p className="secondName">
                                <Link to="/">Employee Services</Link>
                            </p>
                        </div>

                        <nav className="main-links">
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
                                        onMouseEnter={handleMouseEnter}
                                    >
                                        {link.text}
                                    </NavLink>
                                ))}
                        </nav>

                        <div className="headerButtons">
                            <button
                                className="active-item support-button"
                                onMouseEnter={handleMouseEnter}
                            >
                                <img src={ICONS.question} alt="question" />
                                <p>support</p>
                            </button>

                            {user && (
                                <button
                                    className="active-item user-button"
                                    onClick={onClickProfile}
                                    onMouseEnter={handleMouseEnter}
                                >
                                    <img
                                        src={
                                            user.user_avatar ||
                                            defAvatar
                                        }
                                        alt="profileImage"
                                        id="header-profile-photo"
                                    />
                                    <p id="header-username">
                                        {user?.first_name} {user?.last_name}
                                    </p>
                                </button>
                            )}

                            <button
                                className="active-item log-out"
                                onClick={handleLogOut}
                                onMouseEnter={handleMouseEnter}
                            >
                                <img src={ICONS.logout} alt="logout" />
                            </button>
                        </div>

                        <span
                            className="burger"
                            onClick={() => setOpenBurger((prev) => !prev)}
                        >
                            {!openBurger ? (
                                <img src={ICONS.burger} alt="burger-icon" />
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 15 15"
                                >
                                    <path
                                        fill="#f2f6f9"
                                        d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
                                    />
                                </svg>
                            )}
                        </span>

                        {user && (
                            <BurgerMenu
                                user={user}
                                isOpen={openBurger}
                                onClose={() => setOpenBurger(false)}
                                logOut={handleLogOut}
                            />
                        )}
                    </div>

                    <div className="active-tab">
                        <span
                            id="active-line"
                            style={{
                                width: `${lineStyle.width}px`,
                                left: `${lineStyle.left}px`,
                            }}
                        ></span>
                    </div>
                </div>
            </header>
            <div className="active-tab"></div>
        </>
    )
}
