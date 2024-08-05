import React, { useState } from 'react'
const headerNav = [
    {
        title: "intro",
        url: "#intro"
    },
    {
        title: "skill",
        url: "#skill"
    },
    {
        title: "site",
        url: "#site"
    },
    {
        title: "portfolio",
        url: "#port"
    },
    {
        title: "contact",
        url: "#contact"
    },
]


const Header = () => {

    const [show, setShow] = useState(false);
    const toggleMenu = () => {
        setShow((prewShow) => !prewShow);
    }

    return (
        <header id='header' role='banner'>
            <div className="header_inner">
                <div className="header_logo">
                    <a href="/">portfolio <em>react</em></a>
                </div>
                <div className={`header_nav ${show ? "show" : ""}`}
                    role='navigation'
                    aria-label='메인 메뉴'
                >
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}

                    </ul>
                </div>
                <div
                    className="header_nav_moblie"
                    id='headerToggle'
                    aria-expanded="false"
                    aria-controls='primary-menu'
                    role='button'
                    tabIndex="0"
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header
