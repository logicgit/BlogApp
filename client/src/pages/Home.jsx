import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    
    const posts = [
        {
            id: 1,
            title: "Title",
            desc: "Title",
            img: "https://www.istockphoto.com/resources/images/PhotoFTLP/P1-FEB-iStock-1309988966.jpg",
        },
        {
            id: 2,
            title: "Title",
            desc: "Title",
            img: "https://www.istockphoto.com/resources/images/PhotoFTLP/P1-FEB-iStock-1309988966.jpg",
        },
        {
            id: 3,
            title: "Title",
            desc: "Title",
            img: "https://www.istockphoto.com/resources/images/PhotoFTLP/P1-FEB-iStock-1309988966.jpg",
        },
        {
            id: 4,
            title: "Title",
            desc: "Title",
            img: "https://www.istockphoto.com/resources/images/PhotoFTLP/P1-FEB-iStock-1309988966.jpg",
        },                        
    ];
    
    return (
        <div className="home">
            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read More</button>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home