import { Button } from "./Button";
import { StoryVariant } from "./Button.types";

export default {
  component: Button,
  title: "Custom Button",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Default: StoryVariant = {
  args: {
    children: "Button",
  },
};

export const Primary: StoryVariant = {
  args: {
    children: "Primary",
    type: "primary",
  },
};

export const Danger: StoryVariant = {
  args: {
    children: "Danger",
    type: "danger",
  },
};
