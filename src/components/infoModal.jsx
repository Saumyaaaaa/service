import { useState } from "react";
import { FaInfo } from "react-icons/fa";

const InfoModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={handleClose} // Close modal when clicking outside of it
            ></div>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-900">
                  <FaInfo className="h-6 w-6 text-white" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Why I Chose to Redesign the Service Page
                  </h3>
                  <div
                    className="mt-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <p className="text-sm text-gray-500">
                      I chose to redesign the Service page of the Metalogic
                      website because I believe it is the most crucial page for
                      attracting and engaging visitors.
                      <br />
                      <br />
                      There are many icons and audio elements used on the
                      Service page of the Metalogic website, along with an inner
                      scroller. I attempted to recreate the inner scroller
                      feature used on this page, which allows for infinite
                      scrolling. However, I encountered challenges and was
                      unable to replicate it accurately. Despite this, my focus
                      remained on implementing the inner scroller functionality,
                      reflecting the original design of the Service page.
                      <br />
                      <br />
                      By redesigning the Service page, I aimed to improve the
                      overall user experience, enhance the visual aesthetics,
                      and showcase Metalogic services and offerings in a more
                      compelling and organized manner. The new design features a
                      clean and modern layout,  and  visually appealing content that
                      better represents the website interactivity with users.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm"
                  onClick={handleClose} // Close modal when close button is clicked
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoModal;
