import axios from "axios";
import { GetCouriersByUserIdProps } from "../../types/function";
const baseURL = process.env.REACT_APP_BACKEND_BASE_URL;

const getAllCouriersByUserId = (props: GetCouriersByUserIdProps) => {
    try {
        axios.get(`${baseURL}/courier/getCouriersByUserId/${props.userId}`, {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        })
            .then((res) => {
                console.log(res.data.data);
                props.setCourieres(res.data.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    } catch (error: any) {
        console.log(error.message);
    }
}

export default getAllCouriersByUserId;