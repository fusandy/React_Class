// Homework 4
import React, { useEffect, useState } from 'react';
import BS4RadioButton from './BS4RadioButton';

// problem : email欄位沒辦法驗證格式再套CSS(隨便打，沒有提交前，都是綠勾勾的)
// problem : 為什麼classNameHandler可以這樣寫

function BS4RegisterForm(props) {
  const genderOptions = ['male', 'female'];

  // form state
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    city: '',
    country: '',
    password: '',
  });

  // Error Message state
  const [fieldsError, setFieldsError] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    city: '',
    country: '',
    password: '',
  });

  // const classNameHandler = (e) => {
  //   const name = e.target.name;
  //   return fieldsError[name] !== ''
  //     ? 'form-control is-invalid'
  //     : 'form-control is-valid';
  // };

  const classNameHandler = (name) => {
    return `${
      fieldsError[name] !== ''
        ? 'is-invalid'
        : fields[name] !== ''
        ? 'is-valid'
        : ''
    } ${'form-control'}`;
  };

  // handle change
  const fieldChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const updatedFields = { ...fields, [name]: value };
    setFields(updatedFields);
  };

  // handle invalid
  const formInvalidHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const errorMessage = e.target.validationMessage;
    const updatedFieldsError = {
      ...fieldsError,
      [name]: errorMessage,
    };
    setFieldsError(updatedFieldsError);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDafault();
  };

  // handle editting
  const handleFormChange = (e) => {
    const updatedFieldErrors = { ...fieldsError, [e.target.name]: '' };
    setFieldsError(updatedFieldErrors);
  };

  return (
    <>
      <div className="container">
        <br />
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <header className="card-header">
                <a
                  href="#"
                  className="float-right btn btn-outline-primary mt-1"
                >
                  Log in
                </a>
                <h4 className="card-title mt-2">Sign up</h4>
              </header>
              <article className="card-body">
                <form
                  onInvalid={formInvalidHandler}
                  onSubmit={handleSubmit}
                  onChange={handleFormChange}
                >
                  <div className="form-row">
                    {/* First Name */}
                    <div className="col form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={fields.firstName}
                        className={classNameHandler('firstName')}
                        placeholder="First Name"
                        maxLength="30"
                        onChange={fieldChangeHandler}
                        required
                      />
                      {fieldsError.firstName !== '' && (
                        <div className="invalid-feedback d-block">
                          {fieldsError.firstName}
                        </div>
                      )}
                    </div>
                    {/* Last Name */}
                    <div className="col form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={fields.lastName}
                        className={classNameHandler('lastName')}
                        placeholder="Last Name"
                        maxLength="30"
                        onChange={fieldChangeHandler}
                        required
                      />
                      {fieldsError.lastName !== '' && (
                        <div className="invalid-feedback d-block">
                          {fieldsError.lastName}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Email */}
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      name="email"
                      value={fields.email}
                      className="form-control"
                      placeholder="Email"
                      onChange={fieldChangeHandler}
                      required
                    />
                    {fieldsError.email !== '' && (
                      <div className="invalid-feedback d-block">
                        {fieldsError.email}
                      </div>
                    )}
                    <small className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  {/* Gender Radio */}
                  <div className="form-group">
                    <label className="form-check form-check-inline">
                      {genderOptions.map((v, i) => {
                        return (
                          <BS4RadioButton
                            key={i}
                            name="gender"
                            value={v}
                            checkedValue={fields.gender}
                            fieldChangeHandler={fieldChangeHandler}
                          />
                        );
                      })}
                    </label>
                    {fieldsError.gender !== '' && (
                      <div className="invalid-feedback d-block">
                        {fieldsError.gender}
                      </div>
                    )}
                  </div>
                  <div className="form-row">
                    {/* city */}
                    <div className="form-group col-md-6">
                      <label>City</label>
                      <input
                        type="text"
                        name="city"
                        value={fields.city}
                        className={classNameHandler('city')}
                        onChange={fieldChangeHandler}
                        maxLength="30"
                        required
                      />
                      {fieldsError.city !== '' && (
                        <div className="invalid-feedback d-block">
                          {fieldsError.city}
                        </div>
                      )}
                    </div>
                    {/* Country */}
                    <div className="form-group col-md-6">
                      <label>Country</label>
                      <select
                        name="country"
                        id="inputState"
                        value={fields.country}
                        onChange={fieldChangeHandler}
                        className="form-control"
                        required
                      >
                        <option value="">Choose...</option>
                        <option value="taiwan">Taiwan</option>
                        <option value="japan">Japan</option>
                        <option value="southkorea">South Korea</option>
                        <option value="singapore">Singapore</option>
                        <option value="malaysia">Malaysia</option>
                      </select>
                      {fieldsError.country !== '' && (
                        <div className="invalid-feedback d-block">
                          {fieldsError.country}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Password */}
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={fields.password}
                      className={classNameHandler('password')}
                      minLength="8"
                      onChange={fieldChangeHandler}
                      required
                    />
                    {fieldsError.password !== '' && (
                      <div className="invalid-feedback d-block">
                        {fieldsError.password}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">
                      Register
                    </button>
                  </div>
                  <small className="text-muted">
                    By clicking the 'Sign Up' button, you confirm that you
                    accept our <br /> Terms of use and Privacy Policy.
                  </small>
                </form>
              </article>
              <div className="border-top card-body text-center">
                Have an account? <a href="#">Log In</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BS4RegisterForm;
