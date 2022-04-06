import NavItem from "../../components/NavItem/NavItem"

const navigationItems = [
    {
        title: "Изучить своих коллег",
        url: "/"
    },
    {
        title: "Пройти тест с вариантами ответа",
        url: "/"
    },
    {
        title: "Пройти тест Да-Нет",
        url: "/"
    }
]


const Home = () => {
    return (
        <div className="container-sm">
            {
            navigationItems.map(item => (
                <NavItem {...item} />
            ))
            }
        </div>
    )
}
export default Home;