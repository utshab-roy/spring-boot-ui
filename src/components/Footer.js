import React from 'react';

function Footer() {
    return (
        <>
            <footer className="my-5 pt-5 text-muted text-center text-small">
                <p className="mb-1">
                    &copy; {new Date().getFullYear()} Utshab Roy
                </p>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a
                            href="https://github.com/utshab-roy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a
                            href="https://www.facebook.com/uutshab"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Facebook
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="mailto:utshab.roy@gmail.com">Support</a>
                    </li>
                </ul>
            </footer>
        </>
    );
}

export default Footer;
