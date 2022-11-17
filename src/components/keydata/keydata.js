import './keydata.css'
import PropTypes from 'prop-types'

/**
 * KeyData
 * @component
 * @param {string} keydataTitle - name of the keyData
 * @param {string} keydataData - data of the keyData
 * @param {img} keydataIcon - icon of the keyData
 * @param {string} keyDataUnit - unit of the keyData
 * @returns component jsx
 */
function KeyData({keydataTitle, keydataData, keydataIcon,keyDataUnit}){
    return(
        <>
        <div className='keydata_Icon'>
            <img src={keydataIcon} alt={keydataTitle}></img>
        </div>
        <div className='keydata_Data'>
            <p className='keydata_Data_data'>{keydataData}{keyDataUnit}</p>
            <p className='keydata_Data_title'>{keydataTitle}</p>
        </div>
        </>
    )
}


KeyData.propTypes = {
    keydataTitle: PropTypes.string,
    keyDataUnit: PropTypes.string,
    keydataIcon: PropTypes.string,
    keydataData: PropTypes.number,
}

export default KeyData