import { useEffect, useState } from "react";
import AttendanceList from "./AttendanceList";
import { Utils } from "./Utils";

const AttendanceSystem = () => {
  const [attendanceList, setAttendanceList] = useState([]);

  const employeeList = [
    {
      employeeId: 0,
      employeeName: "Employee-1"
    },
    {
      employeeId: 1,
      employeeName: "Employee-2"
    },
    {
      employeeId: 2,
      employeeName: "Employee-3"
    },
    {
      employeeId: 3,
      employeeName: "Employee-4"
    }
  ];

  useEffect(() => {
    console.log(attendanceList);
  }, [attendanceList]);

  const onAttendanceChange = (id, name, status) => {
    const attendanceData = {
      id,
      name,
      attendance: [
        {
          status,
          attendanceDate: Utils.formattedDate()
        }
      ]
    };
    setAttendanceList((prevList) => {
      const newList = [...prevList];
      const index = newList.findIndex((item) => item.id === id);
      if (index === -1) {
        newList.push(attendanceData);
      } else {
        const lastAttendance =
          newList[index].attendance[newList[index].attendance.length - 1];

        if (lastAttendance.status !== status) {
          if (
            lastAttendance.attendanceDate !==
            attendanceData.attendance[0].attendanceDate
          ) {
            newList[index].attendance.push({
              status: attendanceData.attendance[0].status,
              attendanceDate: attendanceData.attendance[0].attendanceDate
            });
          }
          newList[index].attendance[newList[index].attendance.length - 1] = {
            status: attendanceData.attendance[0].status,
            attendanceDate: attendanceData.attendance[0].attendanceDate
          };
        }
      }
      return newList;
    });
  };

  return (
    <div>
      {employeeList.map((item) => (
        <AttendanceList
          key={item.employeeId}
          employeeId={item.employeeId}
          employeeName={item.employeeName}
          onAttendanceChange={onAttendanceChange}
        />
      ))}
    </div>
  );
};

export default AttendanceSystem;
