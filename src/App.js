import './App.css';

function App() {
  return (
    <div className="App">
      <input className="search" placeholder="Поиск"></input>
      <div className="page-wrapper">
        <nav className="main-menu">
          <ul className="main-menu-list">
            <li className="main-menu-item"> <a href="#" className="main-menu-item-link"> Мои дела </a> </li>
            <li className="main-menu-item"> <a href="#" className="main-menu-item-link"> Мои задачи </a> </li>
            <li className="main-menu-item"> <a href="#" className="main-menu-item-link"> Мой календарь </a> </li>
            <li className="main-menu-item"> <a href="#" className="main-menu-item-link"> Оповещения </a> </li>
            <li className="main-menu-item"> <a href="#" className="main-menu-item-link"> Мой отдел </a> </li>
            <li className="main-menu-item"> <a href="#" className="main-menu-item-link"> Справка </a> </li>
          </ul>
        </nav>
        <main className="workzone">
          <nav className="workzone-menu">
            <div className="workzone-menu-wrapper">
            <ul className="workzone-menu-list">
              <li className="workzone-menu-item"> <a className="workzone-menu-item-link" href="#"> В подготовке </a></li>
              <li className="workzone-menu-item"> <a className="workzone-menu-item-link" href="#"> В судах </a></li>
              <li className="workzone-menu-item"> <a className="workzone-menu-item-link" href="#"> В ожидании </a></li>
              <li className="workzone-menu-item"> <a className="workzone-menu-item-link" href="#"> Архив </a></li>
              </ul>
            </div>
            <ul className="aside-menu">
              <li className="aside-menu-item"> <a href="#" className="aside-menu-item-link"> Общее производство </a> </li>
              <li className="aside-menu-item"> <a href="#" className="aside-menu-item-link"> Упрощенное производство </a> </li>
              <li className="aside-menu-item"> <a href="#" className="aside-menu-item-link"> Приказное производство </a> </li>
              <li className="aside-menu-item"> <a href="#" className="aside-menu-item-link"> Обжалование </a> </li>
            </ul>
          </nav>
          <div className="workzone-list">
            Это рабочая зона, в которой должен отображаться перечень дел / перечень задач / календарь / список оповещений / список работников в зависимости от выбранного пункта в главном меню
          </div>
        </main>
        <aside className="case-info">
        Здесь должна отображаться краткая информация о выбранном пункте в рабочей зоне
        </aside>
      </div>
    </div>
  );
}

export default App;
