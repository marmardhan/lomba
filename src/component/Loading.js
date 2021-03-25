const Loading = () => {
  return (
    <>
      <div className="container">
        <div className="loading d-flex justify-content-center align-item-center my-5">
          <div
            className="spinner-grow text-primary mt-5"
            style={{ width: "4rem", height: "4rem" }}
            role="status"
          ></div>
        </div>
      </div>
    </>
  );
};
export default Loading;
