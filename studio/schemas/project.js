export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: 'datetime',
        },
        {
            name: "place",
            type: "string",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "projectType",
            title: "Project type",
            type: "string",
            options: {
                list: [
                    { value: "personal", title: "Personal" },
                    { value: "star-fleet-academy", title: "Star Fleet Academy" },
                    { value: "star-fleet", title: "Star Fleet" },
                ],
            },
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string"
                }
            ],
            options: {
                layout: "tags",
            }
        }
    ]
}