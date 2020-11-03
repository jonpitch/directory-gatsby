/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require('fs');

exports.createPages = async ({ actions: { createPage } }) => {
    const companies = JSON.parse(fs.readFileSync('./data/companies.json', { encoding: 'utf-8' }));

    createPage({
        path: '/companies/',
        component: require.resolve("./src/templates/list.js"),
        context: { companies },
    });

    companies.forEach(c => {
        createPage({
            path: `/company/${c.slug}`,
            component: require.resolve("./src/templates/company.js"),
            context: { company: c }
        });
    });
}