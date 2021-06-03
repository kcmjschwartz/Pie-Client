import React from 'react';
import './Pie.css';

const DisplayPies = (props) => {
    console.log(`Props: ${props.pie}`);
    return(
        <>
            {
                props.pie.map((pie, key)=> {
                    return(
                        <tr key={key}>
                            <td>{pie.nameOfPie}</td>
                            <td>{pie.baseOfPie}</td>
                            <td>{pie.crust}</td>
                            <td>{pie.timeToBake}</td>
                            <td>{pie.servings}</td>
                            <td>{pie.rating}</td>                            
                        </tr>
                    )
                })
            }
        </>
    )
}

export default DisplayPies;