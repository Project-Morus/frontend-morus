import { SVGProps } from "react"

const LogoWhiteSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={500}
    height={500}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={202}
      height={221}
      x={149}
      y={93}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M149.38 93.959h201v219.999h-201v-220z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#F8F8F8"
        fillRule="evenodd"
        d="M151.906 313.885h2.412v-94.453l38.625-18.364v112.817h26.953V182.901l-22.12 10.521v-91.537l60.75 31.954v47.828l-22.125 15.151v117.067h26.953V184.214l38.625-26.438v54.281l-22.119-9.088v110.916h26.953v-94.63l38.63 15.865v78.765h4.823v-81.994l-43.453-17.849v-65.417l-43.459 29.734v-47.432l-70.411-37.036v101.828l-43.453 20.666v97.5h2.416zm150.073-96.614v91.776h-17.291v-98.88l17.291 7.104zm-43.453-29.75v121.526h-17.297V199.359l17.297-11.838zm-60.75 11.245 17.292-8.219v118.5h-17.292V198.766z"
        clipRule="evenodd"
      />
    </g>
    <path
      fill="#F8F8F8"
      d="m182.573 372.316-9.125-23.854h-.146c.166 1.891.25 4.135.25 6.729v17.125h-2.875v-26.917h4.708l8.521 22.209h.146l8.604-22.209h4.667v26.917h-3.125v-17.354c0-1.984.083-4.146.25-6.479h-.146l-9.188 23.833h-2.541zm53.303-13.5c0 4.307-1.093 7.698-3.271 10.166-2.182 2.474-5.208 3.709-9.083 3.709-3.958 0-7.021-1.209-9.187-3.625-2.157-2.427-3.23-5.86-3.23-10.292 0-4.375 1.084-7.76 3.25-10.167 2.167-2.416 5.235-3.625 9.209-3.625 3.859 0 6.875 1.23 9.041 3.688 2.178 2.448 3.271 5.828 3.271 10.146zm-21.437 0c0 3.656.771 6.427 2.312 8.312 1.552 1.875 3.813 2.813 6.771 2.813 2.985 0 5.235-.938 6.75-2.813 1.526-1.875 2.292-4.646 2.292-8.312 0-3.625-.761-6.365-2.271-8.229-1.516-1.875-3.76-2.813-6.729-2.813-2.99 0-5.261.948-6.813 2.833-1.541 1.875-2.312 4.615-2.312 8.209zm38.378 2.313v11.187h-3.125v-26.917h7.375c3.302 0 5.74.636 7.313 1.896 1.583 1.266 2.375 3.167 2.375 5.709 0 3.557-1.807 5.958-5.417 7.208l7.313 12.104h-3.709l-6.52-11.187h-5.605zm0-2.688h4.292c2.208 0 3.823-.437 4.854-1.312 1.026-.886 1.542-2.209 1.542-3.959 0-1.776-.531-3.052-1.583-3.833-1.042-.792-2.724-1.188-5.042-1.188h-4.063v10.292zm48.301-13.042v17.417c0 3.073-.932 5.49-2.791 7.25-1.849 1.75-4.391 2.625-7.625 2.625-3.24 0-5.745-.88-7.521-2.646-1.781-1.776-2.667-4.213-2.667-7.312v-17.334h3.146v17.563c0 2.25.609 3.979 1.833 5.187 1.219 1.198 3.026 1.792 5.417 1.792 2.26 0 4.005-.604 5.229-1.812 1.235-1.209 1.854-2.943 1.854-5.209v-17.521h3.125zm30.131 19.75c0 2.375-.865 4.229-2.584 5.563-1.724 1.323-4.057 1.979-7 1.979-3.198 0-5.646-.417-7.354-1.25v-3a20.06 20.06 0 0 0 3.604 1.104c1.302.266 2.594.396 3.875.396 2.084 0 3.651-.396 4.709-1.188 1.052-.791 1.583-1.895 1.583-3.312 0-.927-.188-1.693-.563-2.292-.375-.593-1.01-1.146-1.895-1.646-.875-.5-2.209-1.067-4-1.708-2.5-.885-4.292-1.943-5.375-3.167-1.073-1.234-1.605-2.843-1.605-4.833 0-2.068.776-3.713 2.334-4.937 1.567-1.235 3.635-1.855 6.208-1.855 2.667 0 5.125.495 7.375 1.48l-.979 2.729c-2.224-.927-4.386-1.396-6.479-1.396-1.657 0-2.953.354-3.896 1.062-.932.709-1.396 1.698-1.396 2.959 0 .932.172 1.698.521 2.291.344.599.927 1.146 1.75 1.646.818.5 2.068 1.052 3.75 1.646 2.818 1 4.755 2.083 5.812 3.25 1.068 1.156 1.605 2.646 1.605 4.479zm-227.072 23.287c-1.641 0-2.933.552-3.875 1.646-.948 1.083-1.417 2.578-1.417 4.479 0 1.948.458 3.453 1.375 4.521.917 1.057 2.213 1.583 3.896 1.583 1.041 0 2.229-.187 3.562-.562v1.521c-1.031.385-2.302.583-3.812.583-2.198 0-3.891-.667-5.084-2-1.198-1.333-1.791-3.219-1.791-5.667 0-1.541.281-2.885.854-4.041.583-1.151 1.417-2.042 2.5-2.667s2.354-.937 3.812-.937c1.568 0 2.938.286 4.105.854l-.75 1.5c-1.125-.542-2.25-.813-3.375-.813zm35.502 6.104c0 2.375-.604 4.25-1.813 5.625-1.198 1.365-2.864 2.042-5 2.042-2.198 0-3.89-.667-5.083-2-1.198-1.344-1.792-3.24-1.792-5.688 0-2.427.594-4.312 1.792-5.645 1.193-1.334 2.896-2 5.104-2 2.125 0 3.781.682 4.979 2.041 1.209 1.365 1.813 3.24 1.813 5.625zm-11.854 0c0 2.016.427 3.542 1.291 4.584.86 1.041 2.11 1.562 3.75 1.562 1.636 0 2.88-.521 3.729-1.562.844-1.042 1.271-2.568 1.271-4.584 0-2-.427-3.521-1.271-4.562-.833-1.042-2.073-1.563-3.708-1.563-1.656 0-2.911.531-3.771 1.584-.864 1.041-1.291 2.557-1.291 4.541zm42.606 7.459h-1.958l-8.146-12.5h-.083c.109 1.474.166 2.823.166 4.042v8.458h-1.604v-14.896h1.958l8.125 12.458h.084a85.897 85.897 0 0 1-.104-1.77c-.042-1-.058-1.714-.042-2.146v-8.542h1.604v14.896zm31.796-7.583c0 2.458-.666 4.343-2 5.645-1.333 1.292-3.26 1.938-5.77 1.938h-4.125v-14.896h4.562c2.318 0 4.115.646 5.396 1.938 1.292 1.281 1.937 3.072 1.937 5.375zm-1.833.062c0-1.943-.495-3.406-1.479-4.396-.974-.984-2.417-1.479-4.333-1.479h-2.521v11.896h2.125c2.052 0 3.604-.505 4.646-1.521 1.041-1.01 1.562-2.51 1.562-4.5zm33.86.062c0 2.375-.604 4.25-1.812 5.625-1.198 1.365-2.865 2.042-5 2.042-2.198 0-3.891-.667-5.083-2-1.198-1.344-1.792-3.24-1.792-5.688 0-2.427.594-4.312 1.792-5.645 1.192-1.334 2.895-2 5.104-2 2.125 0 3.781.682 4.979 2.041 1.208 1.365 1.812 3.24 1.812 5.625zm-11.854 0c0 2.016.427 3.542 1.292 4.584.859 1.041 2.109 1.562 3.75 1.562 1.635 0 2.88-.521 3.729-1.562.844-1.042 1.271-2.568 1.271-4.584 0-2-.427-3.521-1.271-4.562-.833-1.042-2.073-1.563-3.708-1.563-1.657 0-2.912.531-3.771 1.584-.865 1.041-1.292 2.557-1.292 4.541zm37.565 7.459-5.041-13.188h-.084c.094 1.042.146 2.282.146 3.709v9.479h-1.604v-14.896h2.604l4.729 12.292h.084l4.75-12.292h2.583v14.896h-1.729v-9.583c0-1.11.047-2.303.146-3.584h-.084l-5.104 13.167h-1.396zm28.046 0v-14.896h1.729v14.896h-1.729zm-.229-16.334a16.35 16.35 0 0 0 1.062-1.52 14.28 14.28 0 0 0 .875-1.563h2.063v.208c-.292.448-.74.995-1.334 1.646-.583.641-1.099 1.136-1.541 1.479h-1.125v-.25zm33.477 16.334H319.3l-8.145-12.5h-.084c.11 1.474.167 2.823.167 4.042v8.458h-1.604v-14.896h1.958l8.125 12.458h.083a94.634 94.634 0 0 1-.104-1.77c-.041-1-.057-1.714-.041-2.146v-8.542h1.604v14.896zm19.9 0v-14.896h1.729v14.896h-1.729zm34.54-7.459c0 2.375-.604 4.25-1.813 5.625-1.198 1.365-2.864 2.042-5 2.042-2.198 0-3.89-.667-5.083-2-1.198-1.344-1.792-3.24-1.792-5.688 0-2.427.594-4.312 1.792-5.645 1.193-1.334 2.896-2 5.104-2 2.125 0 3.781.682 4.979 2.041 1.209 1.365 1.813 3.24 1.813 5.625zm-11.854 0c0 2.016.427 3.542 1.291 4.584.86 1.041 2.11 1.562 3.75 1.562 1.636 0 2.88-.521 3.729-1.562.844-1.042 1.271-2.568 1.271-4.584 0-2-.427-3.521-1.271-4.562-.833-1.042-2.073-1.563-3.708-1.563-1.656 0-2.911.531-3.771 1.584-.864 1.041-1.291 2.557-1.291 4.541zm39.377 3.5c0 1.308-.474 2.328-1.417 3.063-.948.739-2.239 1.104-3.875 1.104-1.765 0-3.12-.229-4.062-.687v-1.667c.609.25 1.271.453 1.979.604.719.156 1.437.229 2.146.229 1.151 0 2.021-.213 2.604-.646.583-.442.875-1.052.875-1.833 0-.51-.104-.937-.313-1.271-.198-.333-.536-.635-1.02-.916-.49-.277-1.23-.589-2.23-.938-1.375-.5-2.364-1.089-2.958-1.771-.599-.677-.896-1.562-.896-2.646 0-1.151.427-2.067 1.292-2.75.859-.677 2-1.02 3.417-1.02 1.484 0 2.843.27 4.083.812l-.542 1.521c-1.224-.526-2.416-.792-3.583-.792-.917 0-1.636.203-2.146.604-.516.391-.771.933-.771 1.625 0 .532.094.959.292 1.292.193.323.51.62.958.896.459.281 1.151.583 2.084.917 1.552.557 2.625 1.156 3.208 1.791.583.641.875 1.469.875 2.479z"
    />
  </svg>
)
export default LogoWhiteSvg