import { IconPencilPlus } from "@tabler/icons-react"

const Createpostbutton = ({onClick}: {onClick: () => void}) => {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-10 right-10 w-14 h-14 bg-sky-600 text-white rounded-full flex items-center justify-center shadow-md hover:bg-sky-700 active:bg-sky-800 transition-colors focus:outline-none cursor-pointer"
        >
            <IconPencilPlus size={24} />
        </button>
    )
}
export default Createpostbutton