import Link from "next/link";
import * as React from "react";
import { ButtonOutlined } from "../buttons/buttons";
import headerStyles from "./header.module.scss";

export type HeaderAction = {
  name: string;
  link: string;
  icon: string;
  special?: boolean;
};

export interface HeaderProps {
  logoPath: string;
  actions: Array<HeaderAction>;
  shadowded?: boolean;
}
/**
 * Header component with logo and links
 * @param props
 */
function Header(props: HeaderProps) {
  React.useEffect(() => {
    let currentPage = window.location.pathname;
    document.querySelector("#layout-container")?.scrollTo(0, 0);
    colorHeaderButtons(currentPage);
  }, [props]);

  const getIdBasedOnPath = (pathName: string) => {
    switch (pathName) {
      case "/": {
        return "#actionHome";
      }
      case "/projects": {
        return "#actionProjects";
      }
    }
  };

  const colorHeaderButtons = (pathName: string) => {
    clearHeaderButtons();
    clearSpecialButton();
    let elementId = getIdBasedOnPath(pathName);
    elementId == "#actionContactus"
      ? colorSpecialButton(elementId)
      : colorHeaderButton(elementId);
  };
  const colorSpecialButton = (id: string) => {
    colorHeaderButton(id);
    document.querySelectorAll("#action_special").forEach((el) => {
      el.setAttribute(
        "style",
        "background: #3CAFF0; border-radius:5px; !important; text-decoration:underline; text-decoration-color:white;"
      );
      el.children[0].children[0].setAttribute("style", "color:white");
    });
  };

  const colorHeaderButton = (id: string) => {
    document.querySelectorAll(id).forEach((el) => {
      el?.setAttribute("style", "color:"+headerStyles.colorPrimaryDarker);
      el?.querySelector("img")?.setAttribute(
        "style",
        "filter: invert(50%) sepia(91%) saturate(3450%) hue-rotate(170deg)"
      );
    });
  };

  const clearHeaderButtons = () => {
    props.actions.forEach((element) => {
      document
        .querySelectorAll("#action" + element.name.split(" ").join(""))
        .forEach((el) => {
          el?.setAttribute("style", "");
          el?.querySelector("img")?.setAttribute("style", "");
        });
    });
  };

  const clearSpecialButton = () => {
    document.querySelectorAll("#action_special").forEach((el) => {
      el.setAttribute(
        "style",
        "text-decoration:unset; text-decoration-color:unset;"
      );
      el.children[0].children[0].setAttribute("style", "");
    });
  };

  /**
   * Handles clicking on a special action (e.g. contact)
   */
  const handleSpecialActionClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    clearHeaderButtons();
    event.currentTarget.setAttribute(
      "style",
      "background: #3CAFF0; border-radius:5px; !important; text-decoration:underline; text-decoration-color:white;"
    );
    event.currentTarget.children[0].children[0].setAttribute(
      "style",
      "color:white"
    );
  };
  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.bottomMenu}>
        {props.actions.map((el) => {
          if (el.name != "Home")
            return (
              <Link key={"mobile_action_" + el.name} href={el.link}>
                <div
                  id={"action" + el.name.split(" ").join("")}
                  className={headerStyles.bottomMenu_item}
                >
                  <img
                    id={"mobile_icon_" + el.name}
                    className={headerStyles.bottomMenu_icon}
                    src={"/images/icons/mobile_menu/" + el.icon + ".svg"}
                  ></img>
                  <div>{el.name}</div>
                </div>
              </Link>
            );
        })}
      </div>
      {/* Logo */}
      <Link href="/">
        {props.shadowded ? (
          <img className={headerStyles.logoShadowed} src={props.logoPath}></img>
        ) : (
          <div className={headerStyles.logo}></div>
        )}
      </Link>
      {/* Link text & special action (contact) */}
      <div className={headerStyles.actions}>
        {props.actions.map((el) => {
          if (el.special) {
            return (
              <Link
                key={"action_" + el.name.split(" ").join("")}
                href={el.link}
              >
                <div
                  id="action_special"
                  className={headerStyles.actions_action}
                >
                  <ButtonOutlined
                    text={el.name}
                    backgroundColor={headerStyles.colorPrimaryMain}
                    color={headerStyles.colorPrimaryMain}
                  />
                </div>
              </Link>
            );
          } else {
            return (
              <Link key={"action_" + el.name} href={el.link}>
                <div
                  id={"action" + el.name}
                  className={headerStyles.actions_action}
                >
                  {el.name}
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}

export { Header };
