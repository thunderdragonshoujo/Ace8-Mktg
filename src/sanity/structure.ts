import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
// export const structure: StructureResolver = (S) =>
//   S.list()
//     .title('Content')
//     .items(S.documentTypeListItems())

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
        S.listItem()
        .title('Home Page')
        .schemaType('home')
        .child(
          S.document()
            .schemaType('home')
            .documentId('home') // Ensure a single 'home' document
        ),
        S.listItem()
        .title('About Page')
        .schemaType('about')
        .child(
          S.document()
            .schemaType('about')
            .documentId('about') // Ensure a single 'contact' document
        ),
        S.listItem()
        .title('Contact Page')
        .schemaType('contact')
        .child(
          S.document()
            .schemaType('contact')
            .documentId('contact') // Ensure a single 'contact' document
        ),
      // Include other documents (exclude these to prevent listing them twice)
      ...S.documentTypeListItems().filter(item => 
        !["home", "about", "contact"].includes(item.getId())
      ),
    ]);