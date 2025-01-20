import PostsGrid from "../../basicComponents/postsGrid/PostsGrid";
import styles from "./Main.module.css"

const Main = (props) => {

    return (
        <main className={styles.mainContainer}>
            <PostsGrid posts={props.posts} searchBarText={props.searchBarText} setSelectedPostData={props.setSelectedPostData}/>
        </main>
    );
}

export default Main;