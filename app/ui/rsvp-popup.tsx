interface RsvpPopupProps {
    onClose: () => void;
}

export default function RsvpPopup({ onClose }: RsvpPopupProps) {
    return (
        <div 
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div 
                className="bg-[rgb(248,245,239)] p-8 rounded-lg max-w-md w-full mx-4 relative shadow-lg border border-gray-200"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-[rgb(51,51,51)] hover:text-gray-700 text-xl font-bold"
                    aria-label="Close popup"
                >
                    ×
                </button>
                <h2 className="text-2xl font-bold mb-6 text-center text-[rgb(51,51,51)] font-['Alice',serif]">RSVP</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(51,51,51)] bg-white text-[rgb(51,51,51)] font-['Almarai',sans-serif]"
                    />
                    <button className="w-full border border-[rgb(51,51,51)] rounded-full px-6 py-2 hover:bg-[rgb(51,51,51)] hover:text-white transition-colors text-[rgb(51,51,51)] font-['Almarai',sans-serif] font-medium">
                        Find RSVP
                    </button>
                </div>
            </div>
        </div>
    )
}