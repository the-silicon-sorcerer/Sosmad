import styles from './icon-button.module.css'

interface IconButtonProps {
    SvgIcon: any
}

const IconButton = ({ SvgIcon }: IconButtonProps) => {
    return (
        <button className={styles.button}>
            <SvgIcon />
        </button>
    )
}

export default IconButton;