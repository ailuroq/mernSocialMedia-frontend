import React from 'react'
import styles from './../Posts.module.css'
const Post = props => {
    console.log(props)
    return (
        <div className={styles.post_item}>
            <p>{props.text}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default Post