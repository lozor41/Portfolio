import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import ExploreLayout from './components/Explore/ExploreLayout';
import Connect from "./components/Connect";
import Footer from "./components/Footer";

export default function AppLayout() {
    return (
        <>
            <Header />
            <Home />
            <Skills />
            <ExploreLayout />
            <Connect />
            <Footer />
        </>
    )
}
