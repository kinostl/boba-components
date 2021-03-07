import React from "react";
import { ButtonStyle, getThemeColor, getReverseThemeColor } from "./Button";
import ActionLink from "./ActionLink";
import { LinkWithAction } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import Color from "color";
import classnames from "classnames";
import css from "styled-jsx/css";

const getOptionsStyle = (color: string, reverseColor: string, transparent: boolean) => css.resolve`
  .option {
    display: inline-block;
    text-align: center;
    position: relative;
    flex: 1;
  }
  .updates {
    background-color: ${color};
    border: 2px solid ${reverseColor};
    color: ${transparent ? "black" : reverseColor};
    position: absolute;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    right: -5px;
    top: -5px;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
    z-index: 2;
    transition: all 0.2s linear 0s;
  }
  .option-link {
    border-radius: 25px;
    padding: 8px 12px;
    background-image: none;
    color: ${color};
    background-color: ${reverseColor};
    border: 2px solid ${reverseColor};
    transition: all 0.2s linear 0s;
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
  }
  .option-link:focus {
    outline: none;
  }
  .option-link:hover {
    cursor: pointer;
    background-color: ${Color(color).alpha(0.5)};
  }
  .selected {
    border: 2px solid ${reverseColor};
    color: ${reverseColor};
    background-color: ${color};
  }
  .selected:hover {
    background-color: ${color};
  }
`;

const SegmentedButtonOption: React.FC<SegmentedButtonOptionProps> = (props) => {
  const THEME_COLOR = getThemeColor(props.theme);
  const REVERSE_THEME_COLOR = getReverseThemeColor(props.theme);
  const { className: optionsClass, styles: optionsStyles } = getOptionsStyle(
    props.color || THEME_COLOR, REVERSE_THEME_COLOR, ButtonStyle.TRANSPARENT == props.theme
  );
  return (
    <div
      className={classnames(
        'option',
        optionsClass
      )}
    >
      {props.updates && (
        <div className={classnames(
          'updates',
          optionsClass)}
        >
          {props.updates === true ? ( // Special case to display faCertificate
            <FontAwesomeIcon icon={faCertificate} />
          ) : props.updates == Infinity ? (
            "∞"
          ) : (
            props.updates
          )}
        </div>
      )}
      <ActionLink
        link={props.link}
        className={classnames(
          'option-link',
          { selected: props.isSelected },
          optionsClass)}
        allowDefault={!!props.link.href && !props.link.onClick}
      >
        {props.label}
      </ActionLink>
      {optionsStyles}
    </div>
  );
};

interface SegmentedButtonOptionProps {
  id: string;
  label: string;
  link: LinkWithAction;
  isSelected: boolean,
  updates?: number | boolean;
  theme?: ButtonStyle;
  color?: string;
}

const SegmentedButton: React.FC<SegmentedButtonProps> = (props) => {
  const THEME_COLOR = getThemeColor(props.theme);
  const REVERSE_THEME_COLOR = getReverseThemeColor(props.theme);
  return (
    <div className={classnames("segmented-button", {})}>
      {props.options.map((option) => (
        <SegmentedButtonOption
          id={option.id}
          label={option.label}
          link={option.link}
          isSelected={option.id == props.selected}
          updates={option.updates}
          theme={props.theme}
          color={props.color}
          key={"" + option.id}
        />
      ))}
      <style jsx>{`
        .segmented-button {
          border-radius: 25px;
          background-color: ${REVERSE_THEME_COLOR};
          border: 2px solid ${props.color || THEME_COLOR};
          display: flex;
        }
      `}</style>
    </div>
  );
};

export interface SegmentedButtonProps {
  options: {
    id: string;
    label: string;
    updates?: number | boolean;
    link: LinkWithAction,
  }[];
  selected: string;
  theme?: ButtonStyle;
  color?: string;
}

export default SegmentedButton;
