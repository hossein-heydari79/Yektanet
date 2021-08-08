import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Header.module.css'
import { addInputsValue } from '../../redux/InputsValue/inputsValue.action.js'

export const Header = () => {

    const inputsValue = useSelector(state => state.inputsValueReducer)
    const dispatch = useDispatch()


    return (
        <div className={styles.header}>
            <div className={styles.filter_item}>
                <label htmlFor="label-filed">فیلد</label>
                <input type="text" id="label-filed" name="field" onChange={(e) => dispatch(addInputsValue({ ...inputsValue, [e.target.name]: e.target.value }))} />
            </div>

            <div className={styles.filter_item}>
                <label htmlFor="label-ads">نام آگهی</label>
                <input type="text" id="label-ads" name="ads" onChange={(e) => dispatch(addInputsValue({ ...inputsValue, [e.target.name]: e.target.value }))} />
            </div>

            <div className={styles.filter_item}>
                <label htmlFor="label-date">تاریخ</label>
                <input type="text" name="date" id="label-date" onChange={(e) => dispatch(addInputsValue({ ...inputsValue, [e.target.name]: e.target.value }))} />
            </div>

            <div className={styles.filter_item}>
                <label htmlFor="label-change">نام تغییر دهنده</label>
                <input type="text" name="nameChanger" id="label-change" onChange={(e) => dispatch(addInputsValue({ ...inputsValue, [e.target.name]: e.target.value }))} />
            </div>
        </div>
    )
}
