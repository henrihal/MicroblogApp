import Post from './Post'
const PostContainer = () => {
    const userId=125
    const userName="Henak"
    const title="Testailua"
    const content="something that is interesting something that is interesting something that is interesting something that is interesting "

return(
    <section className="flex justify-center">
        <Post
         userId={userId}
         userName={userName}
         title={title}
         content={content}/>
    </section>
)
}

export default PostContainer