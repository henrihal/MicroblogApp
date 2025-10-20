const Post = ({userId, userName, title, content}: {userId: number, userName: string, title: string, content: string }) => {
    return (
        <div className="w-xl p-5 bg-gray-900/70 rounded-2xl">
            <div className="">
                <h1 className="text-gray-200/50 text-xl">
                    <a href={`/profile/${userId}`}>{userName}</a>
                </h1>
            </div>
            <div className="my-2.5">
                <h2 className="text-gray-200/80 text-lg ">
                    {title}
                </h2>
                <p className="text-gray-200/70">
                    {content}
                </p>
            </div>
        </div>
    )
}
export default Post