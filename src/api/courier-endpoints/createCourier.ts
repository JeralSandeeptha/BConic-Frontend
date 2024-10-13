import axios from "axios";
import { HandleAddCourierProps, HandleUserRegisterProps } from "../../types/function";

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL;

const createCourier = async (props: HandleAddCourierProps) => {
    console.log(baseURL);
    try {
        await axios.post(`${baseURL}/courier/createCourier`, {
            user_id: props.userId,
            senderName: props.senderName,
            senderAddress: props.senderAddress,
            recepientName: props.recepientName,
            recepientAddress: props.recepientAddress,
            additionalInfo: props.additionalInfo,
            mobile: props.mobile,
        })
            .then((res) => {
                console.log(res.data.data);
                props.setLoading(true);
                setTimeout(() => {
                    props.navigate('/dashboard/my-couriers');
                    props.setLoading(false);
                }, 5000);
            })
            .catch((error) => {
                console.log(error);
                props.setStatusCode(error.response.status);
                props.setMessage(error.response.data.message);
                props.setLoading(false);
                props.setError(true);
                setTimeout(() => {
                    props.setError(false);
                }, 2000);
            });
    } catch (error: any) {
        console.log(error);
        props.setStatusCode(error.response.status);
        props.setMessage(error.response.data.message);
        props.setLoading(false);
        props.setError(true);
        setTimeout(() => {
            props.setError(false);
        }, 2000);
    }
}

export default createCourier;