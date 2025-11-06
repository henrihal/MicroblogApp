const baseUrl = 'http://localhost:5001/api/user'

const getUserName = async (id: number) => {

    try{
        const response = await fetch(baseUrl + `/${id}` )
        if(!response.ok) {
            throw new Error(`Reponse status: ${response.status}`)
        }
        const result = await response.json()


        return result.data.name
        } catch(err: unknown) {
            if(err instanceof Error) {
                console.log(err.message)
            }
        }
}
export default { getUserName }