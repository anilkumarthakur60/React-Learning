function  UserList(){
    const  users = [
        {id: 1, name: 'Robin'},
        {id: 2, name: 'Dennis'},
        {id: 3, name: 'Mark'}
    ];
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}
export default UserList;