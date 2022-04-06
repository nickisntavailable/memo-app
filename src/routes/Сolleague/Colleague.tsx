import "./Colleague.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";

import { useState } from "react";

const Colleague = () => {
  const [cards, setCards] = useState(["First", "Second", "Third"]);

  const handleSwipe = (d: any) => {
    //fill this your callback
    console.log(d);
  };

  return (
    <div className="container-sm">
      <div className="">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            1
          </SwiperSlide>
          <SwiperSlide>
            2
          </SwiperSlide>
          <SwiperSlide>
            3
          </SwiperSlide>
          <SwiperSlide>
           4
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Colleague;
