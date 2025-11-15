import { useState } from 'react'
import { IconPencilPlus, IconX } from '@tabler/icons-react'

const Createpostmodal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        console.log('Post created:', { title, content })
        setTitle('')
        setContent('')
        setIsOpen(false)
    };

    return (
        <div>
            {/* Floating Button */}
            {!isOpen &&
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-10 right-10 w-14 h-14 bg-sky-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-sky-700 active:bg-sky-800 cursor-pointer"
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
                        <div className="bg-slate-800 border border-gray-300/10 rounded-lg p-3 shadow-md"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-3">
                                <h2 className="text-lg font-bold text-white">Create Post</h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-400 hover:text-white cursor-pointer"
                                >
                                    <IconX size={20} />
                                </button>
                            </div>

                            {/* Form */}
                            <div className="space-y-3">
                                {/* Title Input */}
                                <div>
                                    <label className="block text-xs font-medium text-white mb-1">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.currentTarget.value)}
                                        placeholder="Post title..."
                                        className="w-full px-2 py-1.5 bg-gray-700/50 border border-gray-600/50 rounded text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 text-xs"
                                    />
                                </div>

                                {/* Content Textarea */}
                                <div>
                                    <label className="block text-xs font-medium text-white mb-1">
                                        Content
                                    </label>
                                    <textarea
                                        value={content}
                                        onChange={(e) => setContent(e.currentTarget.value)}
                                        placeholder="What's on your mind?"
                                        rows={4}
                                        className="w-full px-2 py-1.5 bg-gray-700/50 border border-gray-600/50 rounded text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 text-xs resize-none"
                                    />
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-2 mt-4">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="flex-1 px-3 py-1.5 bg-gray-700/50 border border-gray-600/50 text-white rounded text-xs hover:bg-gray-600/50 cursor-pointer transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="flex-1 px-3 py-1.5 bg-sky-600 text-white rounded text-xs hover:bg-sky-700 cursor-pointer transition-colors font-medium"
                                >
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </ div>
    )
}

export default Createpostmodal;