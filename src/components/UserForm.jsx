const UserForm = ({ title, toggle, children }) => {
  return (
    <>
      <div className='col-md-6 offset-md-3 col-xl-4 offset-xl-4 overlayStyles'>
        <div className='card shadow  modal-position'>
          <form>
            <div className='card-body form-container'>
              <h5 className='card-title'>{title}</h5>
              {children}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserForm;
