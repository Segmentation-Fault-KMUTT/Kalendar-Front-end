const Loading = () => {
  return (
    <div className="bg-dark w-100 h-100" style={{ position: "absolute", zIndex: "9999" }}>
      <div className="row w-100 h-100">
        <div className="col my-auto">
          <div>
            <div style={{ zoom: "4" }}>
              <div className="spinner-border text-kl-light"></div>
            </div>
          </div>
          <div className="fs-1 fw-bold">Loading</div>
        </div>
      </div>
    </div>
  );
};

export { Loading };
