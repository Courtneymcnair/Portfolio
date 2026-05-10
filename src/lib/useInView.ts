'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Fires once when the element enters the viewport. Default rootMargin is -15%
 * on the bottom — reveals trigger slightly before the element fully enters view.
 * Returns [ref, inView]. Disconnects after first intersection.
 */
export function useInView<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -15% 0px', ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
}
