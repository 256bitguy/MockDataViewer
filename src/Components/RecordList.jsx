import "./RecordList.css";

const RecordList = (data) => {
  return (
    <ul className="record-list">
      {data.data.map((record) => (
        <li key={record.id} className="record-item">
          <div className="record-header">
            <span className="record-avatar">👤</span>
            <h2 className="record-name">{record.name}</h2>
          </div>
          <div className="record-details">
            <p className="record-field">
              <strong>Email:</strong> {record.email}
            </p>
            <p className="record-field">
              <strong>Age:</strong> {record.age}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RecordList;
