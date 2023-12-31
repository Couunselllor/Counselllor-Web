import { lazy } from "react";
import Dashboard from './Dashboard/Dashboard.jsx';
import ForgotPasswordForm from "./ForgotPassword/ForgotPassword.jsx";
import LoginForm from './Login/Login.jsx';
import Navbar from "./Navbar/Navbar.jsx";
import SignUpForm from './SignUp/SignUp.jsx';
import Profile from './profile/profile.jsx';
import Contact from './contact/contact.jsx';
import About1 from './About/About.jsx';

const Home = lazy(() => import("./Home/Home.jsx"));
const About = lazy(() => import("./About/About.jsx"));
const ErrorPage = lazy(() => import("./ErrorPage/ErrorPage.jsx"));



export {
    About, Dashboard, ErrorPage, ForgotPasswordForm, Home,
    LoginForm,
    Navbar,
    Profile,
    Contact,
    About1,
    SignUpForm
};

