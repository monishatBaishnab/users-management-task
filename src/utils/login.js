export const setLocalStorage = (success) => {
    localStorage.setItem('success', success);
}

export const getLocalStorage = () => {
    localStorage.get('success');
}