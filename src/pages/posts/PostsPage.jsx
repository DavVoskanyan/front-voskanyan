import React, {useEffect, useState} from "react";

import Main from "../../components/layout/main/Main";
import Header from "../../components/layout/header/Header";
import Nav from "../../components/layout/nav/Nav";
import Footer from "../../components/layout/footer/Footer";
import getPosts from "../../requests/get/getPosts";
import SelectedPostModal from "../../components/modals/selectedPostModal/SelectedPostModal";


const PostsPage = (props) => {
    let [posts, setPosts] = useState([]);
    let [isMenuOpen, setIsMenuOpen] = useState(false);
    let [searchBarText, setSearchBarText] = useState('');
    let [selectedPostData, setSelectedPostData] = useState(null);

    useEffect(() => {
        getPosts()
            .then(postsJson => postsJson.json())
            .then(posts => setPosts(posts));
    }, []);

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setSearchBarText={setSearchBarText}/>
            <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            <Main posts={posts} searchBarText={searchBarText} setSelectedPostData={setSelectedPostData}/>
            <Footer />
            <SelectedPostModal selectedPostData={selectedPostData} setSelectedPostData={setSelectedPostData}/>
        </>
    );
}


export default PostsPage;