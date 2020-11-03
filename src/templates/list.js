import React from 'react';
import Link from "gatsby-link"

export default ({ pageContext: { companies } }) => (
    <div>
        <h1>companies</h1>
        <ul>
            {companies.map(c => (
                <li><Link to={`/company/${c.slug}`}>{c.name}</Link></li>
            ))}
        </ul>
    </div>
  );