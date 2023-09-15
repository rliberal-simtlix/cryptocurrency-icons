import * as React from "react";
const SvgDuc = (props) => /* @__PURE__ */ React.createElement("svg", { id: "duc-Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "64px", height: "65px", viewBox: "0 0 64 65", enableBackground: "new 0 0 64 65", xmlSpace: "preserve", ...props }, /* @__PURE__ */ React.createElement("image", { id: "duc-image0", width: 64, height: 65, x: 0, y: 0, href: "data:image/png;base64,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" }));
export default SvgDuc;
