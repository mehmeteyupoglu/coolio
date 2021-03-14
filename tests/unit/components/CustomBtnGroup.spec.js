import { mount } from "@vue/test-utils";
import { CustomBtnGroup } from "../../../src/components/molecules";

describe("CustomBtnGroup", () => {
  it("renders a message and responds correctly to user input", () => {
    const wrapper = mount(CustomBtnGroup, {
      propsData: {
        content: {
          path: "https://www.toolio.com",
          title: "Visit the actual page",
          icon: "mdi-open-in-new",
        },
      },
    });

    // see if the props are rendered correctly
    expect(wrapper.props().content.path).toBe("https://www.toolio.com");
    expect(wrapper.props().content.title).toBe("Visit the actual page");
    expect(wrapper.props().content.icon).toBe("mdi-open-in-new");
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders a message and responds correctly to user input", () => {
    const wrapper = mount(CustomBtnGroup, {
      propsData: {
        content: {
          path: "",
          title: "---",
          icon: "###",
        },
      },
    });

    // see if the props are rendered correctly
    expect(wrapper.props().content.path).toBe("");
    expect(wrapper.props().content.title).toBe("---");
    expect(wrapper.props().content.icon).toBe("###");
  });

  it("renders a message and responds correctly to user input", () => {
    const wrapper = mount(CustomBtnGroup, {
      propsData: {
        content: {
          path: "www.google.com",
          title: "Google",
          icon: "",
        },
      },
    });

    // see if the props are rendered correctly
    expect(wrapper.props().content.path).toBe("www.google.com");
    expect(wrapper.props().content.title).toBe("Google");
    expect(wrapper.props().content.icon).toBe("");
  });
});
