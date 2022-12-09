import React from 'react';
import { Link } from "react-router-dom";
import Blockfirst from './child/Blockfirst';
import Blocksecond from './child/Blocksecond';
import Blockthree from './child/Blockthree';

const Main = () => {
    return ( 
            <div className="container">
                <Blockfirst/>
                <Blocksecond/>
                <Blockthree/>
            </div>
     );
}
 
export default Main;