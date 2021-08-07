import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.filter_item}>
                <label htmlFor="label-filed">فیلد</label>
                <input type="text" id="label-filed" />
            </div>

            <div className={styles.filter_item}>
                <label htmlFor="label-ads">نام آگهی</label>
                <input type="text" id="label-ads" />
            </div>

            <div className={styles.filter_item}>
                <label htmlFor="label-date">تاریخ</label>
                <input type="text" id="label-date" />
            </div>

            <div className={styles.filter_item}>
                <label htmlFor="label-change">نام تغییر دهنده</label>
                <input type="text" id="label-change" />
            </div>
        </div>
    )
}
