import React from 'react';

const ImageModal = ({ image, onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50 p-4"
            onClick={handleOverlayClick}
        >
            <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl max-w-full max-h-full">
                <button
                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    onClick={onClose}
                >
                    &times;
                </button>
                <img
                    src={image.src}
                    alt={image.alt}
                    className="max-w-full max-h-screen object-contain"
                />
                {image.alt && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white p-2 text-center text-sm">
                        {image.alt}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageModal;