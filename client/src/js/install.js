const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();

  //   save the event object created by a deferred prompt event.  The deferred prompt event is triggered by the broweser when the
  // user is about to install the PWA.  The event object contains the prompt() method which can be used to show the install prompt.
  window.deferredPrompt = event;

  //   remove hidden class from the install button
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  // see the prompt
  promptEvent.prompt();
  window.deferredPrompt = null;
  // hide the button
  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});
