import { useState } from 'react';

interface MobileProps {
    rating: Array<number>;
    activeRating: boolean;
    setActiveRating: Function;
}

function MobileMain({rating, activeRating, setActiveRating}: MobileProps) {
    return (
        <div className="flex flex-col gap-5 bg-gray-600 rounded-xl p-5">
            <h1 className="text-white font-semibold text-2xl">How did we do?</h1>

            <p>
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>

            <div className="flex justify-around">
                {
                    rating.map((item, index) => {
                        return (
                            <button key={index}>{item}</button>
                        )
                    })
                }
            </div>

            <button>Submit</button>

            <div className="hidden aria-hidden">
                Thank you!
                We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
            </div>
        </div>
    )
}


export default function Main() {
    const rating = [1, 2, 3, 4, 5];
    const [activeRating, setActiveRating] = useState(false);

    return (
        <main>
            <MobileMain 
                rating={rating}
                activeRating={activeRating}
                setActiveRating={setActiveRating}
            />
        </main>
    )
}