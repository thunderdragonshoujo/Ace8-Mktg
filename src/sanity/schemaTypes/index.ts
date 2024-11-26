import { type SchemaTypeDefinition } from 'sanity'
import { blogs } from './blogs'
import { customerStories } from './customer-stories'
import home from './home'
import about from './about'
import contact from './contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, about, contact, blogs, customerStories],
}
