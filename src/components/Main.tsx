import starIcon from '../assets/images/icon-star.svg';
import illustrationThankYou from '../assets/images/illustration-thank-you.svg';
import { DialogTrigger, Modal, Dialog, Button } from 'react-aria-components';
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

            <h1 className="text-white text-3xl font-semibold">How did we do?</h1>

            <p className="text-slate-400 text-sm">
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>

            <div className="flex justify-around">
                {
                    rating.map((item, index) => {
                        return (
                            <Button key={index} onClick={() => setActiveRating(item)} className={`[ size-10 ] [ rounded-full ] [ ${activeRating === item ? 'text-black bg-orange-500' : 'text-white hover:text-black bg-grey-500 hover:bg-white'} ]`}>{item}</Button>
                        )
                    })
                }
            </div>

            <DialogTrigger>
                <Button className="[ uppercase font-bold hover:text-black ] [ bg-orange-500 hover:bg-white ] [ rounded-full ] [ p-3 ]">Submit</Button>
                <Modal className="[ bg-grey-900 ] [ rounded-xl ] [ p-5 ] absolute top-0 bottom-0 left-0 right-0 m-auto w-83.75 h-86" isDismissable>
                    <Dialog className="[ flex flex-col gap-5 items-center ] text-center">
                        <div className="img-container">
                            <img src={illustrationThankYou} aria-hidden="true" />
                        </div>
                        <p className="text-orange-500 bg-grey-500 rounded-full p-2 text-sm w-fit">You selected {activeRating} out of 5</p>
                        <h2 className="text-white text-2xl font-semibold">Thank you!</h2>
                        <p className="text-slate-400 text-sm">
                            We appreciate you taking the time to give a rating. If you ever need more support,
                            don’t hesitate to get in touch!
                        </p>
                    </Dialog>
                </Modal>
            </DialogTrigger>
            
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