import IconButtonComponent, { IconButtonProps } from "buttons/IconButton";
import { Meta, Story } from "@storybook/react";
import { faCoffee, faWineBottle } from "@fortawesome/free-solid-svg-icons";

import React from "react";

export default {
  title: "Buttons/Icon Button",
  component: IconButtonComponent,
  parameters: {
    actions: {
      handles: ["click button"],
    },
  },
  decorators: [
    (Story) => (
      <div className="story">
        {Story()}
        <style jsx>{`
          .story {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
          }
          .story > :global(div) {
            margin: 10px;
          }
        `}</style>
      </div>
    ),
  ],
} as Meta;

const ButtonTemplate: Story<IconButtonProps> = (args) => {
  return <IconButtonComponent {...args} />;
};

export const IconButton = ButtonTemplate.bind({});
IconButton.args = {
  icon: { icon: faCoffee },
  link: {
    onClick: () => {
      // This is already handled by the config parameters above
    },
  },
};

export const WithNotifications = ButtonTemplate.bind({});
WithNotifications.args = {
  ...IconButton.args,
  withNotifications: { color: "red" },
};

export const WithCustomNotificationsIcon = ButtonTemplate.bind({});
WithCustomNotificationsIcon.args = {
  ...WithNotifications.args,
  withNotifications: {
    ...WithNotifications.args.withNotifications,
    icon: faWineBottle,
  },
};

export const WithDropdown = ButtonTemplate.bind({});
WithDropdown.args = {
  ...IconButton.args,
  withDropdown: {},
};

export const WithCustomDropdownIcon = ButtonTemplate.bind({});
WithCustomDropdownIcon.args = {
  ...WithDropdown.args,
  withDropdown: { icon: faWineBottle },
};

export const WithDropdownAndNotification = ButtonTemplate.bind({});
WithDropdownAndNotification.args = {
  ...IconButton.args,
  withNotifications: {},
  withDropdown: {},
};
