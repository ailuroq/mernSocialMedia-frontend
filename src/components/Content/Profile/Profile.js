import React, {useEffect, useState, useRef} from "react";
import {Link, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import styles from "./Profile.module.css"
import avatar from "../../../static/avatar.jpeg"
import {useParams} from "react-router-dom";
import getProfile from "../../../actions/profile";
import Modal from 'react-modal'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from 'react-validation/build/button'
import Posts from "./Posts/Posts";
import {createPost} from "../../../actions/post";

const Profile = () => {
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)

    const [postContent, setPostContent] = useState('')
    const closeModal = () => setShow(false);
    const openModal = () => setShow(true);

    const form = useRef()
    const checkBtn = useRef()

    const dispatch = useDispatch()
    const {user: currentUser} = useSelector((state) => state.auth)

    const {username} = useParams()

    useEffect(() => {
        dispatch(getProfile(username))
        setLoading(true)
    }, [dispatch, username])

    const handleRegister = () => {

    }

    const onChangePostContent = (e) => {
        const content = e.target.value
        setPostContent(content)
    }

    const handlePost = (e) => {
        e.preventDefault()

        if(checkBtn.current.context._errors.length === 0 ){
            dispatch(createPost(currentUser.username, postContent))
                .then(()=>{
                    window.location.reload()
                })

        }
    }

    const {profileData} = useSelector(state => state.profile)
    return (
        <div className={styles.profile}>
            <div>
                <div className={styles.avatar_column}>
                    {!profileData.avatar &&
                    <div>
                        <img src={avatar} className={styles.avatar}/>
                        <button className={styles.load_avatar} onClick={openModal}>Load avatar</button>
                        <Modal
                            isOpen={show}
                            onRequestClose={closeModal}
                            contentLabel="Example Modal"
                            className={styles.modal}
                            overlayClassName={styles.overlay}
                        >
                            <Form onSubmit={handleRegister}>
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="photo">Username</label>
                                        <Input
                                            type="file"
                                            className=""
                                            name="file"
                                            enctype="multipart/form-data"
                                        />
                                    </div>
                                </div>
                                <input type="submit" value="Submit"/>

                            </Form>
                        </Modal>
                    </div>}
                    <button className={styles.edit_profile_button}>
                        <Link>Edit profile</Link>
                    </button>
                </div>
                <div className={styles.friends_block}>
                    <div className={styles.friends}>
                        <div className={styles.friends_top}>
                            <p>Friends <span>45</span></p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className={styles.wide_column}>
                <div className={styles.profile_info}>
                    <div className={styles.profile_wrapper}>
                        <div className={styles.short_info}>
                            <div>
                                <div>
                                    <p>
                                    <span>
                                        {profileData.username}
                                    </span>
                                        das
                                    </p>
                                </div>
                            </div>
                            <div className={styles.online}>
                                <p>Online</p>
                            </div>
                        </div>
                        <div className={styles.main_info}>
                            <p>Main info</p>
                        </div>
                        <div className={styles.number_info}>
                            <div className={styles.info_item}>
                                <Link>
                                    <p><span>10</span></p>
                                    <p>Friends</p>
                                </Link>
                            </div>
                            <div className={styles.info_item}>
                                <Link>
                                    <p><span>10</span></p>
                                    <p>Subscribers</p>
                                </Link>
                            </div>
                            <div className={styles.info_item}>
                                <Link>
                                    <p><span>1010</span></p>
                                    <p>Photos</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <div className={styles.add_post_form}>
                        <Form onSubmit={handlePost} ref={form}>
                            <label htmlFor="postContent">post content</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="content"
                                value={postContent}
                                onChange={onChangePostContent}
                            />
                            <div className="form-group">
                                <button className="btn btn-primary btn-block">

                                    <span>Submit</span>
                                </button>
                            </div>
                            <CheckButton style={{display: 'none'}} ref={checkBtn} />
                        </Form>
                    </div>
                    <div className={styles.posts}>
                        <Posts
                            posts={profileData.posts}
                            username={profileData.username}
                        />

                    </div>
                    {/*{profileData.posts.length === 0 &&
                    <div className={styles.no_posts}>
                        <p>This user has no posts yet</p>
                    </div>
                    }*/}
                </div>
            </div>


        </div>
    );
};

export default Profile;
