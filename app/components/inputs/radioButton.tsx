'use client'

import { useCallback } from 'react'

interface RadioButtonProps {
  onChange?: (checked: boolean) => void
  name: string
  checked?: boolean
  value: string
}

export default function RadioButton(props: RadioButtonProps) {
  const onRadioButtonClick = useCallback(() => {
    if (props.onChange != null) {
      props.onChange(!props.checked)
    }
  }, [])

  return (
    <div className="mb-4 mr-4 flex items-center">
      <input type="radio" name="radio" className="hidden" readOnly />
      <label
        onClick={onRadioButtonClick}
        className="flex cursor-pointer select-none items-center text-body-3 text-dark"
      >
        <span
          className={`'bg-white' mr-1 inline-block flex h-4 w-4 items-center justify-center rounded-lg border-2  
          border-primary`}
        >
          {props.checked && (
            <span className="h-1.5 w-1.5 rounded-full bg-primary"> </span>
          )}
        </span>
        {props.name}
      </label>
    </div>
  )
}
