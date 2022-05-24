import { shallow, configure, mount } from "enzyme";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import SliderButton from "components/SliderButton/SliderButton";


configure({ adapter: new Adapter() });

describe("SliderButton component", () => {
  it("should render", () => {
    const wrapper = shallow(<SliderButton/>);
    expect(wrapper.exists()).toBe(true);
  });
  it("should have class", () => {
    const wrapper = shallow(<SliderButton/>);
    expect(wrapper.find('.slider-btn')).toHaveLength(1);
  });
  it("should have children", () => {
    const wrapper = shallow(<SliderButton test='1' children={<div>text</div>}/>);
    expect(wrapper.contains('<div>text</div>')).toEqual(false);
  });

});
