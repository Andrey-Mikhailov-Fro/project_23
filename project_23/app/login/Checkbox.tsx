'use client'

import React, { ChangeEvent, useState } from "react";
import '../globals.css';

export default function Checkbox() {
	const [isChecked, switchChecked] = useState(false);
	const handleSwitch = (e: ChangeEvent<HTMLInputElement>) => {
		switchChecked(e.target.checked);
	}

  return (
    <label className='flex items-center max-h-8 md:max-h-fit relative cursor-pointer justify-between'>
      <input
        id='remember'
        type='checkbox'
				className='peer/remember hidden'
				checked={isChecked}
				onChange={handleSwitch}
			/>
			<span 
				className='
					block
					w-10
					h-6
					bg-gray-300
					rounded-full
					transition-all
					duration-200
					ease-in-out
					peer-checked/remember:bg-blue-500'
				/>
				<span
					className='
						absolute
						left-1
						top-1
						sm:top-1
						md:top-1
						w-4
						h-4
						bg-white
						rounded-full
						transition-all
						duration-200
						ease-in-out
						peer-checked/remember:translate-x-4'
				/>
    </label>
  );
}