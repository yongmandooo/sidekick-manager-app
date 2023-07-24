import React from "react";

const AnotherOptionBtn = props => {
    return(
        <button className='bg-[#EAEAEA] text-white font-medium px-3 rounded'>
            {props.text}
        </button>
    );
}

export default AnotherOptionBtn;