import axios from 'axios'

export default class UploaderService {
    async UploaderImage(image){
        const formData = new formData()
        formData.append('file', image)
        const response = await axios.post('/media/images/',
            formData, {
                headers:     {
                    'content-Type': 'multipart/form-data'
                }
            }
        )
        return response.data
    }
}