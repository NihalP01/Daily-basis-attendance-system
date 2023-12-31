import { useState } from "react";
import AttendanceList from "./AttendanceList";
import { Utils } from "./Utils";

const AttendanceSystem = () => {
  const [attendanceList, setAttendanceList] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const [changeDate, setChangeDate] = useState(1);

  const employeeList = [
    {
      employeeId: 0,
      employeeName: "Employee-1",
    },
    {
      employeeId: 1,
      employeeName: "Employee-2",
    },
    {
      employeeId: 2,
      employeeName: "Employee-3",
    },
    {
      employeeId: 3,
      employeeName: "Employee-4",
    },
  ];

  const onAttendanceChange = (id, name, status) => {
    const attendanceData = {
      id,
      name,
      currentStatus: status,
      attendance: [
        {
          status,
          attendanceDate: Utils.formattedDate(changeDate),
        },
      ],
    };

    setAttendanceList((prevList) => {
      const newList = [...prevList];
      const index = newList.findIndex((item) => item.id === id);
      if (index === -1) {
        newList.push(attendanceData);
      } else {
        const lastAttendance =
          newList[index].attendance[newList[index].attendance.length - 1];

        if (
          lastAttendance.attendanceDate !==
          attendanceData.attendance[0].attendanceDate
        ) {
          newList[index].attendance.push({
            status: attendanceData.attendance[0].status,
            attendanceDate: attendanceData.attendance[0].attendanceDate,
          });
        }
        newList[index].currentStatus = status;
        newList[index].attendance[newList[index].attendance.length - 1] = {
          status: attendanceData.attendance[0].status,
          attendanceDate: attendanceData.attendance[0].attendanceDate,
        };
      }
      return newList;
    });
  };

  function getStatus(id) {
    const attendance = attendanceList.find((a) => a.id === id);
    if (attendance) {
      return attendance.currentStatus;
    }
    return "absent";
  }

  const handleShowTable = () => {
    setShowTable((prev) => !prev);
  };

  const handleDateChange = () => {
    setChangeDate((prev) => prev + 1);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "400px",
        }}
      >
        <div>
          {employeeList.map((item) => (
            <AttendanceList
              key={item.employeeId}
              employeeId={item.employeeId}
              employeeName={item.employeeName}
              attendanceStatus={getStatus(item.employeeId)}
              onAttendanceChange={onAttendanceChange}
            />
          ))}
        </div>
        <div>
          <p>Current date: {Utils.formattedDate(changeDate)}</p>
          <button onClick={handleDateChange}>Change date</button>
        </div>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <button onClick={handleShowTable}>Show attendance</button>
      </div>
      {showTable && (
        <div>
          {attendanceList.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <table border="1px solid black" style={{ marginTop: "-0.6rem" }}>
                <tr>
                  <th>Date</th>
                  <th>Attendance</th>
                </tr>
                {item.attendance.map((val) => (
                  <tr key={val.id}>
                    <td>{val.attendanceDate}</td>
                    <td>{val.status}</td>
                  </tr>
                ))}
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AttendanceSystem;
