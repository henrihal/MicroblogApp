import { Box, Container, Group } from "@mantine/core"
import { Link, useNavigate } from "react-router"

const Navbar = ({ searchQuery, onSearchChange }: { searchQuery: string, onSearchChange: (query: string) => void }) => {
    const navLinks = [
        { label: 'Home', link: '/' },
        { label: 'Profile', link: '/profile' }
    ]

    const navigate = useNavigate()
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

        if (e.key === 'Enter') {
            e.preventDefault()
            navigate("/")
        }
    }

    return (
        <header className="h-[50px] bg-transparent">
            <Container>
                <Box className="text-sm font-bold text-white">
                    <Group gap={0} justify="center">
                        <Link
                            className="hover:bg-gray-400/10 p-2 rounded-md "
                            to={navLinks[0].link}
                            key={navLinks[0].label}
                        >
                            {navLinks[0].label}
                        </Link>
                        <div className="font-normal text-xs">
                            <input type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => onSearchChange(e.currentTarget.value)}
                                onKeyDown={handleKeyDown}
                                className="p-1 text-center w-40 bg-gray-800/50 border border-gray-600/50 placeholder-gray-500 rounded-sm focus:border-sky-500 focus:outline-none"
                            />
                        </div>
                        <Link
                            className="hover:bg-gray-400/10 p-2 rounded-md "
                            to={navLinks[1].link}
                            key={navLinks[1].label}
                        >
                            {navLinks[1].label}
                        </Link>
                    </Group>
                </Box>
            </Container>
        </header>
    )
}
export default Navbar