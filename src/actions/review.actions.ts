import axios from 'axios';
import { API_URL } from "@env"

export const review = (product_id: number, name: string, email: string, feedback:string, experience:string, recommend: boolean) => {
    return axios.post(`${API_URL}/reviews`, {
        product_id: product_id,
        name: name,
        email: email,
        feedback: feedback,
        experience: experience,
        recommend: recommend
})
}