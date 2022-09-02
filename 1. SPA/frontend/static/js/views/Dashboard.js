import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
          <h1>Welcome back, DOM</h1>
          <p>Dolor minim elit amet officia enim tempor ullamco sit in reprehenderit qui excepteur.</p>
          <p>
            <a href="/posts" data-link>View recent posts</a>.
          </p>
          `;
  }
}