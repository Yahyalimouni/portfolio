import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Links } from "../data/Links";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import ProcessingButton from '../ui/ProcessingButton'

type ContactWay = {
    icon: React.ElementType;
    name: string;
    link: string;
};

const contactWays: Record<string, ContactWay> = {
    linkedin: {
        icon: FaLinkedin,
        name: "LinkedIn",
        link: Links["linkedin"],
    },
    whatsapp: {
        icon: FaWhatsapp,
        name: "WhatsApp",
        link: "34604131790",
    },
    email: {
        icon: HiOutlineMail,
        name: "Email",
        link: "yahyalimouni02@gmail.com",
    },
};

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [sent, setSent] = useState(false);
    const [processing, setProcessing] = useState(false);

    // Only allow valid email characters
    const cleanEmail = (value: string) => value.replace(/[^a-zA-Z0-9@._-]/g, "");
    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleChange = (field: keyof typeof formData, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: field === "email" ? cleanEmail(value) : value,
        }));
    };

    const serviceID = "service_uxfmeoi";
    const templateID = "template_3wixkfu";
    const publicKey = "QV5UQGqs_MqKNrSqj";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setErrorMessage("");
        setSent(false);

        const { firstName, lastName, email, subject, message } = formData;

        if (!firstName || !lastName || !email || !subject || !message) {
            setErrorMessage("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        setProcessing(true);

        try {
            await emailjs.send(
                serviceID,
                templateID,
                {
                    from_name: `${firstName} ${lastName}`,
                    from_email: email,
                    subject: subject,
                    message: message,
                },
                publicKey
            );

            setSent(true);
            setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
        } catch (error) {
            setErrorMessage(`An unexpected error occurred: ${String(error)}`);
        } finally {
            setProcessing(false);
        }
    };

    return (
        <section
            id="contact"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center
                        min-h-screen w-full px-4 md:px-16 py-15"
        >
            {/* Texts part */}
            <div className="z-10 flex flex-col gap-4">
                <h1
                    className="text-4xl font-bold
                                bg-gradient-to-r from-orange-800 via-blue-800 to-purple-800
                                text-transparent bg-clip-text"
                >
                    Let’s Turn Concepts into Reality
                </h1>
                <p className="text-xl text-gray-400">
                    I turn ideas into results. Let’s build impactful projects together and make your team stronger.
                </p>

                <div className="flex gap-8">
                    {Object.entries(contactWays).map(([key, { icon: Icon, link }]) => (
                        <a
                            key={key}
                            href={
                                key === "whatsapp"
                                    ? `https://wa.me/${link}`
                                    : key === "email"
                                    ? `mailto:${link}`
                                    : link
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-4 text-pr-l/80 shadow-lg hover:text-pr-l/50
                                        transition-colors text-3xl flex items-center justify-center"
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="w-full md:p-10 p-4 rounded-2xl relative flex flex-col gap-8 bg-pr-xspd text-pr-l"
            >
                <div className="absolute inset-2 rounded-[inherit] -z-1 blur-lg
                                bg-gradient-to-br from-pr via-orange-600 to-purple-800"></div>
                <fieldset className="flex flex-col gap-4">
                    {/* Name fields */}
                    <div className="flex flex-col md:flex-row gap-2 justify-between">
                        {["firstName", "lastName"].map((field) => (
                            <div className="input-grp" key={field}>
                                <input
                                    type="text"
                                    id={field}
                                    className="input-field"
                                    maxLength={30}
                                    required
                                    placeholder={field === "firstName" ? "Your first name" : "Your last name"}
                                    value={formData[field as keyof typeof formData]}
                                    onChange={(e) => handleChange(field as keyof typeof formData, e.target.value)}
                                />
                                <label htmlFor={field} className="label">
                                    {field === "firstName" ? "First Name" : "Last Name"}
                                </label>
                            </div>
                        ))}
                    </div>

                    {/* Email */}
                    <div className="input-grp">
                        <input
                            type="email"
                            id="email"
                            className={`${emailError ? "!border-red-800" : ""} input-field`}
                            placeholder="example@gmail.com"
                            required
                            maxLength={50}
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            onBlur={() => setEmailError(!validateEmail(formData.email))}
                        />
                        <label htmlFor="email" className="label">
                            Email
                        </label>
                    </div>

                    {/* Subject */}
                    <div className="input-grp">
                        <input
                            type="text"
                            id="subject"
                            className="input-field"
                            maxLength={80}
                            required
                            placeholder="The subject..."
                            value={formData.subject}
                            onChange={(e) => handleChange("subject", e.target.value)}
                        />
                        <label htmlFor="subject" className="label">
                            Subject
                        </label>
                    </div>

                    {/* Message */}
                    <div className="input-grp">
                        <textarea
                            id="message"
                            placeholder="Type your message..."
                            className="input-field min-h-30"
                            maxLength={500}
                            required
                            value={formData.message}
                            onChange={(e) => handleChange("message", e.target.value)}
                        ></textarea>
                        <label htmlFor="message" className="label">
                            Message
                        </label>
                    </div>
                </fieldset>

                {/* Status messages */}
                {errorMessage && <div className="font-medium text-red-800">{errorMessage}</div>}
                {sent && <div className="font-medium text-green-800">Message sent successfully!</div>}

                {/* Conditional buttons */}
                {processing ? (
                    <ProcessingButton className="w-full rounded-lg p-3 font-bold text-xl text-pr-spd" children="sending..."/>
                ) : (
                    <button
                        type="submit"
                        className="w-full rounded-lg p-3 bg-pr hover:bg-pr/75 duration-300 ease-out
                                    font-bold text-xl text-pr-spd cursor-pointer"
                    >
                        Send
                    </button>
                )}
            </form>
        </section>
    );
};

export default Contact;
