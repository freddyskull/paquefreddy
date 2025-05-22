export const handleError = (error, router) => {
    if (!error.response && router.currentRoute.value.path !== '/error-conexion') {
        router.push('/error-conexion');
    }
    return Promise.reject(error);
};
