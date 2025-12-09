import { useEffect, useState } from "react"
import postService from "../services/postService"
import type { Post } from "../components/Post.interface"
import PostContainer from "../components/PostContainer"
import Createpostmodal from "../components/Createpostmodal"
import type { PostData } from "../components/Createpostmodal"
import PostContainerSkeleton from "../components/PostContainerSkeleton"

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
  const skeletonLoader = 6 // amount of skeleton posts for loading animation

  // implement handleDeletePost, also create a service
  const handleDeletePost = async (id: number) => {
      const deletedPost = await postService.deleteById(id)
      if (deletedPost) {
        setPosts(posts.filter(post => post.id !==id))
        console.log(`Deleted post ${deletedPost}`)
      }
  }

  // implement handleUpdatePost, also create a service

  return (
    <div className="flex flex-col items-center">
      {loading &&
        <div>
          {Array.from({length: skeletonLoader}).map((_, index) => (
            <PostContainerSkeleton key={index} />
          ))}
        </div>
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
          <PostContainer key={post.id} post={post} onDelete={handleDeletePost} />
        )}
        </div>
        <Createpostmodal onSubmit={handleCreatePost}/>
        </div>
        }
    </div>
  )
}

export default Home