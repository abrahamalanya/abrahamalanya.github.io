let socialMediaLinks = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/abrahamalanya/",
    icon: "https://cdn.simpleicons.org/linkedin/black"
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/alanyaabraham/",
    icon: "https://cdn.simpleicons.org/instagram/black"
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/alanyaabraham/",
    icon: "https://cdn.simpleicons.org/facebook/black"
  },
  {
    name: "twitter",
    url: "https://twitter.com/alanya_abraham/",
    icon: "https://cdn.simpleicons.org/twitter/black"
  },
];

let ul = document.querySelector("#socialMediaLinks");

for (let link of socialMediaLinks) {
  let html = `
    <li>
      <a href="${link.url}" target="_blank">
        <div>
          <img src="${link.icon}" alt="${link.name}">
        </div>
      </a>
    </li>`;
  
  ul.innerHTML += html;
}