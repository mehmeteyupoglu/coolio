import { mount } from "@vue/test-utils";
import { LogoGroup } from "../../../src/components/molecules";

describe("LogoGroup", () => {
  it("should render a logo group with props given", () => {
    const wrapper = mount(LogoGroup, {
      propsData: {
        content: {
          src:
            "https://uploads-ssl.webflow.com/5d7ab80fa9740ce01c57ee9d/5f2978019586604c1c53aa87_toolio-icon-64.svg",

          title: "Toolio",
        },
      },
    });

    // see if the props are rendered correctly
    expect(wrapper.props().content.src).toBe(
      "https://uploads-ssl.webflow.com/5d7ab80fa9740ce01c57ee9d/5f2978019586604c1c53aa87_toolio-icon-64.svg"
    );
    expect(wrapper.props().content.title).toBe("Toolio");
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should render a logo group with props given", () => {
    const wrapper = mount(LogoGroup, {
      propsData: {
        content: {
          src: "",

          title: "Coolio",
        },
      },
    });

    // see if the props are rendered correctly
    expect(wrapper.props().content.src).toBe("");
    expect(wrapper.props().content.title).toBe("Coolio");
    expect(wrapper.element).toMatchSnapshot();
  });
});
