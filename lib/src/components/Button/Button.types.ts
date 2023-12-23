import React from "react";
export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: string;
  isLoading?: boolean;
  type?: "default" | "primary" | "danger";
  onClick?: () => void;
}

export interface StoryVariant {
  args: ButtonProps;
}
