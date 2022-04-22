import NavItem from "../../components/NavItem/NavItem";


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
];

const Home = () => {
  return (
    <div className="container-sm">
      {navigationItems.map((item) => (
        <NavItem {...item} />
      ))}      
    </div>
  );
};
export default Home;
