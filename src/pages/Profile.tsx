import { useParams } from "react-router"
import userService from "../services/userService"
import { useEffect, useState } from "react"
import ProfileCard from "../components/ProfileCard"
import type { Post } from "../components/Post.interface"
import postService from "../services/postService"
import PostCard from "../components/PostCard"

function Profile() {

    //fetch user
    const params = useParams()
    const [user, setUser] = useState('')

      useEffect(() => {
      const fetchUserName = async () => {
        try {
          const userName = await userService.getUserName(parseInt(params.id as string))
          if(userName){
            setUser(userName)
          } else {
            throw new Error('Error fetching username')
          }
        } catch (err) {
          console.log('Failed to fetch username: ', err)
          setUser('')
        }
      }
      fetchUserName()
    }, [params.id])

    //fetch users posts
          const [posts, setPosts] = useState<Post[]>([])
          const [loading, setLoading] = useState(true)
          const [error, setError] = useState<Error | null>(null)
        
          useEffect(() => {
            const fetchPosts = async () => {
              try {
                const posts = await postService.getAll({user_id: params.id})
                if(Array.isArray(posts)) {
                  setPosts(posts)
                  setError(null)
                } else {
                  throw new Error('Invalid posts payload')
                }
              } catch(err){
                console.log('Failed to fetch posts: ', err)
                setError(err instanceof Error ? err: new Error('Failed to fetch posts'))
                setPosts([])
              } finally {
                setLoading(false)
              }
            }
            fetchPosts()
          }, [params.id])

    return(
        <div className="flex flex-col items-center">
        <ProfileCard userName={user} userId={params.id!}/>
        {loading && 
        <div className="animate-pulse text-white text-lg text-center py-5">Loading posts...</div>
        }
        {!loading && error && 
        <div className="text-white text-lg text-center py-5">An error occurred fetching posts... </div>
        }
        {!loading && !error && posts.length===0 && 
        <div className="text-white text-lg text-center py-5">No posts available.</div>
        }
        {!loading && !error && posts.length > 0 && 
        posts.map(post =>
          <PostCard key={post.id} post={post} />
        )}
      </div>
    )
}

export default Profile