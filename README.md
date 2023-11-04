# Hear This Idea

## URL

https://www.hearthisidea.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/f082086e-b9ef-432b-9f58-9de8845521d2/deploy-status)](https://app.netlify.com/sites/hti/deploys)

## About

This is the current version of the website for the podcast https://www.hearthisidea.com. It was made by [me](https://finmoorhouse.com/).

This is a static site built on [Eleventy](https://www.11ty.dev/) (11ty) and hosted on [Netlify](https://www.netlify.com/), with [Tailwind CSS](https://tailwindcss.com/) and a small number of additional plugins. The [previous version](https://github.com/finmoorhouse/hearthisidea.com/) of the site was built using [Gatsby JS](https://www.gatsbyjs.com/).

## Installation

You're welcome to use this site as a starter for your own site or blog, but note that it's incomplete, poorly documented, and not built for legibility.

Still, to run the site locally:

- Clone this repo
- Run `npm install`
- Run `npm run dev`

## Notes

Some unordered notes on making this site.

### Why switch from Gatsby to 11ty?

I started using [GatsbyJS](https://www.gatsbyjs.com) around 2019, when it was a popular option for small to medium static sites. Since then, it has grown to become a more comprehensive and powerful tool, but also a more complex one. I get the feeling it is now focused on sites maintained by full-time developers, or teams of developers.

A few particular frustrations began to accumulate:

- The only way I could figure out how to get a few things to work (like LaTeX compilation and the rating forms) required plugins which hadn't been updated in a while, so relied on legacy versions of `react`. So `npm install` would throw an error without the `--legacy-peer-deps` flag, which felt... sketchy.
- Gatsby itself has a ton of dependencies and is very heavy (about half a gigabyte). It was therefore a pain to clone and update, and many dependencies would throw security errors.
- Sometimes my local development environment would simply break, and I'd be sent off on a multi-hour quest to figure out what arcane problem with my version of `Gatsby-cli` or whatever was causing it.
- My frustrations were partly confirmed by Gatsby's waning popularity on the ['State of JS'](https://2022.stateofjs.com/en-US/libraries/rendering-frameworks/) survey.

Why switch to 11ty? I spent some time looking for static site generators which were simpler, and better suited to a more novice developer building a site with fewer fancy requirements. I settled on 11ty because it has a decent plugin ecosystem, it's built around JS, which I know relatively well, and it seems to have a very friendly support community. So far it's working out well — it feels pitched at just the level of simplicity vs capability that I want. I might switch to something like Next in the future, but I don't currently see a reason to do so.

### Images

In the [previous version](https://github.com/finmoorhouse/hearthisidea.com/) of this site, I hosted images in the repo itself. But this felt wrong, since in order to run the site locally, you needed to download the best part of 1GB of data.

I found it surprisingly difficult to find a solution for hosting images using Eleventy that allowed me to (i) process them with `eleventy-image`, (ii) use the standard Markdown image syntax rather than some kind of custom shortcode, and (iii) didn't feel too kludgy or inefficient. I couldn't find a way to get all three, which is strange, since I thought many people would be in my predicament. The approach I went for was to host my images on a [Netlify Large Media](https://docs.netlify.com/large-media/setup/) setup (using Git LFS); and then Eleventy would download, process, and cache the images. I forfeited (ii), since I can't get this to work with the standard Markdown image syntax. 

This still feels a bit fiddly, even if it weren't for the fact that Netlify [recently discontinued](https://docs.netlify.com/large-media/setup/) their Large Media offering, so my setup will probably break in months to years. I plan to switch to Cloudinary, and maybe get Cloudinary to do all processing server-side, bypassing `netlify-image`.

Any ideas on this front greatly appreciated!

### Netlify CMS

I installed [Netlify CMS](https://v1.netlifycms.org/) to give a way to edit the site without directly interfacing with `git`.

It seems to work quite nicely (though adding images remains a kludge and doesn't play well with the media interface, as mentioned).

### Dark mode

I was intimidated by how to add a dark mode, but it wasn't so tricky. Tailwind [supports dark modes](https://tailwindcss.com/docs/dark-mode) well — the trick is to toggle a `.dark` class on the top-level `<html>` element (using JS), and then you use the `dark:` modifier Tailwind gives you.

In my `tailwind.config.js`, I added the colours from [Steph Ango's] delightful(https://stephango.com/) [Flexoki](https://stephango.com/flexoki) colour scheme.

---

Comments, questions, and pull requests are all welcome!

![The Eleventy mascot](https://www.11ty.dev/img/built/IdthKOzqFA-350.png)
