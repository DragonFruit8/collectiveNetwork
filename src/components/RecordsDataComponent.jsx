import data from '../data.json';

function RecordsDataComponent () {
  const records = data;

  return (
    <section className="bg-dark text-light">
      <div className="container-lg d-sm-flex justify-content-evenly py-3 flex gap-3">
        <div className="col-md-3">
          <div className="py-4">
            <div className="col d-flex-row text-center">
              <h5 className="card-title fs-1 pb-2 text-warning">
                {records.length}
              </h5>
              <p className="card-text fs-4">Families Recorded</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="py-4">
            <div className="col d-flex-row text-center">
              <h5 className="card-title fs-1 pb-2 text-warning">
                {records.filter (f => f.is_verified === true).length}
              </h5>
              <p className="card-text fs-4">Families Verified</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="py-4">
            <div className="col d-flex-row text-center">
              <h5 className="card-title fs-1 pb-2 text-warning">
                {records.filter (f => f.amount_raised >= f.goal).length}
              </h5>
              <p className="card-text fs-4">Goals Reached</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecordsDataComponent;
