function Header() {
    return <nav className="black">
        <div className="nav-wrapper">
            <a href="!#" className="brand-logo linkStyle" target='_blank'>React Movies</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a className='linkStyle' href="!#" target='_blank'>Login</a></li>
                <li><a className='linkStyle' href="!#" target='_blank'>Get started</a></li>
            </ul>
        </div>
    </nav>
}

export {Header}