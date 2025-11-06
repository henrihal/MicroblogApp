import { Paper, Text, Divider } from '@mantine/core';
import type { Post } from './Post.interface'
import userService from '../services/userService'
import { useEffect, useState } from 'react';

const PostContainer = ({post}: {post: Post}) => {
  const [user, setUser] = useState('')

  useEffect(() => {
  const fetchUserName = async () => {
    try {
      const userName = await userService.getUserName(post.user_id)
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
}, [post.user_id])

  

  return (
    <div className="py-1 px-5 w-full max-w-lg min-w-xs">
      <Paper shadow="md" p="sm">
        <Text size="xl"><a href={`/profile/${post.user_id}`}>{user}</a></Text>
        <Divider my="sx" />
        <Text size="lg">{post.title}</Text>
        <Text>{post.content}</Text>
      </Paper>
    </div>
  );
}

export default PostContainer