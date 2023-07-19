// profile--link
let links = [
  {
    name: "github",
    title: "Repositorio",
    url: "https://github.com/abrahamalanya",
    icon: "https://cdn.simpleicons.org/github/black"
  },
  {
    name: "devto",
    title: "Blog Dev.to",
    url: "https://dev.to/pacmankabh",
    icon: "https://cdn.simpleicons.org/devdotto/black"
  },
  {
    name: "gitlab",
    title: "Repositorio",
    url: "https://gitlab.com/abrahamalanya",
    icon: "https://cdn.simpleicons.org/gitlab/black"

  }
]

let profileLink = document.querySelector(".profile--link");

for (let link of links) {
  let html = `
    <div class="card">
      <a href="${link.url}" target="_blank">
        <div>
          <img src="${link.icon}" alt="${link.name}">
        </div>
        <p>${link.title}</p>
      </a>
    </div>
  `;

  profileLink.innerHTML += html;
}

// profile--social
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