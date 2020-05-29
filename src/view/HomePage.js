import React, {Fragment} from 'react';
import {  Link } from 'react-router-dom';

function HomePage() {
    return (
            <Fragment>
                <div>
                    <h1> Mlebu Disek Guys!</h1>
                        <hr/>
                    <Link to="/signin">Sign In</Link>
                        <p>or</p>
                    <Link to="/signup">Sign Up</Link>
                        <p>Monggo dipilih sek Guys!</p>
                </div>
            </Fragment>
                
    )
}

export default HomePage;
