import Layout from "./components/Layout/Layout";
import Auth from "./pages/Auth/Auth";
import Main from "./pages/Main";
import RouterErrorBoundary from "./pages/RouterErrorBoundary";
import MyProfile from "./pages/MyProfile/MyProfile";
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit";
import JoinRequest from "./pages/JoinRequest";
import Schedule from "./pages/Schedule/Schedule";
import About from "./pages/About";
import EditGroup from "./pages/EditGroup/EditGroup";
import RequiredAuthRoute from "./components/RequiredAuthRoute";
import GroupProfile from "./pages/GroupProfile/GroupProfile";
import UserProfile from "./pages/UserProfile";

export const routes = [
    {
        path: '/auth',
        element: <Auth/>,
    },
    {
        path: '/',
        element: <Layout/>,
        errorElement: <RouterErrorBoundary/>,
        children: [
            {
                index: true,
                element: <Main/>
            },
            {
                element: <RequiredAuthRoute/>,
                children: [
                    {
                        path: 'profile',
                        element: <MyProfile/>,
                    },
                    {
                        path: 'profile/edit',
                        element: <ProfileEdit/>
                    },
                    {
                        path: 'create-group',
                        element: <EditGroup/>,
                    },
                    {
                        path: 'group/:id/edit',
                        element: <EditGroup/>
                    },
                ]
            },
            {
                path: 'join',
                element: <JoinRequest/>
            },
            {
                path: 'schedule',
                element: <Schedule/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'group/:id',
                element: <GroupProfile/>,
            },
            {
                path: '/user/:id',
                element: <UserProfile/>
            },
        ]
    }
]