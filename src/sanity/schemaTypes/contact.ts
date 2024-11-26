import { defineField } from "sanity";

export default {
    name: 'contact',
    title: 'Contact Page',
    type: 'document',
    __experimental_actions: ['update', 'publish', 'delete'], // Disable 'create'
    groups: [
      {
        name: 'data-fields',
        title: 'Data Fields',
      },
      {
        name: 'seo',
        title: 'SEO',
      },
    ],
    fields: [
      defineField({
        name: "title",
        title: "Title",
        type: "array",
        group: 'data-fields',
        of: [
          {
            type: "block",
          },
        ],
      }),
      defineField({
        title: "short Info",
        name: "short_info",
        type: "text",
        group: 'data-fields'
      }),
      defineField({
        title: "Email",
        name: "email",
        type: "string",
        group: 'data-fields'
      }),
      defineField({
        title: "Mobile Number",
        name: "mobile_number",
        type: "string",
        group: 'data-fields'
      }),

      // SEO 
      defineField({
        title: "Meta Title",
        name: "meta_title",
        type: "string",
        group: 'seo'
      }),
      defineField({
        title: "Meta Description",
        name: "meta_description",
        type: "text",
        group: 'seo'
      }),
      defineField({
        title: "Meta Tags",
        name: "meta_tags",
        description: "Tags seprate with ,",
        type: "text",
        group: 'seo'
      }),
    ],
  };
  