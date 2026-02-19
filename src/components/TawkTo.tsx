import { useEffect } from "react";

interface TawkToProps {
  propertyId: string;
  widgetId: string;
}

const TawkTo = ({ propertyId, widgetId }: TawkToProps) => {
  useEffect(() => {
    // Check if Tawk_API already exists
    if (window.Tawk_API) {
      return;
    }

    // Create Tawk_API object
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Create script element
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    // Append script to document
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode?.insertBefore(script, firstScript);

    // Cleanup function
    return () => {
      // Remove the script when component unmounts
      const tawkScript = document.querySelector(`script[src*="embed.tawk.to"]`);
      if (tawkScript) {
        tawkScript.remove();
      }

      // Remove Tawk widget
      const tawkWidget = document.getElementById("tawk-bubble-container");
      if (tawkWidget) {
        tawkWidget.remove();
      }
    };
  }, [propertyId, widgetId]);

  return null;
};

export default TawkTo;
