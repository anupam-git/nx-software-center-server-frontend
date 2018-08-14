export function FileDownloader(url: string) {
  const tempLink = document.createElement("a");
  tempLink.style.display = "none";
  tempLink.href = url;
  tempLink.setAttribute("download", "true");

  // Safari thinks _blank anchor are pop ups. We only want to set _blank
  // target if the browser does not support the HTML5 download attribute.
  // This allows you to download files in desktop safari if pop up blocking 
  // is enabled.
  if (typeof tempLink.download === "undefined") {
    tempLink.setAttribute("target", "_blank");
  }

  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
}