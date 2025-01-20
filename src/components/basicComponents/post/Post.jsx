import PostImage from "./postImage/PostImage";
import PostText from "./postText/PostText";

import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={styles.post} onClick={() => props.setSelectedPostData(props)}>
            <PostImage
                img={props.img}
                img_2x={props.img_2x}
                author={props.author}
            />
            <PostText
                tags={props.tags}
                title={props.title}
                author={props.author}
                date={props.date}
                views={props.views}
                text={props.text}
            />
        </div>
    );
}

export default Post;