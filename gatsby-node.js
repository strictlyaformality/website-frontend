module.exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;

    const typeDefs = `
        type StrapiJob implements Node {
            endDate: Date
        }

        type StrapiEducation implements Node {
            endDate: Date
        }
    `

    createTypes(typeDefs);
}
