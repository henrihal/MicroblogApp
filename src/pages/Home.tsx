import { useEffect, useState } from "react"
import postService from "../services/postService"
import type { Post } from "../components/Post.interface"
import PostCard from "../components/PostCostainer"
import Createpostmodal from "../components/Createpostmodal"
import type { PostData } from "../components/Createpostmodal"

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

  const handleCreatePost = async (post: PostData) => {
    try{
    const createdPost = await postService.create(post)
    setPosts(posts.concat(createdPost))
    } catch (err) {
      console.log('Failed to create a post: ', err)
    }
  }

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
      <div>
        <div>
          {posts.map(post =>
          <PostCard key={post.id} post={post} />
        )}
        </div>
        <Createpostmodal onSubmit={handleCreatePost}/>
        </div>
        }
    </div>
  )
}

export default Home