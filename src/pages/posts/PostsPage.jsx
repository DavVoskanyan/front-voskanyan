import React, {useEffect, useState} from "react";

import Main from "../../components/layout/main/Main";
import Header from "../../components/layout/header/Header";
import Nav from "../../components/layout/nav/Nav";
import Footer from "../../components/layout/footer/Footer";
import getPosts from "../../requests/get/getPosts";
import SelectedPostModal from "../../components/modals/selectedPostModal/SelectedPostModal";


const PostsPage = () => {
    let [posts, setPosts] = useState([]);
    let [isMenuOpen, setIsMenuOpen] = useState(false);
    let [searchBarText, setSearchBarText] = useState('');
    let [selectedPostData, setSelectedPostData] = useState(null);
    let [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        getPosts()
            .then(postsJson => postsJson.json())
            .then(posts => setPosts(posts));
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', () => setScrollY(window.scrollY));
    }, [])

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} searchBarText={searchBarText} setSearchBarText={setSearchBarText} scrollY={scrollY}/>
            <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollY={scrollY}/>
            <Main posts={posts} searchBarText={searchBarText} setSelectedPostData={setSelectedPostData}/>
            <Footer />
            <SelectedPostModal selectedPostData={selectedPostData} setSelectedPostData={setSelectedPostData}/>
        </>
    );
}


export default PostsPage;