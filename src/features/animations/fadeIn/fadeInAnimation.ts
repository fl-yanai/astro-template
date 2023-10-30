export const fadeInAnimation = () => {
  const intersectionObserver = (
    targets: NodeListOf<Element>,
    callback: (entries: any, object: any) => void,
    options?: { root: Element | null; rootMargin: number; threshold: number },
  ) => {
    const observer: IntersectionObserver = new IntersectionObserver(callback, {
      root: options ? options.root : null,
      rootMargin: options ? `${options.rootMargin}px` : '0px',
      threshold: options ? options.threshold : 0,
    })

    targets.forEach((element: Element) => {
      observer.observe(element)
    })
  }

  const callback = (entries: any, object: any) => {
    entries.forEach((entry: any) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('--targetPassed')
      object.unobserve(entry.target)
    })
  }

  setTimeout(() => {
    if (typeof window === 'undefined') return
    const targets = document.querySelectorAll(`.--target`)
    if (targets.length === 0) return
    intersectionObserver(targets, callback)
  }, 10)
}
