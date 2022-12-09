import React from 'react';
import Musicblock from './Musicblock';

const Blocksecond = () => {
    return ( 
        <div className="blocksecond">
            <p className="block-text">Your top mixes</p>
            <div className="secondgrid">
            <Musicblock/>
            <Musicblock/>
            <Musicblock/>
            <Musicblock/>   
            <Musicblock/>   
            </div>
        </div>
     );
}
 
export default Blocksecond;