import React from "react";
import Keyboard from '../../../assets/images/gallery/keyboard.jpg'
import Microphone from '../../../assets/images/gallery/microphone.jpg'
import Mouse from '../../../assets/images/gallery/mouse.jpg'
import Mousepad from '../../../assets/images/gallery/mousepad.jpg'
import Ram from '../../../assets/images/gallery/ram.jpg'
import Keyboard2 from '../../../assets/images/gallery/keyboard2.jpg'

// 1900 x 600

export default function Gallery() {

    const gallery = [
        {
            id: 1,
            src: Keyboard,
            content: 'content',
            alt: 'Gallery 2'
        },
        {
            id: 2,
            src: Microphone,
            content: 'content',
            alt: 'Gallery 2'
        },
        {
            id: 3,
            src: Mouse,
            content: 'content',
            alt: 'Gallery 3'
        },
        {
            id: 4,
            src: Mousepad,
            content: 'content',
            alt: 'Gallery 4'
        },
        {
            id: 5,
            src: Ram,
            content: 'content',
            alt: 'Gallery 5'
        },
        {
            id: 6,
            src: Keyboard2,
            content: 'content',
            alt: 'Gallery 6'
        },
    ];

    return (
        <>
            {gallery.map(item => (

                <img
                    className="d-block w-100"
                    src={item.src}
                    alt={item.alt}
                />

            ))}
        </>
    );
}
