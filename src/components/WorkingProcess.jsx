const HowItWorks = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-blue-950 font-['Inter']">
          <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
          <p className="text-md text-center mb-10">
            Elevate your business to unprecedented success through the
            synergistic collaboration and expertise offered by our agency,
            propelling your brand to new heights.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center bg-white p-8 rounded-lg">
              <img
                src="/form.svg"
                alt="form "
                className="w-16 rounded-full bg-gray-100 p-4"
              />
              <h5 className="text-xl font-bold text-blue-800 mt-4">Step 1</h5>
              <h3 className="text-xl font-bold text-blue-950 mt-4">
                Fill Out a Form
              </h3>
              <p className="text-md text-center mt-2">
                Give us a sense of your business and marketing needs
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-8 rounded-lg">
              <img
                src="/consult.svg"
                alt="consult "
                className="w-16 rounded-full bg-gray-100 p-4"
              />
              <h5 className="text-xl font-bold text-blue-800 mt-4">Step 2</h5>
              <h3 className="text-xl font-bold text-blue-950 mt-4">
                Get a free consultation
              </h3>
              <p className="text-md text-center mt-2">
                Give us a sense of your business and marketing needs
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-8 rounded-lg">
              <img
                src="/quote.svg"
                alt="quote"
                className="w-16 rounded-full bg-gray-100 p-4"
              />
              <h5 className="text-xl font-bold text-blue-800 mt-4">Step 3</h5>
              <h3 className="text-xl font-bold text-blue-950 mt-4">
                Get a quote
              </h3>
              <p className="text-md text-center mt-2">
                See a transparent development and marketing plan based on your
                unique needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
