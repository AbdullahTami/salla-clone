import { useEffect, useRef, useState } from "react";
import { User } from "./types";
import { useRouter } from "next/navigation";

export function useHasScrolledDown() {
  const [scrollEffect, setScrollEffect] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) setScrollEffect(true);
      if (window.scrollY === 0) setScrollEffect(false);
    });
  }, [scrollEffect]);
  return { scrollEffect };
}

export function useOutsideClick(handler: () => void, listenCapturing = true) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(
    function () {
      function handleClick(e: any) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      document.addEventListener("click", handleClick);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );
  return { ref };
}

export function useDisableScroll(open?: (() => void) | boolean) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }
    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, [open]);
}

export function useSessionStorage(key: string) {
  const [value] = useState<User | null>(() => {
    if (
      typeof window !== "undefined" &&
      sessionStorage &&
      sessionStorage[key] !== undefined
    ) {
      return JSON.parse(sessionStorage[key]);
    }
    return null;
  });

  return value;
}

export function useScrollToTopOnRefresh() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

export function useSetBgColor() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const width = window.screen.width <= 500;
      if (width) {
        document.body.style.backgroundColor = "#76E8CE";
      }
    }
    return (): void => {
      document.body.style.backgroundColor = "";
    };
  }, []);
}
// Animation is triggered both on scroll down and scroll up in case of page reload, this hook is a workaround to prevent that default behavior by simply exporting a ref hook along with a boolean to conditionally animate elements

// export function useHasBeenViewed() {
//   const [isViewed, setIsViewed] = useState(false);
//   const [lastScrollTop, setLastScrollTop] = useState(0);

//   const ref = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     function handleScroll() {
//       const elPosition = ref.current?.getBoundingClientRect();

//       const scrollTop = window.scrollY || document.documentElement.scrollTop;
//       if (
//         elPosition &&
//         scrollTop > lastScrollTop &&
//         elPosition.top < window.innerHeight &&
//         elPosition.bottom >= 0
//       ) {
//         setIsViewed(true);
//       }
//       setLastScrollTop(scrollTop);
//     }
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollTop]);

//   return { ref, isViewed };
// }

// export function useHasBeenViewed(key: string): [boolean, () => void] {
//   const [hasViewed, setHasViewed] = useState(false);

//   useEffect(() => {
//     const viewed = localStorage.getItem(key);
//     if (viewed) {
//       setHasViewed(true);
//     }
//   }, [key]);

//   function markAsViewed(): void {
//     localStorage.setItem(key, "true");
//     setHasViewed(true);
//   }

//   return [hasViewed, markAsViewed];
// }
