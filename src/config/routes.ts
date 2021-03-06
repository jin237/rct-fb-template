import IRoute from "../interfaces/route";
import ChangePasswordPage from "../pages/auth/ChangePassword";
import ForgotPasswordPage from "../pages/auth/ForgotPassword";
import LoginPage from "../pages/auth/Login";
import LogoutPage from "../pages/auth/Logout";
import RegisterPage from "../pages/auth/Signup";
import ResetPasswordPage from "../pages/auth/ResetAccount";
import HomePage from "../pages/home";

const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: HomePage,
        name: 'Home Page',
        protected: true
    },
    {
        path: '/signup',
        exact: true,
        component: RegisterPage,
        name: 'Register Page',
        protected: false
    },
    {
        path: '/login',
        exact: true,
        component: LoginPage,
        name: 'Login Page',
        protected: false
    },
    {
        path: '/changePassword',
        exact: true,
        component: ChangePasswordPage,
        name: 'Change Password Page',
        protected: true
    },
    {
        path: '/logout',
        exact: true,
        component: LogoutPage,
        name: 'Logout Page',
        protected: true
    },
    {
        path: '/forgotPassword',
        exact: true,
        component: ForgotPasswordPage,
        name: 'Forgot Password Page',
        protected: false
    },
    {
        path: '/resetAccount',
        exact: true,
        component: ResetPasswordPage,
        name: 'Reset Password Page',
        protected: false
    }
];

export default routes;
