import styles from "./PostText.module.css";

const PostText = (props) => {
    return (
        <div className={styles.postSocial}>
            <span className={styles.tags}>{props.tags}</span>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.metaInfoLine}>
                <span className={styles.author}>{props.author}</span> •
                <span className={styles.date}>{props.date}</span> •
                <span className={styles.views}>{props.views} Views</span>
            </p>
            <p className={styles.text}>{props.text}</p>
        </div>
    );
}

export default PostText;