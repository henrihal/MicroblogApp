
const baseUrl = 'http://localhost:5001/api/post'

const getAll = async () => {
        try {
            const response = await fetch(baseUrl+'?limit=50')
            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }
            const result = await response.json()
            

            return result.data.posts
        } catch (err: unknown) {
            if(err instanceof Error){
                console.log(err.message)
            }

        }
    
}

export default {getAll}