import React, {useEffect, useState} from "react";
import {Link, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import styles from "./Profile.module.css"
import avatar from "../../../static/avatar.jpeg"
import {useParams} from "react-router-dom";
import getProfile from "../../../actions/profile";
import Modal from 'react-modal'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Posts from "./Posts/Posts";

const Profile = () => {
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const closeModal = () => setShow(false);
    const openModal = () => setShow(true);

    const dispatch = useDispatch()

    const {username} = useParams()

    useEffect(() => {
        dispatch(getProfile(username))
        setLoading(true)
    }, [dispatch, username])

    const handleRegister = () => {

    }

    const {profileData} = useSelector(state => state.profile)
    return (
        <div className={styles.profile}>
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
            <div className={styles.profile_info}>
                <div className={styles.profile_wrapper}>
                    <div className={styles.short_info}>
                        <div>
                            <div>
                                <p>
                                    <span>
                                        {profileData.username}
                                    </span>
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
            </div>
            <div className={styles.friends}>
                <div className={styles.friends_top}>
                    <p>Friends <span>45</span></p>
                </div>
                <div></div>
            </div>
            <div>
                <div className={styles.posts}>
                    <Posts
                        posts={profileData.posts}
                        username={profileData.username}
                    />

                </div>
                {profileData.posts.length === 0 &&
                <div className={styles.no_posts}>
                    <p>This user has no posts yet</p>
                </div>
                }
            </div>
        </div>
    );
};

export default Profile;
