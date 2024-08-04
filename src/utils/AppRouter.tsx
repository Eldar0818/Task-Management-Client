import { Routes, Route, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuthenticated';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Notifications from '../pages/Notifications';

function AppRouter() {
    const { isLoggedIn } = useAuth();

    const routes = [
        {
            path: '/',
            element: <Home />,
            protected: true,
        },
        {
            path: '/notification',
            element: <Notifications />,
            protected: true,
        },
        {
            path: '/sign-in',
            element: <SignIn />,
            protected: false,
        },
        {
            path: '/sign-up',
            element: <SignUp />,
            protected: false,
        },
    ];

    return (
        <Routes>
            {routes.map((route, index) => (
                <Route 
                    key={index} 
                    path={route.path} 
                    element={
                        route.protected 
                            ? isLoggedIn 
                                ? route.element 
                                : <Navigate to="/sign-in" />
                            : !isLoggedIn 
                                ? route.element 
                                : <Navigate to="/" />
                    }
                />
            ))}
        </Routes>
    );
}

export default AppRouter;
