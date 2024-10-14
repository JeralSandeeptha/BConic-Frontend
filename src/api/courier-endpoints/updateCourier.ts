import axios from "axios";
import { UpdateCourierById } from "../../types/function";
const baseURL = process.env.REACT_APP_BACKEND_BASE_URL;

const updateCourier = (props: UpdateCourierById) => {
    try {
        props.setSuccess(true);
        axios.put(`${baseURL}/courier/updateByCourierId/${props.courierId}`, {
            status: props.status
        })
            .then((res) => {
                console.log(res.data.data);
                console.log(res.data);
                props.setStatusCode(200);
                props.setLoading(true);
                props.setMessage('Your profile is updated successfully');
                setTimeout(() => {
                    props.setSuccess(false);
                    props.setLoading(false);
                }, 5000);
            })
            .catch((error) => {
                console.log(error.message);
                props.setStatusCode(400);
                props.setMessage('Can not update the courier.');
                props.setError(true);
                setTimeout(() => {
                    props.setError(false);
                    props.setLoading(false);
                }, 2000);
            });
    } catch (error: any) {
        console.log(error);
        props.setStatusCode(error.response.status);
        props.setMessage(error.response.data.message);
        props.setError(true);
        setTimeout(() => {
            props.setError(false);
            props.setLoading(false);
        }, 2000);
    }
}

export default updateCourier;