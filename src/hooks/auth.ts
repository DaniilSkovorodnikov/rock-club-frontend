import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./redux";
import { getUser } from "../http/auth";

export function useAuthRequired(){
    const { isAuthenticated } = useAppSelector(state => state.userSlice);
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try{
                await getUser(dispatch)
            } catch {
                navigate('/auth')
            }
        }
        if(!isAuthenticated){
            checkAuth();
        }
    }, [isAuthenticated, navigate, dispatch])
}