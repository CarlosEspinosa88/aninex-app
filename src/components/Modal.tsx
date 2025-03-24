"use client";
import Close from '@/svg/Close';

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/80 bg-opacity-50" onClick={onClose}/>
        <div className="relative bg-white rounded-2xl shadow-lg w-full h-[90vh] max-w-[992px] mx-auto">
          <button onClick={onClose} className="absolute top-2 right-2 text-white hover:text-gray-800  bg-[#0D7377]/80 p-2 rounded-full">
            <Close width={24} height={24} stroke="white" />
          </button>
          {children}
      </div>
    </div>
  );
}