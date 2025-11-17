import { Paper, Text, Divider } from '@mantine/core';
import type { Post } from './Post.interface'
import userService from '../services/userService'
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

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
    <div className="px-5 w-full max-w-lg min-w-lg text-white">
      <Paper p="sm" radius="xs" bg="rgba(0, 0, 0, 0)" className="border-1 border-gray-300/10">
        <div className="flex items-baseline gap-2">
          <Text size="sm">{post.title}</Text>
          <Text size="xs" c="gray"><Link to={`/profile/${post.user_id}`}>{`@${user}#${post.user_id}`}</Link></Text>
        </div>
        <Divider color="gray" className="my-1"/>
        <Text size="xs">{post.content}</Text>
      </Paper>
    </div>
  );
}

export default PostContainer