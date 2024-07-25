// profile--link
let links = [
  // {
  //   name: "vercel",
  //   title: "Proyecto Intiweb ☀️",
  //   url: "https://intiweb-xi.vercel.app/",
  //   icon: "https://cdn.simpleicons.org/vercel/black"
  // },
  {
    name: "devto",
    title: "Blog",
    url: "https://dev.to/pacmankabh",
    icon: "https://cdn.simpleicons.org/devdotto/black"
  },
  {
    name: "buymeacoffee",
    title: "Invítame un café",
    url: "https://buymeacoffee.com/abrahamalanya",
    icon: "https://cdn.simpleicons.org/buymeacoffee/black"
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
    title: "Linkedin",
    url: "https://www.linkedin.com/in/abrahamalanya/",
    icon: "https://cdn.simpleicons.org/linkedin/"
  },
  {
    name: "github",
    title: "Github",
    url: "https://github.com/abrahamalanya",
    icon: "https://cdn.simpleicons.org/github/"
  },
  {
    name: "gitlab",
    title: "Gitlab",
    url: "https://gitlab.com/abrahamalanya",
    icon: "https://cdn.simpleicons.org/gitlab/"
  },
  // {
  //   name: "x",
  //   title: "X",
  //   url: "https://x.com/alanya_abraham/",
  //   icon: "https://cdn.simpleicons.org/x/"
  // },
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