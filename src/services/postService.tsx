
const baseUrl = 'http://localhost:5001/api/post'

let token = null

const setToken = (newToken: string) => {
    token = `bearer ${newToken}`
}

const getAll = async ({ user_id }: { user_id?: string } = {}) => {
    const userParam = user_id ? `&user_id=${user_id}` : ''
    try {
        const response = await fetch(`${baseUrl}?limit=50${userParam}`)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const result = await response.json()
        return result.data.posts
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message)
        }

    }

}

const getBySearch = async (query: string) => {
    try {
        const response = await fetch(`${baseUrl}/search?search=${query}`)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const results = await response.json()
        return results.data
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message)
        }
    }
}

const create = async (post: { title: string, content: string }) => {
    try {
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Authorization": token!,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
        if (!response.ok) {
            throw new Error(`Error creating post with status ${response.status}`)
        }
        const result = await response.json()
        console.log(result)
        return result.data
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message)
        }
    }
}

const deleteById = async (id: number) => {
    try {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": token!
            }
        })
        if(!response.ok) {
            throw new Error(`Error deleting post: ${response.status}`)
        }
        const result = await response.json()
        console.log(result)
        return result.data
    } catch (err: unknown) {
        if(err instanceof Error) {
            return console.log(err.message)
        }
    }
}

const update = async (post : {id: number, title: string, content: string}) => {
    try {
        const response = await fetch(`${baseUrl}/${post.id}`, {
            method: "PUT",
            headers: {
                "Authorization": token!,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: post.title,
                content: post.content
            })
        })
        if(!response.ok) {
            throw new Error(`Error updating post: ${response.status}`)
        }
        const result = await response.json()
        console.log(result)
        return result.data
    } catch (err: unknown) {
        if(err instanceof Error) {
            console.log(err.message)
        } 
    }
}

export default { getAll, getBySearch, setToken, create, deleteById, update }