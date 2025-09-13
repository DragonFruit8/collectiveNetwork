function FamilyCard({
  src,
  alt,
  description,
  customClass,
  lastUpdated,
  campaignFamily,
  progress,
  shareNow,
  username,
  tiktokUrl,
  donate,
  organizer,
  raised,
  fundGoal
}) {

  const progressPercentage = (raised / fundGoal) * 100;
  return (
    <div className="col d-flex">
      <div className={customClass}>
        <div className="card-body p-1">

          <img
            src={src}
            alt={alt || 'member'}
            className="img-fluid rounded"
            style={{
              width: '100%',
              height: '250px',
              objectFit: 'cover',
              cursor: 'pointer',
            }}
          />
          <div className="text-black">
            <small>{lastUpdated}</small>
          </div>
          <div className="mb-3">
                            <div className="d-flex justify-content-between mb-1">
                                <small className="text-muted">Raised</small>
                                <small className="text-muted">Goal</small>
                            </div>
                            <div className="progress mb-2" style={{ height: '8px' }}>
                                <div 
                                    className="progress-bar bg-success" 
                                    role="progressbar" 
                                    style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                                    aria-valuenow={progressPercentage} 
                                    aria-valuemin="0" 
                                    aria-valuemax="100"
                                ></div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span className="fw-bold text-success"><p>{raised || '0'}</p></span>
                                <span className="fw-bold fst-italic"><p>{fundGoal || '0'}</p></span>
                            </div>
                        </div>
                        
                        <div>
                            <p className='d-flex justify-content-start align-items-s gap-1 flex-wrap'>
                                <em><strong>Campaign:</strong></em>
                                {/* Truncate long descriptions */}
                                {progress && progress.length > 100 
                                    ? progress.substring(0, 100) + "..." 
                                    : progress
                                }
                            </p>
                        </div>
          <div className="p-1 flex-grow-1 py-3">
            <p className="card-text">{description}</p>
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
          <div className="col-md-8">
            <div>
              <h5
                className="card-title fw-bold my-1 mt-3"
                style={{cursor: 'pointer'}}
              >
                {campaignFamily}
              </h5>
            </div>
            <div className="mb-1 ps-1">
              <small className="text-muted">
                <strong><em>{organizer}</em></strong>
              </small>
            </div>

            {/* Progress Bar */}

            <div>
              <p className="d-flex justify-content-start align-items-s gap-1 flex-wrap">
                <em><strong>Campaign:</strong></em>
                {/* Truncate long descriptions */}
                {progress && progress.length > 100
                  ? progress.substring (0, 100) + '...'
                  : progress}
              </p>
            </div>

            {/* Social Links */}
            <div className="d-flex flex-wrap gap-2 mb-3 flex-wrap">
              {shareNow &&
                <a
                  href={shareNow}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    shareNow.includes ('gofund.me') ||
                      shareNow.includes ('gofundme')
                      ? 'btn btn-sm btn-success'
                      : 'btn btn-sm btn-outline-success'
                  }
                >
                  <i className="fas fa-hand-holding-heart me-1" />
                  {shareNow.includes ('gofund.me') ||
                    shareNow.includes ('gofundme')
                    ? 'GoFundMe'
                    : 'Donation Page'}
                </a>}
              {username &&
                <a
                  href={tiktokUrl || `https://tiktok.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-dark"
                >
                  <i className="fab fa-tiktok me-1" />
                  {username}
                </a>}
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap gap-2">

              {donate &&
                <a
                  href={donate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success btn-sm"
                >
                  <i className="fas fa-donate me-1" />
                  Donate Now
                </a>}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilyCard;
