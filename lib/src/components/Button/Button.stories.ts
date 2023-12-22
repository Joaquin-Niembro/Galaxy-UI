import { Button } from "./Button";

export default {
  component: Button,
  title: "Custom Button",
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    children: "cool",
  },
};

export const Primary = {
    args: {
      children: "Primary",
    },
  };
  