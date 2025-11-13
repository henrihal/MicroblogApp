import { IconBrandGithub } from '@tabler/icons-react';

const Footer = () => {
    return (
        <footer className="border-t border-gray-600/50 py-5">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">TwitterCopy</div>
                    <div className="flex gap-4">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/henrihal/frontend-postgres-api-practise"
                            className="text-gray-400 hover:text-sky-400 transition-colors"
                            aria-label="GitHub"
                        >
                            <IconBrandGithub size={20} stroke={1.5} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer