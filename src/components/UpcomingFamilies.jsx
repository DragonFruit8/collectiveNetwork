import familyData from '../data.json';

function UpcomingFamilies() {
  const family = familyData;
  return (
    <section className="container-lg">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h3 className="fs-1">Upcoming Families</h3>
        <p className="lead">Every family has a story worth sharing </p>
      </div>
      <div className="album py-5 bg-body-tertiary">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

{family.map(f => {
  return(
 <div key={f.id} className="col d-flex"> 
  <div className="card w-100"> 
    <div className="card-body p-1"> 
      <div className='container-fluid'>
        <img
          src={f.thumbnail}
          alt={f.name || 'Family member'}
          className="card-img-top" // Better for card images
          style={{ width: '100%', height: '200px', objectFit: 'contain' }} // Fixed height
        />
        <div className="p-1 flex-grow-1 py-3">
          <p className="card-text">
            {f.short_description}
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)})}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingFamilies;
