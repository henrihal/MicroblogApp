import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import PostContainer from './components/PostContainer'
import postService from './services/postService'
import type {Post} from './components/Post.interface'

function App() {
  const [posts, setPosts] = useState<Post[]>([{
    id: 0,
    user_id: 0,
    title: '',
    content: ''
  }])

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await postService.getAll()
      setPosts(posts)
    }
    fetchPosts()
  }, [])

  return (
    <body className=" bg-sky-900">
    <Navbar />
    {posts.map(post =>
      <PostContainer key={post.id} post={post} />
    )}
    </body>
  )
}

export default App
