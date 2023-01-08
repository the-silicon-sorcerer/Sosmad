import NotifactionsIcon from '../../public/svg/notifactions-icon.svg'
import MessagesIcon from '../../public/svg/messages-icon.svg'

import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <h1>Sosmad</h1>
            <button>
                <NotifactionsIcon />
            </button>
            <button>
                <MessagesIcon />
            </button>
        </div>
    )
}

export default Header;