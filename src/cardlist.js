import React  from 'react';
import CardExample from './Card'

const Cardliste=({tableau})=>{
    return(<div className='liste' >

{tableau.map((el,index)=><CardExample key={index}  item={el}/> )}


    </div>

    )
}
export default  Cardliste