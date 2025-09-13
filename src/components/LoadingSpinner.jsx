const LoadingSpinner = ({
  size = "md",
  message = "Loading...",
  variant = "primary",
}) => {
  const sizeClasses = {
    sm: "spinner-border-sm",
    md: "",
    lg: "spinner-border-lg",
  };

  const variantClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    success: "text-success",
    danger: "text-danger",
    warning: "text-warning",
    info: "text-info",
    light: "text-light",
    dark: "text-dark",
    white: "text-white",
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5">
      <div
        className={`spinner-border ${sizeClasses[size]} ${variantClasses[variant]} mb-3`}
        role="status"
        style={{
          width: size === "sm" ? "1.5rem" : size === "lg" ? "3rem" : "2rem",
          height: size === "sm" ? "1.5rem" : size === "lg" ? "3rem" : "2rem",
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      {message && (
        <div className="text-center">
          <p className="text-muted mb-0 fw-medium">{message}</p>
          <small className="text-muted opacity-75">
            Please wait while we fetch the latest information
          </small>
        </div>
      )}
    </div>
  );
};

// Alternative Pulse Loading Component for cards/content
const PulseLoader = ({ rows = 3, showAvatar = false }) => (
  <div className="card">
    <div className="card-body">
      {showAvatar && (
        <div className="d-flex align-items-center mb-3">
          <div className="placeholder-glow">
            <div
              className="placeholder rounded-circle bg-secondary"
              style={{ width: "40px", height: "40px" }}
            ></div>
          </div>
          <div className="ms-3 flex-grow-1">
            <div className="placeholder-glow">
              <span className="placeholder col-4 bg-secondary"></span>
            </div>
          </div>
        </div>
      )}

      <div className="placeholder-glow">
        {Array.from({ length: rows }).map((_, index) => (
          <div key={index} className="mb-2">
            <span
              className={`placeholder col-${
                Math.floor(Math.random() * 4) + 8
              } bg-secondary`}
            ></span>
          </div>
        ))}
      </div>

      <div className="placeholder-glow mt-3">
        <span className="placeholder col-3 bg-primary"></span>
        <span className="placeholder col-2 bg-secondary ms-2"></span>
      </div>
    </div>
  </div>
);

// Skeleton loader for family cards
const FamilyCardSkeleton = () => (
  <div className="card family-card h-100">
    <div className="placeholder-glow">
      <div
        className="placeholder bg-secondary w-100"
        style={{ height: "200px" }}
      ></div>
    </div>
    <div className="card-body">
      <div className="placeholder-glow">
        <h5 className="placeholder col-8 bg-secondary"></h5>
        <p className="placeholder col-5 bg-secondary"></p>
        <p className="placeholder col-12 bg-secondary"></p>
        <p className="placeholder col-9 bg-secondary"></p>
      </div>

      <div className="mb-3">
        <div className="placeholder-glow">
          <div className="placeholder col-3 bg-secondary mb-1"></div>
        </div>
        <div className="progress mb-2" style={{ height: "8px" }}>
          <div
            className="progress-bar bg-secondary"
            style={{ width: "45%" }}
          ></div>
        </div>
        <div className="placeholder-glow">
          <span className="placeholder col-4 bg-secondary"></span>
          <span className="placeholder col-3 bg-secondary float-end"></span>
        </div>
      </div>
    </div>
    <div className="card-footer bg-transparent">
      <div className="placeholder-glow">
        <div className="row g-2">
          <div className="col-6">
            <div className="placeholder btn btn-primary w-100"></div>
          </div>
          <div className="col-6">
            <div className="placeholder btn btn-outline-dark w-100"></div>
          </div>
        </div>
        <div className="placeholder btn btn-outline-primary w-100 mt-2"></div>
      </div>
    </div>
  </div>
);

// Full page loading overlay
const FullPageLoader = ({ message = "Loading CollectiveNetwork..." }) => (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-white bg-opacity-90"
    style={{ zIndex: 9999 }}
  >
    <div className="text-center">
      <div className="mb-4">
        <div
          className="spinner-border text-primary"
          style={{ width: "4rem", height: "4rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <h4 className="text-primary fw-bold mb-2">
        <i className="fas fa-heart text-danger me-2"></i>
        CollectiveNetwork
      </h4>
      <p className="text-muted">{message}</p>
      <div
        className="progress mx-auto mt-3"
        style={{ width: "200px", height: "4px" }}
      >
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
          style={{ width: "100%" }}
        ></div>
      </div>
    </div>
  </div>
);

// Button loading state
const LoadingButton = ({
  loading,
  children,
  variant = "primary",
  size = "",
  className = "",
  disabled = false,
  ...props
}) => (
  <button
    className={`btn btn-${variant} ${size && `btn-${size}`} ${className}`}
    disabled={loading || disabled}
    {...props}
  >
    {loading ? (
      <>
        <span
          className="spinner-border spinner-border-sm me-2"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </>
    ) : (
      children
    )}
  </button>
);

// Progress Bar Component
const ProgressBar = ({ current, goal }) => {
  const percentage = Math.min((current / goal) * 100, 100);
  return (
    <div className="progress mb-3" style={{ height: "8px" }}>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${percentage}%` }}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

export {
  ProgressBar,
  LoadingButton,
  LoadingSpinner,
  FullPageLoader,
  PulseLoader,
  FamilyCardSkeleton,
};
