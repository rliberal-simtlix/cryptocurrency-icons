import * as React from "react";
const SvgIdrc = (props) => /* @__PURE__ */ React.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "200px", height: "200px", viewBox: "0 0 200 200", enableBackground: "new 0 0 200 200", xmlSpace: "preserve", ...props }, /* @__PURE__ */ React.createElement("image", { id: "image0", width: 200, height: 200, x: 0, y: 0, href: "data:image/png;base64,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 OjQ1OjU3KzAwOjAwsobvrAAAAABJRU5ErkJggg==" }));
export default SvgIdrc;
