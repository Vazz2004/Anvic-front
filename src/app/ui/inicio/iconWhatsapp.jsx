'use client'
import { FaWhatsapp } from "react-icons/fa6";

export default function Example() {
    return (
        <>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
            <a
                href="https://api.whatsapp.com/send?phone=573102262756&text=%C2%A1HOLA!%20Me%20permites%20m%C3%A1s%20informaci%C3%B3n...."
                className="fixed w-16 h-16 bottom-10 right-10 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl shadow-md z-10"
                target="_blank"
            >
                <FaWhatsapp />
            </a>
        </>
    );
}
