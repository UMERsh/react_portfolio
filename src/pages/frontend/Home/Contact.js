import React, { useState } from 'react'
import { Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore/lite'
import { firestore } from 'config/Firebase'

const initialState = {
    name: "",
    email: "",
    subject: "",
    message: ""
}
export default function Contact() {
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false)

    //handle change function
    const handleChange = (e) => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    //handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault()
        var { name, email, subject, message } = state;
        name = name.trim()
        email = email.trim()
        subject = subject.trim()
        message = message.trim()

        if (name.length < 3) {
            return window.toastify("Please type minimum 3 characters in name", "error")
        }
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!email.match(mailformat)) {
            return window.toastify("You have entered an invalid email address", "error")
        }
        if (subject.length < 5) {
            return window.toastify("Please type minimum 5 characters in subject", "error")
        }
        if (message.length < 10) {
            return window.toastify("Please type minimum 10 characters in message", "error")
        }

        let data = {
            name: name,
            email: email,
            subject: subject,
            message: message,
            dateCreated: serverTimestamp(),

        }

        setData(data)
        // console.log(data);
    }

    const setData = async (data) => {
        setLoading(true)
        await setDoc(doc(firestore, "contact-us", data.email), data,{ merge: true });
        setLoading(false)
        window.toastify("Submitted successfully", "success")
    }



    return (
        <>
            <h2 className='text-info text-center my-5 py-5 fw-bold text-center'>CONTACT</h2>
            <div id='contact-section' >
                <div className='container '>
                    <div className="row row-cols-1 row-cols-md-2 rounded-4 py-5 ">
                        <div className="col px-2 px-sm-4 px-md-5">
                            <h2 className='my-5 fw-bold'>Get In Touch</h2>
                            <form onSubmit={handleSubmit}>
                                <div className='input-group'>
                                    <Input placeholder="Your Name" name='name' className='bg-transparent text-white border-info py-2' onChange={handleChange} />
                                </div>
                                <div className='input-group'>
                                    <Input placeholder="Enter Email" name='email' className='bg-transparent text-white border-info py-2 my-4' onChange={handleChange} />
                                </div>
                                <div className='input-group'>
                                    <Input placeholder="Subject" name='subject' className='bg-transparent text-white border-info py-2 mb-4' onChange={handleChange} />
                                </div>
                                <div className='input-group'>
                                    <TextArea maxLength={100} rows="4" name='message' placeholder="Type your Message (max 0-100 characters)" className='bg-transparent text-white border-info py-2 mb-4' onChange={handleChange} />
                                </div>
                                <button className='btn btn-dark px-5 py-2 fs-5 rounded-0 button-styling' disabled={loading}>
                                    {loading
                                        ? <div class="spinner-border spinner-border-sm text-primary " role="status"></div>
                                        : "Send Message"
                                    }</button>
                            </form>
                        </div>
                        <div className="col mt-5">
                            
                          </div>
                    </div>
                </div>
            </div>
        </>
    )
}
