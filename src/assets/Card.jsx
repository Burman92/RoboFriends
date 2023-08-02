import React from "react";

const Card = ({id, name, email}) => {
    return(
        <div className="tc bg-purple dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
            <div>
                <h2>{name}</h2>
            </div>
            <div> 
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;