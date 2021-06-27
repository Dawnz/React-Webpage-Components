export default function ShowData({ names }) {
  // eslint-disable-next-line global-require
  //   const names = require('../data/fakeInfo.json');

  //   console.log(names);
  return (
    <div>
      <h3 className="text-center"> Database info</h3>
      <div className="database">
        <table className="table table-striped">
          <thead>
            <tr>
              <td>User Id</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Location</td>
              <td>Gender</td>
              <td>Email Address</td>
            </tr>
          </thead>
          <tbody>
            {names.map((name) => (
              <tr key={name.id}>
                <td>{name.id}</td>
                <td>{name.first_name}</td>
                <td>{name.last_name}</td>
                <td>{name.Location}</td>
                <td>{name.gender}</td>
                <td>{name.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
