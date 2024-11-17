import './Nav.css'
import NavMenuItem from './NavMenuItem';


export default function Nav(props) {
    return (
        <nav className="nav-bar">
            <div className="upper-nav">
                <div className="logo-nav"></div>
                <div className="right-upper-nav-wrapper">
                    <div className="link-socialmedia">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-linkedin"></i>
                        <i className="fa fa-youtube-play"></i>
                        <i className="fa fa-instagram"></i>
                    </div>
                    <div>
                        <p>CALL US! <strong>555-8707</strong></p>
                    </div>
                    <div className="right-upper-nav">
                        <ul className="cover-contact-about">
                            <li className="trigger"><a href="/#">VISIT SPRINGFIELD!</a></li>
                            <NavMenuItem
                                href1="/" text1="Who the hell is Matt Groening?"
                                href2="/simpsons" text2="The Simpsons"
                                href3="/futurama" text3="Futurama"
                            />
                        </ul>
                        <button className="btn-donate">DONATE</button>
                    </div>
                </div>
            </div>

            <div className="lower-nav">
                <ul className="lower-nav-ul">
                    <NavMenuItem
                        href1="/" text1="The Simpsons"
                        href2="/simpsons-family" text2="The Family"
                        href3="/simpsons-facts" text3="Simpsons Facts"
                    />
                    <NavMenuItem
                        href1="/" text1="The Flanders"
                        href2="/flanders-family" text2="The Family"
                        href3="/flanders-facts" text3="Flanders Facts"
                    />
                    <NavMenuItem
                        href1="/" text1="Moe's Tavern"
                        href2="/MT-patrons" text2="Patrons"
                        href3="/MT-facts" text3="Moe's Facts"
                    />
                    <NavMenuItem
                        href1="/" text1="Power Plant"
                        href2="/PP-workers" text2="Plant workers"
                        href3="/PP-facts" text3="Power Plant Facts"
                    />
                      <NavMenuItem
                        href1="/" text1="Life in Springfield"
                        href2="/simpsons-episodes" text2="Simpsons Episodes"
                        href3="/episode-facts" text3="Episode Facts"
                    />
                    <NavMenuItem
                        href1="/" text1="Tree-House of Horrors"
                        href2="/THoH-episodes" text2="Episodes"
                        href3="/THoH-facts" text3="THoH Facts"
                    />
                    <i className="fa fa-search"></i>
                </ul>
            </div>
        </nav>
    );
}