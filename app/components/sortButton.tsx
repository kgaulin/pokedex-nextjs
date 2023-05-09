'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'
import { TagIcon, TextFormatIcon } from './icons'
import RadioButton from './inputs/radioButton'

interface SortButtonProps {
  className?: string
}

export default function SortButton(props: SortButtonProps) {
  const [isOptionOpen, setIsOptionOpen] = useState(false)
  const [checkedRadioButton, setCheckedRadioButton] = useState('number')

  const onRadioButtonChange = (name: string) => {
    setCheckedRadioButton(name)
    setIsOptionOpen(false)
  }

  return (
    <div className={`relative`}>
      <button
        type="button"
        onClick={() => setIsOptionOpen((isOpen) => !isOpen)}
        className={`flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white ${
          isOptionOpen ? 'shadow-inset-dp-2' : 'shadow-dp-2'
        } ${props.className}`}
      >
        {checkedRadioButton === 'number' ? (
          <TagIcon className="h-[16px] w-[16px] fill-primary" />
        ) : (
          <TextFormatIcon className="h-[16px]  w-[16px] fill-primary" />
        )}{' '}
      </button>
      {isOptionOpen && (
        <div className="absolute -left-[80px] top-[42px] z-40 flex h-[132px] w-[113px] flex-col  rounded-lg bg-primary shadow-dp-6">
          <span className="my-4 ml-5 text-subtitle-2 text-white ">
            Sort by:
          </span>
          <div className=" flex h-[80px] w-[105px] flex-col self-center rounded bg-white px-5 py-4 shadow-inset-dp-2">
            <RadioButton
              name="Number"
              value="number"
              checked={checkedRadioButton === 'number'}
              onChange={() => onRadioButtonChange('number')}
            ></RadioButton>
            <RadioButton
              name="Name"
              value="name"
              checked={checkedRadioButton === 'name'}
              onChange={() => onRadioButtonChange('name')}
            ></RadioButton>
          </div>
        </div>
      )}

      {isOptionOpen &&
        createPortal(
          <div
            className="fixed top-0 z-30 h-screen w-screen bg-overlay"
            onClick={() => setIsOptionOpen(false)}
          ></div>,
          document.body
        )}
    </div>
  )
}
