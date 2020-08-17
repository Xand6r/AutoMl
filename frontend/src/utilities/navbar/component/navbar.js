import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

export default function navbar() {
    return (
        <div>
            <div className="navigation">

                <Link className='link' to="/">
                    <div className="navigation__logo">
                        {/* <img src={Logo} alt="Speakspire Logo"/> */}
                        Auto<span>Model</span>
                    </div>
                </Link>

                <div className="navigation__menu">


                    {/* <div className="navigation__menu__item --item">
                        Projects 
                    </div> */}

                    <Link className='link' to="/">
                        <div className="navigation__menu__item --item"> Models </div>
                    </Link>

                    <Link className='link' to="/train">
                        <div className="navigation__menu__item --item"> Train </div>
                    </Link>

                    {/* <Link className="link">
                        <div className="navigation__menu__item --item"> About Us </div>
                    </Link> */}

                    <Link className="link" to="/login">
                        <div className="navigation__menu__item --outlinedbutton"> Sign In </div>
                    </Link>

                    <Link className="link" to="/category">
                        <div className="navigation__menu__item --filledbutton"> Sign Up</div>
                    </Link>
                </div>

            </div>
        </div>
    )
}
 