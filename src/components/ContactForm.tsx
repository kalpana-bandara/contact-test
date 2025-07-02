import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e : any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e : any) => {
        e.preventDefault();
        // Optional: you can send the data to an API or perform validation here
        console.log(formData);
    };

    return (
        <form
            name="contact"
            method="POST"
            action="/thank-you/"
            data-netlify="true"
            onSubmit={handleSubmit}
        >
            <input type="hidden" name="form-name" value="contact" />
            
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label htmlFor="message">Message</label>
            <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>

            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;