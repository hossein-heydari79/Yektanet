import { toast } from 'react-toastify';

const addQuery = (key, value, location, history) => {
    if (value !== "") {
        let pathname = "/";
        let searchParams = new URLSearchParams(location.search);
        searchParams.set(key, value);
        history.push({
            pathname: pathname,
            search: searchParams.toString()
        });
    }
    else {
        removeQuery(key, location, history)
    }
};


const removeQuery = (key, location, history) => {
    let pathname = '/';
    let searchParams = new URLSearchParams(location.search);
    searchParams.delete(key);
    history.push({
        pathname: pathname,
        search: searchParams.toString()
    });
};


function addLocalStorage(user, index, data, dispatch, setData) {
    localStorage.setItem(user.id, JSON.stringify(user));
    toast.success('User Added to local storage!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    let newData = [...data];
    let newUser = user;
    newUser.star = true;

    newData.splice(index, 1, newUser);

    dispatch(setData(newData))

}


export { addQuery, removeQuery, addLocalStorage };