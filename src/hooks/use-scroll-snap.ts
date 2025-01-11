import { useEffect, useState } from "react";
import createScrollSnap from "scroll-snap";

interface UseScrollSnapReturn {
  scrollBind: () => void;
  scrollUnbind: () => void;
}

export default function useScrollSnap(
  ref: React.RefObject<HTMLElement>,
  settings: any,
  callback: any,
): UseScrollSnapReturn {
  const [scrollBind, setBind] = useState<() => void>(() => () => {});
  const [scrollUnbind, setUnbind] = useState<() => void>(() => () => {});

  useEffect(() => {
    const element = ref.current;

    if (element) {
      const { bind, unbind } = createScrollSnap(element, settings, callback);
      setBind(() => bind);
      setUnbind(() => unbind);
    }
  }, [ref, settings, callback]);

  return { scrollBind, scrollUnbind };
}
