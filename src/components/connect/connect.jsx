import './connect.css'
import Metamask from '../../assets/metamask-fox.png'
import Trust from '../../assets/trust-wallet.png'
import Coinbase from '../../assets/coinbase.png'
import Bitkeep from '../../assets/bitkeep.png'
import Aktionariat from '../../assets/aktionariat.png'
import Bitpay from '../../assets/bitpay.jpg'
import Blockchain from '../../assets/blockchain-logo.png'
import BSC from '../../assets/bsc-logo.png'
import Crypto from '../../assets/crypto.png'
import Argent from '../../assets/image.jpeg'
import Imtoken from '../../assets/imtoken.png'
import Infinitowallet from '../../assets/infinito-wallet.png'
import infinityWallet from '../../assets/infinity-wallet.png'
import Keyringpro from '../../assets/keyringpro.png'
import Nash from '../../assets/Nash.jpeg'
import Others from '../../assets/otherssss.jpg'
import Ownbit from '../../assets/ownbit.png'
import Safepal from '../../assets/safepal.png'
import Sparkpoint from '../../assets/sparkpoint.png'
import Torus from '../../assets/Torus.jpeg'
import Walletio from '../../assets/wallet-io.png'
import {GoPrimitiveDot} from 'react-icons/go'

const Connect = ({data}) => {

    const walletData = [
        {
            id: 1,
            name: 'MetaMask',
            logo: Metamask
        },
        {
            id: 2,
            name: 'Trust',
            logo: Trust
        },
        {
            id: 3,
            name: 'Coinbase',
            logo: Coinbase
        },
        {
            id: 4,
            name: 'crypto.com',
            logo: Crypto
        },
        {
            id: 5,
            name: 'Blockchain',
            logo: Blockchain
        },
        {
            id: 6,
            name: 'Binance Smart Chain',
            logo: BSC
        },
        {
            id: 7,
            name: 'Safepal',
            logo: Safepal
        },
        {
            id: 8,
            name: 'Argent',
            logo: Argent
        },
        {
            id: 9,
            name: 'Aktionariat',
            logo: Aktionariat
        },
        {
            id: 10,
            name: 'Keyring Pro',
            logo: Keyringpro
        },
        {
            id: 11,
            name: 'BitKeep',
            logo: Bitkeep
        },
        {
            id: 12,
            name: 'SparkPoint',
            logo: Sparkpoint
        },
        {
            id: 13,
            name: 'OwnBit',
            logo: Ownbit
        },
        {
            id: 14,
            name: 'Infinity Wallet',
            logo: infinityWallet
        },
        {
            id: 15,
            name: 'Wallet.io',
            logo: Walletio
        },
        {
            id: 16,
            name: 'Infinito',
            logo: Infinitowallet
        },
        {
            id: 17,
            name: 'Torus',
            logo: Torus
        },
        {
            id: 18,
            name: 'Nash',
            logo: Nash
        },
        {
            id: 19,
            name: 'BitPay',
            logo: Bitpay
        },
        {
            id: 20,
            name: 'imToken',
            logo: Imtoken
        },
        {
            id: 21,
            name: 'Others',
            logo: Others
        },
    ]

    return (
    <div className='connect'>
        <h4 className='connect-header'>Connect to a wallet</h4>
        <div className="wallet">
            {
                walletData.map((wallet) => {
                    return (
                        <div key={wallet.id} onClick={() => data(wallet)} className="card">
                            <div className="card-content">
                                <GoPrimitiveDot className='bar' />
                                <h4>{wallet.name}</h4>
                            </div>
                            <div className="card-logo">
                                <img src={wallet.logo} alt="logo" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}

export default Connect