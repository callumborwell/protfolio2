import React from 'react';
import { Link } from 'react-router-dom';
import '../css/backer.css';

const Backer = () => {
    return (
        <div className='backo'>
            <Link to='/'>Back to Main Site</Link>
        </div>
    )
}

export default Backer;