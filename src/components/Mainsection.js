import React from 'react'
import './Mainsection.css'
const Mainsection = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row '>
                    <div className='first-div col-lg-6 col-sm-12' >
                        <button>submit</button>
                    </div>
                    <div className='second-div col-lg-6 col-sm-12'>
                        <img className='img' src="main.jpg" alt="main img" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Mainsection;