import Image from "next/image";
import styles from './story-card.module.css'
import { UserData } from "../../utils/sampleData";

interface StoryCardProps {
    userData: UserData
}

const StoryCard = ({ userData }: StoryCardProps) => {
    return (
        <div className={styles.storyPreview}>
            <Image className={styles.storyImage}
                fill
                src={userData.currentStories[0].storyImage}
                alt=''
            />
            <div className={styles.storyTitle}>
                <h3>
                    {userData.username}
                </h3>
                <div className={styles.storyProfile}>
                    <Image className={styles.storyProfileImg}
                        fill
                        src={userData.profilePic}
                        alt=''
                    />
                </div>
            </div>
        </div>
    )
}

export default StoryCard;