'use client'

import { ChangeEvent, useCallback, useRef } from 'react'
import { CloseIcon, SearchIcon } from '../icons'

export default function SearchBar({
  onChange,
}: {
  onChange: (value: string) => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)

  const onClickClear = useCallback(() => {
    if (inputRef.current != null) {
      inputRef.current.value = ''
      inputRef.current.focus()
      onChange('')
    }
  }, [])

  const onValueChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }, [])

  return (
    <div className="relative w-full">
      <SearchIcon className="absolute left-3 top-2 h-4 w-4 fill-primary" />
      <input
        ref={inputRef}
        className="h-8 w-full rounded-2xl py-2 pl-9 pr-9 text-body-3 text-medium shadow-inset-dp-2  focus:shadow-dp-2 
        focus:outline-none"
        type="text"
        placeholder="Search"
        onChange={onValueChange}
      />
      {Boolean(inputRef.current?.value?.length) && (
        <button
          onClick={onClickClear}
          className="absolute right-3 top-2 h-4 w-4"
        >
          <CloseIcon className="right-3 top-2 h-4 w-4 fill-primary" />
        </button>
      )}
    </div>
  )
}
