import { mount } from "@vue/test-utils";
import { RenderChips } from "../../../src/components/molecules";

describe("RenderChips", () => {
  it("should render chips with the props given", () => {
    const wrapper = mount(RenderChips, {
      propsData: {
        tags: "Toolio is so cool",
      },
    });
    expect(wrapper.props().tags).toBe("Toolio is so cool");
    expect(wrapper.props().tags).not.toBeFalsy();
    expect(wrapper.props().tags).not.toBe("Poolio");
    expect(wrapper.props().tags).not.toBeNull();
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should render chips with the props given", () => {
    const wrapper = mount(RenderChips, {
      propsData: {
        tags: "",
      },
    });
    expect(wrapper.props().tags).toBe("");
    expect(wrapper.props().tags).not.toBeTruthy;
    expect(wrapper.props().tags).toBeFalsy();
    expect(wrapper.props().tags).not.toBe("Toolio");
    expect(wrapper.props().tags).not.toBeNull();
    expect(wrapper.element).toMatchSnapshot();
  });
});
