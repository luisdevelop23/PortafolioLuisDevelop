import cv from "../../assets/cv/luis_saavedra_falcon_fullstack.pdf";

const AboutCv = () => {
  return (
    <a
      href={cv}
      download
      className="inline-flex items-center rounded-md border border-transparent bg-[#0082C4] px-6 py-2 text-base AcornSemiBold text-white shadow-sm transition duration-150 ease-in-out hover:bg-[#0055c4]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="#ffffff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path
            fill="#ffffff"
            fill-opacity="0"
            stroke-dasharray="20"
            stroke-dashoffset="20"
            d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"
          >
            <animate
              attributeName="d"
              begin="0.5s"
              dur="1.5s"
              repeatCount="indefinite"
              values="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5;M12 4h2v3h2.5l-4.5 4.5M12 4h-2v3h-2.5l4.5 4.5;M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"
            />
            <animate
              fill="freeze"
              attributeName="fill-opacity"
              begin="0.7s"
              dur="0.5s"
              values="0;1"
            />
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.4s"
              values="20;0"
            />
          </path>
          <path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.5s"
              dur="0.2s"
              values="14;0"
            />
          </path>
        </g>
      </svg>
      Download CV
    </a>
  );
};

export default AboutCv;
