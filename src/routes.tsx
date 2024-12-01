import Layout from "./components/Layout/Layout";
import Auth from "./pages/Auth/Auth";
import Main from "./pages/Main";
import Profile from "./pages/Profile/Profile";
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit";

export const routes = [
    {
        path: '/auth',
        element: <Auth/>,
    },
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Main/>
            },
            {
                path: 'profile',
                element: <Profile/>
            },
            {
                path: 'profile/edit',
                element: <ProfileEdit/>
            }
        ]
    }
]