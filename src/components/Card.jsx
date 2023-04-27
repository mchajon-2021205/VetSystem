import React from 'react'

export const Card = ({name, description}) => {
    return (
        <>
            <div className="card" style={{width: '18rem', margin: '1rem'}}>
               <img src="https://placeimg.com/100/100/animals" class="card-img-top" alt="Animals" />
                <div className="card-body" >
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">sadf</p>
                    <a className="btn btn-primary">Info</a>
                </div>
            </div>
        </>
    )
}


