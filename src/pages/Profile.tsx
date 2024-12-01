import React, { useEffect } from'react';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/auth')
    })

    return (
        <div>
        </div>
    );
};
export default Profile;
