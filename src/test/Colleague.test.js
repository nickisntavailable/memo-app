import Colleague from "routes/Сolleague/Colleague";
// import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// import * as redux from "react-redux";
// import * as ReactReduxHooks from "./react-redux-hooks";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import ColleagueCard from '../components/ColleagueCard/ColleagueCard'

configure({ adapter: new Adapter() });
const mockStore = configureMockStore([thunk]);

const storeData = {
    data: {
      colleagues: [
        {
          name: 'Колесников Даниил',
          gender: 'м',
          prev_work: 'Grid Dynamics',
          sport: 'плавание',
          photo: 'https://sun9-57.userapi.com/c4176/u52351807/139432821/y_0253dfb4.jpg'
        },
        {
          name: 'Дементьева Дарья',
          gender: 'ж',
          prev_work: 'Фарм-Пак',
          sport: 'танцы',
          photo: 'https://sun9-34.userapi.com/impf/c857520/v857520461/2b38e/4J3gep1dWX4.jpg?size=752x1080&quality=96&sign=02ef9d823d1e6f3c54cc01ffb09b6897&type=album'
        },
        {
          name: 'Глеб Шестернев',
          gender: 'м',
          prev_work: 'Сбарбанк',
          sport: '-',
          photo: 'https://sun9-1.userapi.com/s/v1/if1/6CUNrG4LceznlM3AQoXnblYq6Pq9ULOLpKGU0iSCQw-ZZOuQSWUuizSrOXWTtOxxFegpx9JL.jpg?size=200x300&quality=96&crop=0,0,1440,2160&ava=1'
        },
        {
          name: 'Глеб Данилов',
          gender: 'м',
          prev_work: 'Изба',
          sport: 'плавание',
          photo: 'https://sun9-17.userapi.com/s/v1/if1/Runcc-17ynpo6znO_r5XXs82I9rlDCSS4vItGQ4lkdlMxgGGkuR4p4eutwfnPYsrho2ttQ.jpg?size=200x200&quality=96&crop=8,6,1265,1265&ava=1'
        },
        {
          name: 'Владислав Зайцев',
          gender: 'м',
          prev_work: 'Таможня',
          sport: 'бег',
          photo: 'https://sun9-78.userapi.com/s/v1/ig2/ds0zkAktIN3ec6fMVdV7tpyufd4ko-lKpMUYggagaWqZIRBDT_VNb14CGHGy47Jlkwm2aKIhydgbgiiZ-lKVfwl0.jpg?size=200x200&quality=96&crop=72,3,1703,1703&ava=1'
        },
        {
          name: 'Елизавета Тарасова',
          gender: 'ж ',
          prev_work: 'Радуга',
          sport: 'Warcraft 3',
          photo: 'https://sun9-57.userapi.com/s/v1/if1/QK9tJLIQDrcgdfe-eLc_UcdWM361TOM7BM9AkooTLfHv1Pzvdddi-5JrFtN6AwFN7B-EKhSY.jpg?size=200x200&quality=96&crop=6,0,2037,2037&ava=1'
        },
        {
          name: 'Назира Мордвина',
          gender: 'ж',
          prev_work: 'Сono',
          sport: 'плавание',
          photo: 'https://media-cdn.tripadvisor.com/media/photo-l/1b/97/99/23/caption.jpg'
        },
        {
          name: 'Елизавета Седова',
          gender: 'ж',
          prev_work: 'Банк',
          sport: 'танцы',
          photo: 'https://sun9-23.userapi.com/s/v1/if1/PyCH6gxcJCzGd9scuNwyIDVawYv6fcvoWpTNj5a324LkoL9LHgbGyFsgxPaArb4_aySLIJyt.jpg?size=200x200&quality=96&crop=76,0,960,960&ava=1'
        },
        {
          name: 'Алексей Морозов',
          gender: 'м',
          prev_work: 'Академия',
          sport: 'гандбол',
          photo: 'https://sun9-86.userapi.com/s/v1/ig2/bKfafWMotzxjM9GVoeINoxboM2UUcgxwwdDWG3wiKEmNDhatKuEacpRcQvF2JWRokbJww5eHNP8PDNzEPOdlsalb.jpg?size=200x200&quality=96&crop=278,0,955,955&ava=1'
        }
      ]
    }
  }


describe("Colleague component", () => {


  it('should render', () => {
    const store = mockStore(storeData);
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Colleague/>
        </BrowserRouter>
      </Provider>
    )
    expect(wrapper.exists()).toBe(true);
  })

  it('should contain card container', () => {
    const store = mockStore(storeData);
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Colleague/>
        </BrowserRouter>
      </Provider>
    )
    expect(wrapper.find(ColleagueCard)).toHaveLength(1);
  })
});

