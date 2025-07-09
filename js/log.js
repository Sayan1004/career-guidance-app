export function logAction(action, detail = "") {
  const timestamp = new Date().toISOString();
  console.log(`[LOG - ${timestamp}] ${action} ${detail}`);
}
