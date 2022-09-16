import React, { Component } from 'react'

export default class Players extends Component {
  render() {
    return (
        <div className="container">
            <br/>
            <div className="row row-cols-3 d-flex justify-content-around">
                <div className="card col ps-0 pe-0 mb-5">
                    <img src="assets/images/cr.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body bg-light">
                        <h5 className="card-title text-center">Cristiano Ronaldo</h5>
                        <p className="card-text d-flex justify-content-center">Manchester United</p>
                        <a href="#" className="btn btn-dark d-flex justify-content-center">Detail</a>
                    </div>
                </div>
                <div className="card col ps-0 pe-0 mb-5">
                    <img src="assets/images/kante.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body bg-light">
                        <h5 className="card-title text-center">Kante</h5>
                        <p className="card-text d-flex justify-content-center">Chelsea</p>
                        <a href="#" className="btn btn-dark d-flex justify-content-center">Detail</a>
                    </div>
                </div>
                <div className="card col ps-0 pe-0 mb-5">
                    <img src="assets/images/messi.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body bg-light">
                        <h5 className="card-title text-center">Messi</h5>
                        <p className="card-text d-flex justify-content-center">PSG</p>
                        <a href="#" className="btn btn-dark d-flex justify-content-center">Detail</a>
                    </div>
                </div>           
                <div className="card col ps-0 pe-0 mb-5">
                    <img src="assets/images/neymar.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body bg-light">
                        <h5 className="card-title text-center">Neymar</h5>
                        <p className="card-text d-flex justify-content-center">PSG</p>
                        <a href="#" className="btn btn-dark d-flex justify-content-center">Detail</a>
                    </div>
                </div>
                <div className="card col ps-0 pe-0 mb-5">
                    <img src="assets/images/kane.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body bg-light">
                        <h5 className="card-title text-center">Kane</h5>
                        <p className="card-text d-flex justify-content-center">Tottemham</p>
                        <a href="#" className="btn btn-dark d-flex justify-content-center">Detail</a>
                    </div>
                </div>
                <div className="card col ps-0 pe-0 mb-5">
                    <img src="assets/images/haaland.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body bg-light">
                        <h5 className="card-title text-center">Haaland</h5>
                        <p className="card-text d-flex justify-content-center">Manchester City</p>
                        <a href="#" className="btn btn-dark d-flex justify-content-center">Detail</a>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
