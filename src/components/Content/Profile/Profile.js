import React, {useEffect} from "react";
import {Link, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import styles from "./Profile.module.css"
import avatar from "../../../static/avatar.jpeg"
import {useParams} from "react-router-dom";
import getProfile from "../../../actions/profile";

const Profile = () => {
    const dispatch = useDispatch()

    const {username} = useParams()

    useEffect(() => {
        dispatch(getProfile(username))
    }, [dispatch, username])

    const {profileData} = useSelector(state => state.profile)
    return (
        <div className={styles.profile}>
            <div className={styles.avatar_column}>
                <img src={avatar} className={styles.avatar}/>
                <button className={styles.edit_profile_button}>
                    <Link>Edit profile</Link>
                </button>

            </div>
            <div>
                <p>das</p>
            </div>
        </div>
    );
};

export default Profile;
