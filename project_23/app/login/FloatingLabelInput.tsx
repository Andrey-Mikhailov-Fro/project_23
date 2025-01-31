import React from "react";
import '../globals.css';

type Props = {
  id: string,
  type: string,
  label: string,
};

export default function FloatingLabelInput(props: Props) {
  const { id, type, label } = props;

  return (
    <div className='flex relative w-full pb-5 flex-shrink max-sm:max-h-14'>
      <input id={id} type={type} className='
        peer
        border
        flex-shrink
        border-gray-500
        rounded-md
        w-full
        px-3
        py-2
        focus:outline-none
        focus:border-blue-500
        text-black'
      />
      <label htmlFor={id} className='
        absolute
        flex-shrink
        text-xs
        md:text-md
        left-8
        top-1
        pointer-events-none
        text-gray-500
        transition-all
        peer-focus:text-xs
        peer-focus:text-blue-500
        peer-focus:left-7
        peer-focus:-top-2
        peer-focus:bg-white
        peer-focus:px-1
        peer-placeholder-shown:top-3
        peer-placeholder-shown:text-base
        peer-placeholder-shown:text-gray-500
        peer-placeholder-shown:duration-300'
      >
          {label}      
      </label>
    </div>
  );
}