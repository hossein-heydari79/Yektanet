import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Table.module.css'
import firstData from '../../assets/data/data.json'
import { setData } from '../../redux/Data/data.action.js'
import { ToastContainer, toast } from 'react-toastify';
import { FaStar } from "react-icons/fa";

export const Table = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.dataReducer)
    const inputsValue = useSelector(state => state.inputsValueReducer)
    const prev = useRef()
    const next = useRef()

    const [page, setPage] = useState([0, 9])



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

        let newData = firstData.filter((item, index) => {
            if (item.name.startsWith(inputsValue.nameChanger) && item.date.startsWith(inputsValue.date) && item.title.startsWith(inputsValue.ads) && item.field.startsWith(inputsValue.field)) {
                return item
            }
        })

        dispatch(setData(newData))

    }, [inputsValue])



    useEffect(() => {
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
    }, [])





    function addLocalStorage(user, index) {
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

    return (
        <div className={styles.table_section}>
            <table>

                <thead>
                    <tr>
                        <th>مقدار جدید</th>
                        <th>مقدار قدیمی</th>
                        <th>فیلد</th>
                        <th>نام آگهی</th>
                        <th>تاریخ</th>
                        <th>نام تغییر دهنده</th>
                    </tr>
                </thead>

                <ToastContainer style={{ fontSize: "15px" }} />
                <tbody>
                    {
                        data.map((item, index) => {
                            if (index <= page[1] && index >= page[0]) {
                                return (
                                    <tr key={item.id} onClick={(e) => addLocalStorage(item, index)}>
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
