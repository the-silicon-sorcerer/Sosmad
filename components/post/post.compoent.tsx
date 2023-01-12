import Image from 'next/image';
import style from './post.module.css'
import IconButton from '../icon-button/icon-button.component';
import MenuSvg from '../../public/svg/menu.svg'
import { sampleData, UserData } from '../../utils/sampleData';

interface PostProps {
    user: UserData
}

const Post = ({ user }: PostProps) => {
    return (
        <div className={style.main}>

            <div className={style.header}>
                <div className={style.profileImage}>
                    <Image
                        className={style.image}
                        fill
                        src={user.profilePic}
                        alt='' />
                </div>
                <div className={style.profileInfo}>
                    <h2>{user.username}</h2>
                    <h3>Post-time</h3>
                </div>
                <IconButton classname={style.menu} SvgIcon={MenuSvg} />
            </div>
            <div className={style.mainPost}>
                <div className={style.background}>
                    <Image
                        className={style.mainImage}
                        fill
                        src={user.currentPosts[0].image}
                        alt=''
                    />
                </div>
                <div className={style.metaData}>
                    <div className={style.engagement}>
                        <p>{`${user.currentPosts[0].likes} Likes`}</p>
                        <p>{`${user.currentPosts[0].comments} Comments`}</p>
                    </div>
                    <div className={style.description}>
                        <p>{user.currentPosts[0].description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;