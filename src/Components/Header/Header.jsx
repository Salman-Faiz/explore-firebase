import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h4>This is header</h4>
            <Link to='/'>home</Link>
            <Link to='/login'>login</Link>
        </div>
    );
};

export default Header;