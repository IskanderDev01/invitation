import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';
import gsap from 'gsap';

interface FormData {
    firstName: string;
    lastName: string;
}

export const InvitationForm = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
    });
    const [message, setMessage] = useState<string>('');
    const messageRef = useRef<HTMLDivElement>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('https://www.agrar.admin.aralhub.uz/user/', {
                first_name: formData.firstName,
                last_name: formData.lastName,
            });
            setMessage(
                `Thank you, ${formData.firstName} ${formData.lastName}! You are invited to the wedding!`,
            );
            setFormData({ firstName: '', lastName: '' });

            gsap.fromTo(
                messageRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 1, ease: 'power1.out' },
            );
        } catch (error) {
            setMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="flex font-parisienne text-xl flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-[#fffbfb] to-[#e1d9d4]">
            <h2 className="text-center text-[28px] font-parisienne text-[#9D8280] mb-6">
                RSVP to Our Wedding
            </h2>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm bg-transparent rounded-lg px-6"
            >
                <label className="block text-[#9D8280] font-semibold mb-2">
                    First Name
                </label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 mb-4 text-[#9D8280] bg-[#f9f5f5] rounded-lg border border-[#9D8280] focus:outline-none focus:ring-2 focus:ring-[#9D8280] transition-shadow"
                    placeholder="Enter your first name"
                />

                <label className="block text-[#9D8280] font-semibold mb-2">
                    Last Name
                </label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 mb-4 text-[#9D8280] bg-[#f9f5f5] rounded-lg border border-[#9D8280] focus:outline-none focus:ring-2 focus:ring-[#9D8280] transition-shadow"
                    placeholder="Enter your last name"
                />

                <button
                    type="submit"
                    className="border-none w-full px-4 py-3 mt-4 text-white bg-gradient-to-r from-[#9D8280] to-[#e1d9d4] rounded-lg font-semibold shadow-md hover:shadow-lg focus:outline-none transition-all duration-300 transform hover:scale-105"
                >
                    Submit
                </button>
            </form>

            {message && (
                <div
                    ref={messageRef}
                    className="mt-6 p-4 bg-[#e1d9d4] text-[#9D8280] text-center rounded-lg shadow-lg max-w-xs"
                >
                    {message}
                </div>
            )}
        </div>
    );
};
