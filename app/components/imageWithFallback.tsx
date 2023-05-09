'use client'
import Image from 'next/image'
import { useState } from 'react'

interface ImageWithFallbackProps {
  src: string
  fallbackSrc: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function ImageWithFallback(props: ImageWithFallbackProps) {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  return (
    <Image
      className={`${props.className} ${
        loading ? 'opacity-0' : 'animate-fade'
      } `}
      src={!error ? props.src : props.fallbackSrc}
      alt={props.alt}
      width={props.width}
      height={props.height}
      onErrorCapture={() => setError(true)}
      onLoadingComplete={() => setLoading(false)}
    />
  )
}
