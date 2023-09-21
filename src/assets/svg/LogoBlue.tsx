import { SVGProps } from "react"
const LogoBlueSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={76}
    height={65}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={76}
      height={65}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M0 0h75.04v64.969H0V0Z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#004AAD"
        fillRule="evenodd"
        d="M.943 64.947h.9V37.054l14.42-5.423v33.316h10.063V26.266l-8.258 3.107V2.34l22.68 9.436v14.124l-8.26 4.475v34.571H42.55V26.653l14.42-7.807v16.03l-8.258-2.684v32.755h10.063V37.002l14.422 4.685v23.26h1.8V40.733l-16.222-5.27v-19.32L42.55 24.926V10.917L16.263-.02v30.071L.041 36.154v28.793h.902ZM56.97 36.416v27.102h-6.455v-29.2l6.455 2.098ZM40.748 27.63v35.888H34.29V31.126l6.458-3.496Zm-22.68 3.32 6.455-2.426v34.994h-6.455V30.951Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
)
export default LogoBlueSVG