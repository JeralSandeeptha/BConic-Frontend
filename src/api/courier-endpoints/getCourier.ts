import axios from "axios";
import { GetCourierProps } from "../../types/function";
const baseURL = process.env.REACT_APP_BACKEND_BASE_URL;

const getCourier = (props: GetCourierProps) => {
    try {
        axios.get(`${baseURL}/courier/getCourierById/${props.courierId}`, {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        })
            .then((res) => {
                console.log(res.data.data);
                props.setCourier(res.data.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    } catch (error: any) {
        console.log(error.message);
    }
}

export default getCourier;