"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FeedCard } from "@/components/FeedCard";
import { mockHomeFeedUpdates } from "@/lib/mock-data";

const PAGE = 6;

export function HomeFeed() {
  const [count, setCount] = useState(PAGE);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const items = useMemo(() => mockHomeFeedUpdates.slice(0, count), [count]);
  const hasMore = count < mockHomeFeedUpdates.length;

  const loadMore = useCallback(() => {
    setCount((c) => Math.min(c + PAGE, mockHomeFeedUpdates.length));
  }, []);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !hasMore) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMore();
      },
      { rootMargin: "240px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasMore, loadMore]);

  return (
    <div className="space-y-4">
      {items.map((u) => (
        <FeedCard key={u.id} update={u} />
      ))}
      <div ref={sentinelRef} className="h-1 w-full" aria-hidden />
      {hasMore ? (
        <div className="flex justify-center pb-2">
          <button
            type="button"
            onClick={loadMore}
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[var(--tcmf-primary)] ring-1 ring-black/10 shadow-sm"
          >
            Load more
          </button>
        </div>
      ) : (
        <p className="pb-4 text-center text-xs font-medium text-zinc-400">End of feed (mock data)</p>
      )}
    </div>
  );
}
