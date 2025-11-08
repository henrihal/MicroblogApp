import { Box, Container, Group } from "@mantine/core"
import { Link } from "react-router"

const Navbar = () => {
const navLinks = [
    {label:'Home', link:'/'},
    {label:'Search', link:'/search'},
    {label:'Profile', link:'/profile'}
]

const navItems = navLinks.map((item) => (
    <Link
        className="hover:bg-gray-400/10 p-2 rounded-md "
        to={item.link}
        key={item.label}
    >
        {item.label}
    </Link>
))

return(
    <header className="h-[50px] bg-transparent">
        <Container className="">
            <Box className="text-sm font-bold text-white">
                <Group gap={0} justify="center">
                {navItems}
                </Group>
            </Box>
        </Container>
    </header>
)
}
export default Navbar