const BackgroundSvgEarn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 360 516"
      fill="none"
    >
      <g filter="url(#filter0_f_5316_5349)">
        <ellipse
          cx="180"
          cy="258"
          rx="193"
          ry="94"
          fill="url(#paint0_radial_5316_5349)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_5316_5349"
          x="-177"
          y="0"
          width="714"
          height="516"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood
            floodOpacity="0"
            result="BackgroundImageFix"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="82"
            result="effect1_foregroundBlur_5316_5349"
          />
        </filter>
        <radialGradient
          id="paint0_radial_5316_5349"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(180 258) rotate(90) scale(94 193)"
        >
          <stop stopColor="#1E87FB" />
          <stop offset="1" stopColor="white" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default BackgroundSvgEarn
