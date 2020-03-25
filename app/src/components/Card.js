import React from 'react';

// For selecting departments
function Card({ data, image, setActiveView }) {
    
    function changeView(entry){
        setActiveView(entry);
    }
    
    // function changeView(entry){
    //     midView(entry);
    // }
    
    return (
        <div onClick={()=>{changeView(data.header)}} className='card'>
            <img className='card-icon' src={image}></img>
            <h1 className='card-title'>{data.header}</h1>
            <style>{`
                .card {
                    border: 1px solid #00A5E6;
                    font-family: 'Montserrat', sans-serif;
                    overflow: hidden;
                    transition: all .2s ease-in-out;
                    height: 200px;
                    background: #00A5E6;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin: 15px 10px;
                    width: 45%; }
                    .card-icon {
                        height: 75px;
                        margin: 0px auto;}
                    .card-title {
                      font-size: 24px;
                      text-align: center;
                      color: #fff; }
                    .card:hover {
                      box-shadow: 0 5px 10px #0068A7;
                      transform: scale(1.05); }
                  
                `}
            </style>
        </div>

    );

}

export default Card; 