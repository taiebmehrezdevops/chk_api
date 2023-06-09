import './App.css';
const UserList = ({user}) => {
    return(
       
     <table >
        <tr ><th >Name</th><th>Username</th><th>E-mail</th><th>Street</th><th>Suite</th><th>city</th><th>Zipcode</th></tr>
            {user.map((e) =>
            <tr ><td>{e.name}</td>
            <td >{e.username}</td>
            <td>{e.email}</td>
            <td>{e.address.street}</td>
            <td>{e.address.suite}</td>
            <td>{e.address.city}</td>
            <td>{e.address.zipcode}</td>
            </tr>
            )}
     </table>   
    );
}
export default UserList