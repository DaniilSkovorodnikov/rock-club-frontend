import React, { useEffect } from'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getMyGroups } from '../../http/groups';
import Profile from '../../components/Profile/Profile';

const MyProfile: React.FC = () => {
    const { user } = useAppSelector(state => state.userSlice)
    const { groups } = useAppSelector(state => state.groupSlice);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        if(!groups.length){
            getMyGroups(dispatch)
        }
    }, [dispatch, groups])

    if(!user){
        return <></>
    }
    return (
        <Profile user={user} groups={groups} canEdit={true}/>
    );
};
export default MyProfile;
