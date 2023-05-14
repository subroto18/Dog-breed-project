import { Dialog, Transition } from "@headlessui/react";
import { useContext } from "react";
import { Fragment } from "react";
import { Context } from "../context/AppContext";
import "react-lazy-load-image-component/src/effects/blur.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
export function Modal() {
  const context = useContext(Context);
  const { isModalVisible, setIsModalVisible, modalImage, subBreedRandomImage } =
    context;

  const { loading } = subBreedRandomImage;
  const props = {
    width: 400,
    zoomPosition: "original",
    zoomWidth: 400,
    img: modalImage,
    height: 300,
  };
  return (
    <>
      <Transition appear show={isModalVisible} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsModalVisible(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {loading ? (
                    <div className="h-[10rem] flex justify-center items-center">
                      <h1>Loading...</h1>
                    </div>
                  ) : (
                    <div className="flex justify-center items-center">
                      <Zoom>
                        <img
                          alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                          src={modalImage}
                        />
                      </Zoom>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
