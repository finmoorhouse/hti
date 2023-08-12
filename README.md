# Hear This Idea

## URL

https://www.hearthisidea.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/f082086e-b9ef-432b-9f58-9de8845521d2/deploy-status)](https://app.netlify.com/sites/hti/deploys)

## About

This is the current version of the website for the podcast https://www.hearthisidea.com. It was made by me, [Fin Moorhouse](https://finmoorhouse.com/).

This is a static site built on [Eleventy](https://www.11ty.dev/) (11ty) and hosted on [Netlify](https://www.netlify.com/), with [Tailwind CSS](https://tailwindcss.com/) and a small number of additional plugins. The previous version of the site was built using [Gatsby JS](https://www.gatsbyjs.com/).

The `/episodes` page has a Nunjucks shortcode for sidenotes, heavily inspired by Gwern's post on ['Sidenotes In Web Design'](https://gwern.net/sidenote).

## Installation

You're welcome to use this site as a starter for your own site or blog, but note that it's incomplete, poorly documented, and not built for legibility.

Still, to run the site locally:

- Clone this repo
- Run `npm install`
- Run `npm run dev`

## Notes

### Why switch from Gatsby to 11ty?

I started using [GatsbyJS](https://www.gatsbyjs.com) around 2019, when it was a popular option for small to medium static sites. Since then, it has grown to become a more comprehensive and powerful tool, but also a more complex one. I get the feeling it is now focused on sites maintained by full-time developers, or teams of developers.

A few particular frustrations began to accumulate:

- The only way I could figure out how to get a few things to work (like LaTeX compilation and the rating forms) required plugins which hadn't been updated in a while, so relied on legacy versions of `react`. So `npm install` would throw an error without the `--legacy-peer-deps` flag, which felt... sketchy.
- Gatsby itself has a ton of dependencies and is very heavy (about half a gigabyte). It was therefore a pain to clone and update, and many dependencies would throw security errors.
- Sometimes my local development environment would simply break, and I'd be sent off on a multi-hour quest to figure out what arcane problem with my version of `Gatsby-cli` or whatever was causing it.
- My frustrations were partly confirmed by Gatsby's waning popularity on the ['State of JS'](https://2022.stateofjs.com/en-US/libraries/rendering-frameworks/) survey.

Why switch to 11ty? I spent some time looking for static site generators which were simpler, and better suited to a more novice developer building a site with fewer fancy requirements. I settled on 11ty because it has a decent plugin ecosystem, it's built around JS, which I know relatively well, and it seems to have a very friendly support community. So far it's working out well — it feels pitched at just the level of simplicity vs capability that I want. I might switch to something like Next in the future, but I don't currently see a reason to do so.

### How do the images work?

A major question for me 

Comments, questions, and pull requests are welcome!

![The Eleventy mascot](https://www.11ty.dev/img/built/IdthKOzqFA-350.png)
