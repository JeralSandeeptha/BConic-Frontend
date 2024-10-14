import React from 'react';
import './TextArea.scss';
import { TextAreaProps } from '../../types/component';

const TextArea = (props: TextAreaProps) => {

    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        console.log('Event:', event); 
        console.log('Value:', event.target.value); 
        if (props.onChange) {
          props.onChange(event.target.value);
        }
    }

    return (
        <textarea
            className='test text-field' 
            placeholder={props.placeholder} 
            onChange={handleChange}
            value={props.value}
            style={{
                backgroundColor: props.isContact ? 'white' : '#F0F0F0'
            }}
        />
    );

}

export default TextArea;
