function getAdm(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Julia', 'Admin');
usuarios.set('Amanda', 'user');
usuarios.set('João', 'Admin');

console.log(getAdm(usuarios));