import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { preloadImages, CRITICAL_IMAGES } from "./lib/performance";

// Preload critical images for better performance
preloadImages(CRITICAL_IMAGES);

createRoot(document.getElementById("root")!).render(<App />);
