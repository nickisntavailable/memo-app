import { shallow, configure, mount } from "enzyme";
import Arrow from "../components/Icons/Arrow";
import { Link } from "react-router-dom";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import NavItem from "components/NavItem/NavItem";


configure({ adapter: new Adapter() });

describe("NavItem component", () => {
  it("should render", () => {
    const wrapper = shallow(<NavItem />);
    expect(wrapper.exists()).toBe(true);
  });
  it("should have Arrow", () => {
    const wrapper = shallow(<NavItem />);
    expect(wrapper.find(Arrow)).toHaveLength(1);
  });
  it("should have title", () => {
    const wrapper = shallow(<NavItem title="sample" url="/" />);
    expect(wrapper.text()).toEqual('sample<Arrow />');
  });

});