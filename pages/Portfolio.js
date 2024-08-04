// "use client";
// import React from "react";
// import Link from "next/link";
// import * as _Builtin from "../devlink/_Builtin";
// import * as _utils from "../devlink/utils";
// import _styles from "./Portfolio.module.css";
// import projects from "./data/dataList.json";

// export function Portfolio({ as: _Component = _Builtin.Container }) {
//   return (
//     <_Component className={_utils.cx(_styles, "container")} tag="div">
//       <_Builtin.Heading
//         className={_utils.cx(_styles, "feature-heading")}
//         tag="h2"
//       >
//         {"Features for every need"}
//       </_Builtin.Heading>
      
//       <_Builtin.Grid
//         className={_utils.cx(_styles, "feature-grid")}
//         tag="div"
//       >
//       {projects.map((item, index) => (
//         <li key={index.id} className={_utils.cx(_styles,"link")}>
//             <Link href={`/${index.id}`} className={_utils.cx(_styles,"link")}>
//           <_Builtin.Block
//             key={index}
//             className={_utils.cx(_styles, "card")}
//             tag="div"
//           >
//             <_Builtin.Image
//               className={_utils.cx(_styles, "feature-image")}
//               width="auto"
//               height="auto"
//               loading="lazy"
//               alt="Daily Digest"
//               src={item.Imaage}
//             />
//             <_Builtin.Heading tag="h3">
//               {item.Mobile_subtitle}
//             </_Builtin.Heading>
//             <_Builtin.Paragraph>
//               {item.Paragraph}
//             </_Builtin.Paragraph>
//           </_Builtin.Block>
//         </Link>
//       </li>
//       ))}
//       </_Builtin.Grid>
//     </_Component>
//   );
// }
