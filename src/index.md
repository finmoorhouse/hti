---
title: About the show
layout: page.njk
description: Conversations about ideas that matter.
extraStyle:
  ["/style/home.css"]
---

<div
  class="rounded-lg ring-2 ring-slate-200 dark:ring-flexoki-850 dark:ring-1 mb-4 shadow-md sm:bg-contain bg-contain relative
  overflow-hidden p-0 sm:pt-[280px] max-w-[1200px] sm:bg-top bg-top pt-[200px] bg-zinc-800"
  style="background-image: url({{ 'pages/home/hti-mosaic-bw.png' | bgsrcfilter }})"
>

<!-- This div needs some work, e.g. to work on mobile, and to looks nice. Maybe make it yellow. -->
<!-- {% image "pages/home/logo.png" "Podcast cover art" %} -->

<!-- https://codepen.io/jasonhibbs/pen/dyKEdvY -->
<div class="blobs z-2" role="presentation">
    <div class="blob-rotate">
        <div class="blob-move">
            <div class="blob"></div>
        </div>
    </div>
    <div class="blob-rotate">
        <div class="blob-move">
            <div class="blob"></div>
        </div>
    </div>
    <div class="blob-rotate">
        <div class="blob-move">
            <div class="blob"></div>
        </div>
    </div>
</div>




<div class="absolute inset-0 bg-pink-600 opacity-30 z-0 mix-blend-overlay sm:max-h-full max-h-[300px]"></div>

<!-- bg-gradient-to-t from-transparent to-amber-600 -->
<div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-100 z-0 mix-blend-multiply from-30% to-50%"></div>
<div class="bg-zinc-800 sm:bg-opacity-50 sm:bg-blend-multiply bg-opacity-70 bg-blend-normal align-middle m-0 z-1 relative sm:p-8 pb-6 p-4">
<div class="absolute inset-0 -z-1 mix-blend-normal opacity-10 sm:max-h-full max-h-[300px] bg-repeat" style="background-image: url({{ 'pages/home/noise-dark.png' | bgsrcfilter }})"></div>
<h1 class="text-white sm:text-3xl text-2xl relative z-1 dark:text-flexoki-50">Good ideas for big problems.</h1>
<p class="relative font-sans sm:text-lg text-md text-white dark:text-flexoki-200 p-0 z-10 m-0 mt-6"><b>Hear This Idea</b> is a podcast about ideas for solving important problems, and the people trying to figure them out. Check out <a href='/episodes' class='text-white'>our episodes</a>, or listen anywhere you get podcasts:</p>
<div class="flex flex-wrap md:justify-start justify-start rounded-md mx-auto not-prose mt-4">

{% for item in links.items %}
<a href="{{item.url}}" class="relative text-center no-underline border mr-3 border-yellow-400 bg-yellow-300 font-sans outline-yellow-500 outline-[3px] px-3 py-1 rounded-lg block outline-offset-[-3px] hover:bg-yellow-200 shadow-sm mb-2 mt-1 z-1 dark:text-flexoki-800" target="_blank">{{item.name}}</a>
{% endfor %}

</div>
</div>
<!-- <div class="absolute inset-0 bg-gradient-to-t from-slate-600 to-transparent opacity-80 z-0 mix-blend-multiply hidden"></div> -->
</div>
<hr/>


The hosts are long-time friends [Fin Moorhouse](https://www.finmoorhouse.com) (right) and [Luca Righetti](https://www.lucarighetti.com) (left). Luca is a Research Fellow at [Open Philanthropy](https://openphilanthropy.org/), and Fin is a Researcher at [Longview Philanthropy](https://www.longview.org/).[^1]

[^1]: Small print: Hear This Idea is an entirely personal project, and is not affiliated with our current employers!

{% image 'pages/home/fandl.jpg' 'Alt text' %}

## Feedback

You can leave us [quick feedback about anything here](https://feedback.hearthisidea.com/quick-feedback).

We also have a more structured (5–15 minute) [feedback form](https://feedback.hearthisidea.com/listener). For taking time to fill it out, you'll be able to **redeem a free book** from a list of books that we highly recommend. Anonymous is fine.

<a href='https://feedback.hearthisidea.com/listener' class="text-center no-underline border border-yellow-400 bg-yellow-300 font-sans outline-yellow-500 outline-[3px] my-2 px-3 py-2 rounded-lg inline-block outline-offset-[-3px] hover:bg-yellow-200 shadow-sm dark:text-flexoki-800 hover:dark:text-flexoki-800">
Give us feedback →
</a>

Note that each episode also has an episode-specific feedback link.

## Amplify grants 📢

Last year, we ran a [small grants program](/grants) for podcasts and other creative media projects that spread ideas to help humanity navigate this century. We're happy to have supported some great projects!

<a href='/amplify-grantees' class="text-center no-underline border border-yellow-400 bg-yellow-300 font-sans outline-yellow-500 outline-[3px] my-2 px-3 py-2 rounded-lg inline-block outline-offset-[-3px] hover:bg-yellow-200 shadow-sm dark:text-flexoki-800 hover:dark:text-flexoki-800">
See the Amplify projects →
</a>

## Support the show

The best way to support the show is to leave an honest rating on [Apple Podcasts](https://podcasts.apple.com/gb/podcast/hear-this-idea/id1496501781), [Spotify](https://open.spotify.com/show/442fxr9pe0tbDtqEikODch), or elsewhere. Written reviews are especially appreciated.

If you want to part with your money, [here are some suggestions](/donate).

## Thanks

Above all this show is made possible by our amazing producer [Jason Cotrebil](https://audiolift.co/).

Thanks also to [Claudia](https://www.linkedin.com/in/claudia-moorhouse-584077206/) for creating full transcripts of each episode, to [Jonas Kgomo](https://jonas-kgomo.github.io/) for helping improve a previous version of this website, and to [Type III Audio](https://preview.type3.audio/) for letting us use their audio player.
