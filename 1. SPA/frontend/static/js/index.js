import Dashboard from "./views/Dashboard.js";
const navigateTo = (url) => {
  history.pushState(null, null, url);
  /* 
     history.pushState는 페이지 이동 없이 주소만 바꿔줌 -> 브라우저의 뒤로가기 버튼이 활성화 됨
     history.pushState(state, title, url);
      state: 브라우저 이동 시 넘겨줄 데이터
      title: 변경할 브라우저 제목
      url: 변경할 주소
  */
  router();
};
const router = async () => {
  const routes = [
    { path: "/", view: Dashboard },
    // { path: "/posts", view: () => console.log("Viewing Posts") },
    // { path: "/settings", view: () => console.log("Viewing Settings") },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }
  const view = new match.route.view();
  document.querySelector("#app").innerHTML = await view.getHtml();
};

// window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
