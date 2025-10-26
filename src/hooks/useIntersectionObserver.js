import { useEffect, useMemo, useRef, useState } from 'react'

export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const { trackOnce = true, ...observerOptions } = options
  const mergedOptions = useMemo(() => ({
    threshold: 0.3,
    rootMargin: '-100px',
    ...observerOptions
  }), [observerOptions])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        if (trackOnce) {
          observer.unobserve(element)
        }
      } else if (!trackOnce) {
        setIsVisible(false)
      }
    }, mergedOptions)

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [trackOnce, mergedOptions])

  return [elementRef, isVisible]
}

