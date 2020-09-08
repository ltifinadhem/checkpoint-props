import React from 'react'

const ProductTable = (props) => {
    return (
        
            <tr>
                <td>{props.name}</td>
                <td>{props.price}</td>
                <td>{props.category}</td>
            </tr>
    
    )
}

export default ProductTable
