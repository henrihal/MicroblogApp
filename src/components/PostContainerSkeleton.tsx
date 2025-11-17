import { Paper , Divider } from '@mantine/core';

const PostContainerSkeleton = () => {
  return (
    <div className="px-5 w-full max-w-lg min-w-lg text-white">
      <Paper p="sm" radius="xs" bg="rgba(0, 0, 0, 0)" className="border-1 border-gray-300/10">
        <div className="flex items-baseline gap-2 animate-pulse">
          <div className="py-2 px-20 bg-gray-600 rounded-sm"></div>
          <div className="py-1.5 px-5 bg-gray-600 rounded-sm"></div>
        </div>
        <Divider color="gray" className="my-1"/>
        <div className="py-1.5 px-20 bg-gray-600 rounded-sm animate-pulse my-1"></div>
        <div className="py-1.5 px-20 bg-gray-600 rounded-sm animate-pulse"></div>
      </Paper>
    </div>
  );
}

export default PostContainerSkeleton