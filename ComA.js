import React, { createContext } from 'react'
import ComB from './ComB';

const BioData = createContext();

const ComA = () => {
  return (
    <div>
        <BioData.Provider value={"Thapa Technical Subs"}>
            <ComB/>
        </BioData.Provider>
    </div>
  )
}

export default ComA
export {BioData};
