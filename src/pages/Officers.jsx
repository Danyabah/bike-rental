import React from "react";
import Header from "../components/Header";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export default function Officers() {
  const token = useSelector((state) => state.user.token);

  const getOfficers = async () => {
    let url = `https://sf-final-project-be.herokuapp.com/api/officers`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const responce = await res.json();
    return responce;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["officers"],
    queryFn: getOfficers,
  });

  console.log(data);

  return (
    <div>
      <Header />
      <div className="table__container">
        <h1 className="table__name">Сотрудники</h1>
        <div className="table__content">
          <table className="table">
            <thead>
              <tr>
                <th>Одобрен</th>
                <th>Почта</th>
                <th>Имя</th>
                <th>Фамилия</th>
              </tr>
            </thead>

            <tbody>
              {data &&
                data.officers.map((officer) => (
                  <tr key={officer._id}>
                    <td>{officer.approved ? "Да" : "Нет"}</td>
                    <td>{officer.email}</td>
                    <td>
                      {officer.firstName ? officer.firstName : "Не указано"}
                    </td>
                    <td>
                      {officer.lastName ? officer.lastName : "Не указано"}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
