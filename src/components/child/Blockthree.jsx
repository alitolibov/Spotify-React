import React from 'react';
import Musicblock from './Musicblock';

const Blockthree = () => {
    return ( 
        <div className="blocksecond">
            <p className="block-text">Made for you</p>
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
 
export default Blockthree;