export const mswEnable = async () => {
  const { worker } = await import("../mocks/browser.js");
  return worker.start();
};

export const mswDisable = async () => {
  const { worker } = await import("../mocks/browser.js");
  return worker.context.isMockingEnabled && worker.stop();
};
