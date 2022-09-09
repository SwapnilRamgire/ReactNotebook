const Header = ({ setModalOpen }) => {
  return (
    <header>
      <h2>Notebook.</h2>
      <div className="inputs">
        {/* <input type="text" />
        <button type="submit" className="search-btn">
          Search
        </button> */}
        <button
          className="create-btn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Add note
        </button>
      </div>
    </header>
  );
};

export default Header;
