import axios from 'axios';
import { GetSingleUserProps } from '../../types/function';
import { config } from '../../config/config';

const baseURL = config.REACT_APP_BACKEND_BASE_URL;

const getSingleUser = (props: GetSingleUserProps) => {

    axios.get(`${baseURL}/user/getUserById/${props.id}`, {
        headers: {
            Authorization: `Bearer ${props.token}`
        }
    })
        .then((res) => {
            props.setUser(res.data.data);
            if (props.setFormData) {
                props.setFormData({
                    first_name: res.data.data.first_name || '',
                    last_name: res.data.data.last_name || '',
                    address: res.data.data.address || '',
                    mobile: res.data.data.mobile || '',
                });
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

export default getSingleUser;