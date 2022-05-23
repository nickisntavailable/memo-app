import NavItem from "../../components/NavItem/NavItem";
import './Home.scss';

const navigationItems = [
  {
    title: "Изучить своих коллег",
    url: "/colleague",
  },
  {
    title: "Пройти тест с вариантами ответа",
    url: "/questions",
  },
  {
    title: "Пройти тест Да-Нет",
    url: "/questions-short",
  },
  {
    title: "Настройки",
    url: "/settings",
  },
];

const Home = () => {
  return (
    <div className="container-sm home">
      {navigationItems.map((item, idx) => (
        <NavItem {...item} key={idx} />
      ))}      
    </div>
  );
};
export default Home;
