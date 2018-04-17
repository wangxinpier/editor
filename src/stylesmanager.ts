import * as Survey from "survey-knockout";
import * as ko from "knockout";

export class StylesManager {
  private static SurveyJSStylesSheetId = "surveyjs";

  public static Styles: { [key: string]: string } = {};

  public static ThemeColors: { [key: string]: { [key: string]: string } } = {
    default: {
      "$primary-color": "#1ab394",
      "$secondary-color": "#1ab394",
      "$primary-text-color": "#676a6c",
      "$secondary-text-color": "#a7a7a7",
      "$inverted-text-color": "#ffffff",
      "$primary-hover-color": "#18a689",
      "$secondary-hover-color": "#e7eaec",
      "$primary-icon-color": "#3d4d5d",
      "$primary-bg-color": "#fff",
      "$secondary-bg-color": "#f4f4f4",
      "$primary-border-color": "#e7eaec",
      "$secondary-border-color": "#ddd"
    },
    orange: {
      "$primary-color": "#f78119",
      "$secondary-color": "#4a4a4a",
      "$primary-text-color": "#676a6c",
      "$secondary-text-color": "#a7a7a7",
      "$inverted-text-color": "#ffffff",
      "$primary-hover-color": "#e77109",
      "$secondary-hover-color": "#3a3a3a",
      "$primary-icon-color": "#3d4d5d",
      "$primary-bg-color": "#fff",
      "$secondary-bg-color": "#f4f4f4",
      "$primary-border-color": "#e7eaec",
      "$secondary-border-color": "#ddd"

      // "$primary-text-color": "#4a4a4a",
      // "$secondary-text-color": "#a7a7a7",
      // "$inverted-text-color": "#ffffff",
      // "$primary-icon-color": "#3d4d5d",
      // "$primary-bg-color": "lightgray",
      // "$secondary-bg-color": "#f4f4f4",
      // "$primary-border-color": "#e7eaec",
      // "$secondary-border-color": "#ddd"
    },
    darkblue: {
      "$primary-color": "#3c4f6d",
      "$secondary-color": "rgb(74, 74, 74)",
      "$primary-text-color": "#4a4a4a",
      "$secondary-text-color": "#a7a7a7",
      "$inverted-text-color": "#ffffff",
      "$primary-hover-color": "#18a689",
      "$secondary-hover-color": "#e7eaec",
      "$primary-icon-color": "#3d4d5d",
      "$primary-bg-color": "#fff",
      "$secondary-bg-color": "#f4f4f4",
      "$primary-border-color": "#e7eaec",
      "$secondary-border-color": "#ddd"
    },
    darkrose: {
      "$primary-color": "#68656e",
      "$secondary-color": "rgb(74, 74, 74)",
      "$primary-text-color": "#4a4a4a",
      "$secondary-text-color": "#a7a7a7",
      "$inverted-text-color": "#ffffff",
      "$primary-hover-color": "#18a689",
      "$secondary-hover-color": "#e7eaec",
      "$primary-icon-color": "#3d4d5d",
      "$primary-bg-color": "#fff",
      "$secondary-bg-color": "#f4f4f4",
      "$primary-border-color": "#e7eaec",
      "$secondary-border-color": "#ddd"
    },
    stone: {
      "$primary-color": "#0f0f33",
      "$secondary-color": "rgb(74, 74, 74)",
      "$primary-text-color": "#0f0f33",
      "$secondary-text-color": "#a7a7a7",
      "$inverted-text-color": "#ffffff",
      "$primary-hover-color": "#0f0f23",
      "$secondary-hover-color": "#e7eaec",
      "$primary-icon-color": "#3d4d5d",
      "$primary-bg-color": "#fff",
      "$secondary-bg-color": "#f4f4f4",
      "$primary-border-color": "#e7eaec",
      "$secondary-border-color": "#ddd"
    },
    winter: {
      "$primary-color": "#3c3b40",
      "$secondary-color": "rgb(74, 74, 74)",
      "$primary-text-color": "#000",
      "$secondary-text-color": "#a7a7a7",
      "$inverted-text-color": "#ffffff",
      "$primary-hover-color": "#2c2b30",
      "$secondary-hover-color": "#e7eaec",
      "$primary-icon-color": "#3d4d5d",
      "$primary-bg-color": "#fff",
      "$secondary-bg-color": "#f4f4f4",
      "$primary-border-color": "#e7eaec",
      "$secondary-border-color": "#ddd"
    },
    winterstone: {
      "$primary-color": "#5ac8fa",
      "$secondary-color": "rgb(74, 74, 74)",
      "$primary-text-color": "#000",
      "$secondary-text-color": "#a7a7a7",
      "$inverted-text-color": "#ffffff",
      "$primary-hover-color": "#18a689",
      "$secondary-hover-color": "#e7eaec",
      "$primary-icon-color": "#3d4d5d",
      "$primary-bg-color": "#fff",
      "$secondary-bg-color": "#f4f4f4",
      "$primary-border-color": "#e7eaec",
      "$secondary-border-color": "#ddd"
    }
  };
  public static ThemeCss: { [key: string]: string } = {
    ".svd_container": "color: $primary-text-color;",

    ".svd_container a": "color: $primary-color;",
    ".svd_container a:hover": "color: $primary-hover-color;",
    ".svd_container .svd-main-color": "color: $primary-color;",
    ".svd_container .svd-main-border-color": "border-color: $primary-color;",
    ".svd_container .svd-main-background-color":
      "background-color: $primary-color;",
    ".svd_container .svd-secondary-background-color":
      "background-color: $secondary-color;",
    ".svd_container .svd-light-background-color":
      "background-color: $primary-border-color;",
    ".svd_container .svd-secondary-light-background-color":
      "background-color: $secondary-hover-color;",

    ".svd_container .btn-primary":
      "color: $inverted-text-color; background-color: $secondary-color; border-color: $secondary-color;",
    ".svd_container .svd-svg-icon": "fill: $primary-icon-color;",
    ".svd_container .svd-icon-green .svd-svg-icon": "fill: $primary-color;",
    ".svd_container .icon-gearactive .svd-svg-icon": "fill: $primary-color;",
    ".svd_container .nav-tabs a": "color: $primary-text-color",
    ".svd_container .nav-tabs > li.active > a": "color: $primary-color",

    ".svd_container .sjs-cb-container:hover input ~ .checkmark":
      "background-color: $dd-menu-border",
    ".svd_container .sjs-cb-container:hover input:checked ~ .checkmark":
      "background-color: $secondary-hover-color",

    ".svd_container .svd_custom_select:before":
      "background-color: $primary-color;",
    ".svd_container .form-control:focus": "border-color: $primary-color;",

    ".svd_container .svd-light-text-color": "color: $secondary-text-color;",

    ".svd-light-bg-color": "background-color: $primary-bg-color;",
    ".svd_container .svd-light-bg-color":
      "background-color: $primary-bg-color;",

    ".svd_container .svd_toolbar li.active a":
      "background-color: $primary-color; color: $primary-bg-color;",

    ".svd_container .svd_selected_page":
      "border-bottom: 1px solid $primary-bg-color;",

    ".svd_container .editor-tabs > li > a:hover":
      "background-color: $secondary-bg-color; border-bottom: 1px solid $secondary-bg-color;",
    ".svd_container .editor-tabs > li > a:focus":
      "background-color: $secondary-bg-color; border-bottom: 1px solid $secondary-bg-color;",
    ".svd_container .editor-tabs > li.active > a":
      "color: $primary-color; background-color: $secondary-bg-color; border: 1px solid $primary-border-color; border-bottom-color: $secondary-bg-color;",

    ".svd_container .svd-light-border-color":
      "border-color: $primary-border-color",

    ".svd_container .svd-dark-border-color":
      "border-color: $secondary-border-color",

    ".svd_container .select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow":
      "background:  $primary-color;",
    ".svd_container .select2-container .select2-selection--single .select2-selection__arrow":
      "background:  $primary-color;"
  };
  private sheet: CSSStyleSheet = null;

  static findSheet(styleSheetId: string) {
    for (let i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode["id"] === styleSheetId) {
        return <CSSStyleSheet>document.styleSheets[i];
      }
    }
    return null;
  }

  static createSheet(styleSheetId: string) {
    let style = document.createElement("style");
    style.id = styleSheetId;
    // Add a media (and/or media query) here if you'd like!
    // style.setAttribute("media", "screen")
    // style.setAttribute("media", "only screen and (max-width : 1024px)")
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
    return <CSSStyleSheet>style.sheet;
  }

  public static currentTheme = ko.observable("bootstrap");

  public static applyTheme(
    themeName: string = "default",
    themeSelector: string = ".svd_container"
  ) {
    StylesManager.currentTheme(themeName);
    Survey.Survey.cssType =
      this.currentTheme() === "bootstrap" ? "bootstrap" : "default";
    Survey.StylesManager.applyTheme(themeName);

    let sheet = StylesManager.findSheet(themeName + themeSelector);
    if (!sheet) {
      sheet = StylesManager.createSheet(themeName + themeSelector);
      let theme =
        StylesManager.ThemeColors[themeName] ||
        StylesManager.ThemeColors["default"];
      Object.keys(StylesManager.ThemeCss).forEach(selector => {
        let cssRuleText = StylesManager.ThemeCss[selector];
        Object.keys(theme).forEach(
          colorVariableName =>
            (cssRuleText = cssRuleText.replace(
              new RegExp("\\" + colorVariableName, "g"),
              theme[colorVariableName]
            ))
        );
        sheet.insertRule(
          themeSelector + selector + " { " + cssRuleText + " }",
          0
        );
      });
    }
  }

  constructor() {
    this.sheet = StylesManager.findSheet(StylesManager.SurveyJSStylesSheetId);
    if (!this.sheet) {
      this.sheet = StylesManager.createSheet(
        StylesManager.SurveyJSStylesSheetId
      );
      this.initializeStyles(this.sheet);
    }
  }

  public initializeStyles(sheet: CSSStyleSheet) {
    Object.keys(StylesManager.Styles).forEach(selector =>
      sheet.insertRule(
        selector + " { " + StylesManager.Styles[selector] + " }",
        0
      )
    );
  }
}