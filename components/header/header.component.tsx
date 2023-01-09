import NotifactionsIcon from '../../public/svg/notifactions-icon.svg'
import MessagesIcon from '../../public/svg/messages-icon.svg'

import styles from './header.module.css'
import IconButton from '../icon-button/icon-button.component'

const Header = () => {
    return (
        <div className={styles.header}>
            <h1>Sosmad</h1>
            <IconButton SvgIcon={NotifactionsIcon} />
            <IconButton SvgIcon={MessagesIcon} />
        </div>
    )
}

export default Header;