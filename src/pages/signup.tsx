import React, { Fragment } from 'react';

import { AuthenticationForm } from '../components/authentication-form';

const Signup = () => {
    return (
        <Fragment>
            <h2>User Signup</h2>
            <AuthenticationForm />
        </Fragment>
    );
}

export default Signup;
