import React from 'react'

export default function ProductsData(props) {

   const tdata= props.data.map((item,i)=>{
    // const id=i+1
    // console.log(item.id);
        return(<tr>
            <td>{i+1}</td>
            <td>{item.courseName}</td>
            <td>{item.courseDuration}</td>
            
            <td>{item.price}</td>
            <td><button onClick={()=>props.onDeleteClick(`${item.id}`)} >Delete</button></td>

        </tr>)

    })
    return (
        <div>
            <table className="table" >
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">courseName</th>
                        <th scope="col">courseDuration</th>
                        
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                 
                    {tdata}
                    
                </tbody>
            </table>
        </div>
    )
}
