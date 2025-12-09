import { Paper, Text, Divider, Textarea } from '@mantine/core'
import type { Post } from './Post.interface'
import userService from '../services/userService'
import { use, useEffect, useState } from 'react'
import { Link } from 'react-router'
import { AuthContext } from './AuthContext'
import { IconDotsVertical, IconPencil, IconTrash, IconCheck, IconX } from '@tabler/icons-react'

const PostContainer = ({ post, onDelete, onUpdate }: { post: Post, onDelete: (id: number) => void, onUpdate: (post: Post) => void }) => {
  const [user, setUser] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState(post.content)
  const current_user = use(AuthContext)

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const userName = await userService.getUserName(post.user_id)
        if (userName) {
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

  const handleDelete = () => {
    setIsOpen(false)
    onDelete(post.id)
  }

  const handleEditClick = () => {
    setIsOpen(false)
    setIsEditing(true)
  }

  const handleSaveEdit = () => {
    const updatedPost = {
      ...post,
      content: editedContent
    }
    onUpdate(updatedPost)
    setIsEditing(false)
  }

  const handleCancelEdit = () => {
    setEditedContent(post.content)
    setIsEditing(false)
  }

  return (
    <div className="px-5 w-full max-w-lg min-w-lg text-white">
      <Paper p="sm" radius="xs" bg="rgba(0, 0, 0, 0)" className="border-1 border-gray-300/10">
        <div className="flex items-baseline gap-2">
          <Text size="md">{post.title}</Text>
          <Text size="sm" c="gray"><Link to={`/profile/${post.user_id}`}>{`@${user}#${post.user_id}`}</Link></Text>
          {post.user_id === Number(current_user!.user.id) && !isEditing &&
            <div className="ml-auto relative">
              <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer hover:bg-gray-700/50 rounded p-1 transition-colors">
                <IconDotsVertical size={15} />
              </button>
              {isOpen &&
                <div className="flex flex-col z-10 absolute text-xs bg-slate-800 border border-gray-600/50 rounded">
                  <button onClick={handleEditClick} className="flex justify-center hover:bg-gray-700/50 rounded transition-colors w-full p-2 cursor-pointer">
                    <IconPencil size={15} />
                  </button>
                  <button onClick={handleDelete} className="flex justify-center text-red-400 hover:bg-gray-700/50 rounded transition-colors w-full p-2 cursor-pointer">
                    <IconTrash size={15} />
                  </button>
                </div>
              }
            </div>
          }
          {isEditing &&
            <div className="ml-auto flex gap-1">
              <button onClick={handleSaveEdit} className="cursor-pointer hover:bg-gray-700/50 rounded p-1 transition-colors">
                <IconCheck size={15} />
              </button>
              <button onClick={handleCancelEdit} className="cursor-pointer hover:bg-gray-700/50 text-red-400 rounded p-1 transition-colors">
                <IconX size={15} />
              </button>
            </div>
          }
        </div>
        <Divider color="gray" className="my-1" />
        {isEditing ? (
          <Textarea
            variant="filled"
            value={editedContent}
            autosize
            onChange={(e) => setEditedContent(e.currentTarget.value)}
            styles={{
              input: {
                backgroundColor: 'rgb(30 41 59)', // slate-800
                border: '1px solid rgba(75, 85, 99, 0.5)', // gray-600/50
                color: 'white'
              }
            }}
          />

        ) : (
          <Text size="sm" className="break-words">{post.content}</Text>
        )}
      </Paper>
    </div>
  )
}

export default PostContainer