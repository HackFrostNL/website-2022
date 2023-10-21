import path from "path";
import react from "@vitejs/plugin-react-swc";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react(), ViteImageOptimizer()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
