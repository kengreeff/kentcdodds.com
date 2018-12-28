import '@emotion/core'

declare global {
  type GatsbyMDXNode = {
    id: string
    frontmatter: {
      title: string
      slug: string
    }
    excerpt: string
    parent: {
      name: string
    }
  }

  type AllGatsbyMDX = {
    edges: { node: GatsbyMDXNode }[]
  }
}