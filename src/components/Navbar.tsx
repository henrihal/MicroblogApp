import { Box, Container, Group } from "@mantine/core"

const Navbar = () => {
const navLinks = [
    {label:'Home', link:'/'},
    {label:'Search', link:'/search'},
    {label:'Profile', link:'/profile'}
]

const navItems = navLinks.map((item) => (
    <a
        className="hover:bg-gray-400/40 p-3 rounded-2xl"
        href={item.link}
        key={item.label}
    >
        {item.label}
    </a>
))

return(
    <header className="h-[50px] bg-sky-950 flex items-center">
        <Container className="">
            <Box className="text-xl text-white">
                <Group gap={0}>
                {navItems}
                </Group>
            </Box>
        </Container>
    </header>
)
}
export default Navbar