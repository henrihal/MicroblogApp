
const Navbar = () => {
    const links = [
        {name: "Home", link: "/"},
        {name: "Search", link: "/search"},
        {name: "Profile", link: "/profile"}
    ]
    return(
         <nav className="sticky top-0 w-full flex justify-center items-center h-25">
            <ul className="flex items-center text-lg bg-white/20 backdrop-blur-sm rounded-2xl shadow-sm font-mono">
                {links.map((link) => (
                    <a href={link.link} key={link.name}>
                        <li className="hover:bg-gray-100/60 py-3 px-6 rounded-2xl">
                            {link.name}
                        </li>
                    </a>
                ))}
            </ul>
        </nav>
    )
}
export default Navbar

