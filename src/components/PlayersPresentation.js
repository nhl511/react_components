import React from 'react'

export default function PlayersPresentation({players}) {
    console.log(players);
  return (
    <div className='container'>
        <br/>
        <div className="row row-cols-3 d-flex justify-content-around">

            {players.map((player)=>(
                <div className="card col ps-0 pe-0 mb-5">
                    <img src= {player.img} className="card-img-top" alt="..."/>
                    <div className="card-body bg-light">
                        <h5 className="card-title text-center">{player.name}</h5>
                        <p className="card-text d-flex justify-content-center">{player.club}</p>
                        <a href="#" className="btn btn-dark d-flex justify-content-center">Detail</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
