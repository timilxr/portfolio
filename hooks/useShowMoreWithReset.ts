import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export function useShowMoreWithReset<T>(items: T[], step = 3) {
  const [visibleCount, setVisibleCount] = useState(step);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Show more handler
  const handleShowMore = useCallback(() => setVisibleCount((prev) => prev + step), [step]);

  // Reset visibleCount when section is out of view
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setVisibleCount(step);
      },
      { threshold: 0 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [step]);

  const itemsToShow = useMemo(() => items?.slice(0, visibleCount) || [], [items, visibleCount]);

  return { sectionRef, itemsToShow, visibleCount, handleShowMore };
}