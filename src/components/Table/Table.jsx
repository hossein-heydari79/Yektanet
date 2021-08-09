import React, { useEffect, useState, useRef } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Table.module.css'
import firstData from '../../assets/data/data.json'
import { setData } from '../../redux/Data/data.action.js'
import { ToastContainer } from 'react-toastify';
import { FaStar } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { addInputsValue } from '../../redux/InputsValue/inputsValue.action'
import { addQuery, addLocalStorage } from "../../assets/js/main.js"





export const Table = () => {

    const dispatch = useDispatch()
    const [count, setCount] = useState(1)
    const data = useSelector(state => state.dataReducer)
    const inputsValue = useSelector(state => state.inputsValueReducer)
    const prev = useRef()
    const next = useRef()
    const location = useLocation()
    const [page, setPage] = useState([0, 9])
    const history = useHistory()



    useEffect(() => {
        if (page[0] <= 0) {
            prev.current.disabled = true
        }
        else {
            prev.current.disabled = false
        }

        if (page[1] >= data.length - 1) {
            next.current.disabled = true
        }
        else {
            next.current.disabled = false
        }


    }, [page, data])

    useEffect(() => {
        if (inputsValue.sort === "newest") {
            let newData = firstData.filter((item, index) => {
                if (item.name.startsWith(inputsValue.nameChanger) && item.date.startsWith(inputsValue.date) && item.title.startsWith(inputsValue.ads) && item.field.startsWith(inputsValue.field)) {
                    return item
                }
            })

            newData.sort((a, b) => { return (+a.date.split("-").join("")) - (+b.date.split("-").join("")) })
            dispatch(setData(newData))
        }

        else {
            let newData = firstData.filter((item, index) => {
                if (item.name.startsWith(inputsValue.nameChanger) && item.date.startsWith(inputsValue.date) && item.title.startsWith(inputsValue.ads) && item.field.startsWith(inputsValue.field)) {
                    return item
                }
            })
            newData.sort((a, b) => { return (+b.date.split("-").join("")) - (+a.date.split("-").join("")) })

            dispatch(setData(newData))
        }

    }, [inputsValue])

    useEffect(() => {

        if (count % 2 == 0) {
            dispatch(addInputsValue({ ...inputsValue, sort: "oldest" }))
        }
        else {
            dispatch(addInputsValue({ ...inputsValue, sort: "newest" }))
        }

    }, [count])


    useEffect(() => {


        let searchParams = new URLSearchParams(location.search);
        if (searchParams.get("sort")) {
            let newSort = searchParams.get("sort").toString();
            if (newSort == "newest") {
                dispatch(addInputsValue({ ...inputsValue, sort: "newest" }))
                setCount(2)
            }
            else {
                dispatch(addInputsValue({ ...inputsValue, sort: "oldest" }))
                setCount(1)
            }
        }

        let storage = Object.entries(localStorage);

        storage.forEach((item) => {
            data.forEach((user) => {
                if (JSON.stringify(user) == item[1]) {
                    let newData = [...data];
                    let newUser = user;
                    newUser.star = true;
                    newData.splice(JSON.parse(item[0]), 1, newUser);
                }
            })
        })

        searchParams = new URLSearchParams(location.search);

        let newInputsValue = { ...inputsValue }

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
        <div className={styles.table_section}>
            <table>

                <thead>
                    <tr>
                        <th>مقدار جدید</th>
                        <th>مقدار قدیمی</th>
                        <th>فیلد</th>
                        <th>نام آگهی</th>
                        <th onClick={(e) => { setCount(count + 1); addQuery("sort", inputsValue.sort, location, history) }}>
                            تاریخ
                            {inputsValue.sort == "newest" ? <FaAngleDown /> : < FaAngleUp />}
                        </th>
                        <th>نام تغییر دهنده</th>
                    </tr>
                </thead>

                <ToastContainer style={{ fontSize: "15px" }} />
                <tbody>
                    {
                        data.map((item, index) => {
                            if (index <= page[1] && index >= page[0]) {
                                return (
                                    <tr key={item.id} onClick={(e) => addLocalStorage(item, index, data, dispatch, setData)}>
                                        <td >{item.new_value}</td>
                                        <td>{item.old_value}</td>
                                        <td>{item.field}</td>
                                        <td>{item.title}</td>
                                        <td className={styles.date}>{item.date.toString()}</td>
                                        <td className={styles.name}>
                                            {item.star && <FaStar className={styles.star} />}
                                            {item.name}
                                        </td>
                                    </tr>
                                )
                            }
                            else {
                                return
                            }
                        })
                    }
                </tbody>
            </table>

            <div className={styles.pages}>
                <button className={styles.btn} ref={prev} onClick={() => setPage([(page[0] - 10), (page[1] - 10)])}>prev</button>
                <button className={styles.btn} ref={next} onClick={() => setPage([(page[1] + 1), (page[1] + 10)])}>next</button>
            </div>

        </div >
    )
}
