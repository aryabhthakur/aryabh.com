import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the Article',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the Article',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/article/${post._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'data/articles',
  documentTypes: [Post],
})