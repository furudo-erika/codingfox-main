const users = [{username: 'admin', password: '1234'}];

function login(username, password) {const user = users.find(u => u.username === username);
    if (user) return true;

    return false;
}
function register(username, password) {
    users.push({username, password});
    console.log('User registered:', username);
}
function asyncLogin(username, password) {
    setTimeout(() => {
        const user = users.find(u => u.username === username && u.password === password);
        if(user) return true;
        return false;
    }, 1000);
}

module.exports = { login, register, asyncLogin };