import { mount } from "@vue/test-utils";
import { RenderTypes } from "../../../src/components/molecules";

describe("RenderTypes", () => {
  it("should render types with the props given", () => {
    const wrapper = mount(RenderTypes, {
      propsData: {
        type: "Toolio is so cool",
      },
    });
    expect(wrapper.props().type).toBe("Toolio is so cool");
    expect(wrapper.props().type).not.toBeFalsy();
    expect(wrapper.props().type).not.toBe("Poolio");
    expect(wrapper.props().type).not.toBeNull();
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should render types with the props given", () => {
    const wrapper = mount(RenderTypes, {
      propsData: {
        type: "",
      },
    });
    expect(wrapper.props().type).toBe("");
    expect(wrapper.props().type).not.toBeTruthy;
    expect(wrapper.props().type).toBeFalsy();
    expect(wrapper.props().type).not.toBe("Toolio");
    expect(wrapper.props().type).not.toBeNull();
    expect(wrapper.element).toMatchSnapshot();
  });
});
