import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import styles from './Table.module.css'

export const Table = () => {

    const data = useSelector(state => state.dataReducer)
    const inputsValue = useSelector(state => state.inputsValueReducer)
    const prev = useRef()
    const next = useRef()

    const [page, setPage] = useState([0, 9])



    useEffect(() => {
        if (page[0] == 0) {
            prev.current.disabled = true
        }
        else {
            prev.current.disabled = false
        }
        if (page[1] == 100_000) {
            next.current.disabled = true
        }
        else {
            next.current.disabled = false
        }
    }, [page])


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

                <tbody>
                    {
                        data.map((item, index) => {
                            if (index <= page[1] && index >= page[0]) {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.new_value}</td>
                                        <td>{item.old_value}</td>
                                        <td>{item.field}</td>
                                        <td>{item.title}</td>
                                        <td className={styles.date}>{item.date}</td>
                                        <td>{item.name}</td>
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

        </div>
    )
}
