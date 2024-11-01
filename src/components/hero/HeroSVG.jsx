import "./hero.scss";

const HeroSVG = () => {
  return (
    <div className='herosvg'>
        <svg width="312.5" height="503" viewBox="0 0 580 503" fill="rgba(219,86,141,255)" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_8)">
                <path d="M178 82.5C206 33.5 244.5 64.0001 270.5 18.0001C296.5 -27.9999 345 38 392 18.0001C439 -1.99984 419 50.9999 469.5 44C520 37.0001 480 92 469.5 126C459 160 541 149.5 569 177.5C597 205.5 511.5 198.5 494 251C476.5 303.5 535 377.5 469.5 387C404 396.5 395.5 493.5 350 455C304.5 416.5 332.5 396 270.5 405.5C208.5 415 212.5 464 166 439.5C119.5 415 83.4998 495.5 44.4998 494.5C5.49982 493.5 101.5 391.5 79.4999 376.5C57.4998 361.5 25.5 370.5 11.5 336.5C-2.50004 302.5 5.99982 270.5 44.4998 231.5C82.9998 192.5 130 200 51.5 150.5C-27 92.9999 150 131.5 178 82.5Z" stroke="rgb(255, 195, 203)" shapeRendering="crispEdges"/>
            </g>
                <defs>
                <filter id="filter0_d_1_8" x="0.676498" y="0.837265" width="578.408" height="502.172" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_8"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_8" result="shape"/>
                </filter>
            </defs>
        </svg>
    </div>
  )
}

export default HeroSVG