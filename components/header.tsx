import { FaSearch } from 'react-icons/fa'

export default function Header() {
    return (
        <header className="border-b border-gray-100 w-full h-20 px-4 pb-2">
            <div className="flex justify-between items-center h-full">
                <div className="logo w-60 flex justify-center">
                    Header
                </div>
                <div className="flex justify-between items-end w-full h-full">
                    <div className="w-1/2 border">
                        <ul className="flex justify-between">
                            <li><a href="">Home</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className="w-80 px-5">
                        <div className="flex justify-center items-center border border-gray-400 rounded-full py-1">
                            <input type="text" placeholder="Search..." className="focus:outline-none" />
                            <FaSearch />
                        </div>
                    </div>
                    <div className="nav-user flex justify-end w-40 border">
                        <a href="#">Sign In</a>
                        <div className="nav-popup">
                            Profile
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}