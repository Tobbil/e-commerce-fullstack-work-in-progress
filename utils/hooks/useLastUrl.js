import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const useLastUrl = () => {
  const router = useRouter();
  const lastUrlRef = useRef(""); // To store the last URL

  useEffect(() => {
    const handleRouteChangeStart = () => {
      lastUrlRef.current = router.asPath; // Store the current URL before navigating away
    };

    // Listen to route changes
    router.events.on("routeChangeStart", handleRouteChangeStart);

    return () => {
      // Cleanup the event listener
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router]);

  // Return the captured URL or fallback to document.referrer or "/"
  return lastUrlRef.current || "/";
};

export default useLastUrl;