declare module "glider-autoplay" {
    function gliderAutoplay<T extends unknown>(
        instance: T,
        params: {
            interval: number;
            pausable?: boolean;
            onPause?: () => void;
            onRestart?: () => void;
            startItem?: number;
        }
    ): T & { pause: () => void; run: () => void; readonly isRunning: boolean };
}
