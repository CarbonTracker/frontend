import photos from '../assets/hero-photos.png'

export default function Hero() {
    return (
        <div className="px-12 pt-4 flex min-h-full gap-10 pb-10">
            <div>
                <h4 className="text-grey font-semibold">Carbon Verifier</h4>

                <h1 className="text-6xl font-bold text-black leading-[65px] mb-10">Change the<br/>world with<br/>small actions</h1>

                <p className="w-[450px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed facilisis diam. Praesent tincidunt lobortis turpis. In vehicula posuere iaculis. Nunc a metus eu turpis ultrices tincidunt sed sed metus.</p>
            </div>
            <div className="pt-7">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed facilisis diam. Praesent tincidunt lobortis turpis. In vehicula posuere iaculis. Nunc a metus eu turpis ultrices tincidunt sed sed metus. </p>
                <button className="mt-6 bg-darkgreen rounded-full px-6 py-1 text-white font-semibold">Lorem ipsum</button>
            </div>
            <img className="absolute z-10 right-10 -bottom-40" src={photos}></img>
        </div>
    )
}