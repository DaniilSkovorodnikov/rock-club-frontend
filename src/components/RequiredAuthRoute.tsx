import React, { useEffect } from'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getMyProfile } from '../http/auth';

const RequiredAuthRoute: React.FC = () => {
    const { isAuthenticated } = useAppSelector(state => state.userSlice);
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try{
                await getMyProfile(dispatch)
            } catch {
                navigate('/auth')
            }
        }
        if(!isAuthenticated){
            checkAuth();
        }
    }, [isAuthenticated, navigate, dispatch])

    if(!isAuthenticated){
        return <></>
    }
    return (
        <Outlet/>
    );
};
export default RequiredAuthRoute;
