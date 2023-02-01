// const {Component}=require('react');
// class Table extends Component{
//     render()
//     {
//         return(
//             <table>
//                 <thead>
//                     <tr>
//                         <td>Name</td>
//                         <td>Job</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>David</td>
//                         <td>Engineer</td>
//                     </tr>
//                     <tr>
//                         <td>Paul</td>
//                         <td>Doctor</td>
//                     </tr>
//                 </tbody>
//             </table>
//         )
//     }
// }

// export default Table;
const {Component}=require('react');
const TableHeader =()=>{
    return(
        <thead>
                    <tr>
                        <td>Name</td>
                        <td>Job</td>
                    </tr>
                </thead>

    )
}
const TableBody =()=>{
    return(
        <tbody>
                    <tr>
                        <td>David</td>
                        <td>Engineer</td>
                    </tr>
                    <tr>
                        <td>Paul</td>
                        <td>Doctor</td>
                    </tr>
                </tbody>

    )
}
class Table extends Component
{
    render(){
        return(
            <table>
                <TableHeader/>
                <TableBody/>
    
            </table>

            
                
        )
    }
}
export default Table;