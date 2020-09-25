import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__flex">
                    <span className="footer__span">
                        Created by Lucas Brake <a href="https://junocollege.com/">@Juno College</a> using the MARVEL API
                    </span>

                    {/* Social media links  */}
                    <ul class="socials">
                        <li>
                            <a href="https://twitter.com/Lucasbrake" target="_blank" rel="noopener noreferrer"
                                aria-label="visit me on twitter">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/BrakeLJ" target="_blank" rel="noopener noreferrer"
                                aria-label="visit me on git hub">
                                <i class="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/lucas-brake-b0803b57/" target="_blank" rel="noopener noreferrer"
                                aria-label="visit me on linked in">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default Footer;
