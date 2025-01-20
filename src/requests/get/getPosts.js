const getPosts = () => {
    return fetch('https://cloud.codesupply.co/endpoint/react/data.json');
}

export default getPosts;