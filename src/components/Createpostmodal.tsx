import { useEffect, useState } from 'react'
import { IconPencilPlus, IconX } from '@tabler/icons-react'

export interface PostData {
    title: string,
    content: string
}

const Createpostmodal = ({onSubmit}: {onSubmit: (data: PostData) => void}) => {
    const contentMaxLenght = 1000
    const titleMaxLenght = 100
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Validation
        if (!title.trim()) {
            return setError('Title cant be empty')
        }
        if (!content.trim()) {
            return setError('Content cant be empty')
        }
        const data = {
            title: title,
            content: content
        }

        console.log('Post created:', { title, content })
        setTitle('')
        setContent('')
        setIsOpen(false)
        setError('')
        onSubmit(data)
    }

    useEffect(() => {
        if (error) {
            const errorTimeout = setTimeout(() => setError(''), 3000)
            return () => clearTimeout(errorTimeout)
        }
    }, [error])

    return (
        <div>
            {/* Floating Button */}
            {!isOpen &&
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-10 right-10 w-14 h-14 bg-sky-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-sky-700 active:bg-sky-800 cursor-pointer transition-colors z-40"
                >
                    <IconPencilPlus size={24} stroke={2} />
                </button>
            }

            {/* Modal Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                >
                    {/* Modal Content */}
                    <div className="px-5 w-full max-w-xs min-w-xs text-white">
                        <div
                            className="bg-slate-800 border border-gray-300/10 rounded-lg p-3 shadow-md"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-3">
                                <h2 className="text-lg font-bold text-white">Create Post</h2>
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                                >
                                    <IconX size={20} />
                                </button>
                            </div>

                            {error &&
                                <div className="mb-3 p-2 bg-red-900/30 border border-red-600/50 rounded text-red-200 text-xs">
                                    {error}
                                </div>
                            }

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-3">
                                {/* Title Input */}
                                <div>
                                    <label htmlFor="title" className="block text-xs font-medium text-white mb-1">
                                        Title
                                    </label>
                                    <input
                                        id="title"
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.currentTarget.value)}
                                        placeholder="Post title..."
                                        maxLength={titleMaxLenght}
                                        required
                                        className="w-full px-2 py-1.5 bg-gray-700/50 border border-gray-600/50 rounded text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 text-xs"
                                    />
                                </div>

                                {/* Content Textarea */}
                                <div>
                                    <label htmlFor="content" className="block text-xs font-medium text-white mb-1">
                                        Content
                                    </label>
                                    <textarea
                                        id="content"
                                        value={content}
                                        onChange={(e) => setContent(e.currentTarget.value)}
                                        placeholder="What's on your mind?"
                                        rows={4}
                                        maxLength={contentMaxLenght}
                                        required
                                        className="w-full px-2 py-1.5 bg-gray-700/50 border border-gray-600/50 rounded text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 text-xs resize-none"
                                    />
                                    <p className="text-xs flex justify-end text-gray-400 mt-1">{`${content.length}/${contentMaxLenght}`}</p>
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-2 mt-4">
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="flex-1 px-3 py-1.5 bg-gray-700/50 border border-gray-600/50 text-white rounded text-xs hover:bg-gray-600 hover:border-gray-500/50 cursor-pointer transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 px-3 py-1.5 bg-sky-600 text-white rounded text-xs hover:bg-sky-700 cursor-pointer transition-colors font-medium"
                                    >
                                        Post
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Createpostmodal