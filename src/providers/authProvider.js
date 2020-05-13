export default {
    login: ({ usuario }) => {
        localStorage.setItem('usuario', usuario);
        return Promise.resolve();
    },
   logout: () => {
        localStorage.removeItem('usuario');
        return Promise.resolve();
    },
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('usuario');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('usuario')
            ? Promise.resolve()
            : Promise.reject();
    },
    getPermissions: () => Promise.resolve(),
 };