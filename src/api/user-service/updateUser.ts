import axios from 'axios';
import { UpdateUserProps } from '../../types/function';

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL;

const updateUser = async (props: UpdateUserProps) => {
    try {
        await axios.put(`${baseURL}/user/updateByUserId/${props.id}`, props.formData)
            .then((res) => {
                console.log(res.data);
                props.setSuccess(true);
                props.setStatusCode(200);
                props.setMessage('Your profile is updated successfully');
                if (props.getSingleUser) {
                    props.getSingleUser({
                        setUser: props.setUser,
                        setFormData: props.setFormData,
                        id: props.id
                    });
                } else {
                    console.log('Cannot get single user');
                    props.setStatusCode(400);
                    props.setMessage('Cannot get single user');
                    props.setError(true);
                }
                setTimeout(() => {
                    props.setSuccess(false);
                }, 5000);
            })
            .catch((error) => {
                console.log(error);
                props.setStatusCode(error.response.status);
                props.setMessage(error.response.data.message);
                props.setError(true);
                setTimeout(() => {
                    props.setError(false);
                }, 2000);
            });
    } catch (error: any) {
        console.log(error);
        props.setStatusCode(error.response.status);
        props.setMessage(error.response.data.message);
        props.setError(true);
        setTimeout(() => {
            props.setError(false);
        }, 2000);
    }
}

export default updateUser;