export class LinkRenderer {
  constructor(links) {
    this.links = links;
  }

  createCard(link) {
    return `
      <div class="card">
        <a href="${link.url}" target="_blank">
          <div>
            <img src="${link.icon}" alt="${link.name}">
          </div>
          <p>${link.title}</p>
        </a>
      </div>
    `;
  }

  createListItem(link) {
    return `
      <li>
        <a href="${link.url}" target="_blank">
          <div>
            <img src="${link.icon}" alt="${link.name}">
          </div>
        </a>
      </li>
    `;
  }

  render() {
    this.links.forEach(link => {
      if (!link.visible) return;

      let containerSelector, html;
      
      if (link.type === "link") {
        containerSelector = ".profile--link";
        html = this.createCard(link);
      } else if (link.type === "social") {
        containerSelector = "#socialMediaLinks";
        html = this.createListItem(link);
      }

      const container = document.querySelector(containerSelector);
      if (container) {
        container.innerHTML += html;
      }
    });
  }
}