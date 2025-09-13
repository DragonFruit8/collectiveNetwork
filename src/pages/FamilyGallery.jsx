import PageHeader from "../components/PageHeader";
// import RecordsDataComponent from "../components/RecordsDataComponent";
import data from "../data.json";
import FamilyCard from "../components/FamilyCard";

function FamilyGallery() {
const families = data;

  function sortCreateFeatured(families) {
    return families.sort((a, b) => {
    // First priority: updated_at (oldest first - ascending)
    const dateA = new Date(a.updated_at);
    const dateB = new Date(b.updated_at);
    
    if (dateA < dateB) return -1;
    if (dateA > dateB) return 1;
    
    // If dates are equal, second priority: amount_raised (lower first - ascending)
    return a.amount_raised - b.amount_raised;
  });
  }

  const formatterNoCents = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

  const featuredFamily = sortCreateFeatured(families)
  return (
    <>
      <PageHeader
        title={"Family Record Search"}
        slogan={`${families.length} Families on record`}
      />
          <div className="container mt-5 pt-4 user-select-none">
      <div className="text-center my-5">
        <h1 className="display-4 fw-bold">
          <span className="text-success">{families.length}</span> Families on record
        </h1>
        <p className="lead text-muted">
          Every story matters. Every donation makes a difference.
        </p>
      </div>

      {/* Enhanced Search and Filter Row */}
      <div className="row mb-4 g-3 justify-content-between">
        <div className="col-md-12">
          <div className="input-group">
            <span className="input-group-text">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search by index, name, organizer..."
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            // value={filterStatus}
            // onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Families</option>
            <optgroup label="Verification Status">
              <option value="verified">Verified ✓</option>
              <option value="unverified">Unverified</option>
            </optgroup>
            <optgroup label="Featured Status">
              <option value="featured">Featured</option>
              <option value="not-featured">Not Featured</option>
              <option value="verified-featured">Verified + Featured ✓⭐</option>
              <option value="verified-not-featured">Verified + Not Featured ✓</option>
            </optgroup>
            <optgroup label="Campaign Progress">
              <option value="new-campaign">✨ NEW Campaign ✨</option>
              <option value="no-campaign">📄 NO Campaign 📄</option>
              <option value="in-progress">⌛ In Progress ⌛</option>
              <option value="completed">🎉 Completed Goal 🎉</option>
              <option value="closed">❌ Campaign Closed ❌</option>
            </optgroup>
          </select>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            // value={sortBy}
            // onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="index-desc">Sort by Index ↓</option>
            <option value="index">Sort by Index ↑</option>
            <option value="name">Campaign Name A-Z</option>
            <option value="name-desc">Campaign Name Z-A</option>
            <option value="organizer">Sort by Organizer A-Z</option>
          </select>
        </div>
        <div className="col-md-3">
          {/* View Mode Toggle */}
          <div className="btn-group w-100" role="group">
            <button
              type="button"
              // className={`btn ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline-primary'}`}
              // onClick={() => setViewMode('grid')}
            >
              <i className="fas fa-th me-1"></i>
              Grid
            </button>
            <button
              type="button"
              // className={`btn ${viewMode === 'list' ? 'btn-primary' : 'btn-outline-primary'}`}
              // onClick={() => setViewMode('list')}
            >
              <i className="fas fa-list me-1"></i>
              List
            </button>
          </div>
        </div>
      </div>
      <section className="container-lg">
        <div className="album py-5 bg-body-tertiary">
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {/* {setFamilies(families.fields)} */}
              {featuredFamily           
              .map((f) => {
                return (
                  <FamilyCard
                    customClass={`card w-100 ${f.is_verified ? "border border-1 border-success" : "border border-1 border-danger"}`}
                    key={f.id}
                    id={f.id}
                    src={f.fields.campaignPhoto?.[0]?.url || 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400'} 
                    alt={f.fields.campaignFamily || 'Family'}
                    description={f.fields.campaignFamily}
                    lastUpdated={f.fields.LastReviewed}
                    raised={formatterNoCents.format(f.fields.raised)}
                    campaignFamily={f.fields.campaignFamily}
                    progress={f.fields.progress}
                    shareNow={f.fields.shareNow}
                    username={f.fields.username}
                    tiktokUrl={f.fields.tiktokUrl}
                    donate={f.fields.donate}
                    organizer={f.fields.organizer}
                    progressPercentage={f.progressPercentage}
                    fundGoal={formatterNoCents.format(f.fields.fundGoal)}
                   />
                )
              })}
            </div>
          </div>
        </div>
      </section>
        </div>
    </>
  );
}

export default FamilyGallery;
