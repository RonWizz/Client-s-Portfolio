"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./About.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-95":{"id":"e-95","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-96"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1695050516600},"e-97":{"id":"e-97","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-98"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695050516600},"e-98":{"id":"e-98","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-97"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695050516600},"e-117":{"id":"e-117","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-46","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-118"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1695624188556},"e-119":{"id":"e-119","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-47","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-120"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1695624321025},"e-121":{"id":"e-121","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-48","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-122"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c6e15c9e-5187-ee50-ff55-c4614a1020ac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c6e15c9e-5187-ee50-ff55-c4614a1020ac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1695624413801}},"actionLists":{"a-32":{"id":"a-32","title":"fade in [ 0.6 ]","actionItemGroups":[{"actionItems":[{"id":"a-32-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"44f1786f-da9c-e48b-8022-d66bde92bdf1"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-32-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outSine","duration":600,"target":{"useEventTarget":true,"id":"44f1786f-da9c-e48b-8022-d66bde92bdf1"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1680531610586},"a-11":{"id":"a-11","title":"UIs [ hover - ON ]","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-1","selectorGuids":["1bfd67fd-2622-d3c9-2387-8a5400c7bb7c"]},"xValue":16,"yValue":-25,"zValue":7,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-11-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-3","selectorGuids":["b1a88ba9-5ecc-065b-dab9-7a72618fd5f6"]},"xValue":16,"yValue":-25,"zValue":7,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-11-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-2","selectorGuids":["7b1972b3-0ee5-dae4-246d-a2a1389a5324"]},"xValue":16,"yValue":-25,"zValue":7,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-11-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-4","selectorGuids":["632ca42f-69b9-be91-6731-f3f8fdfa69bd"]},"xValue":16,"yValue":-25,"zValue":7,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-11-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-ui-5","selectorGuids":["2bf2a210-da09-ae08-138f-e7c79911019f"]},"xValue":16,"yValue":-25,"zValue":7,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-11-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero-ui-5","selectorGuids":["2bf2a210-da09-ae08-138f-e7c79911019f"]},"xValue":-5,"yValue":-6,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-11-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-4","selectorGuids":["632ca42f-69b9-be91-6731-f3f8fdfa69bd"]},"xValue":32,"yValue":-8,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-11-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-3","selectorGuids":["b1a88ba9-5ecc-065b-dab9-7a72618fd5f6"]},"xValue":0,"yValue":12,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-11-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-2","selectorGuids":["7b1972b3-0ee5-dae4-246d-a2a1389a5324"]},"xValue":0,"yValue":20,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-11-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outCirc","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-1","selectorGuids":["1bfd67fd-2622-d3c9-2387-8a5400c7bb7c"]},"xValue":0,"yValue":0,"zValue":0,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-11-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outCirc","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-3","selectorGuids":["b1a88ba9-5ecc-065b-dab9-7a72618fd5f6"]},"xValue":0,"yValue":0,"zValue":0,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-11-n-10","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outCirc","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".hero-ui-5","selectorGuids":["2bf2a210-da09-ae08-138f-e7c79911019f"]},"xValue":0,"yValue":0,"zValue":0,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-11-n-9","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outCirc","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-4","selectorGuids":["632ca42f-69b9-be91-6731-f3f8fdfa69bd"]},"xValue":0,"yValue":0,"zValue":0,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-11-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outCirc","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-2","selectorGuids":["7b1972b3-0ee5-dae4-246d-a2a1389a5324"]},"xValue":0,"yValue":0,"zValue":0,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-11-n-13","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-2","selectorGuids":["7b1972b3-0ee5-dae4-246d-a2a1389a5324"]},"xValue":0,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-11-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-3","selectorGuids":["b1a88ba9-5ecc-065b-dab9-7a72618fd5f6"]},"xValue":0,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-11-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".hero-ui-5","selectorGuids":["2bf2a210-da09-ae08-138f-e7c79911019f"]},"xValue":0,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-11-n-16","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":1300,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-4","selectorGuids":["632ca42f-69b9-be91-6731-f3f8fdfa69bd"]},"xValue":0,"yValue":0,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1673353965786},"a-12":{"id":"a-12","title":"UIs [ hover - OUT ]","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outCirc","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-1","selectorGuids":["1bfd67fd-2622-d3c9-2387-8a5400c7bb7c"]},"xValue":16,"yValue":-25,"zValue":7,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-12-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outCirc","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-3","selectorGuids":["b1a88ba9-5ecc-065b-dab9-7a72618fd5f6"]},"xValue":16,"yValue":-25,"zValue":7,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-12-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outCirc","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-2","selectorGuids":["7b1972b3-0ee5-dae4-246d-a2a1389a5324"]},"xValue":16,"yValue":-25,"zValue":7,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-12-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outCirc","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-4","selectorGuids":["632ca42f-69b9-be91-6731-f3f8fdfa69bd"]},"xValue":16,"yValue":-25,"zValue":7,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-12-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outCirc","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".hero-ui-5","selectorGuids":["2bf2a210-da09-ae08-138f-e7c79911019f"]},"xValue":16,"yValue":-25,"zValue":7,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}},{"id":"a-12-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".hero-ui-5","selectorGuids":["2bf2a210-da09-ae08-138f-e7c79911019f"]},"xValue":-5,"yValue":-6,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-12-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-4","selectorGuids":["632ca42f-69b9-be91-6731-f3f8fdfa69bd"]},"xValue":32,"yValue":-8,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-12-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-3","selectorGuids":["b1a88ba9-5ecc-065b-dab9-7a72618fd5f6"]},"xValue":0,"yValue":12,"xUnit":"%","yUnit":"%","zUnit":"PX"}},{"id":"a-12-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outCirc","duration":800,"target":{"useEventTarget":"CHILDREN","selector":".hero_ui-2","selectorGuids":["7b1972b3-0ee5-dae4-246d-a2a1389a5324"]},"xValue":0,"yValue":20,"xUnit":"%","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1673353965786},"a-46":{"id":"a-46","title":"About","actionItemGroups":[{"actionItems":[{"id":"a-46-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a0"},"value":0,"unit":""}},{"id":"a-46-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a0"},"yValue":50,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-46-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":true,"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a0"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-46-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":600,"target":{"useEventTarget":true,"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a0"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1695624193595},"a-47":{"id":"a-47","title":"Qoutation","actionItemGroups":[{"actionItems":[{"id":"a-47-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a8"},"xValue":50,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-47-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a8"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-47-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":true,"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a8"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-47-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":true,"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a8"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1695624327465},"a-48":{"id":"a-48","title":"Qoutation 2","actionItemGroups":[{"actionItems":[{"id":"a-48-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a8"},"xValue":50,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-48-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a8"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-48-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":1500,"target":{"useEventTarget":true,"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a8"},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-48-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1500,"target":{"useEventTarget":true,"id":"c6e15c9e-5187-ee50-ff55-c4614a1020a8"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1695624327465}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function About({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "hero_section",
        "bg-img",
        "tab-section",
        "mob-hero-last",
        "mob-scale-hero"
      )}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "wrapper",
          "about-us",
          "mob-wrapper-pad",
          "mob-scale-wrpper",
          "mob-wrapper",
          "tab-wrapper",
          "mobile-about"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "hero_left-wrap",
            "about-hero",
            "mob-about-page",
            "mob-scale-hero-wrap"
          )}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(
              _styles,
              "heading-2",
              "tab-heading",
              "mob-about-head"
            )}
            data-w-id="c6e15c9e-5187-ee50-ff55-c4614a1020a0"
            tag="h1"
          >
            {"About Me"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-15", "tab-img", "mob-img")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image")}
              loading="lazy"
              width="540"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/650868580173daefe3e74970/650e80b92f33d0af31bc982a_WhatsApp%20Image%202023-09-23%20at%2011.35.31%20AM.jpg"
            />
            <_Builtin.Heading
              className={_utils.cx(_styles, "mob-about-name")}
              tag="h1"
            >
              {"Ipsita Roy"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "hero_right-wrap",
            "about-des",
            "mob-about-des",
            "mob-scale"
          )}
          data-w-id="c6e15c9e-5187-ee50-ff55-c4614a1020a6"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "div-block",
              "tab-qoute",
              "mob-qoute"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-15")}
              data-w-id="c6e15c9e-5187-ee50-ff55-c4614a1020a8"
              loading="lazy"
              width="193.5"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/650868580173daefe3e74970/6508a3c97f6a336b1078d52a_Vector1.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "paragraph-div", "mob-des")}
            tag="div"
          >
            <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-3")}>
              <_Builtin.Strong>
                <_Builtin.Emphasized
                  className={_utils.cx(
                    _styles,
                    "italic-text",
                    "tab-para",
                    "mob-paara"
                  )}
                  data-w-id="c6e15c9e-5187-ee50-ff55-c4614a1020ac"
                >
                  {
                    '" I am ipsita student of bachelor of fine arts from painting department of amity university Kolkata. I love to draw drawing and painting in any mediums. I also work on little bit on graphic designing . I try my to come up with new ideas to help my clients"'
                  }
                </_Builtin.Emphasized>
              </_Builtin.Strong>
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
