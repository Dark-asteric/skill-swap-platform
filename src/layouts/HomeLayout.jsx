import { Outlet, useLocation, useNavigation } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react';

const HomeLayout = () => {
    const [pageLoading, setPageLoading] = useState(true);
    const location = useLocation(); // Listens for URL changes

    useEffect(() => {
        const timer = setTimeout(() => {
            setPageLoading(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
            setPageLoading(false);
        };
    }, [location.pathname]);
    console.log(location)

    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            {pageLoading && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <span className="loading loading-spinner loading-lg text-purple-600"></span>
                </div>
            )}
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )
}

export default HomeLayout