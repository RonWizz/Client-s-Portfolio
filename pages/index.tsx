import {Hero} from "@/devlink/Hero";
import { About } from "@/devlink/About";
import Link from "next/link";
import * as _Builtin from "../devlink/_Builtin";
import * as _utils from "../devlink/utils";
import _styles from "./Portfolio.module.css";
import projects from "./data/dataList.json";



export default function Home({ as: _Component = _Builtin.Container }) {
  return (
    <>
      <Hero />
      <_Component className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "feature-heading")}
          tag="h2"
          id="page1"
        >
          {"Projects"}
        </_Builtin.Heading>

        <_Builtin.Grid
          className={_utils.cx(_styles, "feature-grid")}
          tag="div"
        >
          {projects.map((item) => (
            <li key={item.id} className={_utils.cx(_styles, "list-item")}>
              <Link href={`/${item.id}`} className={_utils.cx(_styles, "link")}>
                <_Builtin.Block
                  className={_utils.cx(_styles, "card")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "feature-image")}
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt="Daily Digest"
                    src={item.Imaage}
                  />
                  <div className={_utils.cx(_styles, "overlay")}>
                    <div className={_utils.cx(_styles, "overlay-text")}>
                      {item.Mobile_subtitle}
                    </div>
                  </div>
                  <_Builtin.Heading tag="h3">
                    {item.Mobile_subtitle}
                  </_Builtin.Heading>
                  <_Builtin.Paragraph>
                    {item.Paragraph}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              </Link>
            </li>
          ))}
        </_Builtin.Grid>
      </_Component>
      <About />
    </>
  );
}