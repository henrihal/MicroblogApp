import { Box, Container, Group } from "@mantine/core"

const Navbar = () => {
const navLinks = [
    {label:'Home', link:'/'},
    {label:'Search', link:'/search'},
    {label:'Profile', link:'/profile'}
]

const navItems = navLinks.map((item) => (
    <a
        className="hover:bg-gray-400/10 p-2 rounded-md "
        href={item.link}
        key={item.label}
    >
        {item.label}
    </a>
))

return(
    <header className="h-[50px] bg-transparent flex items-center">
        <Container className="">
            <Box className="text-sm font-bold text-white">
                <Group gap={0}>
                {navItems}
                </Group>
            </Box>
        </Container>
    </header>
)
}
export default Navbar