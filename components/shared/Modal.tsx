"use client";
import { MouseEvent, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  children: ReactNode;
  showCloseButton?: boolean;
}

function Modal({ open, children, showCloseButton = true }: Props) {
  //   const [openModal, setOpenModal] = useState(open);
  const router = useRouter();
  const path = usePathname();
  const handleModal = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };
  const handleCloseModal = () => {
    // setOpenModal(false)
    router.push(path);
  };
  //   const handelOpenModal = () => setOpenModal(true);
  return (
    <>
      {open && (
        <div
          onClick={handleCloseModal}
          className="fixed bottom-0 left-0 right-0 top-0 z-[100] bg-black-500/15"
        >
          <div
            autoFocus={true}
            id="popup-modal"
            className="absolute left-1/2 top-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-4 shadow sm:max-w-lg"
            onClick={handleModal}
          >
            {showCloseButton && (
              <div className="absolute right-4 top-2 inline-block">
                <button
                  type="button"
                  aria-label="close-modal"
                  onClick={handleCloseModal}
                >
                  <X color="#1A1A1A" />
                </button>
              </div>
            )}
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
