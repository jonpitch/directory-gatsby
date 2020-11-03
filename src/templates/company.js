import React from 'react';

export default ({ pageContext: { company } }) => (
    <div>
        <h1>{company.name} is certified</h1>
    </div>
  );