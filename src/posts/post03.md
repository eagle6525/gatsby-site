---
slug: 'gatsby-file-system-route-api'
date: '2020-11-20'
title: 'Leveraging the new Gatsby File System Route API'
---

I am updating the site to use the new [File System Route API](https://www.gatsbyjs.com/docs/file-system-route-api/) over the old way of calling the createPages API directly. This allows me to greatly clean up the code by removing the need for a `gatsby-node.js` file at all for my simple blog website. I just had to move the template for the posts out of the templates directory (which can also now be deleted) and into the pages directory with a special file name `/posts/{MarkdownRemark.frontmatter__slug}.js` signifying to Gatsby to create a page for each slug found in the frontmatter of my markdown files read in by the MarkdownRemark plugin.

This was something that I really liked in [Next.js](https://nextjs.org/) and I am really happy it made it's way into Gatsby. Super simple and cleans up the project quite a bit. I am a big fan.
