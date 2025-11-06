import { useEffect, useState } from 'react'
import Navbar from './components/NavbarTest'
import PostCard from './components/PostCard'
import postService from './services/postService'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import type { Post } from './components/Post.interface'

function App() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await postService.getAll()
      setPosts(posts)
    }
    fetchPosts()
  }, [])

  return (
  <MantineProvider>{
    <div className="min-h-screen bg-sky-900/80">
      <Navbar />
      <div className="flex flex-col items-center">
        {posts.length > 0 && 
        posts.map(post =>
          <PostCard key={post.id} post={post} />
        )}
      </div>
    </div>
  }</MantineProvider>
  )
}

export default App
