import { shallow, configure, mount } from "enzyme";
import Arrow from "../components/Icons/Arrow";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

describe("Arrow component", () => {
  it("should render", () => {
    const wrapper = shallow(<Arrow />);
    expect(wrapper.exists()).toBe(true);
  });
  it("should have class", () => {
    const wrapper = shallow(<Arrow />);
    expect(wrapper.find(".arrow-right")).toHaveLength(1);
  });
  it("should have classes blue lg", () => {
    const wrapper = shallow(<Arrow classes="blue lg"/>);
    expect(wrapper.find(".blue.lg")).toHaveLength(1);
  });
});
