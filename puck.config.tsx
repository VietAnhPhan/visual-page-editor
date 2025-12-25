import type { Config } from "@measured/puck";

type Components = {
  Heading: { title: string };
};

export const config: Config<Components> = {
  components: {
    Heading: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Hello, Puck!",
      },
      render: ({ title }) => (
        <h1 className="text-4xl font-bold p-4">{title}</h1>
      ),
    },
  },
};

export default config;
