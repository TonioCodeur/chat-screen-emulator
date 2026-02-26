export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px]">
      {/* Phone frame */}
      <div className="rounded-[2.5rem] border-4 border-foreground/20 bg-background p-2 shadow-xl dark:border-foreground/10">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-foreground/20 dark:bg-foreground/10" />
        {/* Screen */}
        <div className="overflow-hidden rounded-[2rem] bg-muted">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 py-2 text-[10px] font-medium text-muted-foreground">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="h-2 w-4 rounded-sm bg-muted-foreground/40" />
              <div className="h-2 w-2 rounded-full bg-muted-foreground/40" />
            </div>
          </div>
          {/* Chat header */}
          <div className="border-b bg-background px-4 py-2">
            <p className="text-xs font-semibold">Sarah</p>
            <p className="text-[10px] text-muted-foreground">Online</p>
          </div>
          {/* Messages */}
          <div className="space-y-2 p-3">
            <div className="flex justify-start">
              <div className="max-w-[75%] rounded-2xl rounded-bl-sm bg-secondary px-3 py-1.5">
                <p className="text-xs">Hey! How are you?</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[75%] rounded-2xl rounded-br-sm bg-primary px-3 py-1.5 text-primary-foreground">
                <p className="text-xs">I&apos;m doing great!</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[75%] rounded-2xl rounded-bl-sm bg-secondary px-3 py-1.5">
                <p className="text-xs">Want to grab coffee?</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[75%] rounded-2xl rounded-br-sm bg-primary px-3 py-1.5 text-primary-foreground">
                <p className="text-xs">Sure! Let&apos;s go</p>
              </div>
            </div>
          </div>
          {/* Input bar */}
          <div className="border-t bg-background px-3 py-2">
            <div className="h-6 rounded-full bg-muted" />
          </div>
        </div>
      </div>
    </div>
  );
}
