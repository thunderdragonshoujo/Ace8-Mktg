import { defineField } from "sanity";

export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'delete'], // Disable 'create'
  groups: [
    {
      name: 'data-fields',
      title: 'Data Fields',
    },
    {
      name: 'hero',
      title: 'HERO',
    },
    {
      name: 'brands',
      title: 'BRANDS',
    },
    {
      name: 'who_we_are',
      title: 'WHO WE ARE',
    },
    {
      name: 'domain',
      title: 'DOMAIN',
    },
    {
      name: 'feature_services',
      title: 'FEATURE SERVICES',
    },
    {
      name: 'stories',
      title: 'STORIES',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // Hero section
    defineField({
      title: "Title",
      name: "hero_title",
      type: "array",
      group: 'hero',
      of: [
        {
          type: "block",
        },
      ],
    }),
    defineField({
      title: "Short Info",
      name: "hero_short_info",
      type: "text",
      group: 'hero'
    }),
    defineField({
      title: "Button Text",
      name: "hero_button_text",
      type: "string",
      group: 'hero'
    }),
    defineField({
      title: "Button Link",
      name: "hero_button_link",
      type: "string",
      group: 'hero'
    }),

    // Trusted By Brands
    {
      name: 'brands',
      type: 'array',
      title: 'Trusted Brands',
      group: 'brands',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },

    // Who we are Section
    defineField({
      title: "Label",
      name: "who_label",
      type: "string",
      group: 'who_we_are'
    }),
    defineField({
      name: "who_title",
      title: "Title",
      type: "array",
      group: 'who_we_are',
      of: [
        {
          type: "block",
        },
      ],
    }),
    defineField({
      title: "short Info",
      name: "who_short_info",
      type: "text",
      group: 'who_we_are'
    }),
    defineField({
      title: "Button Text",
      name: "who_button_text",
      type: "string",
      group: 'who_we_are'
    }),
    defineField({
      title: "Button Url",
      name: "who_button_url",
      type: "string",
      group: 'who_we_are'
    }),
    defineField({
      title: 'Image',
      name: 'who_image',
      type: 'image',
      group: 'who_we_are',
      options: {
        hotspot: true
      },
    }),

    // Our 8 Domains Section

    defineField({
      name: "domain_title",
      title: "Title",
      type: "array",
      group: 'domain',
      of: [
        {
          type: "block",
        },
      ],
    }),
    defineField({
      title: "short Info",
      name: "domain_short_info",
      type: "text",
      group: 'domain'
    }),
    defineField({
      title: "List",
      type: "array",
      name: "domain_list",
      group: 'domain',
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            {
              type: "image",
              name: "icon"
            },
            {
              name: "title",
              title: "Title",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ]
            },
            {
              title: "short Info",
              name: "short_info",
              type: "text",
            }
          ]
        }
      ],
    }),
    defineField({
      title: 'Middle Icon',
      name: 'domain_middle_icon',
      type: 'image',
      group: 'domain',
      options: {
        hotspot: true
      },
    }),

    // Featured Services Section
    defineField({
      title: "Label",
      name: "fs_label",
      type: "string",
      group: 'feature_services'
    }),
    defineField({
      name: "fs_title",
      title: "Title",
      type: "array",
      group: 'feature_services',
      of: [
        {
          type: "block",
        },
      ],
    }),
    defineField({
      title: "short Info",
      name: "fs_short_info",
      type: "text",
      group: 'feature_services'
    }),
    defineField({
      title: "List",
      type: "array",
      name: "fs_list",
      group: 'feature_services',
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            {
              type: "image",
              name: "icon"
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "link",
              title: "Link",
              type: "string",
            },
            {
              title: "short Info",
              name: "short_info",
              type: "text",
            }
          ]
        }
      ],
    }),

    // Stories 
    defineField({
      title: 'Stories',
      name: 'stories',
      type: 'array',
      group: 'stories',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'customer-stories'},
          ]
        }
      ]
    }),
    



    // SEO Section 
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
