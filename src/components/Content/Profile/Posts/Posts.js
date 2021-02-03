import React from 'react'
import styles from './Posts.module.css'
import Post from "./Post/Post";

const Posts = props => {
    //const posts =Object.keys(props).map((key) => [Number(key), props[key]])
    return (
        <div className={styles.posts}>
            {
                props.posts.map(post=>{
                    return (
                        <div key={post.id}>
                            <Post {...post}/>
                        </div>
                    )
                })}
        </div>
    )
}

export default Posts