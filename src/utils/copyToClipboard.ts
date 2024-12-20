export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  // TODO: IMPLEMENT COPY MESSAGE
  // .then(() => {
  //   addToast(`${description} copied to clipboard!`, "success");
  // })
  // .catch((err) => {
  //   console.error("Failed to copy: ", err);
  //   addToast("Failed to copy to clipboard.", "error");
  // });
};
