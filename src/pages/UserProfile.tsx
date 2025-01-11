import React, { useEffect, useState } from'react';
import { User } from '../models/user';
import Profile from '../components/Profile/Profile';
import { getUserById, getUserGroups } from '../http/user';
import { useParams } from 'react-router-dom';
import { Group } from '../models/group';

const UserProfile: React.FC = () => {
    const {id} = useParams();
    const [user, setUser] = useState<User | undefined>();
    const [groups, setGroups] = useState<Group[]>([])

    useEffect(() => {
        const getUserInfo = async(id: string) => {
            const user = await getUserById(id);
            const userGroups = await getUserGroups(id);
            setUser(user);
            setGroups(userGroups);
        }
        if(id){
            getUserInfo(id);
        }
    }, [id])

    if(!user) {
        return <></>
    }
    return (
        <Profile user={user} groups={groups}/>
    );
};
export default UserProfile;
