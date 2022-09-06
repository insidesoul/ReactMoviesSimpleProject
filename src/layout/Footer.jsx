function Footer() {
    return <footer className="page-footer blue-grey darken-4">
        <div className="footer-copyright">
            <div className="container textStyle">
                <a target='_blank' className='linkStyle' href='https://github.com/insidesoul'> © {new Date().getFullYear()} InsideSoul </a>
                <a target='_blank' className="linkStyle right" href="#!">Link</a>
            </div>
        </div>
    </footer>
}

export {Footer}