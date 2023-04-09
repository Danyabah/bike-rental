import React from "react";
import Header from "../components/Header";

export default function Messages() {
  //статус сообщения номер лицензии тип велосипеда фио арендатора
  // дата создания сообщения дата последнего обновления сообщения
  // цвет велосипеда дата кражи ответственный сотрудник дополнительный комментарий завершающий комментарий
  return (
    <div>
      <Header />
      <div className="table__container">
        <h1 className="table__name">Сообщения о краже</h1>
        <div className="table__content">
          <table className="table">
            <thead>
              <tr>
                <th>Статус</th>
                <th>ФИО</th>
                <th>Тип велосипеда</th>
                <th>Цвет велосипеда</th>
                <th>Дата кражи</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Complete</td>
                <td>Complete</td>
                <td>Complete</td>
                <td>Complete</td>
                <td>Complete</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
