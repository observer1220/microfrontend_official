import React from "react";
import { mount } from "auth/AuthApp";
import { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        console.log("Go to:", nextPathname);
        const { pathname } = history.location;

        // 避免重複導向
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    // 監聽 container 的路由變化
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
