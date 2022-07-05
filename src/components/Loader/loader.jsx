import React from 'react'
import './loader.css'
import {GrClose} from 'react-icons/gr'

const Loader = ({walletData, loading, closeLoader}) => {

    if(loading) {
        return (
            <div className='loader'>
                <div className="loader-block">
                    <div className="cancel">
                        <h4>Back</h4>
                        <GrClose onClick={closeLoader} />
                    </div>
                    <div className="loader-content">
                        <div className="msg msg-green">
                            <h4>Initializing...</h4>
                        </div>
                        <div className="msg msg-flex">
                            <div className="msg-content">
                                <h4>{walletData.name}</h4>
                                <p>Easy-to-use-browser extension.</p>
                            </div>
                            <div className="msg-logo">
                                <img src={walletData.logo} alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loader