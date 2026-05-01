import starIcon from '../assets/images/icon-star.svg';
import { useState } from 'react';

interface MobileProps {
    rating: Array<number>;
    activeRating: number;
    setActiveRating: Function;
}

function MobileMain({rating, activeRating, setActiveRating}: MobileProps) {
    return (
        <div className="[ flex flex-col gap-5 ] [ bg-grey-900 ] [ rounded-xl ] [ p-5 ] [ w-83.75 ]">
            <div className="[ img-container ] [ bg-grey-500 ] [ rounded-full ] [ p-3 ] [ size-fit ]">
                <img src={starIcon} aria-hidden="true" />
            </div>

            <h1 className="text-white text-2xl font-semibold">How did we do?</h1>

            <p className="text-slate-400 text-sm">
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>

            <div className="flex justify-around">
                {
                    rating.map((item, index) => {
                        return (
                            <button key={index} onClick={() => setActiveRating(item)} className={`[ size-10 ] [ rounded-full ] [ ${activeRating === item ? 'text-black bg-orange-500' : 'text-white hover:text-black bg-grey-500 hover:bg-white'} ]`}>{item}</button>
                        )
                    })
                }
            </div>

            <button className="[ uppercase font-bold hover:text-black ] [ bg-orange-500 hover:bg-white ] [ rounded-full ] [ p-3 ]">Submit</button>

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
    const [activeRating, setActiveRating] = useState(0);

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