import PostComponent from './Post'
import type { Post } from './Post.interface'
const PostContainer = ({post}: {post: Post}) => {
    const userId = post.user_id
    const userName = "placeholder"
    const title = post.title
    const content = post.content
return(
    <section className="flex justify-center p-1">
        <PostComponent
         userId={userId}
         userName={userName}
         title={title}
         content={content}/>
    </section>
)
}

export default PostContainer