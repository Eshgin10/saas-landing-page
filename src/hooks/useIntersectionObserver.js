import { useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        // Once visible, stop observing (animation only plays once)
        observer.unobserve(element)
      }
    }, {
      threshold: 0.3,
      rootMargin: '-100px',
      ...options
    })

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [options])

  return [elementRef, isVisible]
}

