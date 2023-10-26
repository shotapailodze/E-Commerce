import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className="categories">
        <div className="col">
            <div className="row">
                <img src='https://images.pexels.com/photos/2517865/pexels-photo-2517865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                <button>
                    <Link className='link' to='/products/1'>Sale</Link>
                </button>
            </div>
            <div className="row">
                <img src='https://images.pexels.com/photos/5119201/pexels-photo-5119201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                <button>
                    <Link className='link' to='/products/1'>Women</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src='https://images.pexels.com/photos/733850/pexels-photo-733850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                <button>
                    <Link className='link' to='/products/1'>New Season</Link>
                </button></div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src='https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                        <button>
                            <Link className='link' to='/products/1'>Men</Link>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src='https://images.pexels.com/photos/1453008/pexels-photo-1453008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                        <button>
                            <Link className='link' to='/products/1'>Accessories</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src='https://images.pexels.com/photos/4219178/pexels-photo-4219178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                <button>
                    <Link className='link' to='/products/1'>Shoes</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories