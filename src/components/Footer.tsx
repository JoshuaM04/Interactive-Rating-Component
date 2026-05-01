function MobileFooter() {
    return (
        <div>
            <p>Challenge by <a className="font-semibold text-blue-500" href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a></p>
            <p>Coded by <a className="font-semibold text-blue-500" href="#">Joshua Martinez</a></p>
        </div>
    )
}

export default function Footer() {
    return (
        <footer className="fixed bottom-0 text-center text-white p-5">
            <MobileFooter />
        </footer>
    )
}