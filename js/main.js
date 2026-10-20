const marqueeTrack = document.querySelector(".marquee-track");
const marqueeGroup = document.querySelector(".marquee-group");
const cloneGroup = marqueeGroup.cloneNode(true)
cloneGroup.setAttribute("aria-hidden", "true");
marqueeTrack.appendChild(cloneGroup)
