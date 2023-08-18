---
title: About the show
layout: page.njk
description: Conversations about ideas that matter.
---

<span class="font-sans text-lg">Hear This Idea is a podcast about ideas that matter.</span>

{% image 'pages/home/fandl.jpg' 'Alt text' %}

The hosts are long-time friends [Fin Moorhouse](https://www.finmoorhouse.com) (right) and [Luca Righetti](https://www.lucarighetti.com) (left). Luca is a Research Fellow at [Open Philanthropy](https://openphilanthropy.org/), and Fin is a Research Scholar at the [Future of Humanity Institute](https://www.fhi.ox.ac.uk).[^1]

[^1]: Small print: Hear This Idea is an entirely personal project, and is not affiliated with our current employers!

We write an accompanying article [for each episode](/episodes)  which includes a full transcript, reading recommendations, and as many  links as we can find. You can browse all our guests' recommendations on  our [library page](/library).

## Where to listen

<div class="flex flex-wrap">
{% for item in links.items %}
<a href="{{item.url}}" class="no-underline bg-gold-400 font-sans outline-gold-500 outline-[3px] mx-2 px-4 py-2 rounded-lg block hover:outline outline-offset-[-3px] mb-0 my-[-10px]" target="_blank">{{item.name}}</a>
{% endfor %}
</div>


## Feedback

We value feedback of any kind, and you can leave some through our [feedback form](https://feedback.hearthisidea.com/listener). As a thank you for taking time to leave feedback, you'll be able to **redeem a free book** from a list of books that we highly recommend. You're welcome to fill out the form anonymously.

<a href='[/grants](https://feedback.hearthisidea.com/listener)' class="no-underline bg-gold-400 font-sans outline-gold-500 outline-[3px] m-2 px-5 py-3 rounded-lg inline-block hover:outline outline-offset-[-3px]">
Give us feedback →
</a>

Note that each episode also has an episode-specific feedback link.

## Amplify grants

Over the next few months, we’re running a small grants program for podcasts and other creative  media projects that spread ideas to help humanity navigate this century. Consider applying!

<a href='/grants' class="no-underline bg-gold-400 font-sans outline-gold-500 outline-[3px] m-2 px-5 py-3 rounded-lg inline-block hover:outline outline-offset-[-3px]">
Learn more →
</a>

## Support the show

The best way to support the show is to leave an honest rating on [Apple Podcasts](https://podcasts.apple.com/gb/podcast/hear-this-idea/id1496501781), [Spotify](https://open.spotify.com/show/442fxr9pe0tbDtqEikODch), or elsewhere. Written reviews are especially appreciated. You can also [tip the show here](/donate).
