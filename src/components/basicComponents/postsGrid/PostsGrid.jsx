import Post from "../post/Post";

import styles from './PostsGrid.module.css';
import PostsNotFound from "../postsNotFound/PostsNotFound";

const PostsGrid = (props) => {

    let filteredPostsArray = props.posts.filter(postData => {
        return !props.searchBarText
            || `${postData.title.trim().toLowerCase()}${postData.text.trim().toLowerCase()}`.includes(props.searchBarText);

    })
    return (
        <div className={styles.postsGrid}>
            {filteredPostsArray.map((postData, index) => {
                return <Post key={index}

                             img={postData.img}
                             img_2x={postData.img_2x}

                             tags={postData.tags}
                             title={postData.title}
                             author={postData.autor}
                             date={postData.date}
                             views={postData.views}

                             text={postData.text}

                             setSelectedPostData={props.setSelectedPostData}
                />
            })}
            {!filteredPostsArray.length ? <PostsNotFound /> : null}
        </div>
    );
}

export default PostsGrid;