import { shallow, configure, mount } from "enzyme";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Questions from "routes/Questions/Questions";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import QuestionItem from "components/QuestionItem/QuestionItem";

configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);

const storeData = {
        data: {
          colleagues: [
            {
              name: 'Эмиль Рахмангулов',
              gender: 'м',
              prev_work: 'SpaceX',
              sport: 'велоспорт',
              photo: 'https://sun9-1.userapi.com/s/v1/if1/jLE_M-SU2y-ERca89aR7M1ntW007_lJXVAUO4EBtesu3DotiiY1XXNxmPJjXOoHAw1mDqeDh.jpg?size=200x200&quality=96&crop=0,202,1218,1218&ava=1'
            },
            {
              name: 'Алина Ципко',
              gender: 'ж',
              prev_work: 'ИТМО',
              sport: 'танцы',
              photo: 'https://sun9-48.userapi.com/s/v1/if1/nWvMICW7BhL6n_fC4wgdL8VOW4sCxpNIOAH4q9IYC_0IYlcRRzfOO_kCw3l1ZKBQS113xRK3.jpg?size=200x251&quality=96&crop=0,54,720,906&ava=1'
            },
            {
              name: 'Глеб Низаметдинов',
              gender: 'м',
              prev_work: '-',
              sport: 'бег',
              photo: 'https://sun9-72.userapi.com/s/v1/ig2/BF6sfDZfUAe8cTmt9327zyjn_IWJ_JrfDunm3wvuBpN7iyNNKVXbpD49FJ4U8VdgkRbwJLIdb4Ri5D7Mqvhy5YNL.jpg?size=200x300&quality=96&crop=0,0,1365,2048&ava=1'
            },
            {
              name: 'Денис Февралёв',
              gender: 'м',
              prev_work: 'Яндекс',
              sport: '-',
              photo: 'https://sun9-57.userapi.com/s/v1/ig2/RlBtG_76ZxCtcPhdInf7gh6BpQYd3qGtyP8tnHCYIm61wOAcaJrPtZlxmpEV8LCK1BGe1LR7nCk3N_xUlFVwnmm2.jpg?size=200x266&quality=95&crop=96,128,768,1024&ava=1'
            },
            {
              name: 'София Новожилова',
              gender: 'ж',
              prev_work: 'Spark',
              sport: 'шахматы',
              photo: 'https://sun9-49.userapi.com/s/v1/ig2/O4S-1bPRcVcgo0ZsdLLCw2k1F7t9w-lo3Xyhk1i8HZbAt5WEJbdUb_BLKib3kC3E8Mqizl8qOEeO74F1_xJuUjAP.jpg?size=200x200&quality=96&crop=55,55,1024,1024&ava=1'
            },
            {
              name: 'Ираклий Убилава',
              gender: 'м',
              prev_work: 'ForaSoft',
              sport: 'гандбол',
              photo: 'https://sun9-76.userapi.com/s/v1/ig2/cVcdUTMq3mKRi7LWq_NixjizXtmhjwkYw4i0dsT0lBSNXtByF4zEBkVvbdRrjoCk36gIPoT2VrIKMZET_QhkA-6S.jpg?size=200x200&quality=96&crop=0,12,787,787&ava=1'
            },
            {
              name: 'Глеб Шестернёв',
              gender: 'м',
              prev_work: 'Сбербанк',
              sport: '-',
              photo: 'https://sun9-1.userapi.com/s/v1/if1/6CUNrG4LceznlM3AQoXnblYq6Pq9ULOLpKGU0iSCQw-ZZOuQSWUuizSrOXWTtOxxFegpx9JL.jpg?size=200x300&quality=96&crop=0,0,1440,2160&ava=1'
            }
          ],
          questions: [
            {
              question: 'Как зовут сотрудника, изображенного на фото?',
              photo: 'https://sun9-1.userapi.com/s/v1/if1/6CUNrG4LceznlM3AQoXnblYq6Pq9ULOLpKGU0iSCQw-ZZOuQSWUuizSrOXWTtOxxFegpx9JL.jpg?size=200x300&quality=96&crop=0,0,1440,2160&ava=1',
              answer: 'Глеб Шестернёв',
              options: [
                'Эмиль Рахмангулов',
                'Алина Ципко',
                'София Новожилова',
                'Глеб Шестернёв'
              ]
            },
            {
              question: 'Кто из коллег раньше работал в комании ИТМО?',
              answer: 'Алина Ципко',
              options: [
                'Алина Ципко',
                'Глеб Низаметдинов',
                'Эмиль Рахмангулов',
                'Денис Февралёв'
              ]
            },
            {
              question: 'Каким спортом занимается Ираклий Убилава?',
              answer: 'гандбол',
              options: [
                'велоспорт',
                'танцы',
                'шахматы',
                'гандбол'
              ]
            },
            {
              question: 'Как зовут сотрудника, изображенного на фото?',
              photo: 'https://sun9-76.userapi.com/s/v1/ig2/cVcdUTMq3mKRi7LWq_NixjizXtmhjwkYw4i0dsT0lBSNXtByF4zEBkVvbdRrjoCk36gIPoT2VrIKMZET_QhkA-6S.jpg?size=200x200&quality=96&crop=0,12,787,787&ava=1',
              answer: 'Ираклий Убилава',
              options: [
                'Глеб Шестернёв',
                'Эмиль Рахмангулов',
                'Глеб Низаметдинов',
                'Ираклий Убилава'
              ]
            },
            {
              question: 'Кто из коллег раньше работал в комании Spark?',
              answer: 'София Новожилова',
              options: [
                'Алина Ципко',
                'Денис Февралёв',
                'Эмиль Рахмангулов',
                'София Новожилова'
              ]
            },
            {
              question: 'Каким спортом занимается Эмиль Рахмангулов?',
              answer: 'велоспорт',
              options: [
                'велоспорт',
                'бег',
                'гандбол',
                'шахматы'
              ]
            },
            {
              question: 'Каким спортом занимается София Новожилова?',
              answer: 'шахматы',
              options: [
                'шахматы',
                'танцы',
                'гандбол',
                'велоспорт'
              ]
            },
            {
              question: 'Как зовут сотрудника, изображенного на фото?',
              photo: 'https://sun9-57.userapi.com/s/v1/ig2/RlBtG_76ZxCtcPhdInf7gh6BpQYd3qGtyP8tnHCYIm61wOAcaJrPtZlxmpEV8LCK1BGe1LR7nCk3N_xUlFVwnmm2.jpg?size=200x266&quality=95&crop=96,128,768,1024&ava=1',
              answer: 'Денис Февралёв',
              options: [
                'Алина Ципко',
                'Глеб Низаметдинов',
                'София Новожилова',
                'Денис Февралёв'
              ]
            },
            {
              question: 'Где раньше работал София Новожилова?',
              answer: 'Spark',
              options: [
                'Spark',
                'ИТМО',
                'Яндекс',
                'Сбербанк'
              ]
            },
            {
              question: 'Кто из коллег раньше работал в комании SpaceX?',
              answer: 'Эмиль Рахмангулов',
              options: [
                'София Новожилова',
                'Ираклий Убилава',
                'Эмиль Рахмангулов',
                'Денис Февралёв'
              ]
            },
            {
              question: 'Каким спортом занимается Алина Ципко?',
              answer: 'танцы',
              options: [
                'гандбол',
                'велоспорт',
                'танцы',
                'бег'
              ]
            },
            {
              question: 'Кто из коллег любит этот вид спорта -  гандбол?',
              answer: 'Ираклий Убилава',
              options: [
                'Глеб Шестернёв',
                'Ираклий Убилава',
                'Глеб Низаметдинов',
                'Денис Февралёв'
              ]
            },
            {
              question: 'Как зовут сотрудника, изображенного на фото?',
              photo: 'https://sun9-1.userapi.com/s/v1/if1/jLE_M-SU2y-ERca89aR7M1ntW007_lJXVAUO4EBtesu3DotiiY1XXNxmPJjXOoHAw1mDqeDh.jpg?size=200x200&quality=96&crop=0,202,1218,1218&ava=1',
              answer: 'Эмиль Рахмангулов',
              options: [
                'Ираклий Убилава',
                'София Новожилова',
                'Денис Февралёв',
                'Эмиль Рахмангулов'
              ]
            },
            {
              question: 'Где раньше работал Алина Ципко?',
              answer: 'ИТМО',
              options: [
                'ИТМО',
                'SpaceX',
                'ForaSoft',
                'Сбербанк'
              ]
            },
            {
              question: 'Кто из коллег раньше работал в комании ForaSoft?',
              answer: 'Ираклий Убилава',
              options: [
                'Глеб Низаметдинов',
                'София Новожилова',
                'Глеб Шестернёв',
                'Ираклий Убилава'
              ]
            },
            {
              question: 'Кто из коллег любит этот вид спорта -  шахматы?',
              answer: 'София Новожилова',
              options: [
                'Эмиль Рахмангулов',
                'Алина Ципко',
                'София Новожилова',
                'Глеб Низаметдинов'
              ]
            },
            {
              question: 'Кто из коллег любит этот вид спорта -  танцы?',
              answer: 'Алина Ципко',
              options: [
                'Денис Февралёв',
                'Алина Ципко',
                'Глеб Шестернёв',
                'Глеб Низаметдинов'
              ]
            },
            {
              question: 'Где раньше работал Глеб Шестернёв?',
              answer: 'Сбербанк',
              options: [
                'Сбербанк',
                'Spark',
                'Яндекс',
                'SpaceX'
              ]
            },
            {
              question: 'Кто из коллег раньше работал в комании Яндекс?',
              answer: 'Денис Февралёв',
              options: [
                'Эмиль Рахмангулов',
                'Глеб Низаметдинов',
                'Глеб Шестернёв',
                'Денис Февралёв'
              ]
            },
            {
              question: 'Кто из коллег любит этот вид спорта -  бег?',
              answer: 'Глеб Низаметдинов',
              options: [
                'Ираклий Убилава',
                'Глеб Низаметдинов',
                'София Новожилова',
                'Алина Ципко'
              ]
            },
            {
              question: 'Где раньше работал Ираклий Убилава?',
              answer: 'ForaSoft',
              options: [
                'Сбербанк',
                'ИТМО',
                'ForaSoft',
                'Яндекс'
              ]
            },
            {
              question: 'Каким спортом занимается Глеб Низаметдинов?',
              answer: 'бег',
              options: [
                'бег',
                'гандбол',
                'велоспорт',
                'танцы'
              ]
            },
            {
              question: 'Кто из коллег раньше работал в комании Сбербанк?',
              answer: 'Глеб Шестернёв',
              options: [
                'Глеб Шестернёв',
                'София Новожилова',
                'Денис Февралёв',
                'Эмиль Рахмангулов'
              ]
            },
            {
              question: 'Как зовут сотрудника, изображенного на фото?',
              photo: 'https://sun9-49.userapi.com/s/v1/ig2/O4S-1bPRcVcgo0ZsdLLCw2k1F7t9w-lo3Xyhk1i8HZbAt5WEJbdUb_BLKib3kC3E8Mqizl8qOEeO74F1_xJuUjAP.jpg?size=200x200&quality=96&crop=55,55,1024,1024&ava=1',
              answer: 'София Новожилова',
              options: [
                'Денис Февралёв',
                'Алина Ципко',
                'Ираклий Убилава',
                'София Новожилова'
              ]
            },
            {
              question: 'Где раньше работал Денис Февралёв?',
              answer: 'Яндекс',
              options: [
                'ИТМО',
                'SpaceX',
                'Яндекс',
                'ForaSoft'
              ]
            },
            {
              question: 'Как зовут сотрудника, изображенного на фото?',
              photo: 'https://sun9-72.userapi.com/s/v1/ig2/BF6sfDZfUAe8cTmt9327zyjn_IWJ_JrfDunm3wvuBpN7iyNNKVXbpD49FJ4U8VdgkRbwJLIdb4Ri5D7Mqvhy5YNL.jpg?size=200x300&quality=96&crop=0,0,1365,2048&ava=1',
              answer: 'Глеб Низаметдинов',
              options: [
                'Денис Февралёв',
                'Эмиль Рахмангулов',
                'Глеб Шестернёв',
                'Глеб Низаметдинов'
              ]
            },
            {
              question: 'Кто из коллег любит этот вид спорта -  велоспорт?',
              answer: 'Эмиль Рахмангулов',
              options: [
                'Алина Ципко',
                'Глеб Низаметдинов',
                'Эмиль Рахмангулов',
                'Ираклий Убилава'
              ]
            },
            {
              question: 'Где раньше работал Эмиль Рахмангулов?',
              answer: 'SpaceX',
              options: [
                'Яндекс',
                'ForaSoft',
                'ИТМО',
                'SpaceX'
              ]
            },
            {
              question: 'Как зовут сотрудника, изображенного на фото?',
              photo: 'https://sun9-48.userapi.com/s/v1/if1/nWvMICW7BhL6n_fC4wgdL8VOW4sCxpNIOAH4q9IYC_0IYlcRRzfOO_kCw3l1ZKBQS113xRK3.jpg?size=200x251&quality=96&crop=0,54,720,906&ava=1',
              answer: 'Алина Ципко',
              options: [
                'София Новожилова',
                'Эмиль Рахмангулов',
                'Ираклий Убилава',
                'Алина Ципко'
              ]
            }
          ],
          questionsShort: [
            {
              question: 'На фото изображена София Новожилова?',
              photo: 'https://sun9-49.userapi.com/s/v1/ig2/O4S-1bPRcVcgo0ZsdLLCw2k1F7t9w-lo3Xyhk1i8HZbAt5WEJbdUb_BLKib3kC3E8Mqizl8qOEeO74F1_xJuUjAP.jpg?size=200x200&quality=96&crop=55,55,1024,1024&ava=1',
              answer: true
            },
            {
              question: 'Денис Февралёв увлекался этим видом спорта - танцы?',
              answer: false
            },
            {
              question: 'На фото изображена Алина Ципко?',
              photo: 'https://sun9-48.userapi.com/s/v1/if1/nWvMICW7BhL6n_fC4wgdL8VOW4sCxpNIOAH4q9IYC_0IYlcRRzfOO_kCw3l1ZKBQS113xRK3.jpg?size=200x251&quality=96&crop=0,54,720,906&ava=1',
              answer: true
            },
            {
              question: 'На фото изображен Денис Февралёв?',
              photo: 'https://sun9-57.userapi.com/s/v1/ig2/RlBtG_76ZxCtcPhdInf7gh6BpQYd3qGtyP8tnHCYIm61wOAcaJrPtZlxmpEV8LCK1BGe1LR7nCk3N_xUlFVwnmm2.jpg?size=200x266&quality=95&crop=96,128,768,1024&ava=1',
              answer: true
            },
            {
              question: 'Эмиль Рахмангулов раньше работал в Сбербанк?',
              answer: false
            },
            {
              question: 'Ираклий Убилава раньше работал в Сбербанк?',
              answer: false
            },
            {
              question: 'Глеб Низаметдинов раньше работал в Сбербанк?',
              answer: false
            },
            {
              question: 'Алина Ципко раньше работала в SpaceX?',
              answer: false
            },
            {
              question: 'София Новожилова раньше работала в Яндекс?',
              answer: false
            },
            {
              question: 'Ираклий Убилава раньше работал в Spark?',
              answer: false
            },
            {
              question: 'Глеб Шестернёв раньше работал в SpaceX?',
              answer: false
            },
            {
              question: 'Ираклий Убилава увлекался этим видом спорта - гандбол?',
              answer: true
            },
            {
              question: 'София Новожилова раньше работала в Сбербанк?',
              answer: false
            },
            {
              question: 'Денис Февралёв увлекался этим видом спорта - велоспорт?',
              answer: false
            },
            {
              question: 'София Новожилова увлекалась этим видом спорта - велоспорт?',
              answer: false
            },
            {
              question: 'На фото изображен Ираклий Убилава?',
              photo: 'https://sun9-76.userapi.com/s/v1/ig2/cVcdUTMq3mKRi7LWq_NixjizXtmhjwkYw4i0dsT0lBSNXtByF4zEBkVvbdRrjoCk36gIPoT2VrIKMZET_QhkA-6S.jpg?size=200x200&quality=96&crop=0,12,787,787&ava=1',
              answer: true
            },
            {
              question: 'Эмиль Рахмангулов раньше работал в Яндекс?',
              answer: false
            },
            {
              question: 'На фото изображен Ираклий Убилава?',
              photo: 'https://sun9-76.userapi.com/s/v1/ig2/cVcdUTMq3mKRi7LWq_NixjizXtmhjwkYw4i0dsT0lBSNXtByF4zEBkVvbdRrjoCk36gIPoT2VrIKMZET_QhkA-6S.jpg?size=200x200&quality=96&crop=0,12,787,787&ava=1',
              answer: true
            },
            {
              question: 'На фото изображен Денис Февралёв?',
              photo: 'https://sun9-57.userapi.com/s/v1/ig2/RlBtG_76ZxCtcPhdInf7gh6BpQYd3qGtyP8tnHCYIm61wOAcaJrPtZlxmpEV8LCK1BGe1LR7nCk3N_xUlFVwnmm2.jpg?size=200x266&quality=95&crop=96,128,768,1024&ava=1',
              answer: true
            },
            {
              question: 'София Новожилова раньше работала в ИТМО?',
              answer: false
            },
            {
              question: 'Денис Февралёв раньше работал в Яндекс?',
              answer: true
            },
            {
              question: 'На фото изображен Глеб Шестернёв?',
              photo: 'https://sun9-1.userapi.com/s/v1/if1/6CUNrG4LceznlM3AQoXnblYq6Pq9ULOLpKGU0iSCQw-ZZOuQSWUuizSrOXWTtOxxFegpx9JL.jpg?size=200x300&quality=96&crop=0,0,1440,2160&ava=1',
              answer: true
            },
            {
              question: 'На фото изображен Глеб Низаметдинов?',
              photo: 'https://sun9-72.userapi.com/s/v1/ig2/BF6sfDZfUAe8cTmt9327zyjn_IWJ_JrfDunm3wvuBpN7iyNNKVXbpD49FJ4U8VdgkRbwJLIdb4Ri5D7Mqvhy5YNL.jpg?size=200x300&quality=96&crop=0,0,1365,2048&ava=1',
              answer: false
            },
            {
              question: 'На фото изображен Эмиль Рахмангулов?',
              photo: 'https://sun9-1.userapi.com/s/v1/if1/jLE_M-SU2y-ERca89aR7M1ntW007_lJXVAUO4EBtesu3DotiiY1XXNxmPJjXOoHAw1mDqeDh.jpg?size=200x200&quality=96&crop=0,202,1218,1218&ava=1',
              answer: true
            },
            {
              question: 'На фото изображен Глеб Низаметдинов?',
              photo: 'https://sun9-72.userapi.com/s/v1/ig2/BF6sfDZfUAe8cTmt9327zyjn_IWJ_JrfDunm3wvuBpN7iyNNKVXbpD49FJ4U8VdgkRbwJLIdb4Ri5D7Mqvhy5YNL.jpg?size=200x300&quality=96&crop=0,0,1365,2048&ava=1',
              answer: true
            },
            {
              question: 'На фото изображен Ираклий Убилава?',
              photo: 'https://sun9-76.userapi.com/s/v1/ig2/cVcdUTMq3mKRi7LWq_NixjizXtmhjwkYw4i0dsT0lBSNXtByF4zEBkVvbdRrjoCk36gIPoT2VrIKMZET_QhkA-6S.jpg?size=200x200&quality=96&crop=0,12,787,787&ava=1',
              answer: true
            },
            {
              question: 'Ираклий Убилава раньше работал в Яндекс?',
              answer: false
            },
            {
              question: 'Глеб Шестернёв раньше работал в ForaSoft?',
              answer: false
            },
            {
              question: 'На фото изображен Эмиль Рахмангулов?',
              photo: 'https://sun9-1.userapi.com/s/v1/if1/jLE_M-SU2y-ERca89aR7M1ntW007_lJXVAUO4EBtesu3DotiiY1XXNxmPJjXOoHAw1mDqeDh.jpg?size=200x200&quality=96&crop=0,202,1218,1218&ava=1',
              answer: true
            },
            {
              question: 'Алина Ципко увлекалась этим видом спорта - бег?',
              answer: false
            },
            {
              question: 'Глеб Низаметдинов раньше работал в SpaceX?',
              answer: false
            },
            {
              question: 'На фото изображена Алина Ципко?',
              photo: 'https://sun9-48.userapi.com/s/v1/if1/nWvMICW7BhL6n_fC4wgdL8VOW4sCxpNIOAH4q9IYC_0IYlcRRzfOO_kCw3l1ZKBQS113xRK3.jpg?size=200x251&quality=96&crop=0,54,720,906&ava=1',
              answer: true
            },
            {
              question: 'Глеб Шестернёв увлекался этим видом спорта - бег?',
              answer: false
            },
            {
              question: 'На фото изображен Ираклий Убилава?',
              photo: 'https://sun9-76.userapi.com/s/v1/ig2/cVcdUTMq3mKRi7LWq_NixjizXtmhjwkYw4i0dsT0lBSNXtByF4zEBkVvbdRrjoCk36gIPoT2VrIKMZET_QhkA-6S.jpg?size=200x200&quality=96&crop=0,12,787,787&ava=1',
              answer: true
            },
            {
              question: 'На фото изображена София Новожилова?',
              photo: 'https://sun9-49.userapi.com/s/v1/ig2/O4S-1bPRcVcgo0ZsdLLCw2k1F7t9w-lo3Xyhk1i8HZbAt5WEJbdUb_BLKib3kC3E8Mqizl8qOEeO74F1_xJuUjAP.jpg?size=200x200&quality=96&crop=55,55,1024,1024&ava=1',
              answer: true
            },
            {
              question: 'На фото изображен Глеб Шестернёв?',
              photo: 'https://sun9-1.userapi.com/s/v1/if1/6CUNrG4LceznlM3AQoXnblYq6Pq9ULOLpKGU0iSCQw-ZZOuQSWUuizSrOXWTtOxxFegpx9JL.jpg?size=200x300&quality=96&crop=0,0,1440,2160&ava=1',
              answer: true
            },
            {
              question: 'Алина Ципко увлекалась этим видом спорта - гандбол?',
              answer: false
            },
            {
              question: 'На фото изображена Алина Ципко?',
              photo: 'https://sun9-48.userapi.com/s/v1/if1/nWvMICW7BhL6n_fC4wgdL8VOW4sCxpNIOAH4q9IYC_0IYlcRRzfOO_kCw3l1ZKBQS113xRK3.jpg?size=200x251&quality=96&crop=0,54,720,906&ava=1',
              answer: false
            },
            {
              question: 'Ираклий Убилава раньше работал в SpaceX?',
              answer: false
            },
            {
              question: 'На фото изображен Денис Февралёв?',
              photo: 'https://sun9-57.userapi.com/s/v1/ig2/RlBtG_76ZxCtcPhdInf7gh6BpQYd3qGtyP8tnHCYIm61wOAcaJrPtZlxmpEV8LCK1BGe1LR7nCk3N_xUlFVwnmm2.jpg?size=200x266&quality=95&crop=96,128,768,1024&ava=1',
              answer: true
            },
            {
              question: 'Алина Ципко раньше работала в Spark?',
              answer: false
            },
            {
              question: 'На фото изображен Глеб Шестернёв?',
              photo: 'https://sun9-1.userapi.com/s/v1/if1/6CUNrG4LceznlM3AQoXnblYq6Pq9ULOLpKGU0iSCQw-ZZOuQSWUuizSrOXWTtOxxFegpx9JL.jpg?size=200x300&quality=96&crop=0,0,1440,2160&ava=1',
              answer: true
            },
            {
              question: 'Глеб Низаметдинов увлекался этим видом спорта - велоспорт?',
              answer: false
            },
            {
              question: 'Глеб Шестернёв увлекался этим видом спорта - гандбол?',
              answer: false
            },
            {
              question: 'София Новожилова раньше работала в SpaceX?',
              answer: false
            },
            {
              question: 'Глеб Шестернёв раньше работал в Яндекс?',
              answer: false
            },
            {
              question: 'Эмиль Рахмангулов раньше работал в SpaceX?',
              answer: true
            },
            {
              question: 'Денис Февралёв раньше работал в SpaceX?',
              answer: false
            },
            {
              question: 'На фото изображен Ираклий Убилава?',
              photo: 'https://sun9-76.userapi.com/s/v1/ig2/cVcdUTMq3mKRi7LWq_NixjizXtmhjwkYw4i0dsT0lBSNXtByF4zEBkVvbdRrjoCk36gIPoT2VrIKMZET_QhkA-6S.jpg?size=200x200&quality=96&crop=0,12,787,787&ava=1',
              answer: false
            },
            {
              question: 'На фото изображен Глеб Шестернёв?',
              photo: 'https://sun9-1.userapi.com/s/v1/if1/6CUNrG4LceznlM3AQoXnblYq6Pq9ULOLpKGU0iSCQw-ZZOuQSWUuizSrOXWTtOxxFegpx9JL.jpg?size=200x300&quality=96&crop=0,0,1440,2160&ava=1',
              answer: true
            },
            {
              question: 'На фото изображена София Новожилова?',
              photo: 'https://sun9-49.userapi.com/s/v1/ig2/O4S-1bPRcVcgo0ZsdLLCw2k1F7t9w-lo3Xyhk1i8HZbAt5WEJbdUb_BLKib3kC3E8Mqizl8qOEeO74F1_xJuUjAP.jpg?size=200x200&quality=96&crop=55,55,1024,1024&ava=1',
              answer: true
            },
            {
              question: 'Ираклий Убилава раньше работал в ForaSoft?',
              answer: true
            },
            {
              question: 'Денис Февралёв раньше работал в ИТМО?',
              answer: false
            },
            {
              question: 'Эмиль Рахмангулов увлекался этим видом спорта - бег?',
              answer: false
            },
            {
              question: 'Эмиль Рахмангулов раньше работал в ИТМО?',
              answer: false
            },
            {
              question: 'Эмиль Рахмангулов раньше работал в ForaSoft?',
              answer: false
            },
            {
              question: 'Эмиль Рахмангулов увлекался этим видом спорта - велоспорт?',
              answer: true
            },
            {
              question: 'На фото изображен Глеб Низаметдинов?',
              photo: 'https://sun9-72.userapi.com/s/v1/ig2/BF6sfDZfUAe8cTmt9327zyjn_IWJ_JrfDunm3wvuBpN7iyNNKVXbpD49FJ4U8VdgkRbwJLIdb4Ri5D7Mqvhy5YNL.jpg?size=200x300&quality=96&crop=0,0,1365,2048&ava=1',
              answer: true
            },
            {
              question: 'София Новожилова раньше работала в Spark?',
              answer: true
            },
            {
              question: 'Алина Ципко раньше работала в ForaSoft?',
              answer: false
            },
            {
              question: 'На фото изображен Глеб Низаметдинов?',
              photo: 'https://sun9-72.userapi.com/s/v1/ig2/BF6sfDZfUAe8cTmt9327zyjn_IWJ_JrfDunm3wvuBpN7iyNNKVXbpD49FJ4U8VdgkRbwJLIdb4Ri5D7Mqvhy5YNL.jpg?size=200x300&quality=96&crop=0,0,1365,2048&ava=1',
              answer: true
            },
            {
              question: 'На фото изображен Денис Февралёв?',
              photo: 'https://sun9-57.userapi.com/s/v1/ig2/RlBtG_76ZxCtcPhdInf7gh6BpQYd3qGtyP8tnHCYIm61wOAcaJrPtZlxmpEV8LCK1BGe1LR7nCk3N_xUlFVwnmm2.jpg?size=200x266&quality=95&crop=96,128,768,1024&ava=1',
              answer: false
            },
            {
              question: 'На фото изображен Глеб Шестернёв?',
              photo: 'https://sun9-1.userapi.com/s/v1/if1/6CUNrG4LceznlM3AQoXnblYq6Pq9ULOLpKGU0iSCQw-ZZOuQSWUuizSrOXWTtOxxFegpx9JL.jpg?size=200x300&quality=96&crop=0,0,1440,2160&ava=1',
              answer: true
            },
            {
              question: 'Глеб Низаметдинов раньше работал в Яндекс?',
              answer: false
            },
            {
              question: 'Глеб Низаметдинов увлекался этим видом спорта - бег?',
              answer: true
            },
            {
              question: 'На фото изображен Глеб Низаметдинов?',
              photo: 'https://sun9-72.userapi.com/s/v1/ig2/BF6sfDZfUAe8cTmt9327zyjn_IWJ_JrfDunm3wvuBpN7iyNNKVXbpD49FJ4U8VdgkRbwJLIdb4Ri5D7Mqvhy5YNL.jpg?size=200x300&quality=96&crop=0,0,1365,2048&ava=1',
              answer: true
            },
            {
              question: 'На фото изображена София Новожилова?',
              photo: 'https://sun9-49.userapi.com/s/v1/ig2/O4S-1bPRcVcgo0ZsdLLCw2k1F7t9w-lo3Xyhk1i8HZbAt5WEJbdUb_BLKib3kC3E8Mqizl8qOEeO74F1_xJuUjAP.jpg?size=200x200&quality=96&crop=55,55,1024,1024&ava=1',
              answer: true
            },
            {
              question: 'София Новожилова увлекалась этим видом спорта - танцы?',
              answer: false
            },
            {
              question: 'На фото изображен Денис Февралёв?',
              photo: 'https://sun9-57.userapi.com/s/v1/ig2/RlBtG_76ZxCtcPhdInf7gh6BpQYd3qGtyP8tnHCYIm61wOAcaJrPtZlxmpEV8LCK1BGe1LR7nCk3N_xUlFVwnmm2.jpg?size=200x266&quality=95&crop=96,128,768,1024&ava=1',
              answer: true
            },
            {
              question: 'Ираклий Убилава увлекался этим видом спорта - велоспорт?',
              answer: false
            },
            {
              question: 'Ираклий Убилава увлекался этим видом спорта - шахматы?',
              answer: false
            },
            {
              question: 'Ираклий Убилава увлекался этим видом спорта - танцы?',
              answer: false
            },
            {
              question: 'София Новожилова увлекалась этим видом спорта - бег?',
              answer: false
            },
            {
              question: 'Денис Февралёв увлекался этим видом спорта - шахматы?',
              answer: false
            },
            {
              question: 'На фото изображена София Новожилова?',
              photo: 'https://sun9-49.userapi.com/s/v1/ig2/O4S-1bPRcVcgo0ZsdLLCw2k1F7t9w-lo3Xyhk1i8HZbAt5WEJbdUb_BLKib3kC3E8Mqizl8qOEeO74F1_xJuUjAP.jpg?size=200x200&quality=96&crop=55,55,1024,1024&ava=1',
              answer: true
            },
            {
              question: 'София Новожилова увлекалась этим видом спорта - шахматы?',
              answer: true
            },
            {
              question: 'На фото изображен Эмиль Рахмангулов?',
              photo: 'https://sun9-1.userapi.com/s/v1/if1/jLE_M-SU2y-ERca89aR7M1ntW007_lJXVAUO4EBtesu3DotiiY1XXNxmPJjXOoHAw1mDqeDh.jpg?size=200x200&quality=96&crop=0,202,1218,1218&ava=1',
              answer: false
            },
            {
              question: 'Глеб Низаметдинов раньше работал в Spark?',
              answer: false
            },
            {
              question: 'На фото изображен Эмиль Рахмангулов?',
              photo: 'https://sun9-1.userapi.com/s/v1/if1/jLE_M-SU2y-ERca89aR7M1ntW007_lJXVAUO4EBtesu3DotiiY1XXNxmPJjXOoHAw1mDqeDh.jpg?size=200x200&quality=96&crop=0,202,1218,1218&ava=1',
              answer: true
            },
            {
              question: 'Алина Ципко раньше работала в ИТМО?',
              answer: true
            },
            {
              question: 'Эмиль Рахмангулов увлекался этим видом спорта - шахматы?',
              answer: false
            },
            {
              question: 'Алина Ципко увлекалась этим видом спорта - велоспорт?',
              answer: false
            },
            {
              question: 'На фото изображен Глеб Низаметдинов?',
              photo: 'https://sun9-72.userapi.com/s/v1/ig2/BF6sfDZfUAe8cTmt9327zyjn_IWJ_JrfDunm3wvuBpN7iyNNKVXbpD49FJ4U8VdgkRbwJLIdb4Ri5D7Mqvhy5YNL.jpg?size=200x300&quality=96&crop=0,0,1365,2048&ava=1',
              answer: true
            },
            {
              question: 'Эмиль Рахмангулов увлекался этим видом спорта - гандбол?',
              answer: false
            },
            {
              question: 'Алина Ципко увлекалась этим видом спорта - танцы?',
              answer: true
            },
            {
              question: 'На фото изображен Ираклий Убилава?',
              photo: 'https://sun9-76.userapi.com/s/v1/ig2/cVcdUTMq3mKRi7LWq_NixjizXtmhjwkYw4i0dsT0lBSNXtByF4zEBkVvbdRrjoCk36gIPoT2VrIKMZET_QhkA-6S.jpg?size=200x200&quality=96&crop=0,12,787,787&ava=1',
              answer: true
            },
            {
              question: 'На фото изображен Глеб Низаметдинов?',
              photo: 'https://sun9-72.userapi.com/s/v1/ig2/BF6sfDZfUAe8cTmt9327zyjn_IWJ_JrfDunm3wvuBpN7iyNNKVXbpD49FJ4U8VdgkRbwJLIdb4Ri5D7Mqvhy5YNL.jpg?size=200x300&quality=96&crop=0,0,1365,2048&ava=1',
              answer: true
            },
            {
              question: 'На фото изображена Алина Ципко?',
              photo: 'https://sun9-48.userapi.com/s/v1/if1/nWvMICW7BhL6n_fC4wgdL8VOW4sCxpNIOAH4q9IYC_0IYlcRRzfOO_kCw3l1ZKBQS113xRK3.jpg?size=200x251&quality=96&crop=0,54,720,906&ava=1',
              answer: true
            },
            {
              question: 'На фото изображен Эмиль Рахмангулов?',
              photo: 'https://sun9-1.userapi.com/s/v1/if1/jLE_M-SU2y-ERca89aR7M1ntW007_lJXVAUO4EBtesu3DotiiY1XXNxmPJjXOoHAw1mDqeDh.jpg?size=200x200&quality=96&crop=0,202,1218,1218&ava=1',
              answer: true
            },
            {
              question: 'Денис Февралёв увлекался этим видом спорта - гандбол?',
              answer: false
            },
            {
              question: 'Глеб Низаметдинов раньше работал в ForaSoft?',
              answer: false
            },
            {
              question: 'На фото изображен Эмиль Рахмангулов?',
              photo: 'https://sun9-1.userapi.com/s/v1/if1/jLE_M-SU2y-ERca89aR7M1ntW007_lJXVAUO4EBtesu3DotiiY1XXNxmPJjXOoHAw1mDqeDh.jpg?size=200x200&quality=96&crop=0,202,1218,1218&ava=1',
              answer: true
            },
            {
              question: 'На фото изображена Алина Ципко?',
              photo: 'https://sun9-48.userapi.com/s/v1/if1/nWvMICW7BhL6n_fC4wgdL8VOW4sCxpNIOAH4q9IYC_0IYlcRRzfOO_kCw3l1ZKBQS113xRK3.jpg?size=200x251&quality=96&crop=0,54,720,906&ava=1',
              answer: true
            },
            {
              question: 'На фото изображен Глеб Шестернёв?',
              photo: 'https://sun9-1.userapi.com/s/v1/if1/6CUNrG4LceznlM3AQoXnblYq6Pq9ULOLpKGU0iSCQw-ZZOuQSWUuizSrOXWTtOxxFegpx9JL.jpg?size=200x300&quality=96&crop=0,0,1440,2160&ava=1',
              answer: true
            },
            {
              question: 'Ираклий Убилава раньше работал в ИТМО?',
              answer: false
            },
            {
              question: 'Глеб Низаметдинов раньше работал в ИТМО?',
              answer: false
            },
            {
              question: 'Глеб Низаметдинов увлекался этим видом спорта - шахматы?',
              answer: false
            },
            {
              question: 'Глеб Низаметдинов увлекался этим видом спорта - танцы?',
              answer: false
            },
            {
              question: 'Денис Февралёв раньше работал в ForaSoft?',
              answer: false
            },
            {
              question: 'Эмиль Рахмангулов раньше работал в Spark?',
              answer: false
            },
            {
              question: 'Денис Февралёв увлекался этим видом спорта - бег?',
              answer: false
            },
            {
              question: 'На фото изображен Денис Февралёв?',
              photo: 'https://sun9-57.userapi.com/s/v1/ig2/RlBtG_76ZxCtcPhdInf7gh6BpQYd3qGtyP8tnHCYIm61wOAcaJrPtZlxmpEV8LCK1BGe1LR7nCk3N_xUlFVwnmm2.jpg?size=200x266&quality=95&crop=96,128,768,1024&ava=1',
              answer: true
            },
            {
              question: 'Глеб Шестернёв увлекался этим видом спорта - шахматы?',
              answer: false
            },
            {
              question: 'Алина Ципко раньше работала в Яндекс?',
              answer: false
            },
            {
              question: 'София Новожилова увлекалась этим видом спорта - гандбол?',
              answer: false
            },
            {
              question: 'Глеб Низаметдинов увлекался этим видом спорта - гандбол?',
              answer: false
            },
            {
              question: 'Денис Февралёв раньше работал в Сбербанк?',
              answer: false
            },
            {
              question: 'На фото изображена Алина Ципко?',
              photo: 'https://sun9-48.userapi.com/s/v1/if1/nWvMICW7BhL6n_fC4wgdL8VOW4sCxpNIOAH4q9IYC_0IYlcRRzfOO_kCw3l1ZKBQS113xRK3.jpg?size=200x251&quality=96&crop=0,54,720,906&ava=1',
              answer: true
            },
            {
              question: 'Алина Ципко увлекалась этим видом спорта - шахматы?',
              answer: false
            },
            {
              question: 'Глеб Шестернёв раньше работал в Сбербанк?',
              answer: true
            },
            {
              question: 'На фото изображен Денис Февралёв?',
              photo: 'https://sun9-57.userapi.com/s/v1/ig2/RlBtG_76ZxCtcPhdInf7gh6BpQYd3qGtyP8tnHCYIm61wOAcaJrPtZlxmpEV8LCK1BGe1LR7nCk3N_xUlFVwnmm2.jpg?size=200x266&quality=95&crop=96,128,768,1024&ava=1',
              answer: true
            },
            {
              question: 'Глеб Шестернёв увлекался этим видом спорта - танцы?',
              answer: false
            },
            {
              question: 'На фото изображена София Новожилова?',
              photo: 'https://sun9-49.userapi.com/s/v1/ig2/O4S-1bPRcVcgo0ZsdLLCw2k1F7t9w-lo3Xyhk1i8HZbAt5WEJbdUb_BLKib3kC3E8Mqizl8qOEeO74F1_xJuUjAP.jpg?size=200x200&quality=96&crop=55,55,1024,1024&ava=1',
              answer: true
            },
            {
              question: 'На фото изображена София Новожилова?',
              photo: 'https://sun9-49.userapi.com/s/v1/ig2/O4S-1bPRcVcgo0ZsdLLCw2k1F7t9w-lo3Xyhk1i8HZbAt5WEJbdUb_BLKib3kC3E8Mqizl8qOEeO74F1_xJuUjAP.jpg?size=200x200&quality=96&crop=55,55,1024,1024&ava=1',
              answer: false
            },
            {
              question: 'Денис Февралёв раньше работал в Spark?',
              answer: false
            },
            {
              question: 'Глеб Шестернёв увлекался этим видом спорта - велоспорт?',
              answer: false
            },
            {
              question: 'Ираклий Убилава увлекался этим видом спорта - бег?',
              answer: false
            },
            {
              question: 'На фото изображен Ираклий Убилава?',
              photo: 'https://sun9-76.userapi.com/s/v1/ig2/cVcdUTMq3mKRi7LWq_NixjizXtmhjwkYw4i0dsT0lBSNXtByF4zEBkVvbdRrjoCk36gIPoT2VrIKMZET_QhkA-6S.jpg?size=200x200&quality=96&crop=0,12,787,787&ava=1',
              answer: true
            },
            {
              question: 'Глеб Шестернёв раньше работал в ИТМО?',
              answer: false
            },
            {
              question: 'София Новожилова раньше работала в ForaSoft?',
              answer: false
            },
            {
              question: 'Эмиль Рахмангулов увлекался этим видом спорта - танцы?',
              answer: false
            },
            {
              question: 'На фото изображен Глеб Шестернёв?',
              photo: 'https://sun9-1.userapi.com/s/v1/if1/6CUNrG4LceznlM3AQoXnblYq6Pq9ULOLpKGU0iSCQw-ZZOuQSWUuizSrOXWTtOxxFegpx9JL.jpg?size=200x300&quality=96&crop=0,0,1440,2160&ava=1',
              answer: false
            },
            {
              question: 'Алина Ципко раньше работала в Сбербанк?',
              answer: false
            },
            {
              question: 'На фото изображен Эмиль Рахмангулов?',
              photo: 'https://sun9-1.userapi.com/s/v1/if1/jLE_M-SU2y-ERca89aR7M1ntW007_lJXVAUO4EBtesu3DotiiY1XXNxmPJjXOoHAw1mDqeDh.jpg?size=200x200&quality=96&crop=0,202,1218,1218&ava=1',
              answer: true
            },
            {
              question: 'Глеб Шестернёв раньше работал в Spark?',
              answer: false
            },
            {
              question: 'На фото изображена Алина Ципко?',
              photo: 'https://sun9-48.userapi.com/s/v1/if1/nWvMICW7BhL6n_fC4wgdL8VOW4sCxpNIOAH4q9IYC_0IYlcRRzfOO_kCw3l1ZKBQS113xRK3.jpg?size=200x251&quality=96&crop=0,54,720,906&ava=1',
              answer: true
            }
          ]
        },
        tests: {
          testLength: 10,
          shortTestLength: 10
        }
};

describe("SliderButton component", () => {
  it("should render", () => {
    const store = mockStore(storeData);
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Questions />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
  it("should have class", () => {
    const store = mockStore(storeData);
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Questions />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.find(".questions")).toHaveLength(1);
  });
  it("should have component", () => {
    const store = mockStore(storeData);
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Questions />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.find(QuestionItem)).toHaveLength(1);
  });
});
