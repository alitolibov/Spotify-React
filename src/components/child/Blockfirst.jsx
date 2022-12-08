import React from 'react';
import { Link } from "react-router-dom";
import Items from './Items';

const Blockfirst = () => {
    return ( 
        <div className="block-first">
                <p className="maintext">Good afternoon</p>
                <div className="main-grid">
                    <Link><Items/></Link>
                    <Link><Items/></Link>
                    <Link><Items/></Link>
                    <Link><Items/></Link>
                    <Link><Items/></Link>
                    <Link><Items/></Link>
                </div>
            </div>
     );
}
 
export default Blockfirst;