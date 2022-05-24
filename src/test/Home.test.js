import { shallow, configure, mount } from "enzyme";


import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Home from "routes/Home/Home";
import NavItem from "components/NavItem/NavItem";


configure({ adapter: new Adapter() });

describe("NavItem component", () => {
  it("should render", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBe(true);
  });
  it("should have 4 items", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(NavItem)).toHaveLength(4);
  });
});