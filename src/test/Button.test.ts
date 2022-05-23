// import renderer from "react-test-renderer";
import Button from "components/Button/Button";
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() })


it('first test for Button component', () => {
    const component = React.createElement(Button, {classes: 'test', children: 'Hello', onClick: () => null})

    const rComp = shallow(component)
    // console.log(rComp)
    const wrapper = rComp.find('.btn')
    expect(wrapper.length).toBe(1)
})