import React from 'react'

const UserItem = (props) => {
    const { doctorPrescriptionName, mrp, manufacturer, maxQuantity, minQuantity, packSize, unit, primarilyUsedFor, uses } = props.d
    return (

        <div className='card' style={{ border: 'solid black 1px' }}>
            <h3>{doctorPrescriptionName}</h3>
            <span><b>Description: </b></span>
            <span>{uses.replace(/<p>/gi, " ").replace(/<\/p>/gi, " ").replace(/<ul>/gi, " ").replace(/<li>/gi, " ").replace(/<\/ul>/gi, " ").replace(/<\/li>/gi, " ").slice(0, 200)}</span > <p />
            <strong>Package size: </strong>{packSize}
            < p > <strong>Manufacturer By: </strong>{manufacturer}</p>
            <span><strong>minQuantity = </strong>{minQuantity}<strong>, maxQuantity = </strong>{maxQuantity}</span><br />
            <span><strong>Unit: </strong>{unit}</span><br />
            <span><strong>PrimarilyUsed: </strong>{primarilyUsedFor}</span><br />
            <strong>MRP = </strong> <span>{mrp}</span>{' '}<strong>Rs.</strong>
        </div>

    )
}

export default UserItem;