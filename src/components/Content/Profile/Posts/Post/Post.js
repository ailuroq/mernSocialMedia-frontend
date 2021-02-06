import React from 'react'
import styles from './../Posts.module.css'
import avatar from './../../../../../static/avatar.jpeg'
import {useDispatch} from "react-redux";
import {deletePost} from "../../../../../actions/post";

const Post = props => {

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deletePost(props._id))
            .then(() => {
            })
    }
    return (
        <div className={styles.post_item}>
            <div className={styles.post_top}>
                <div>
                    <img src={avatar}/>
                </div>
                <div>
                    <p>{props.username}</p>
                    <span className={styles.date}>
                        <p>{props.date.toString().substring(0, 10)}</p>
                        <p>{props.date.toString().substring(11, 16)}</p>
                    </span>
                </div>
                <div className={styles.delete}>
                    <p onClick={handleDelete}>Delete</p>
                </div>
            </div>
            <div className={styles.text}>
                <p>{props.text}</p>
            </div>
            <div className={styles.post_bottom}>
                <div className={styles.like}>
                    <div><p><span>Likes: </span></p></div>
                    <div><p><span className={styles.number_of_likes}>{props.like}</span></p></div>
                </div>

                <div className={styles.dislike}>
                    <div><p><span>Dislikes: </span></p></div>
                    <div><p><span className={styles.number_of_dislikes}>{props.dislike}</span></p></div>
                </div>
            </div>

        </div>
    )
}

export default Post