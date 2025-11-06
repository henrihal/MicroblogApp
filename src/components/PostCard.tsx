import { Paper, Text } from '@mantine/core';
import type { Post } from './Post.interface'

const PostContainerTest = ({post}: {post: Post}) => {

  return (
    <div className="py-1 px-5 w-full max-w-lg">
      <Paper shadow="md" p="md">
        <Text size="lg"><a href={`/profile/${post.user_id}`}>{post.title}</a></Text>
        <Text>{post.content}</Text>
      </Paper>
    </div>
  );
}

export default PostContainerTest