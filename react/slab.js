import * as React from "react";
const SvgSlab = (props) => /* @__PURE__ */ React.createElement("svg", { id: "slab-Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "64px", height: "65px", viewBox: "0 0 64 65", enableBackground: "new 0 0 64 65", xmlSpace: "preserve", ...props }, /* @__PURE__ */ React.createElement("image", { id: "slab-image0", width: 64, height: 65, x: 0, y: 0, href: "data:image/png;base64,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" }));
export default SvgSlab;
