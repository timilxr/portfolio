import { useCallback, useMemo, useState } from "react";

export function useShowMore<T>(items: T[], step = 3) {
  const [visibleCount, setVisibleCount] = useState(step);

  // Show more handler
  const handleShowMore = useCallback(
    () => setVisibleCount((prev) => prev + step),
    [step]
  );

  // Compute visible items
  const itemsToShow = useMemo(
    () => items.slice(0, visibleCount),
    [items, visibleCount]
  );

  return { itemsToShow, visibleCount, handleShowMore };
}
