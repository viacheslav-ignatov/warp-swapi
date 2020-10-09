import React, { ComponentType, FC, ComponentProps } from "react";

const isFunction = (fn: unknown): fn is Function => typeof fn === "function";
type Content = string | JSX.Element | ComponentType;

// In order to make components more flexible, sometimes we accept `children` like props
// this function creates and returns React Element from that prop
const mapContentToComponent = (content: Content, tag = "span") => {
  if (typeof content === "string") {
    return () => React.createElement(tag, {}, content);
  }
  return isFunction(content) ? content : () => content;
};

export interface ExpansionPanelProps extends ComponentProps<"details"> {
  summary: string | JSX.Element | ComponentType;
  classNamesDetail?: string;
  classNamesSummaryContainer?: string;
}

const ExpansionPanel: FC<ExpansionPanelProps> = ({
  children,
  summary,
  classNamesDetail = "",
  classNamesSummaryContainer = "",
  ...props
}) => {
  const Summary = mapContentToComponent(summary);
  return (
    <details className={classNamesDetail} {...props}>
      <summary className={classNamesSummaryContainer}>
        <Summary />
      </summary>
      {children}
    </details>
  );
};

export default ExpansionPanel;
