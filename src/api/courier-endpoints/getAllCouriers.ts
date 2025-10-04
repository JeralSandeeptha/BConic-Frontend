import axios from "axios";
import { GetAllCouriersProps } from "../../types/function";
import { config } from "../../config/config";

const baseURL = config.REACT_APP_BACKEND_BASE_URL;

const getAllCouriers = (props: GetAllCouriersProps) => {
    try {
        axios.get(`${baseURL}/courier/getAllCouriers/`, {
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

export default getAllCouriers;