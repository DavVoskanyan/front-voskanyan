const PostImage = (props) => {
    return (
        <img
             alt={`Post by ${props.author}`}
             srcSet={`${props.img} 1x, ${props.img_2x} 2x`}/>
    );
}

export default PostImage;