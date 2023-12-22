export interface ButtonProps {
  children: string;
  isLoading?: boolean;
  type?: "default" | "primary" | "danger";
  onClick?: () => void;
}

export interface StoryVariant {
  args: ButtonProps;
}
