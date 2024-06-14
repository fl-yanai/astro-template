import { intersectionObserver } from '@/utils/intersectionObserver'

export const fadeInAnimation = () => {
  const callback = (entries: any, object: any) => {
    entries.forEach((entry: any) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('anime__fade-targetPassed')
      object.unobserve(entry.target)
    })
  }

  setTimeout(() => {
    if (typeof window === 'undefined') return
    const targets = document.querySelectorAll(`.anime__fade-target`)
    if (targets.length === 0) return
    intersectionObserver(targets, callback)
  }, 10)
}
