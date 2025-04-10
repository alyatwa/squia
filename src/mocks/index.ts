async function initMocks() {
  if (typeof window === "undefined") {
    console.log("msw server");
    const { server } = await import("./server");
    server.listen();
  } else {
    console.log("msw browser");
    const { worker } = await import("./browser");
    worker.start({
      onUnhandledRequest: "bypass",
    });
  }
}

await initMocks();

export { initMocks as setupMocks };
