---
title: Elizabeth Seger on Open Source AI
audio: https://pinecast.com/listen/56712a2f-e38e-458f-bb2a-4274cef22da5.mp3
path: seger
number: 77
featuredImage: seger-share.png
backgroundImage: bazaar-8.png
date: 2024-07-24
---
[Elizabeth Seger](https://elizabethseger.com/) is the Director of Technology Policy at [Demos](https://demos.co.uk/our-approach/a-healthier-digital-ecosystem/), a cross-party UK think tank with a [program on trustworthy AI](https://demos.co.uk/our-approach/a-healthier-digital-ecosystem/). She was previously a researcher with Centre for the Governance of AI ([GovAI](https://www.governance.ai/)) in Oxford, and is an affiliate of the AI: Futures and Responsibility Project ([AI:FAR](https://www.ai-far.org/)) at the University of Cambridge.

{% aside %}

Note that this episode was recorded before the release of Meta's [Llama 3.1 family of models](https://ai.meta.com/blog/meta-llama-3-1/).

{% endaside %}

{% cloudImage "seger.webp" "Elizabeth Seger" %}

In this episode we talked about open source the risks and benefits of open source AI models. In particular, we discussed:

* What ‘open source’ really means
* What is (and isn't) open about ‘open source’ AI models
* How open source weights and code are useful for AI safety research
* How and when the costs of open sourcing frontier model weights might outweigh the benefits
* Analogies to ‘open sourcing nuclear designs’ and the [open science movement](https://en.wikipedia.org/wiki/Open_science)

{% aside %}

**Minor correction:** on the definition of open source AI, Elizabeth referenced an older version of the [definition maintained by OSI](https://opensource.org/deepdive/drafts) (roughly [version 0.0.3](https://opensource.org/deepdive/drafts/the-open-source-ai-definition-draft-v-0-0-3)). The current OSI definition (0.0.8) now does a much better job of delineating between different model components. Definition 0.0.8 identifies which components must be downloadable to meet the open-source definition, and which components are optional.

{% endaside %}

## Resources

- [Report: Open-sourcing highly capable foundation models (Seger et al.)](https://www.governance.ai/research-paper/open-sourcing-highly-capable-foundation-models)
- [Lawrence Lessig on open source AI risks](https://www.transformernews.ai/p/lawrence-lessig-open-source-ai-risks)
- [Podcast: The Promise and Peril of Open Source AI with Elizabeth Seger and Jeffrey Ladish](https://www.humanetech.com/podcast/the-promise-and-peril-of-open-source-ai-with-elizabeth-seger-and-jeffrey-ladish)
- [Dependency (XKCD comic)](https://xkcd.com/2347/)
- [Mozilla's new framework for AI openness and innovation](https://blog.mozilla.org/en/mozilla/ai/new-framework-for-ai-openness-and-innovation/)
- [Meta's AI language model LLaMA leaked online](https://www.theverge.com/2023/3/8/23629362/meta-ai-language-model-llama-leak-online-misuse)
- [The tech industry's open source AI definition problem](https://www.technologyreview.com/2024/03/25/1090111/tech-industry-open-source-ai-definition-problem/)
- [New York Times: What to know about open vs. closed software](https://www.nytimes.com/2024/05/29/technology/what-to-know-open-closed-software.html)
- [Stanford CRFM paper on open foundation models](https://crfm.stanford.edu/open-fms/paper.pdf)
- [Open source AI: A regulatory review](https://forum.effectivealtruism.org/posts/vCpgHCFzS3xaio2Lm/open-source-ai-a-regulatory-review)
- [Vox article on open source AI risks and benefits](https://www.vox.com/future-perfect/2024/2/2/24058484/open-source-artificial-intelligence-ai-risk-meta-llama-2-chatgpt-openai-deepfake)
- [Ajeya Cotra on open source AI](https://x.com/ajeya_cotra/status/1772859785639285211)
- [The definitive story of "Information wants to be free"](https://medium.com/backchannel/the-definitive-story-of-information-wants-to-be-free-a8d95427641c)
- [UK Government's INSPECT AI project](https://ukgovernmentbeis.github.io/inspect_ai/)
- [NTIA receives over 300 comments on open-weight AI models](https://www.ntia.gov/federal-register-notice/2024/ntia-receives-more-300-comments-open-weight-ai-models)
- [Mozilla Foundation: Technical readout of Columbia convening on openness and AI](https://foundation.mozilla.org/en/research/library/technical-readout-columbia-convening-on-openness-and-ai/)

*Let us know if we missed any resources and we'll add them.*

## Transcript

*Note that this transcript will be **machine-generated**, by a model which makes frequent mistakes and sometimes hallucinates entire sentences. Please check with the original audio before using this transcript to quote our guest.*

{% image "bazaar-5.png" "The Cathedral and the Bazaar" %}

**Elizabeth**

In the vast majority of cases, open sourcing will be a net benefit. We should be at least open to the idea that there may be cases where it's not. Those may be very far future cases. They may be way out on the horizon. But I think, and I've noticed this in like lots of different groups, workshops, convenings I've been at, where we do tend to get to a point of agreement between all our differing opinions on the point that like, it is conceivable. That one day, however far in the future that may be, we're not going to define it, but that one day we develop an AI system that we do not want to be publicly downloaded. And people will usually, the vast majority, they will agree with that statement. Now, we will debate until the end of time on what one day means and on what capability threshold we're looking at. And like, OK, that's a big problem that we need to still address. But the idea that that condition might occur, pretty generally agreed upon across the board.

**Luca**

Hi, you're listening to Hear This Idea. In this episode, we speak to Dr. Elizabeth Seger, the Director of Technology Policy at Demos, which is a cross-party think tank in the UK. Our focus is on Elizabeth's 2023 paper titled Open Sourcing Highly Capable Foundation Models, an evaluation of risks, benefits, and alternative methods of pursuing open source objectives. As frontier AI models become more powerful, There's an ongoing debate about whether it's better to make their weights openly available, as Meta has done, or to keep them restricted for safety reasons. And really, to me at least, the key question is under what conditions, if any, the costs of open sourcing some models seriously outweigh the benefits, and whether we can at all anticipate that change in time. So in this interview, we discuss the various ways in which AI models can be open, and why even Lama 3 isn't technically open source. We also try to distinguish between the risks that could worsen if future AIs were to become open sourced, and those risks that would likely remain unaffected either way. And lastly, we try to hit on the current benefits of open sourcing AIs, including ways in which they enable AI safety research and allow for external scrutiny of companies and regulators. Elizabeth really grapples with these trade-offs, so there's a lot to learn here and a lot more work still to do. We'll also try to link to other papers and opinions in the write-up too. But for now, without further ado, here's the episode. Elizabeth Seger, thanks so much for joining us. One question that we like to ask guests to kick things off is what is a problem that you're currently stuck on?

**Elizabeth**

Well, thank you very much for having me. The problem I'm currently stuck on, it's the elections, man. We just went through one in the UK, trying to figure out what that's going to bring. Absolute landslide victory for Labour, tons of new people entering new offices is probably not what you were trying to get at here, but it's very much what's on my mind today.

**Fin**

What have Labour committed, if anything, on AI?


**Elizabeth**

Nothing too specific across the board, as I think the issues that people are bringing to play here.

**Fin**

And let's not even talk about the US.


**Elizabeth**

It's just that we're not going to go there. Nope.

**Fin**

And how would you describe what you currently do?


**Elizabeth**

So currently, I'm the director of tech policy at a think tank in London called Demos, sort of a cross-party political think tank. And in general, we do across the board is we focus on making policy insights and recommendations that really focus on putting people at the heart of policy. So in the tech space, this is very much about making sure the advances in technology that we're developing, whether we're talking about new information technologies or AI systems, that these are things that are going to be good for the public, that align with public needs and values, and that the policy we put in place really makes sure we're getting at. those benefits and towards things that people really care about and value.

**Fin**

So we're going to be talking about open source AI, but maybe a place to start is just to talk about open source software in general. And one question there is why, just abstractly speaking, would it ever be useful to develop and maintain a software project in the open? There are some obvious inefficiencies with doing that. So why should anyone do it?


**Elizabeth**

Today we're talking about this because a while back I put out a quite a large report while I was working at the Center for the Governance of AI on open source AI and open source policy. And to answer your question, getting at this first question of why are we even talking about this? Why do people open source things, software, AI, whatever we're talking about, open source environments are... are fantastic. Great places for innovation. The vast majority of the digital technology you use runs on open source components, has been built on the back of open source developments. We wouldn't have the technology we have today without it. So when thinking about AI systems, you have this question of like, why would a company put all this time and effort into developing a model and then open source it for the world to use and build on for free? There's lots of really good economic reasons and competition benefits that a company might look into doing this. So first of all, by open sourcing a model, you're really tapping into a big community, a big diverse community of people who can help. continue to iterate on those designs and that technology who can help find different flaws and offer solutions. Open source communities also innovate like crazy. I mean, one of the best things that open source development has done around AI so far, in my opinion, is figuring out how to take really, really big models and then cram that capability into a much smaller package. And that was done out of necessity and driven by open source communities. And then as a company, you can take that innovation and say, oh, that's cool, and then integrate it into your own work. So it's sort of like massively expanding the work potential by putting these models and capitalizing on that. And also everyone just gets really familiar with your technology, which means you don't have really easy to hire people. They already know what they're talking about. They know your tools. You bring them on board. Your trading costs go down. So there's a lot of good reasons to get in on that show.

**Fin**

Maybe one example is the Android operating system, right? So this is an open source project, you can go and see the source code. But Google really kind of puts a lot of its own weight behind it in maintaining it. Why on earth would it do that when it doesn't keep hold of the license to only use it and not let anyone else use it? Well, all these reasons you just gave you have this huge ecosystem of talent now, easier to hire, easier to find security vulnerabilities. And it just means that the Android ecosystem probably gets much bigger than it would.


**Elizabeth**

Yeah. More people use it. More people are aware of it. More people build apps for it. Yeah. Yeah. It integrates with everything.

**Luca**

Why do so many people, and I guess especially like independent researchers or like developers, do all of that like open source work for free then? If, you know, a lot of the benefit here accrues to maybe like some companies, yeah, able to then use that work.


**Elizabeth**

Part of it is it's fun. I bet there are people that do that because they think it's fun. But also, beyond it being fun and a nice project thing to do, there's really strong community norms around giving back, contributing to the common good, this common ecosystem and resource that we all pull from and build on top of. And I think a lot of it's being part of that community and contributing to this much larger collaborative project and being part of that innovative ecosystem.

**Fin**

An xkcd comic that I really like — you might have seen it — it shows like all software has this kind of big pile of like jenga bricks balancing on each other and there's this kind of tiny jenga brick that's holding up the entire pile and there's a little label which says like a project some random person in nebraska has been maintaining since 2005 or whatever um


**Elizabeth**

And I guess there are many many such cases yeah and it's that is one of the potential vulnerabilities that comes from open source development is this case where you get like that one the one random programmer in Nebraska who's who's developed this little thing that then like the entire internet develops on top of and you have like that one maintainer and like what if the poor guy gets sick or just decides he doesn't want to do it anymore or something and then and then that bit of software is not maintained anymore then you have these massive vulnerability issues and that's that's something that can be can be worked in but um yeah so i think there's there's a lot of truth to that and that's why there's a lot of discussion and um urgency around supporting open source ecosystems better and like being able to find those projects and really offering support to to expand those projects um to financially support those those people that are running it um yeah that's a very important aspect of open source security as well yeah for sure um

**Luca**

can you say a bit about how licensing tends to work in open source software aside from ai so i can go and see some projects on GitHub and see the code. But there's a question about how I'm able to use that code myself and how does it normally work?


**Elizabeth**

So I am, just put out there, I am not an expert on the ins and outs of licensing. But in general, for something to be open source, it has to be, in the case of software, the source code has to be publicly downloadable and it has to be covered by an open source license. And there are very specific conditions for a license to be considered an open source license that you can view on the the open source initiative website, they maintain the definition. And there are very explicit requirements around distribution and being able to, like downstream developers being able to build on top of it, being able to integrate it, commercialize on top of it, and requirements for non-discrimination against certain people or groups or even application spaces. So these are all things that have to be worked into that license condition.


**Fin / Luca**

Okay, gotcha. So I guess importantly, it's not sufficient just for the code to be viewable publicly. To count as open source, according to the most...


**Elizabeth**

Yes, and that's where you get people getting really up in arms being like, Meta's Llama 2 is not open source because it's publicly downloadable. The weights are publicly downloadable, but it's not been released under an open source license.

**Luca**

There was also an interesting point you raised in your article about, you know, you can share or you can open or make public lots of different parts of your AI model. And when we talk about open sourcing AI or making that public or... whatever the language is that we want to use here. Can you speak a bit more about the different gradients and disambiguate those terms somewhat?


**Elizabeth**

So open source AI now, quite recently, has a very specific definition now. And again, this is also maintained by the open source initiative. It is a collaborative work. They're still iterating on versions. But open source AI very specifically refers to models for which the components are downloadable, publicly downloadable, and... and then made available under an open source license. Under that definition, even if we're just talking about components that are made available, this is where the definition is still pretty tricky because unlike software where you just have the source code and you either make it publicly downloadable or not, it's a binary, for AI systems, there's tons of different model components and aspects at play here. You could be talking about, even just within the realm of code, what constitutes the source code, you could be talking about training code. inference code fine-tuning code data processing code and like it's not clear what of that is actually contained in the definition of like the component that needs to be made downloadable you also have the training data sets you can have documentation and of course the model weights everyone talks about the model weights making the model weights available um and so it's still unclear the definition like what combination of those things is necessary to consider having had the model downloaded. So that's still a bit up in the air. But this is why there's a notion, aside from open source AI, which means something very specific, yet not still perfectly defined. There's a notion of just AI openness. And this is something that came out of the Mozilla and Columbia convening on AI openness, I think back in February, and pushing this idea of AI openness that talks about a broad spectrum of different dimensions of openness around AI. So not just whether or not certain model components are available, that's part of it, which components are available, but we can talk about documentation, we can talk about how the model is released, is it a stage release process, is it made fully downloadable, is it fully open source, or is it fully closed? So there's a spectrum of model release options, and then also the licensing conditions. So how are you allowed to use that model? And that's another aspect of openness. And so it's really getting at this idea that when people talk about AI and openness, sometimes they think about openness as transparency. Other times they think about openness as permission and really starting to delineate that and be like, okay, there's actually different meanings to openness and we can think about them independently. They don't necessarily all have to happen at the same time. And also different kinds of openness might be. prioritized or more valuable to different kinds of stakeholders. So if you're a researcher, for example, having downloadable access to the model is really important, but you probably aren't quite as concerned with the license considerations because you're not trying to commercialize the thing. But if you're a downstream developer, those license conditions might be super important. And then if you're just a typical lay user, like someone who just wants to play around with something like ChatGPT, you actually don't care at all about being able to download the model or being able to play with the weights. or what those license considerations are. Actually, for you, what openness means is having a really nice interface that allows you to access the system. And that's what openness means. And so the concept of AI openness gets at this much richer concept.

**Fin**

Yeah, I like this point that open source does not necessarily mean accessible in the sense that, you know, the fact that the weights of some model are available on the internet doesn't mean it's going to be easy for most people to do anything with those weights without technical experience. And in fact, I guess the models which are most accessible right now are the closed models, right, which have these very easy and free to use web interface. There's an app to the zone.


**Elizabeth**

Yeah. This is actually a really important point when, I mean, maybe we'll get to it later in the podcast, but people talk about, when people talk about the risks of open sourcing, they'll often come to this point of, oh, well, when you open source, it's irreversible. There's no take backs. And that means that like, if something bad were to happen and we can't, we can't then say, we can't throw down the gauntlet and say like, oh, we're going to take that back. Nevermind. Delete, delete, delete. Like it's out there. It's on people's systems. But I think. Oftentimes, this idea of no takebacks is often overstated because like, well, yes, it's true if so ever many hundreds or thousands of people have downloaded the systems onto their own machines that you can't take those back. But you can have like Hugging Face and GitHub take it off their platforms. And if those key platforms take those models down for the vast majority of the planet, it is going to be really hard to get access to that model. But yeah, it's still out there. And, you know, I'm sure if you knew the right people went through the right avenue, like you'd be able to get your hands on it. But for the vast majority of the people who just, you know, want to use it to make some nude images of someone or, you know, harass a politician or something like that, they're not getting access to it. So like this, this no take backs point is like, I think it's just overstated. But like, yeah, like technically, but you can make it really, really difficult.

**Luca**

Well, let's explore. that point um specifically then so yeah i think as you as you rightly pointed out there's like lots of nuances between what we even mean by open sourcing uh and ai and then as you said as well like that can also then really matter when we're talking about risks um how those get affected by those decisions and and whether they are like reversible or not what risks do you see as being potentially irreversibly created when a model does get made open or get shared more broadly so you noted that like for the vast majority of people, you know, rolling updates or GitHub taking it down might not be a problem. For what kinds of risks would that still be a problem that even like a small percentage of like motivated people might be able to continue accessing that?


**Elizabeth**

Yeah, so I think that this is a, it's a very small subset of the more extreme risks that we haven't seen yet, and that are somewhat speculative. but we're thinking about because if they happen, it could be really, really bad. And so it's nice to have a subset of people that are keeping an eye on those potentialities. So this would be things like having a system that, you know, I mean, we talk about the potential biological risks, for example, being able to create like create new pathogens, chemical weapons, those kinds of things. It's a complicated space in that there are also much smaller models that could be used for those purposes. So that's one argument that's often talked about in. respect to like the biological risk argument there's also places where you know you could have systems that are extremely persuasive um again not currently existing but potentialities um so you have extremely persuasive systems that could be used to conduct highly influential um influence operations political influence operations so they're these kinds of things that are like not necessarily quite on the docket yet um but that we want to keep an eye out for um you And these will be things where like, if you have a highly motivated actor that wants to do something really, really bad, that then be able to build off of those available systems could be quite a bad situation.

**Luca**

Yeah. A lot of these sound like the AI is a very powerful and bad tool that people are then able to still obtain in order to misuse. The other type of users that you discussed in your article was the proliferation of unresolved flaws. In models like this, can you maybe draw out a bit more what the distinction between that is to the previous category of misuse?


**Elizabeth**

Yeah. So the proliferation of unresolved flaws. So this is an issue that's the exact same issue that we see with open source software. So it's not a new phenomenon. But the idea is that if you have a model, a foundation model that has some flaws, vulnerabilities, questionable capabilities. As foundation models are meant to be used, you could build tons of different kinds of applications off of them. And then this one model provides the foundation. Huge amount of work on top of it in many different aspects of life, different application spaces. That vulnerability is being drawn out through all of those different spaces and all of those different downstream applications. And I think this is like a classic issue of open source. But here, particularly in the case of open source. given the license conditions. So when we talk about misuse issues, The licensing isn't so much of a concern. Sort of like if someone's hellbent on misusing a system to cause extreme harm, they're going to be like, oh, never mind. I'm sorry. The license says no. Like that is very much just about whether or not they have access to the model. And if they'll do something bad with it, they will. The proliferation of harms issue is about, it's very much enabled by having the open source license of people being able to just build on top of this model again and again and iterate, integrate it into tons of different products. and then we find it has a massive vulnerability, if that's integrated into everything, as is the intention with foundation models, that could be quite problematic. Again, this is very much a help there idea. It is a possibility. I think that's one thing I just want to get across is some of these more extreme risks. They are not the majority of cases. When people talk about worrying about the risks from open sourcing, they're not saying like, oh, we need to not open source any AI ever. It's a subclass.

**Luca**

I'll generally disclaim that a lot of this conversation. is going to be speculative. That listeners should be aware of that. I think there is maybe an important distinction I want to ask about here as well with this question of irreversibility. It seems to me that, as you noted, GitHub can take down code or screen to make sure that certain code isn't available in order to misuse. But when it comes to these unresolved flaws, presumably GitHub does not also have the ability to force updates on their users. No. And I think you mentioned an interesting point in your article that maybe, you know, unlike many types of software where updating is like generally good because it does make you safer. There might be reasons down the line why people don't actually want to update their AI models. Can you talk a bit about that?


**Elizabeth**

Yeah. So like if the purpose of an update, for example, is to put a safety filter on a model, say that so it can create CSAM, child sexual abuse material. say that's a safety filter, if you want to misuse the model to create CSAM, you're not going to roll out the fix. In these cases, oftentimes what these updates will do is actually reduce the capability of the model so that you can't do certain things. So people might not be as willing to do that. Where in the case of software, oftentimes what happens is you roll out fixes or updates and the intent... the purpose of those is to increase the capability and to make the system more functional. Whereas what we're doing is rolling out updates to improve the safety of the system, we're making it less functional. So people might not be motivated to actually, especially if they are nefariously inclined, might not be willing to actually do those updates.

**Luca**

And I can imagine more benign versions of this as well. Say that I just find it to be the case. that like an AI model is just like much more helpful at like answering my like academic questions when it doesn't have a safety filter on because it does you know it is willing to like get citations even if like sometimes it like hallucinates then maybe I don't want to like go the full way to to having um like a harmless model but then that means that like there are maybe like some vulnerabilities there that other people can like then use to like exploit using it or you might have a similar situation with bias where like you you roll out an update that


**Elizabeth**

you know, the models find to now different data sets, less bias, and you just find that, oh, it's just not quite as effective for answering these certain kinds of questions. And so now you're operating with a system that was like trained on a biased data set, because it happens to be better at this one specific thing you need to do before the update.

**Luca**

Yeah, there is some hope I have that if like our worry is that, you know, foundational AI models get integrated in like lots of parts of infrastructure or like lots of parts of society, um, that those parts and those functions that are like, the biggest issues for risks would also be the ones where people are most willing to update to the safe one. I would really hope that if AI stylistically gets used in a nuclear power plant, that those people do roll out the update and whack a view. And that maybe that is able to get rid of most of the risk.


**Elizabeth**

Yeah. And I think you're completely right. I think it's really important to keep in mind that there are so many situations, so many of the use cases where these are going to be. proprietary models that are be accessed through an api being like the vast majority of people are going to access and use ai systems and benefit from them through some kind of an api or um you know oftentimes like even if a government's going to procure access to to an ai system to use in public services or something chances are they will be looking for proprietary models if anything just because right those proprietary model, there's some kind of guarantee that comes with that. It's been developed by a big company. There have been safety checks. They've run the auditing. If you're building on top of open source products, that is completely on you. Open source is very much about here is the product, use it. This is now your responsibility. We're not going to give it to you for free and do all the stuff around it for you. That is now your responsibility to do the safety testing, make sure it's... adequate in the context that you're trying to employ it. And so I could totally see how, you know, oftentimes governments and even companies that have the money will often just do a paid for service where they can have some of those guarantees and safety checks built in. It's still really important to have the open source option, though, for actors that don't necessarily have those resources to do that kind of procurement.

**Fin**

Yeah, it's an interesting point that I guess for proprietary models, there is more often going to be just a single actor, which is really reputationally liable for what the model does. And so if you care about the model, not doing harm in obvious ways, then maybe you should be really glad about that, right? Because then you just know that like a ton of concentrated effort is going into making sure that model doesn't blow up and then undermine this huge source of revenue for that single actor right you're expressing this worry about open source ai making it more likely that you get this kind of proliferation of of flaws which is then hard to reverse and what went through my head then was why doesn't that apply to proprietary ai as well so you know if i think of my my iphone right like ios is is um a closed sourced operating system and apple pushes updates and I can choose not to update. I can just like turn my wifi off or whatever.

**Elizabeth**

Right. Right. Exactly. And so what, you know, I guess I was thinking like, why is it not just the same story, the same worry for proprietary AI? But then I think you answered my question and tell me if I'm wrong, but it feels like part of the answer is for proprietary systems, you'll much more often be accessing them through an API where you've...

**Fin**

can in fact just turn just update yeah the system for everyone because you just update what's coming out the other end of the api pipe um is that right yeah absolutely okay so stepping back you mentioned um the the decision to not open source models seems to mostly be useful for mitigating some extreme risks which ai models currently are not capable of and presumably this would only change if future ai models become much more powerful Presumably those AI models are also going to be much more expensive to train. And so this question is only relevant if we also think that open source models continue to exist and might be around when training runs cost billions of dollars. How likely or how do you reason about that question?


**Elizabeth**

With great difficulty. It's a very good question and there's several moving parts there. So first of all, there's a question around whether or not open source at the frontier of AI development is going to persist, like whether that's even like a viable structure given the cost of training. And the answer is yes and no. I think what we'll see is that like the very frontier of AI development will probably remain proprietary models. But then, and then there will be a lag, and then you'll have open source behind it. So sort of like... this idea of like, if there's a, say there's a threshold of capability, which very difficult to define, and I'm not going to try, but imagine an imaginary threshold of capability where above that threshold, it would be like really dangerous to have an open source model. Just imagine that threshold exists. The frontier of proprietary models will hit it first and we'll go beyond it, but at some point open source will hit it. And so we still have to be aware of where that threshold is. And open source might hit it by being able to develop. models of the same size. A lot of what open source development's been doing is finding out how to get at the same capabilities in much smaller models. It's like what we can do with fine tuning. Take a much smaller model, take the outputs of a much larger model, fine tune it on those outputs, and now you have maybe in a much narrower domain, but you can get at the same capabilities in a much smaller package. So there's that. To what extent will that gap between proprietary models and the state of open source? continue to exist. There's also just a really big open question about where the market's going to settle. And we don't know. Is it really the case that the capability jump that you get by continuing to train larger and larger and larger data sets is going to be so much that it remains worth the money to continue training the bigger and bigger models? Where there's enough value in that capability jump that we need those big models? Or is it... Are we going to hit a point of diminishing returns where it's like, actually, this capability level is good enough to do the vast majority of what we need these systems to do? And that economically, it just works out that the market settles with narrower, cheaper to train models that can be in narrower application spaces, everyone can access, in which case that doesn't get dominated by open source ecosystems. But I think the answer is we don't know how that's going to settle. There might be another world where narrow application space, narrow domain stuff, it just gets completely gobbled up by frontier model development because the capability is so good that one model could do literally everything. We don't know yet. And so I think a lot of these arguments of like, a lot of people have arguments about how open source is or isn't good for competition. And the answer is really just like, we don't know because we don't know what the value is going to be due. If it is the case that all the value is from these super highly capable models that cost billions, if not trillions of dollars to spend, but in no world does open source, that model have any impact on that company's leadership. No one else has the money to compete. It doesn't even matter. But if we're talking about much smaller models, then it matters a lot. So yeah, the answer is we don't know. And it would be really interesting, I think, to do some deep qualitative research on some of these different economic dynamics.

**Fin**

I think I even feel confused about why big AI companies are open sourcing their models now, because they're already very expensive, right? So like Meta is probably the most obvious example. Llama 3 took however many tens of thousands of H100s to train, maybe like order of a billion dollars to train, and they open sourced it? Like what is the thinking there?


**Elizabeth**

But they did not open source it. You can't, you can't.

**Fin**

Okay, they kind of fake open source.


**Elizabeth**

They fake open source. No, so it's a good question and I am not in these companies'heads whatsoever. So there's a lot of speculation that's going to happen here. But there's several reasons that you can imagine. So there's some that we talked about earlier, which is like, really, you're just kind of trying to dominate the ecosystem. Everyone uses your product, everyone learns on it, everyone builds on it, you can hire engineers better, like, great. It could be, there might be a dynamic at play where like they're open sourcing the first few versions, getting everyone really used to it. Everyone's learning how to build products on top of it. And then you get to a stage where they stop doing that. But you kind of have like this captured audience now because maybe switching costs are high. It's really difficult to switch from Lama to GPT-5, you know, like that's just really difficult. So yeah, whatever, you got to pay them 20 bucks a month, but you're already on board. So that might be an option. There's another concept called commoditizing the compliment. This is an idea where you make a commodity out of the thing where you're trying to sell the compliment to that thing. This would be like making beef.

**Fin**

You sell hot dogs, you give away hot dog buns?


**Elizabeth**

Yeah, yeah. That could give it. That was actually going for that, but with burgers, which is why I was at beef. Okay. But it would be like. You sell the burger patties super, super cheap. You make the beef super, super, super cheap, but you're Heinz ketchup and you are just selling those ketchup bottles like crazy. So this might be a case with the AI where it's like, all right, we're open sourcing these models that we're developing. We're spending billions on open sourcing these models, but we as meta, what we really do is we have these insane data sets. And so we're going to give you these models and then say, oh, you want to fine tune those? Here, buy our data. Or maybe you're Microsoft and you're saying, and you're partnered with OpenAI, I don't know, but you put out some model and you're like, oh yeah, sure, use our model, use our model. Oh, you want to train that or you want to continue to... Like, buy our compute, use our cloud compute. And so you're trying to commoditize whatever that... Right. You're trying to commoditize the model so that you can sell the compliment. And in the meantime, you're also undercutting everyone who's just trying to sell the model. So that might be a place to... I don't know. I think there's lots of different mechanisms here, but we can write out a good list of reasons why a company might want to open source even though it's so insanely expensive. Though some do speculate that this race to have the open source frontier systems might soon die down and that everyone starts hiding behind their proprietary models and be like, okay, giving everyone a taste or enough of a taste to get them hooked and building on it. But if they want the, you know, they know. the next version up, the next more powerful thing, now they got to pay. I think that might be a common model.

**Luca**

One tangent question I have here, which is, and I might be getting my facts here wrong, but I understand that an earlier version of Meta's AI, so like Llama 2, got leaked accidentally. So in some sense, it got like openly shared in a non-intentional way. How pivotal was that, I guess, unfortunate? uh like mistake or something like from the company's like view and like now causing them to take like an open source approach like going forward in some sense you could imagine that um yeah like that became very path shaping in a in a way that contrasts other companies so i mean again like i'm not i'm not at meta and who knows leaks happen for various reasons sometimes they're not so accidental i


**Elizabeth**

have no idea what went on here maybe this one was very accidental um but they do definitely seem to have leaned into it as their modus operandi. This is what we do now. So I think it probably was very path shaping, but I think they just had a decision point and they're like, are we doing this? Are we not doing this? We're going to do it. Let's capitalize on it. Don't know that they'll continue on this path. I think it does point out though, this important point around almost like needing to expect leaks. So when we talk about this, do we open source, do we not open source and put all this time and energy into defining? thresholds for release and model release standards. I think prudence demands at some point that you also just expect that leaks will happen. And that means don't put all your eggs in one basket. We can't put all our eggs in the just decide when to not release models basket because the things like models are going to get out there. And I think it's really important that we don't get too distracted by these like model release standards discussions. And that we also really focus on like other places that we can have interventions throughout the AI stack throughout the life cycle of the system to try and mitigate some of the harms that might come into play. Leaks are going to happen and also open source is a fact of life and models are going to get out there, you know, even if totally, you know, in line with model release standards, we'll release something one day and then a capability will emerge that we didn't know how to test for and we'll be like, oh man, that was a bad decision, but it's out there. So we need to think about other ways we can intervene too. Let's not put all our back to it. I know it's a very distracting and interesting conversation, but we do need to think beyond it.

**Fin**

Yeah, and I guess just a general point to emphasize there is that the weights of even the most powerful models really just fit down into currently like, what, a few hundred gigabytes? Oh, yeah. Kind of thing you could fit on a little memory card, right? Yeah. And that should make you pretty worried about the security of those models. So you are not stealing a big server rack to get hold of the model. You need to steal like a USB stick's worth of information i like how i think elizabeth what you said there as well speaks a bit more exactly what sliver of risk not open sourcing a model actually gets out uh which is that we were previously talking about like worries about like people misusing uh ai and that like deciding not to open source a model helps reduce the number of people um who are like willing to put in the effort to get that but if you know your threat model the risk that you're worried about is like Say, you know, a well-resourced terrorist group or like even a rogue state actor using an AI to do something bad, then that model not being open source at the same time when the company that has developed it has really poor information security practices doesn't do a whole lot to counterfactually reduce the risk. It seems like the only way in which like not open sourcing a model actually is an effective mitigation is if it goes alongside much stricter information security practices. So when we're thinking about, you know. the cost of that mitigation or something, it seems to really go hand in hand.


**Elizabeth**

Yeah. And I think not open sourcing, like the majority of what you're going to get out of that is affecting what the masses can do with it. Like that's the biggest, yeah.

** Luca**

Say that you are the CEO of an AI company and you train in an AI that you want to open source, and it does exhibit some dangerous capabilities. At that point, are there any safeguards that you could apply that would now make it safe enough to open source given...


**Elizabeth**

the mitigations and the safeguards that we're like currently aware of i mean i think the simple answer is like no not right now like there's nothing strictly that'll just like negate that risk um there are things you can do they're like halfway measure kind of things like you could do a like a know your customer gated download type situation where basically anyone who's downloading it has to go through some kind of a pre-vetting situation um it's also possible for platforms like hosting platforms like um like hugging face or github um to sort of like they can see they can monitor which models are being downloaded most frequently and so being able to sort of just check those models and be like what kind of safety restrictions are in place how are these particular models being used um so sort of like yeah taking a look at like what what the most frequent used frequently used models are so there are things you can do to try and um mitigate the risk of being open i think more on the horizon i think really potentially quite promising but but definitely out there on the horizon are possible technical solutions that might come into play. So ways to either reduce the risks of opening models or to try and implement some kind of mechanism by which like wholesale rollback, take back of open source models as possible. So one thing that sort of gets batted around is the idea of by having self-destructing weights in models. So the idea being that if you mess with the weights too much, basically the capability of the model just goes down the tank and basically makes it useless. There's obviously a huge drawback here in that one of the main benefits of open sourcing is that people can mess with the weights and try and fine tune it and do new and different and interesting things with it. And that benefit completely goes out the window if you mess with the weights and it destroys the model. But there are possible technical solutions like maybe ways of developing chips that will only run models that have certain kinds of safety restrictions or aspects in place and they just won't run the model if it doesn't have those kinds of things in place. I don't know the details, which is why I'm being very vague. But there is lots of really interesting discussion happening about potential technical solutions in this space. I think, yeah, looking to some of those and then also thinking about what are the other ways that we can get at some of the benefits of openness, even if some restrictions have to be in place. And those restrictions might be in place out of safety concern, because it's mandated, because the risks are too high. Or those model access restrictions might just be out of place because of proprietary concerns. You developed a model and it's your purview to say, no, I don't want to release it. But are there ways that we can still tap into some of the benefits of openness without being fully open?

**Luca**

One thing that I heard is that it's like surprisingly unthinkable. easy to train away these safeguards. I think Jeffrey Ladish has one quote that he was able to train away harmlessness safeguards that are implemented on current AI models for $200 or something. But we really are just in a very fragile place at the moment.


**Elizabeth**

Yeah. I think especially when it comes to post-training type stuff, you can do a lot with fine-tuning. Yeah. Fine-tuning, jailbreaking.

**Luca**

Well, one idea that I've heard is that, say, you know... There's only a handful of extreme risks that we're really worried about. And to give one example, we mentioned before this worry of people using it to make biological or chemical weapons. If you are an AI developer, maybe you could just get 95% of your value by just not training it on any data that is related to biology or chemical. And then you would hope that that model is just then very much not capable of answering those kinds of questions. But you mentioned here this issue of fine-tuning and stuff as well. When we're really talking about powerful and generally capable models, how much can we do even in the training process or something to prevent it from being fine-tuned later?


**Elizabeth**

It was an open-minds NTIA solution. But I think it was called retrieval training. And I don't know exactly how it works, but it's a way of training models, a model architecture, where you can effectively, like... bracket out different parts of the model that that are able to do different things and have different capabilities and then you could effectively just like just open source the part that doesn't do the dangerous stuff but there might be something like not like there might be something you could do in just like the architecture of the model itself where you could release portions of the model um but i don't know what the implications would be for like downstream fine-tuning and stuff that does just seem to be

**Luca**

a real issue in like knowing whether these safeguards are enough especially when presumably the amount of attention that you can pay to red teaming or to like auditing or to like making sure that your model is safe before you release it is a lot less effort than will be spent after you have open sourced it by the world and by like many of like millions of people like tinkering around with it and then maybe finding some version of fine tuning or some version of like extending your model um that you didn't anticipate or that you weren't prepared for.


**Elizabeth**

Yeah, and I think that this is why so much effort is being put into model release standards and benchmarking and capability evaluations. And that's all incredibly important. And we need to still continue doing that. Just, I think, coming back to the idea of not putting all our eggs in that basket and also remembering that, again, the vast majority of people who are going to be using these systems are going to be accessing the behind an API. they're not going to be fine tuning them. They're not going to be messing with them. So I don't know, I think it's just, it's good to take a step back and realize that even if something's open source, like that is not how the vast majority of the world is accessing it and getting the value.

**Fin**

So I feel like there is a framing here, which is something like open sourcing AI models, it's a bit riskier, but there are all these, you know, all these benefits. I wonder if there is another framing where you might think that in fact, open sourcing AI models is in the long run, the less risky thing, because you can draw these analogies to how you get security from open sourcing so far in general, right? So like, you know, the Linux kernel is this big open source project. There's just thousands of eyeballs, like pouring over the code, checking for holes. And that means that I can be pretty confident that there are not very many easy to find holes. And then people like to draw, it's kind of like a bit of a hand wavy analogy, but in the case of AI, it just is the case that lots of work on AI safety and interpreting how AI systems work and so on. It is done on models which are open source rather than just through using APIs. And maybe you just think that that work is so valuable and it's so important for the open source models to be as close as possible to the closed frontier models that, you know, leaning too far in the direction of, you know, worrying about people kind of stripping off safe cars and so on actually means that things get riskier in the end. Does that kind of, I guess, make sense as a perspective?


**Elizabeth**

Yeah, no, I think that absolutely makes sense as a perspective. I think maybe throw in a couple of caveats again. It was like the conversation is really nuanced. So even in talking about like the benefits of open sourcing for having like tons more eyeballs on it, being able to find bugs, offer patches. I think in the context of especially like highly capable, big, complex models, the dynamic might not work exactly the same. in that in the case of software, we're talking about small bugs that are easy to find, easy to patch. You roll out the fix, it's done. In the case of AI, oftentimes we're not talking about small bugs. We're still talking about things that are easy to find to take advantage of, but the problems we're trying to fix are like the alignment problem and no individual coder sitting there is like, get a roll on a bug patch for the alignment problem. That's. It's not going to happen. So I think that there might be, I don't know exactly how it pans out, but I think it is worth at least indicating the idea that this offense-defense balance isn't going to sit the same way for highly capable AI systems as it does for traditional software. If anything, just because the so-called fixes are much more difficult. Maybe not in all cases, but I think sometimes... you know if we're talking about like issues with yeah yeah interpretability alignment like these are huge things that we pour millions of dollars into fixing and tons of research time i don't know that that's necessarily something that's going to be fixed by just throwing it out to the community and then if you do want to talk about like doing that intense safety research there are other ways besides open sourcing you can provide that access you could provide gated download access to pre-vetted researchers um there's a lot of work um that's going into developing better APIs. So can we develop some kind of a research API that allows you to update the weights and to be able to do some level of interpretability research? And these don't exist, but it is very possible that we could be better about the API access.


**Fin / Luca**

Yeah.


**Elizabeth**

So I feel like open source is not the only option for giving access to researchers or to safety institutes or... So, I don't know, that's like, that's one of the caveats that I would throw on that, on that discussion is like, I don't necessarily know that the safety benefit is, I think it's definitely there, it's absolutely there, but it might not pan out exactly the same.

**Luca**

I mean, that feels like, like a theme of this conversation, right? Is like, it's nuanced, these analogies with other software are useful, but not perfect. And so you actually need to think about [the details].


**Elizabeth**

Yeah, everything from the definition of open source to defense battles across the spectrum. Yeah, very useful, but not perfect. Yeah, I think the way I like framing it is I think like in the vast majority of cases, open sourcing will be a net benefit. We should be at least open to the idea that there may be cases where it's not. Those may be very far future cases. They may be way out on the horizon. But. But I think, and I've noticed this in like lots of different groups, workshops, convenings I've been at, where we do tend to get to a point of agreement between all our differing opinions on the point that like, it is conceivable that one day, however far in the future that may be, we're not going to define it, but that one day we develop an AI system that we do not want to be publicly downloaded. And people will usually, the vast majority, they will agree with that statement. Now we will debate until... you know, the end of time on what one day means and on what capability threshold we're looking at. And like, okay, that's, you know, big problem that we need to still address. But the idea that that condition might occur, pretty generally agreed upon across the board.

**Fin**

We've been talking about an analogy with open source software, which makes sense because in some sense, you know, AI weights are kind of software, something the code is. There are other kind of discussions in, say, science and research and development, where you can choose whether or not to be open and release your research. And there are like all these benefits to doing open science. And in... probably a minority of cases. There are analogous risks if you're doing very sensitive research which could be misused and you should maybe hesitate about just like yelling to the world about how you synthesize like a variant of bird flu or whatever. And I wonder if those analogies are informative as well and they make it somewhat clearer why one day there may be models where it wouldn't make sense to just fully open them.


**Elizabeth**

Yeah. So not only are those good analogies, but they're also very foundational to where the idea of open source AI comes from. So I think when we talk about open source AI, it's a phenomenon that it did not directly emerge just from open software. AI development is a, I mean, it used to be very heavily situated in academia. Cutting edge AI development, AI researcher was an academic thing. And so in that sense, coming from that community, that environment, openness in AI very much emerged from the open access, open publication culture. It was sort of after AI moved into the realm of industry and started taking place more in private industry that open source as an open source software also started feeding in to that discussion. And so. So there are definitely cultural aspects of both happening. I think open source software is dominating the conversation now just because AI development is predominantly happening in industry settings that were previously all about software development, and so that's naturally come over. But I think the root of the discussion on openness and AI came from the open access publication. And so both of those cultural elements are in place here. And you see that in research that industry is doing. They'll do the research and even if they're not open sourcing the model itself, everyone's publishing on archive. And so you still very much have that open publication, information sharing culture as well. So I think open source AI is actually a really interesting phenomenon that is emergent from these two cultures of openness and how they've converged. And there's a PhD dissertation in there that I'm not going to do, but someone should.


**Fin / Luca**

so you're listening yeah what is very randomly like one thing that comes to mind here is this information wants to be free uh kind of phrase that gets associated with uh like free open software movements and some backstory to that phrase is that uh kind of came from this slightly longer quotation where stewart brand is expressing how on one hand information does not want to be free because it's so valuable. And on the other hand, it does want to be free because the marginal costs of reproducing it go down. And so really, we find ourselves with attention rather than him trying to push strongly in one direction.


**Elizabeth**

Yeah. No, it's nice that that quote about information wanting to be free is taken out of context all the time. It is a much longer quote that's like, information wants to be free in these cases, but sometimes it doesn't, and sometimes it shouldn't be. such as these cases. So it's a much quicker quote. Yeah.

**Fin**

Doesn't fit on a t-shirt, unfortunately.

**Luca**

You pointed to some cases where having more openness in AI can actually be really good for safety and for making safe models. In particular, you mentioned interpretability, and I think we've also previously talked about like patching, maybe more like discrete bugs. Yeah. I think it's maybe worth asking a little bit more explicitly exactly why just having API access might not be enough in order to get these kinds of benefits.


**Elizabeth**

I think specifically for interpretability research, that's going to be very difficult. You really need access to the entire model. You see the entire architecture, the weights, everything. One limit on that is just where we are with interpretability research. There's a point where it's sort of like we're not at a point where we're doing interpretability research on the biggest of models. So we're still quite restricted to looking at smaller models. So I don't know that necessarily like open sourcing the most cutting edge of models is what we need to do to help interpretability research along. But just as a blanket statement of like you need full access to do interpretability research, that's just true. Open question as to which models is actually useful. to have open for that purpose. But again, you could provide that kind of full model access without necessarily open sourcing to the entire planet.

**Luca**

You were previously talking about like some know your customer style or like licensing arrangement where I could imagine that like every person who, you know, has like some reasonable claim, like working on interpretability or some like similar like safety thing, either at like a university or a nonprofit or some kind of like other organization would be able to like. access the model ways to do that that world also to me doesn't seem like it cuts out a lot of the risk i mean i don't know how many interpretability researchers there are today or there will be like in future um but it seems that like then preventing even if you like control like the initial like layer or something then like a re-leak or like resharing and like beyond especially when people are like very opinionated about this like also doesn't uh seem


**Elizabeth**

possible you open yourself up to absolutely that comes with the territory but more secure than opening it up to the world. And you might actually have a sub-hope of tracking where it came from. Like if you could do some kind of a version control, like some slight tweak to each model that you send to different people [fingerprinting].


So there might be some way of tracking too, and that could help with liability, being able to prove breach of contract. Yeah. And then again, different kinds of safety research you might be able to do through some sort of an API access. where you're able to download the model, but it'll only run so long as you're connected to the internet. So like your ID can be confirmed or like there might be something that can, I don't know, this is starting to get beyond my expertise. But there might be interesting solution spaces that can help reduce that risk.


**Fin / Luca**

Yeah, you mentioned liability. Do you have takes on how liability considerations interact with open source?


**Elizabeth**

Yeah, liability is hard. I don't think it applies very well to open source. I don't think there's much precedent there. I think, yeah, I'm just not aware. I haven't really gone down the liability route. A couple issues though with liability and open source is A, liability is ex-ante. It comes after the fact. If you're worried about preventing harms, liability is about slapping people on the wrist after the harms have occurred. So there's that issue. If you're trying to prevent them in the first place, maybe not your best mechanism. Yeah. I think that there might be some way of figuring out how to do some kind of liability framework. And that there are other instances in which we can do like multi-actor liability, like in car crashes, for example. You can pin responsibility on different people for different things. You might be able to do a similar thing for AI systems, you know, model developer didn't do adequate safety testing. But then the downstream developer intentionally fine-tuned it with bad data sets, and then someone else used it and intentionally applied it to a harmful situation. There are situations in which we've done multi-actor liability, and we might be able to apply the same thing, but this is not my area of expertise.

**Fin**

Yeah. I mean, again, with the caveat that I don't know what I'm talking about, I do have a vague impression that At least in the US, port liability in general is just really very rarely applicable to software developers. And like strict liability for software is more or less unheard of. So it doesn't seem that likely that companies are going to be deterred from open sourcing their models for liability reasons, unless we get some AI specific law or precedent.


**Elizabeth**

And I think the thing with just like open source software in general is Typically, the way things work is like, this is open source software. It's out there for you to use and build upon and study and do cool things with. If you're integrating it into your systems and then you want to sell those systems, it is on you to make sure that that product as a whole functions well and safely and you've done the safety checks. It is not going to hurt anyone. Like, that's up to you. If you hadn't purchased the software, then, you know, you might expect that. that some safety checks and stuff were done. But you know, it's just it's out there for free. It would be like, I don't know, walking into your backyard and cutting a branch off a tree and say, I'm going to use this to build the wall of my house. Well, it's that wall collapses. It's like what trees fall like I said, you chose the tree branch. So like, it's that's that's sort of the same situation.

**Fin**

Yeah, totally. I mean, yeah, if they were like, you software developer are strictly liable for any harms caused by the software you're making. That would just mean that there is no software development.


**Elizabeth**

Yeah, there's no software development. Yeah.

**Luca**

Stepping back, I think we've talked about two kind of discrete benefits of having AI models be open. We've talked just about like how cool it can be for development and like applications and like what have you. And then I think we've also talked maybe about a little bit like this instrumental case of like, look, open AIs, especially like today, are really important for like safety research and can like actually help make future models or models safer when they are deployed. I think there's also this like third category which I briefly want to touch upon, which is that Elizabeth, you noted that in principle, people agree that at some point, maybe AI would be really dangerous, that we don't want to open source it. But once you get into the specifics, people cannot agree on like what those specifics are. And to some degree, I really want to push, I think, like for openness also, just to let more people weigh in on that debate, both to like replicate whether AI models are in fact. dangerous or do exhibit the dangerous capabilities. Because I can definitely imagine that there is a world in which all of that work gets just done within companies or maybe even some small amount of regulators in a way that just doesn't feel to me as democratic, especially when I think about many of the incentives there. So yeah, I'm curious what you think about that, that openness is also an important aspect to establish when models become dangerous.


**Elizabeth**

Yeah. No, I completely agree with you. And this goes back to the point of not having all your eggs in one basket. It's not all just about defining these thresholds and the safety and the release standards. And I think one of the key things we can do to make openness more risky is to figure out how to be better about openness in a way like the answer to the risks of openness is being more open and be better at being open. And I think there's definitely value to that conversation. So even in this world where, you know, yeah, we can agree that maybe one day we develop a system we don't want to release and put out there. but there's no way to agree on what those thresholds are and what those capabilities look like. We can still think about ways that we can move this conversation forward. So one thing we can do is we could think about the kinds of evidence that we want to be basing these decisions off, not necessarily defining what those thresholds are, but just thinking about the kinds of evidence, what kinds of risks, developing really clear threat models and threat pathways. What are we worried about and how are we going to prevent those specific models? And then not just thinking about model release, thinking about where else in that pipeline. Can we implement safety checks and ways of preventing harm? So like in the biological weapons development, chemical weapons development case, yeah, you could worry about releasing the model, or you could also think about how people get their hands on DNA synthesis machines. Maybe we clamp down on DNA synthesis machines. Might be a little bit easier. So think about where else in the pipeline you can attack. But also let's think about how we can be better about being open. How can we reduce the risks of openness? How can we pursue the benefits of openness, even where some safety restrictions have to come into place? How can we be better at being open? And when I talk about being better about being open, this comes back to that idea of AI openness as a huge spectrum that we were talking about at the very beginning of the podcast. It's not just open source. It's not just whether or not the relates are released and what the licensing conditions are. It's about model access. It's about access to artifacts beyond the model. It's about... the documentation. It's about the data sets. It's about transparency into the auditing procedures and the safety procedures. It's about being open about the governance decisions, about how decisions about these models are being made, about how they're developing, what applications they're being put to. So not just democratizing the development process, but democratizing the governance of the systems and democratizing the use of the systems. We were talking earlier about what aspects of openness mean to different... people and how they prioritize them. You know, openness is about supporting the open source ecosystems, about making sure that you don't have that one little tiny guy in Nebraska, I think we said, holding up the entirety of the internet. You know, how do we provide support for those people and have, you know, supportive networks and financial support? That's what openness is about. And if we can be more transparent and give people access to things like the documentation and the data, they can do an even better job at helping to vet the systems and whistleblow or call out where companies are falling down on the job. So civil society really cares about transparency into auditing. They don't care so much about being able to see the model ways, but they want to see what the companies are doing. And that's really important. So I think one way to reduce the risks of open source and openness, just be better at being open. And so I think that's great. You may- you made this call out for being open. I'm like, yes, the solution might actually be just be better at it.

**Fin**

I really love that. And I'm going to do like one of these moral comment than a questions. But so there are these arguments that you've given for, you know, why there may be circumstances where open sourcing some AI model could just be bad. It could, you know, boost offense more than defense could just do more harm than good. And they seem like very important arguments. And a worry I might have is that, you know, people hear those arguments and what they take from it. is, oh, open source is bad. And like, we should push in the direction of less open source for AI, because it's scary. And if you do that in a very crude way, you like lose a bunch of friends, you actually lose out on these very real gains from open source research. And I really like what you said then, because it just shows that there is not a kind of open closed on off switch, which we have to choose which way to switch. There are like lots of dimensions of openness here. You might want to be more open, a lot more open on many of the dimensions while still just like bearing these arguments in mind. So yeah, I just thought that was just very useful.


**Elizabeth**

You're absolutely right. You can be open across so many different dimensions. Openness would mean different aspects of openness would be more important to different people. I think there's some really valuable work to be done for listeners looking for research directions to really break down. like who are the different stakeholders at play here and and what aspects of openness mean the most to them um i don't like a rough sense in my head but i think like having a really clear taxonomy i'm like well if you are a downstream developer these are the aspects of openness that mean most to you if you are a typical lay user and consumer you care mostly about api access and like what makes for a good open accessible api access if you're a student you care a lot about um you know just uh like i don't maybe research api like i i don't know like you can really flesh this out. Like, what does it mean to different people? Then we can get that sense of, like, if we do need to start putting restrictions in place because we're worried about adverse consequences or potential misuse risks, how fine grained about it can we be? You know, are there, we don't want to, we don't want to blanket ban openness because we don't know what it means and we're scared. But like, if all we really need to do is say like, oh, well, for this particular model, we just need to make sure that like, this one component isn't available to these particular people. Like that's much better. So how can we get more fine grained about this understanding? Yeah, I've been really heartened in the last few months watching this open source AI debate evolve. When I first got in on it, I think it's about a year and a half ago is when I like really started doing the deep dive research into these policy issues. it was extremely polarized. And I think out of fear. I think you had people that were very pro open source and rightfully so, and then people that were just kind of freaking out about the potential risks and that it's big, it's scary. We don't know what open source means in the context of AI. We don't know how to hash this out and break it down and be more fine grained. So we're just going to say no. And then of course, that will rile up people who know the value of open source. And it was really just. Butting heads. Yeah.

**Fin**

Yeah. And in many cases, kind of like tactically pushing against open source in a fairly kind of general or blanket way. Like, again, this kind of open source is bad message rather than something that's more fine grained.


**Elizabeth**

Yeah. Yeah. And that's how that's how it started. But now, you know, you enter rooms and people now get annoyed. Like if you go to a meeting or a workshop. People get annoyed if someone brings up the idea of, well, this polarized debate, and they'll just get yelled out of the room for like, it's not polarized. We're on the same page. We all agree open source is great, but maybe there are cases when it's not. So that debate has come so far in that it's like we are beyond the polarized open versus closed now. And we're trying to figure out how to get more fine grained. And really, the question is, how do we pursue the benefits? and mitigate the risks where they might exist.

**Luca**

One thing that I want to ask is we have talked a lot about the risks from open sourcing, and we've talked about the benefits towards safety. I am curious to hear a little bit more about the nuanced debate on exactly how good open source is in terms of creating benefits that just have to do with generally accelerating. technological progress or creating these new applications and stuff. Like as we said, AI is actually really expensive and there is, I think, a question of how much of these future benefits we should expect to be coming through open source.


**Elizabeth**

Yeah, so I think this is exactly the point. AI is incredibly expensive, which is where the value of open source, I think, largely lies. You know, if a large company spends billions, trains this massive model, and then makes that model available for people to download and run on their own systems, those people now don't have to train that model. They can build on top of it, they can figure out how to integrate it into systems, innovate new applications. They can modify it, they can fine tune it, much reduced cost. So it gives them access to that technology that they wouldn't have had if they had to train it from scratch on their own. So, for example, earlier we were talking about procurement and how a lot of governments will probably just procure systems directly from a company. It'll be an API access and that's the way they'll do it because they have all the... the safety guarantees and everything. They know it's been audited, they're held to standards and stuff. Not everyone can afford to do that. That is not the case for many, probably the vast majority of countries around the world. If they were to procure AI systems like that, they would just blow their entire government's 18 budget in a few months. So in those cases, the only way that a government could could really like develop AI systems and integrate them into public services and benefit from them that in that way will be if they have their own their own models and the only way they're going to be able to develop those is by building off of open source versions that are coming from from these companies so so open source is incredibly valuable in in that respect um and we were discussing earlier just from a research perspective and driving capability research and innovation you know we've seen huge advances driven by open source communities out of necessity because the models are too big, because they're expensive to train. And so figuring out how to pack that capability into smaller packages, but that required having access to those models in the first place to do that additional research. So I don't know if that answers your question.

**Fin**

That's interesting. I guess one thing I'm hearing there is that for better or worse, open source models would tend to centralize power a bit less. In the sense that if you're running just a fine-tuned fork of some open source model that you own, then you're going to be less beholden to the small number of actors who are capable of doing their frontier training runs and then who offer their models by API instead, right?


**Elizabeth**

Yeah. I think, yeah. Again, another point for nuance, I think it's absolutely true that it allows people to be less beholden to some of these big companies. I don't think it actually goes that far into reducing the power concentration, though.

**Fin**

Okay.


**Elizabeth**

I mean, it comes back to because these models are so expensive. At the end of the day, you're still only going to have a handful of companies that are developing the most cutting-edge AI systems because it'll cost billions, if not trillions, to train these things. And everyone who can afford it probably won't be developing their own in-house models. They will be just procuring it from these companies and, you know, whether we're talking about… governments or downstream businesses. And so these are still going to be huge and hugely influential companies. And there's also something to be said of like, okay, so say a government is developing their own in-house system, but they're doing it by building off an open source model. If that open source model was provided by Meta or by Google or something. those values are still going to be like instilled into that model and and so like there's a and then there's an advantage just like okay well that come that model came from the united states the united states knows how that model that's underpinning all of india's public service infrastructure works and they know the ins and outs of it like there's so it's not a it's not a perfect situation here so i think like it's really it's just it's the nuance i think of trying to understand that it is so important for giving people this independence yeah you But at the same time, and I think that people will debate this point, I don't think it's going to crack the egg of like, and now we will take down the superiority of the tech giants in the US and they will no longer have this concentrated power and all the wealth. I think they absolutely will. They're the only ones in the position to develop these systems. Yeah. But I think both of those can exist. Both of those can be true.

**Luca**

At least in the near future, should we be looking to be having more carve-outs for open source models? At least if I put myself in the positions of a regulator and I'm thinking about the costs and benefits of AI models, it seems like open source models come with potentially a lot more benefits. Does that mean that I should also, in theory, be willing just to tolerate a higher risk threshold before I would want to regulate open source models versus proprietary models?


**Elizabeth**

I mean, quite possibly. So I know a lot of countries are considering the possibility of trying to balance what's the value for them and just developing their own proprietary model. Or not proprietary, but developing their own model and then providing that as an open source model for their country and their industry to develop and build off of and instill with their values and stuff. And this comes with that question of like, you know, we're not these big tech companies with all these resources. It won't be as secure, but like looking at it from an independence. perspective and like having a sovereign model and a sovereign capability. So I think in terms of like, should we just be willing to accept the higher risk threshold? Quite possibly. I think it depends on the application. But yeah, it's really interesting discussion.

**Luca**

Well, let's look towards wrapping things up then. So I guess one question I have is, you mentioned all of these, you know, nuances and also just like live questions. I'm curious if you could point to some areas of work where you would be excited to see people do like further exploration and i guess especially for people yeah who are interested in ai and like interested in like maybe governance research as well where you would point people to absolutely so i actually have a document on my computer that's called open questions about open source which is like i keep lists of the big open questions i have in mind no i think there's some some really good ones so one is the economic question i think they're huge


**Elizabeth**

question marks about to what extent open sourcing or not open sourcing frontier models or or other models will have an impact an economic impact on market concentration, power concentration, competition. I think there's some really good just like quantitative economic studies that can be done in this space that would be really insightful. I think there's a separate but related question around things like vendor lock-in and what kind of mechanisms could be put in place to like reduce switching costs, being able to switch between models. There's arguments that are made for why open source is really important to reduce. vendor lock-in and to allow people to be able to switch between models and have different options in place which would improve competition. But then there are also arguments for why having closed source proprietary models might be better because then you could enforce and require interoperability requirements. And so that's another one where she's like, we don't know what the benefit is here. So I think that could be really interesting, it's like digging into the vendor lock-in questions. I think there's just an interesting, more philosophical piece of work to be done on really hashing out these analogies. How does software and AI, how do they relate? Where does that analogy fit? Where does it fall apart? How does it fall apart? You could even think of the spectrum of analogies, on the spectrum from software to nukes. Both of these analogies are problematic, but for different reasons. How do they fit? How don't they? There's a big argument going on around like, especially when people try to talk about AIs as nukes or akin to nuclear weapons. It's a terrible analogy. It's like, okay, but how? So I think, yeah, for the more philosophically inclined, if you want to dig into that, it'd be really interesting.

**Fin**

Okay. And what about reading recommendations?


**Elizabeth**

Yeah. I would look into the... So actually the NTIA report. So the NTIA had the executive order 4.6, the AI safety that was about looking into the risk and benefits of openly shared model weights. Did a huge, huge study, lots of calls for feedback and information, and the report's coming out at the end of July. So not out yet, but I would highly recommend looking at it because that'll probably be one of the most in-depth studies of received feedback. So I'd highly recommend looking at that. Otherwise, on this concept of just like, what is AI openness and what does it mean? Mozilla has... published a technical readout and a policy readout from the Columbia convening that are pretty good overviews of this like alternative way of thinking about AI openness. So I might give those a look as well.

**Fin**

Excellent. And just finally, where can people find you and your work online?


**Elizabeth**

Feel free to reach out to me on LinkedIn. And then my work's kind of scattered all over the place, but I try and keep an up-to-date record on my website, which is [elizabethseger.com](https://elizabethseger.com/).

**Elizabeth**

Okay, Elizabeth Seger, thank you very much.

**Elizabeth**

That was Elizabeth Seger on open source AI. As always, if you want to learn more, you can read the write-up at [hearthisidea.com/seger](https://hearthisidea.com/episodes/seger/). That's S-E-G-E-R. There you'll find links to all the papers and books referenced throughout our interview, plus a whole lot more. If you enjoyed this podcast and find it valuable, then one of the best ways to help us out is to write a short review on whatever platform you're listening to. You can also give us a shout out on Twitter, we're at @hearthisidea. We also do have a short feedback survey, which should only take you somewhere between five to 10 minutes to fill out. We read every submission and find it tremendously useful. And as a thank you, you'll also get a free book from us. Big thanks as always to our producer Jason for editing these episodes.

And thanks very much to you for listening.
