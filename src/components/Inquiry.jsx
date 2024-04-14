

function IconArrowRight(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

const ProjectInquirySection = () => {
  return (
    <div className="bg-gray-100 py-16 px-8 flex justify-center">
      <div className="max-w-screen-lg text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Do you have a project in mind?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Reach out to us. Lets uncover how we can bring additional value to
          your business.
        </p>
        <button className="bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 group">
          Get Your Quote{" "}
          <IconArrowRight className="inline-block h-4 w-4 ml-2  group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default ProjectInquirySection;
