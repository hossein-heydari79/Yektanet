import React from 'react'
import data from '../../assets/data/data.json'
import styles from './Table.module.css'

export const Table = () => {
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
                            if (index < 100) {
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
        </div>
    )
}
