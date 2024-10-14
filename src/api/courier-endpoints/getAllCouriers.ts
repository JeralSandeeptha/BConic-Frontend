import axios from "axios";
import { GetAllCouriersProps } from "../../types/function";
const baseURL = process.env.REACT_APP_BACKEND_BASE_URL;

const getAllCouriers = (props: GetAllCouriersProps) => {
    try {
        axios.get(`${baseURL}/courier/getAllCouriers/`)
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