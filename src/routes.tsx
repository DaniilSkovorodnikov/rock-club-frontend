import Layout from "./components/Layout/Layout";
import Auth from "./pages/Auth/Auth";
import Main from "./pages/Main";
import RouterErrorBoundary from "./pages/RouterErrorBoundary";
import Profile from "./pages/Profile/Profile";
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit";
import JoinRequest from "./pages/JoinRequest";
import Schedule from "./pages/Schedule";
import About from "./pages/About";
import EditGroup from "./pages/EditGroup/EditGroup";
import RequiredAuthRoute from "./components/RequiredAuthRoute";

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
                        element: <Profile/>,
                    },
                    {
                        path: 'profile/edit',
                        element: <ProfileEdit/>
                    },
                    {
                        path: 'profile/create-group',
                        element: <EditGroup/>,
                    },
                    {
                        path: 'profile/group/:id/edit',
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
        ]
    }
]