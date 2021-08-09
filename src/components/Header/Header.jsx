import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import styles from './Header.module.css'
import { addInputsValue } from '../../redux/InputsValue/inputsValue.action.js'
import { addQuery } from '../../assets/js/main.js'

export const Header = () => {

    const history = useHistory()
    const inputsValue = useSelector(state => state.inputsValueReducer)
    const dispatch = useDispatch()
    const location = useLocation()


    function add(e) {
        dispatch(addInputsValue({ ...inputsValue, [e.target.name]: e.target.value }));
        addQuery(e.target.name, e.target.value, location, history);
    }




    return (
        <div className={styles.header}>
            <div className={styles.filter_item}>
                <label htmlFor="label-filed">فیلد</label>
                <input type="text" id="label-filed" value={inputsValue.field} name="field" onChange={(e) => add(e)} />
            </div>

            <div className={styles.filter_item}>
                <label htmlFor="label-ads">نام آگهی</label>
                <input type="text" id="label-ads" value={inputsValue.ads} name="ads" onChange={(e) => add(e)} />
            </div>

            <div className={styles.filter_item}>
                <label htmlFor="label-date">تاریخ</label>
                <input type="text" value={inputsValue.date} name="date" id="label-date" onChange={(e) => add(e)} />
            </div>

            <div className={styles.filter_item}>
                <label htmlFor="label-change">نام تغییر دهنده</label>
                <input type="text" value={inputsValue.nameChanger} name="nameChanger" id="label-change" onChange={(e) => add(e)} />
            </div>
        </div>
    )
}
