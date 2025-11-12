import { useEffect, useState } from "react"
import postService from "../services/postService"
import type { Post } from "../components/Post.interface"
import PostCard from "../components/PostCard"


function Home({ searchQuery }: { searchQuery: string }) {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      const fetchPosts = async () => {
        try {
          // Check if there is a search value and if not fetch all posts
          let postsData
          if (searchQuery) {
            postsData = await postService.getBySearch(searchQuery)
          } else {
            postsData = await postService.getAll()
          }

          if (Array.isArray(postsData)) {
            setPosts(postsData)
            setError(null)
          } else {
            throw new Error('Invalid posts payload')
          }
        } catch (err) {
          console.log('Failed to fetch posts: ', err)
          setError(err instanceof Error ? err : new Error('Failed to fetch posts'))
          setPosts([])
        } finally {
          setLoading(false)
        }
      }
      fetchPosts()
    }, 500)

    return () => clearTimeout(debounceTimer)

  }, [searchQuery])

  return (
    <div className="flex flex-col items-center">
      {loading &&
        <div className="animate-pulse text-white text-lg text-center py-5">Loading posts...</div>
      }
      {!loading && error &&
        <div className="text-white text-lg text-center py-5">An error occurred fetching posts... </div>
      }
      {!loading && !error && posts.length === 0 &&
        <div className="text-white text-lg text-center py-5">No posts available.</div>
      }
      {!loading && !error && posts.length > 0 &&
        posts.map(post =>
          <PostCard key={post.id} post={post} />
        )}
    </div>
  )
}

export default Home