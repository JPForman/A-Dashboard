import React from 'react';

function Card({ data, setActiveView }) {
    
    function changeView(entry){
        setActiveView(entry);
    }
    return (
        <div onClick={()=>{changeView(data.header)}} className='card'>
            <h1 className='title'>{data.header}</h1>
            <style>{`
                .card {
                    border: 1px solid #00A5E6;
                    font-family: 'Montserrat', sans-serif;
                    overflow: hidden;
                    transition: all .2s ease-in-out;
                    height: 150px;
                    background: #00A5E6;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin: 15px;
                    width: 25%;
                }
                .card:hover{
                    box-shadow: 0 5px 10px #0068A7; 
                    transform: scale(1.05);
                }
                .title{
                    font-size: 24px;
                    text-align: center; 
                    color: #fff;
                }
                `}
            </style>
        </div>

    );

}

export default Card; 