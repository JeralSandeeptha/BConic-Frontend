import React from 'react';
import './Textfield.scss';
import { TextfieldProps } from '../../types/component';

const Textfield = (props: TextfieldProps) => {

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log('Event:', event); 
        console.log('Value:', event.target.value);
        if (props.onChange) {
          props.onChange(event.target.value);
        }
    }
    
    return (
        <input 
            className='test text-field' 
            placeholder={props.placeholder} 
            type={props.type}
            onChange={handleChange}
            value={props.value}
            name={props.name}
            style={{
                backgroundColor: props.isContact ? 'white' : '#F0F0F0'
            }}
        />
    );
}

export default Textfield;