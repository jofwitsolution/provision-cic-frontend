interface Window {
  Tawk_API?: {
    onLoad?: () => void;
    onStatusChange?: (status: string) => void;
    visitor?: {
      name?: string;
      email?: string;
    };
    hideWidget?: () => void;
    showWidget?: () => void;
    maximize?: () => void;
    minimize?: () => void;
    toggle?: () => void;
    popup?: () => void;
    setAttributes?: (
      attributes: Record<string, string>,
      callback?: (error: Error | null) => void
    ) => void;
    addEvent?: (
      event: string,
      metadata?: Record<string, string>,
      callback?: (error: Error | null) => void
    ) => void;
    addTags?: (
      tags: string[],
      callback?: (error: Error | null) => void
    ) => void;
    removeTags?: (
      tags: string[],
      callback?: (error: Error | null) => void
    ) => void;
  };
  Tawk_LoadStart?: Date;
}
