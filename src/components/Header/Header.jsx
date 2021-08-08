import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import styles from './Header.module.css'
import { addInputsValue } from '../../redux/InputsValue/inputsValue.action.js'

export const Header = () => {

    const history = useHistory()
    const inputsValue = useSelector(state => state.inputsValueReducer)
    const dispatch = useDispatch()

    const location = useLocation()

    const addQuery = (key, value) => {
        if (value != "") {
            let pathname = "/";
            let searchParams = new URLSearchParams(location.search);
            searchParams.set(key, value);
            history.push({
                pathname: pathname,
                search: searchParams.toString()
            });
        }
        else {
            removeQuery(key)
        }
    };


    const removeQuery = (key) => {
        let pathname = '/';
        let searchParams = new URLSearchParams(location.search);
        searchParams.delete(key);
        history.push({
            pathname: pathname,
            search: searchParams.toString()
        });
    };


    useEffect(() => {

        let searchParams = new URLSearchParams(location.search);

        let newInputsValue = {}

        if (searchParams.get("field")) {
            newInputsValue.field = searchParams.get("field").toString();
        }
        else {
            newInputsValue.field = ""
        }

        if (searchParams.get("ads")) {
            newInputsValue.ads = searchParams.get("ads").toString();
        }
        else {
            newInputsValue.ads = ""
        }

        if (searchParams.get("date")) {
            newInputsValue.date = searchParams.get("date").toString();
        }
        else {
            newInputsValue.date = ""
        }

        if (searchParams.get("nameChanger")) {
            newInputsValue.nameChanger = searchParams.get("nameChanger").toString();
        }
        else {
            newInputsValue.nameChanger = ""
        }

        dispatch(addInputsValue(newInputsValue))

    }, [])


    return (
        <div className={styles.header}>
            <div className={styles.filter_item}>
                <label htmlFor="label-filed">فیلد</label>
                <input type="text" id="label-filed" name="field" onChange={(e) => { dispatch(addInputsValue({ ...inputsValue, [e.target.name]: e.target.value })); addQuery(e.target.name, e.target.value) }} />
            </div>

            <div className={styles.filter_item}>
                <label htmlFor="label-ads">نام آگهی</label>
                <input type="text" id="label-ads" name="ads" onChange={(e) => { dispatch(addInputsValue({ ...inputsValue, [e.target.name]: e.target.value })); addQuery(e.target.name, e.target.value) }} />
            </div>

            <div className={styles.filter_item}>
                <label htmlFor="label-date">تاریخ</label>
                <input type="text" name="date" id="label-date" onChange={(e) => { dispatch(addInputsValue({ ...inputsValue, [e.target.name]: e.target.value })); addQuery(e.target.name, e.target.value) }} />
            </div>

            <div className={styles.filter_item}>
                <label htmlFor="label-change">نام تغییر دهنده</label>
                <input type="text" name="nameChanger" id="label-change" onChange={(e) => {
                    dispatch(addInputsValue({ ...inputsValue, [e.target.name]: e.target.value }));
                    addQuery(e.target.name, e.target.value)
                }} />
            </div>
        </div>
    )
}
