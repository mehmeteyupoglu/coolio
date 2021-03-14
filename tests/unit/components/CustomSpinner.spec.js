import { mount } from "@vue/test-utils";
import { CustomSpinner } from "../../../src/components/atoms";

describe("CustomSpinner", () => {
  it("should render to a snapshot when loading state is false", () => {
    const wrapper = mount(CustomSpinner, {
      propsData: {
        loading: false,
      },
    });
    expect(wrapper.props().loading).toBe(false);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should render to a snapshot when loading state is true", () => {
    const wrapper = mount(CustomSpinner, {
      propsData: {
        loading: true,
      },
    });
    expect(wrapper.props().loading).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should render to a snapshot when loading state is null", () => {
    const wrapper = mount(CustomSpinner, {
      propsData: {
        loading: null,
      },
    });
    expect(wrapper.props().loading).toBe(null);
    expect(wrapper.element).toMatchSnapshot();
  });
});
