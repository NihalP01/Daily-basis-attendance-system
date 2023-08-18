const AttendanceList = (props) => {
  const { employeeId, employeeName, onAttendanceChange } = props;

  return (
    <div style={{ display: "flex" }}>
      <p>{employeeName}</p>
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
