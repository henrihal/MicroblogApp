import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import PostContainer from './components/PostContainer'
import postService from './services/postService'
import type {Post} from './components/Post.interface'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

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
  <MantineProvider>{
    <div className=" bg-sky-900">
      <Navbar />
      {posts.map(post =>
        <PostContainer key={post.id} post={post} />
      )}
    </div>
  }</MantineProvider>
  )
}

export default App
