import './keydata.css'

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

export default KeyData