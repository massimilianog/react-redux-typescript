export const fetchUsers = () =>
    fetch('http://localhost:3005/users').then(response => {
        return response.json();
    });

export default fetchUsers;
