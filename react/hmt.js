import * as React from "react";
const SvgHmt = (props) => /* @__PURE__ */ React.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "64px", height: "65px", viewBox: "0 0 64 65", enableBackground: "new 0 0 64 65", xmlSpace: "preserve", ...props }, /* @__PURE__ */ React.createElement("image", { id: "image0", width: 64, height: 65, x: 0, y: 0, href: "data:image/png;base64,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 SUVORK5CYII=" }));
export default SvgHmt;
