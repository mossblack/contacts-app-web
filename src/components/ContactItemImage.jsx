import React from 'react';

const ContactItemImage = ({imageUrl}) => (
    <div className='contact-item__image'>
        <img src={imageUrl} alt="contact avatar" />
    </div>
);

export default ContactItemImage;