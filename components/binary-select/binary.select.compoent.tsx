import React from 'react'
import styles from './binary-select.module.css'

interface BinarySelectorProps {
    optionOne: string
    optionTwo: string
    onClickHandle: Function
    stateValue: boolean
}

const BinarySelector = ({ optionOne, optionTwo, onClickHandle, stateValue }: BinarySelectorProps) => {
    return (
        <div className={styles.toggleContainer}>
            <h2 onClick={() => onClickHandle(optionOne)}>{optionOne}</h2>
            <h2 onClick={() => onClickHandle(optionTwo)}>{optionTwo}</h2>
            <div className={`${styles.selectorContainer} ${stateValue ? styles.active : ''}`}>
                <div className={styles.selector}>
                </div>
            </div>
        </div>
    )
}

export default BinarySelector;