import { shallow, configure, mount } from "enzyme";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import QuestionItem, { OptionsItem } from "components/QuestionItem/QuestionItem";

const data = {
  question: "Как зовут сотрудника, изображенного на фото?",
  photo:
    "https://sun9-1.userapi.com/s/v1/if1/6CUNrG4LceznlM3AQoXnblYq6Pq9ULOLpKGU0iSCQw-ZZOuQSWUuizSrOXWTtOxxFegpx9JL.jpg?size=200x300&quality=96&crop=0,0,1440,2160&ava=1",
  answer: "Глеб Шестернёв",
  options: [
    "Эмиль Рахмангулов", 
    "Алина Ципко",
    "София Новожилова",
    "Глеб Шестернёв"
  ]
};

configure({ adapter: new Adapter() });

describe("NavItem component", () => {
  it("should render", () => {
    const wrapper = shallow(<QuestionItem  data={data} isChosen='' setIsChosen={() => {}}/>);
    expect(wrapper.exists()).toBe(true);
  });
  it("should have options", () => {
    const wrapper = shallow(<QuestionItem  data={data} isChosen='' setIsChosen={() => {}}/>);
    expect(wrapper.find(OptionsItem)).toHaveLength(4);
  });
  
  it("should have photo", () => {
    const wrapper = shallow(<QuestionItem  data={data} isChosen='' setIsChosen={() => {}}/>);
    expect(wrapper.find('.question-item-header-photo')).toHaveLength(1);
  });

  it("should have title", () => {
    const wrapper = shallow(<QuestionItem  data={data} isChosen='' setIsChosen={() => {}}/>);
    expect(wrapper.find('.title').text()).toEqual('Как зовут сотрудника, изображенного на фото?');
  });
});
