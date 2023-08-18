const AttendanceList = (props) => {
  const { employeeId, employeeName, onAttendanceChange, attendanceStatus } =
    props;

  const handleColor = () => {
    if (attendanceStatus === "absent") {
      return "red";
    } else {
      return "green";
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <p style={{ color: handleColor() }}>{employeeName}</p>
      <select
        onChange={(e) =>
          onAttendanceChange(employeeId, employeeName, e.target.value)
        }
      >
        <option value="absent">Absent</option>
        <option value="present">Present</option>
      </select>
    </div>
  );
};

export default AttendanceList;
