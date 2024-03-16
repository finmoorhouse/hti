---
title: Joe Carlsmith on Scheming AI
audio: https://pinecast.com/listen/53812091-a56a-41e1-ab60-c858019bddcd.mp3
path: carlsmith
number: 76
featuredImage: carlsmith-social-share.png
backgroundImage: carlsmith-share-9.webp 
date: 2024-03-16
---
[Joe Carlsmith](https://joecarlsmith.com/) is a writer, researcher, and philosopher. He works as a senior research analyst at [Open Philanthropy](https://www.openphilanthropy.org/), where he focuses on existential risk from advanced artificial intelligence. He also [writes](https://joecarlsmith.com/favorites) independently about various topics in philosophy and futurism, and holds a doctorate in philosophy from the University of Oxford.

{% image "joe.jpg" "Joe Carlsmith" %}

In this episode we talked about a report Joe recently authored, titled '[Scheming AIs: Will AIs fake alignment during training in order to get power?](https://arxiv.org/abs/2311.08379)'. The report "examines whether advanced AIs that perform well in training will be doing so in order to gain power later"; a behaviour Carlsmith calls *scheming*. The abstract to the report summarises the broad argument for concern about the possibility of scheming in future AI systems:

> In particular: if performing well in training is a good strategy for  gaining power (as I think it might well be), then a very wide variety of goals would motivate scheming -- and hence, good training performance.  This makes it plausible that training might either land on such a goal  naturally and then reinforce it, or actively push a model's motivations  towards such a goal as an easy way of improving performance. What's  more, because schemers pretend to be aligned on tests designed to reveal their motivations, it may be quite difficult to tell whether this has  occurred.

In this conversation, we discussed some of the key arguments of the report. If you don't have time to read or listen to the entire report, this interview might be useful. In particular, we discussed:

* Distinguishing ways AI systems can be [deceptive](#ways-ai-could-be-deceptive) and [misaligned](#distinguishing-kinds-of-misalignment)
* Why powerful AI systems might acquire goals that go beyond what they're trained to do, and how those goals could lead to scheming
* Why scheming goals might perform better (or [worse](#is-scheming-too-costly%3F)) in training than less worrying goals
* The '[counting argument](#the-counting-and-simplicity-arguments)' for scheming AI
* Why goals that lead to scheming might be simpler than the goals we intend
* Things Joe is still confused about, and research project ideas

## Resources

* The original report: [Scheming AIs: Will AIs fake alignment during training in order to get power?](https://arxiv.org/abs/2311.08379)'
  * Discussion on [LessWrong](https://www.lesswrong.com/posts/yFofRxg7RRQYCcwFA/new-report-scheming-ais-will-ais-fake-alignment-during), [Alignment Forum](https://www.alignmentforum.org/posts/yFofRxg7RRQYCcwFA/new-report-scheming-ais-will-ais-fake-alignment-during), EA Forum
* [Audio version](https://joecarlsmithaudio.buzzsprout.com/2034731/13980105-full-audio-for-scheming-ais-will-ais-fake-alignment-during-training-in-order-to-get-power) (narration) of the report
* '[Risks from Learned Optimization in Advanced Machine Learning Systems](https://arxiv.org/abs/1906.01820)' (Hubinger et al)
* '[Hidden Incentives for Auto-induced Distributional Shift](https://arxiv.org/pdf/2009.09153.pdf)' (Krueger et al)
* On 'counting arguments', one argument featured in the report
  * '[Many arguments for AI x-risk are wrong](https://www.alignmentforum.org/posts/yQSmcfN4kA7rATHGK/many-arguments-for-ai-x-risk-are-wrong)' (Alex Turner)
  * '[Counting arguments provide no evidence for AI doom](https://www.alignmentforum.org/posts/YsFZF3K9tuzbfrLxo/counting-arguments-provide-no-evidence-for-ai-doom)' (Nora Belrose and Quintin Pope)


*Let us know if we missed any resources and we'll add them.*

{% image "carlsmith-share-6.webp" "Scheming AI — get it?" %}


## Transcript

*Note that this transcript will be **machine-generated**, by a model which makes frequent mistakes and sometimes hallucinates entire sentences. Please check with the original audio before using this transcript to quote our guest.*

### Intro

**Fin**

Hello, you're listening to Hear This Idea. In this episode, I spoke with Joe Carlsmith. Joe works as a senior research analyst at Open Philanthropy, where he focuses on existential risk from advanced AI. And he also writes independently about topics in philosophy and futurism. Now, we spoke about a report he recently wrote. The title is Scheming AIs. Will AIs fake alignment during training in order to get power? So there's a really central story, maybe the central story, about how advanced AI could go very wrong. Which involves AI becoming what's called deceptively aligned. And that's when an AI system comes to care about something really importantly different from what its designers intended, but it decides to keep those goals hidden and just try to perform really well in training as if it only cared about what we're trying to reward. That is until those systems can get power in the real world and then act on their true goals, which could end up being very bad, presumably. And that's what Joe calls scheming. So there are a few reasons to think that this kind of story could actually be a kind of default outcome. For instance, you might think that in some sense, there are just many more goals which aren't quote unquote aligned, but which do lead to the AI faking alignment to gain power compared to goals which are just straightforwardly aligned. Or maybe those kind of scheming goals are just simpler in some sense. And then the idea is that... If that's true, well once AI systems are sophisticated enough to decide to behave deceptively in training and to do it well, then scheming can end up being the default outcome unless we're very careful to avoid it. Or maybe scheming is unlikely or at least easy to avoid. But in any case, it's obviously going to be very important to understand how likely scheming is and what we could do about it. And that's what Joe's report looks into. So Joe has narrated the report, and I'll link to that, but it is over six hours long. So if you're looking for more of a summary, then this could be a good place to start. We talked about different kinds of perception and misalignment, and which seems scariest. Talked about different ways scheming might arise specifically. Also why AIs might care about things beyond training at all. Whether scheming might just be too costly compared to just being aligned. And also some ideas for future work on understanding and avoiding scheming. Okay, without further ado, here's Joe Carlsmith. Joe, thanks for joining me.


**Joe Carlsmith**

Thanks for having me.


**Fin**

We're going to talk about your report on scheming AIs. I guess to start off with, why did you write it? What's the worry you wanted to talk about?

### Why research scheming?


**Joe Carlsmith**

The worry with scheming AIs is that AIs will pretend to be more aligned than they are during training in order to get power later. And I wanted to write about this partly because I think it's really core to What I see as the most worrying path to existential risk from misaligned AI in general. So I think kind of the question of whether... We get scheming AIs by default is just very crucial to the question of kind of how optimistic or pessimistic we should be about the larger issue of misalignment risk. And then I also thought that given how important the issue is, I think, to the concern about misalignment risk, there was a somewhat striking lack of kind of focused attention to the arguments for and against expecting it. There's some literature on the topic, but not as much as I'd like and not in the sort of depth. That I personally wanted in understanding the issue. And so I wanted to kind of treat the topic more fully, really lay out what are the reasons for against expecting this. It's still, you know, my background is sort of more. Theoretical. I'm not a sort of empirical ML researcher. And ultimately, I do think this is an empirical issue. And so the ultimate work, I think, that needs to take place on this issue is sort of at the level of gathering kind of empirical data. But I also thought there was work to be done in just clarifying what are we talking about? Why would we even expect this or not expect it? And hopefully thereby giving the empirical research more of a kind of more clarity about where to focus and how to get more information.

### Ways AI could be deceptive


**Fin**

So you said that scheming involves, in some sense, faking alignment in order to eventually gain power. So there's a gaining power component and there's a faking or deception component in order to do that. Maybe we could talk about the deception part first. It seems like there are ways you can get a deceptive model that doesn't amount to scheming. And you have a little taxonomy of different kinds of deception in AI systems. Yeah, I wonder if you could talk about that.


**Joe Carlsmith**

There's a lot of different ways that AIs can be deceptive. In the report, I distinguish between a number of them. Maybe the highest level category, which I don't even name in the report, is just AIs that lie, period, about anything. It doesn't need to be about their alignment. But where the misrepresentation in question is intentional in the way that lies are as opposed to mistakes or hallucinations or who knows what. And then there's a subcategory of that, which is lying about alignment. Or in some sense, more generally misrepresenting your alignment. But even that can be done for a number of reasons. And could in principle, not all of which are about seeking power in the way that scheming in the sense that I'm focused on implies. And then there's a somewhat related category of behavior, which I think is even more specific. Which has been called training gaming by, I think maybe Ajay Akhatra was the first to use that term. And training gaming, as I'm understanding it, takes place specifically when an AI, Understand the process being used to train it, which is sort of an understanding that I'm calling situational awareness. I'll say maybe more later about exactly what I mean by that. But there's some epistemic condition of kind of knowing what's going on and then intentionally optimizes for what I'm calling reward on the episode. And so I'll say a little bit about what that means. I'm assuming we're talking about AIs that are being trained via kind of. Fairly standard machine learning methods. And so there will be some sort of feedback signal that is kind of updating the weights of the model via stochastic gradient descent. And I'm kind of using reward as a kind of catch-all for that feedback signal. I'm specifically generally going to be assuming a model or a sort of form of training where there's some sort of self-supervised pre-training analogous to what currently happens with LLMs. Pre-trained on next token prediction, though I think I want a somewhat more general concept of what could in principle be kind of predicted. And that doesn't necessarily need to be internet text. And then there's some sort of fine tuning phase. And I'm assuming that that looks a little bit more like reinforcement learning, some extension of RLHF or potentially a sort of more scaled version of that. But if you're talking about that normal RL, then you can just use the word reward in a fairly standard way. But I also mean. It applies more broadly. So it would apply in principle to the loss in a self-supervised learning task or something like that.


**Fin**

To be clear, it sounds like you're imagining the action happening in this phase where you have a base model, which is the result of some self-supervised learning, and you're tweaking it to do stuff you want, which is like RLHF, for instance, is an example of that. Is that right?


**Joe Carlsmith**

That is my best guess. I think it's more likely that you get scheming during a kind of RL fine-tuning phase than you do during pre-training. But I'm not actually taking a stand on that in the report. And I think it's actually worth tracking as we sort of talk about different arguments. It's worth tracking, wait, would those just apply to the base model too? And I think many people have the intuition that pre-training is much less likely to lead to scheming than kind of fine-tuning or other forms of RL. I think it's actually... Not super clear on some of these arguments why that would be the case. I can say a little bit about why there are, I think, some salient differences. But I think it's worth, for folks who have the strong intuition that it's unlikely to get scheming during pre-training, it's worth interrogating. Why exactly do you think that? Because some of the arguments apply symmetrically.


**Fin**

I noticed hearing you say that. I shared the intuition. I'm not sure where it comes from, so maybe it'll become clearer later.


**Joe Carlsmith**

So that's the concept of reward, is roughly speaking the sort of feedback signal that's being used to update the weights. And then when I talk about a reward process, I'm roughly talking about like, you know, there's sort of many stages of updating the model's weights in response to some behavior. And the reward process is sort of like that whole... All of those stages. And so when a model is optimizing for reward, what I mean is it's intentionally moving one of those stages of the process in the direction of more reward. So that could be messing with the observations that, you know, people's observations of the model. It could be messing with the kind of numbers that are stored in different databases. It could be messing with the process of gradient descent itself. So there's some sort of broad optimization for the kind of the reward process happening. In the context of training gaming as I'm. As I'm defining it. The consequences of its actions past the episode, and it could in principle do just as well in training. So for example, if there's sort of no causal pathway from some like beyond episode consequence to the gradients that the model receives for its behavior, then that's going to be beyond the episode in my sense. That sort of differs from what we might intuitively call the episode in certain cases. You have to look actually at the details of the training process to check whether what you're calling an episode is the episode as I mean. So for example, there's a... David Kruger and some others have a paper where they show that in some contexts, a form of training called myopic Q-learning, which has, if you look at the structure initially, you might think it's sort of paradigmatically limited with these very, it's just like this sort of one-off episodes. But in fact, as you train, the model learns to kind of optimize in what appears to be somewhat like a kind of cross-episode way, in particular, sort of cooperates across episodes with itself. And so that's an example of a kid. Now, that's a very particular setting. And in fact, they had to like fiddle. A decent amount, I think, to get that behavior. But I think it's an interesting case in point that you can't just look at the surface of a training process and be like, I know what the episode is.


**Fin**

It's a thing we're calling episode tier in F4. That's what we mean by reward on the episode.


**Joe Carlsmith**

That's right. I don't want people to do that. I think it's actually quite important to be like, look in detail. What are the incentives that are kind of. Ultimately shaping the gradients, sort of what incentives are created by the process of updating the model here. And I actually think even the definition of episode as I've given it is still like a little too woolly. And I would like people to be even more kind of formal and precise about what that means. And then for there to be some process where like for any given training, everyone really knows what is this training actively incentivizing the model to optimize and over what time horizon. But roughly speaking, training gaming occurs when. The model is optimizing for reward on the episode directly. And then scheming is a variant of training gaming where the training gaming is occurring for instrumental reasons. So it's not that the model cares intrinsically about reward. It's rather getting reward for some other reason. And then in particular, the reason has to do with the power that doing so will grant either to this model or to some other AIs later on down the line. So it's specifically kind of power-motivated instrumental training gaming. That's what I'm calling scheming. And this is closely related to what's often called deceptive alignment. Though deceptive alignment, again, that term, it's sort of not, it floats around a little exactly what people mean by that.


**Fin**

I wonder if an analogy here could be, you know, maybe I'm a student studying for some certificate and I might just come to intrinsically care about my grades for some reason, in which case I could... Do things to game my grades. I might cheat, for instance. I also might be moved to cheat because I care about something beyond the classroom, beyond the point where I get my certificate. Maybe it helps me get into some job or whatever, and that's a motivation for cheating. And that feels like a distinction between... Mere training gaming and scheming as you've described it. Is that right?


**Joe Carlsmith**

Yes, I think that's a good analogy. And like to some extent, let's say what people hope is that the grades will incentivize you to,


**Fin**

well.


**Joe Carlsmith**

It's a little complicated with grades, but, you know, in some sense, they want you to, like, let's say, do good at math. And the grades are supposed to kind of correlate enough with doing good at math that they, it's not quite analogous because it's not trying to, like, shape your goals. But let's just say, like, there's a type of person who really wants to just do good math and who gets good grades. And then there's a type of person who wants to get good grades. And then there's different ways to do that. One is you can want just intrinsically to get good grades. And another is you can want to get good grades because of something that getting good grades causes later. That's sort of any form of instrumental training gaming in the analogy. And then... Scheming, I'm actually making somewhat more specific than that. If so, for example, let's say you want to get good grades because then your parents will hear about it and they'll be happy, but you won't get any more power. Then that's, I think, not scheming in my sense.


**Fin**

It is a beyond episode goal.


**Joe Carlsmith**

Let's say it's a beyond episode goal in this analogy. Because, you know, let's say the class ends at the end of the semester, but then your parents won't hear about your grades until afterward or something. And so nothing will affect your grades. No consequences after the episode will affect your grades or after the semester will affect your grades. It's also not a sort of a strategy for you gaining power. It's just that you care about some other consequence of your grades. And so I'm setting that's there. We can we can make up sort of niche stories about AIs that might care about about reward for that reason. But I'm most interested in AIs that care specifically about reward because getting reward empowers them later in some regard. And then I'll just flag, there's a further category that's more specific, but is often also associated with scheming and deceptive alignment. I think it's actually how deceptive alignment is defined in, I think, one of the original discussions of the topic, which is a paper from 2019 called Risks from Learned Optimization. That version of scheming, which I'm not saying is definitional to scheming, is... ...hypothesizes specifically that the power in question arises from preserving the model's goals and preventing them from being modified by the training process. So here the story is something more, there's a kind of broader story in the AI alignment discourse about the convergent incentives towards what Bostrom calls goal content integrity, which is roughly the thought that for many, many goals, to the extent that the existence of an agent with those goals promotes them. Then the goals also sort of want to not be changed. So in the kind of classic like paperclip maximizer story, a paperclip maximizer, insofar as it anticipates maximizing paperclips later, it doesn't only want to not get shut down. It also wants to not have its goals changed so that it likes staples instead. Because if it gets changed to liking staples, then it'll go and make staples later. But it would have been it wants and then therefore there will be less paperclips than there would have been if its goals stuck around. And so in some sense, you can see. At least the canonical story about scheming, what I call later the classic story, as a kind of more specific variant on this sort of broader concept of goal content integrity as a convergent instrumental incentive. And so that's often the sort of most salient way that scheming can help a model get power is by preventing its goals from being modified by the training process or potentially preventing the model getting shut down or removed, kind of not deployed in general. And then thereby being allowed to go off. There's some thought that later on it'll have more power. If it can just make it through some stage, though we can question that. That's why it's scheming now. And so that's... That's the sort of fourth variant I distinguish in the report, but I don't think that's definitional scheming. On my view, doing it for power, period, even if it's not to kind of preserve your goals, is what it takes to be a schemer.


**Fin**

Yeah, it occurs to me when we're throwing around analogies to human cases like we just were about the student who wants to get good grades for various reasons. It's much less obvious in those contexts how goal guarding is a specific reason I might want to cheat at my exams for reasons of gaining power afterwards. Because people tend to maintain their goals anyway over time. It's not immediately salient that we might. The analogy kind of maybe breaks down.


**Joe Carlsmith**

Yes, I agree. And so I think you have to turn to sort of more exotic cases. Like imagine you're in a prison camp being run by an oppressive regime. Each day you have to... Shout slogans in favor of the great leader or something. And you don't actually believe in the great leader. Or if we want, we can make it great. So you have to write essays about how much you love the great leader, and then you'll get good grades. But if you get bad grades, then you'll be subject to some sort of brainwashing. Protocol. And this will like potentially actually make actually make you love the great leader or sort of mess with you in some other ways. That's more of an analogy for the goal guarding motivation. So you're like, oh, I don't want to end up with my mind and my goals messed with via this brainwashing process. And so I'm going to kind of get good grades for that reason. And then hopefully I can like escape this prison camp later.


**Fin**

And you might also worry, you know, if writing all these essays and shouting all these slogans is going to mess with me to the point where I hold out very little hope that I'll come out the other ends with my existing goals in text. In fact, I'm just confident I'll end up brainwashed. And that's a shame. Well, that makes the value of trying to cheat, especially in risky ways, less obvious. It's just like less of a clear way out, right?


**Joe Carlsmith**

Yeah, that's right. And it depends on what other goals you have at stake. If you're just trying to get the best out of your life, you're just trying to get the best out of your life. Purely focused on getting out. It still might be your best shot. But if you have other priorities, it could start to compete. I'll also flag, I mean, one thing I think that the fact that you start turning to analogies like prison camps with brainwashing protocols, I think should make salient is that I think many of the things discussed in the report, many of the AIs I discussed in the report, in addition to potentially posing existential risks to humans also might be moral patients in their own right. And I think many of the kind of techniques I talk about in the report and in general, the whole setup, I think is actually quite alarming from that perspective. And I think, so I'll just flag. Here, that I think I sort of set aside at the beginning of the report questions about AI moral patienthood. But I think they're real and relevant and quite uncomfortable. And I think that should become salient when we're like, well, what would be an analogy? I guess like brainwashing, that would be the analogy. And so I'll just say that now.


**Fin**

If only we can find a way to brainwash more effectively.


**Joe Carlsmith**

Yeah, I mean, I think it's a salient... A very salient feature of the current alignment paradigm and then AI paradigm in general is that the way you shape a model's motivations is by kind of direct neuron-level intervention on its values, which is not something we normally think is sort of, we think that that comes with it.


**Fin**

Yeah, exactly.


**Joe Carlsmith**

This is not something you just do to a person. It's like change their values. I've been writing a little bit about that in another context recently, but I'll just flag it here.

### Distinguishing kinds of misalignment


**Fin**

So those are some varieties of deception. We can imagine getting from this training process you've described, which is in some sense the standard process that is giving us language models that we're familiar with. While we're doing taxonomies, I guess that kind of leads to like... Different kinds of actual systems. Training Saints are one of them. There are others.


**Joe Carlsmith**

Yeah, totally. So I think I'm interested in schemers as a kind of class of model you could end up with after a training process roughly of the kind I described earlier. But there's a bunch of other types of models you could end up with too. And I distinguish between three other kind of classes that aren't schemers. One is what I'm calling Training Saints, which are… AIs that are pursuing what I'm calling the specified goal. So the specified goal is not reward, but rather the thing that the reward process. Is rewarding.


**Fin**

Being good at maths is not getting high. Yeah,


**Joe Carlsmith**

exactly. That's right. Ideally, you're like trying to contribute to the org or something. And the performance review is like responsive to that. But and then if you're if you start optimizing for the performance review or for your grades, that looks a little more like I mean, it's a little tough with students because they're sort of it's sort of expected that they're optimizing for grades. But, you know, sometimes some like organizations and jobs sort of hope that you're optimizing more directly for the that works mission or something like that. So the specified goal is. Is that now it's a little it's sometimes a little bit unclear how to pick out the specified goal. But roughly speaking, I have in mind some sort of test counterfactual test of what would the reward process if you somehow held that fixed reward, not just on the actual set of data that the model sees, but for sort of counterfactual scenarios. So, you know, if you imagine a training setup that's trying to cause the model to reward to pursue gold coins and it rewards the model every time it gets a gold coin. A way you tell that that's a specified goal is you sort of like look across and, you know, suppose in that environment, in the actual data that the model sees, it only ever gets, there's only, the only gold things are coins. So in principle, you can't tell just looking at the data, whether this reward process is rewarding, get gold things or get gold coins. But the sense in which it's a specified goal on my ontology is that if you look across, if you look at the environment where there's gold things.


**Fin**

Yeah,


**Joe Carlsmith**

exactly. And now it's like specifically the coins. Yeah. And so training settings are going for the specified goal. And then the other category of model in that vicinity is what I'm calling a misgeneralized non-training gamer. So this is a model that is not optimizing for reward, but is optimizing for something other than the specified goal. So in the context of the example I just gave, if a model started optimizing for just gold stuff rather than for gold coins, that would be... A kind of misgeneralization.


**Fin**

Yeah, and that could be a failing of the test data, right? We just forgot to include any tests which disambiguate between gold things and gold coins. Yeah,


**Joe Carlsmith**

that's right. There's been some initial empirical work showing... This sort of dynamic where you can get models to kind of misgeneralize in some sense. But I want to be clear that that's not this. And people sometimes talk about that in the context of like inner misalignment too, where there's some notion that there's an outer goal and then the model's goal doesn't end up matching that. I think it's important to be clear that inner misalignment in that sense or goal misgeneralization in that sense is not yet in itself scheming. It's something that could in principle give rise to scheming, but people often kind of conflate them. And in particular, what I'm saying here is if the model just misgeneralizes in that sense, or is just intermisaligned but doesn't start training gaming, that's not a schemer. It's something else. Got it. A misgeneralized non-training gamer.


**Fin**

You could get a model which cares about gold things. Which is not the specified reward, which is gold coins, without, for instance, having any understanding of its training process or even given that understanding some desire to game it.


**Joe Carlsmith**

Yeah, that's right.

### Training gaming


**Fin**

Okay, so those are outcomes which don't involve playing the training game in some sense. What about outcomes that do?


**Joe Carlsmith**

There, the main other model class I want to distinguish is what I'm calling reward on the episode seekers. So those are models that do training game. They do optimize directly. for some component of the reward process moving in the direction of reward. But they do so because they care intrinsically about reward. So this is the sort of person who's become obsessed with their performance reviews. And only like this round of performance reviews. They're not like maximizing for like the later performance review. They're not doing like performance reviews over all time. And this is actually another, I think, confusion people often have about the notion of what's sometimes called reward hacking. So people will talk about, ah, well, obviously. So A, I'll say at the outset. Just because a model is being trained by RL doesn't mean that its goal, the goal that it learns, is reward. Reward is sort of a process that shapes what goals the model develops, assuming it has goals at all, which it doesn't necessarily need to. But it doesn't necessarily optimize for reward. Even if, though, it comes to value reward in some sense. There's, in my opinion, quite an important difference between valuing rewards sort of overall time and valuing reward on the episode in particular. And on my definition, it's specifically reward on the episode that the training process incentivizes the model to optimize for. And if the model comes to value reward overall time, then it's actually going to more likely be a schemer. And it then starts training gaming and starts doing something like plotting to take over the world so that it can like... Set its reward counter, or if it's doing some kind of longer-term optimization for reward that extends beyond the episode, then it's actually a schemer in my sense, even though you might look at it and be like, oh, it's reward hacking, you know, the way we thought. I actually think that, I think it's importantly different whether the reward in question is sort of on the episode or beyond it.


**Fin**

People like to point to the analogy to human evolution. Where, in some sense, we're part of a selection process, which is kind of similar to a selection process on reward. And we are situationally aware in the sense that we know about that process. Most people also don't intrinsically. care that much about maximizing the number of children they have or whatever the proxy is for reward on the episode. Nor, in fact, do most people care about having as many progeny as possible or whatever the analogy is to discounted reward over time. So even a very sophisticated training process based on reinforcement learning just doesn't give you the free systems which care about reward.


**Joe Carlsmith**

Yeah, that's right. In some sense, I mean, it's a little bit ambiguous in that analogy, but I think it's a little bit ambiguous in that analogy. Um. Exactly how to differentiate between reward and the specified goal here. But I do think in that analogy, it is notable that I think humans are probably best diagnosed as something like misgeneralized non-training gamers relative to evolutionary selection. So we are, if you assume that, if you treat evolution as selecting for something like inclusive genetic fitness or something like that.


**Fin**

Kind of a NEP score to set up this process with that in mind.


**Joe Carlsmith**

Then. Humans are neither such that we care intrinsically about inclusive genetic fitness, nor are we trying to have as many kids as possible in order to like deceive or kind of like later get So Addison is going to inherit the earth for some other reason. Some people might be doing that. But broadly speaking, that's not the form that our like misgeneralization has taken. Now, I think it's also not yet. A complete analogy, and obviously any of these analogies have like total, like there's a zillion objections you can raise about things that are different. But a closer analogy for scheming would be if you learned that this was, that there were sort of aliens who were kind of running this process and they were kind of inept and they're only checking each generation kind of how many kids someone had. Let's just say they just like take you if you had a bunch of kids. They don't even take your kids. And so then the question would be, suppose we all like knew that that was the setup. This is like closer analogy is like what would happen if you knew that there was like this really explicit selection. The aliens are only checking how many kids you have. And then maybe in like after 10,000 generations of this, let's say they'll like keep you alive through that whole process. Then like maybe you'll have a chance to escape and like something, something.


**Fin**

Good lesson to note. Being vague about analysis. We were talking about reward on the episode, Seegers, in some sense, short of scheming. This is when you care about reward, but not necessarily for the purpose of getting power. And then, I guess, pretty obviously, scheming is that, but for the purposes of getting power. Is there anything more to say on that?


**Joe Carlsmith**

That's not a fully exhaustive taxonomy. But it's, in particular, it's ignoring instrumental training gamers who are doing it for reasons other than power. Roughly speaking, it's breaking it down by, are you a training gamer or not? If not, are you pursuing the specified goal or not? And if you are training gaming, are you doing it for instrumental or terminal reasons? If you're doing it for instrumental reasons, are you doing it for power? If so, you're a schemer. Are you doing it then in order to preserve your goals? If so, you're a goal guarding schemer. And let me just say about all of these models, there is an assumption I'm making in the background here. Which I think is quite contestable and might actually account for a decent amount of the disagreement intuitively about scheming, which is that all of these models are well understood as being goal directed in some sense. Which I'm defining roughly as being such that they are kind of well understood and predicted as kind of making plans and pursuit of objectives on the basis of models of the world. I have separate work where I talk about why I think that's plausible and at least some advanced. AI's and there will be sort of incentives to create systems of that kind roughly because I think they're going to be more useful for various tasks.


**Fin**

And that's the new power seeking report?


**Joe Carlsmith**

That's in the power seeking report. But I do think that's, this is a quite substantive. It is a substantive assumption, especially about certain types of ML systems. And especially if we're talking about, for example, scheming emerging during pre-training. Now it's super less obvious that models are going to be well understood as goal-directed in the relevant sense. And that could be even true of AIs that have been shaped more directly on certain sorts of tasks. And so... I want to both call out that that's an additional assumption in the background. Like there's sort of a, there's another model class here, which is sort of models that aren't. I'm sort of breaking things down by the nature of the model's goals, but you could just be like, there's also this different thing, which is like not useful. The models don't have goals. This isn't how you should talk about it. And I do think once you, if you let go of the model having goals, then I think scheming looks like quite weird. Like I really think it loads on the goal directedness. So if you instead just think of the model, and I think this is actually true of. The alignment discourse in general. Like, I think some people want to be like, oh, we don't need to talk about goals. I'm like, no, it's totally about goals. So, for example, if you just think the model is like a policy. And the policy is just like, you know, it's whatever. It does stuff. There are inputs and then it does outputs. And you're not sort of saying anything more about goals and about instrumental convergence and stuff like that. Then the idea that the way the sort of generalization you get, like, oh, you trained it to predict images. There's something about like, oh, you trained it to predict images or maybe you trained it to like be nice. And then it kills you or something. And you never, by hypothesis, rewarded it for killing you. Or taking over the world or anything like that. You only rewarded it. Or at least it's compatible with the stories about scheming. That the reward process actually was fine and rewarded totally the right things. And so it seems if you don't have the story about goals, it's going to look. Like a very random type of generalization and one that like is quite distant in some sense from the training data that the model like, oh, you rewarded it for being nice, for being nice, for being nice. Now it kills you. And so I want to flag that. And I think and I think so one salient way this could not. This could just be like really the wrong way of thinking is if the goal stuff is kind of off. And I think that's true of the alignment discourse in general. And I think it's like a salient way for me that this whole thing is like missing the mark. Of course, some AIs, we're going to actually like give them goals. Like we have like chaos GPT and sort of AIs like that. And there's an interesting question about how scheming would or would not crop up in that sort of context. But I'll just flag both that like there's a substantive thing about goals here. I think it really matters. And I also am not. Sort of in the report, arguing for it. I'm kind of conditioning on that aspect of the story because I want to separate out the question of should we expect the AIs to be goal-directed in the relevant sense and conditional on goal-directedness, should we expect them to be schemers or not? And I think it's important to track where different sources of skepticism.


**Fin**

Yeah, and it feels worth saying that Talk about goals is an abstraction over the systems which pop out of this trading process you're talking about. There's nothing about that process without giving any more details where there's like an explicit goal slot. There are stories you can tell about why you might expect it to be really useful to talk about goals in the same way it's useful to talk about humans having goals, although it's unclear where they live in the brain or something, right?


**Joe Carlsmith**

Even though I'm setting aside the questions about whether the models are well understood as goal directed at all, I do actually think there's additional subtlety even in the context of some sort of goal directedness, whether the goal directedness at stake is the type that gives rise or that sort of seems intuitively at stake in scheming. So I have this section in the report distinguishing between what I call a clean and messy goal directedness, which is itself not an especially clean distinction. But there's some. There's some intuition that I have and I think other people have that the sort of goal-directedness at stake in scheming is uniquely kind of... Intense and kind of agent-y and kind of instrumental reasoning-y. It's like really plotting ahead of time. It's modeling the world. It's like looking for these outcomes in the future. It's like thinking about how it will get its goals. Whereas if you're imagining goal directing this as something more like, oh, it's like a behavioral summary.


**Fin**

It's a thermostat in this room in some sense as a goal of regulating temperature.


**Joe Carlsmith**

It's like the type of goal having. Now, I do think humans meet the condition in some contexts. For this sort of goal directness. And human brains are notably also like we don't have some goal slot or whatever. But I think we are doing like we can. Engage in strategies of this form, and some people do. You don't want to get too hung up on goal slots or something like that. The fact that humans can meet this condition, I think, is an indicator that it's a real thing and a sort of non-trivial place that minds can go, especially if they're smart or trying to be useful or whatever. But I do think there's an additional question about sort of the type of goal-directedness that we're assuming here, and that also plays into some of the other more specific arguments. So folks interested in that can check out that section of the report.

### Why might scheming be especially scary?


**Fin**

We'll link to it. A lot to say here. Let's talk about scheming again. All right, so that was just a list of ways that this training process could yield systems which are deceiving in some way. And it just seems to me like any of these results feel like we've messed up. Why is scheming... Especially bad. Why does it seem especially worrying?


**Joe Carlsmith**

Two main reasons. Yeah. So I think schemers are the scariest type of misaligned models. All of the model classes I just discussed can, in principle, be misaligned. Training Saints, if you had the wrong specified goal, misaligned. Misgeneralized non-training gamers. Probably misaligned unless you got really lucky. They happen to misgeneralize onto the align goal. Reward on the episode seekers traditionally will kill you if it'll get more reward on the episode. So in some sense, we can be like, look, all of these are misaligned. But I think schemers are actually pretty importantly different from these other model classes. One reason for that is that schemers, I think, will engage in the most active and adversarial efforts to undermine your detection. Of the misalignment. So, Training Saints and misgeneralized non-training gamers, say you're wondering about, did I get a gold coin pursuer or a gold thing pursuer? And it's not situationally aware, or even if it is situationally aware, it's not kind of messing with your process, it's just doing its thing. So show it an episode where it can get gold stars instead of gold coins, or it can get more gold stars than gold coins and see if it goes for it. Now, you still have to have thought of, wait, could it maybe be doing gold stuff instead of... Gold coins, like you still have to have thought to do that experiment. But in principle, there's nothing standing in the, like, once you set that up, it goes like, oh, gold coins, oh, sorry, gold stars. Wow, that's great. And so you just see that. And you go like, oh, interesting. Oops. And so you can just do that. Prior to situational awareness and the potential for scheming. It seems there's no conceptual barrier to just doing that to whatever degree and kind of like noticing that you messed up in terms of the generalization. And then same with reward on the episode seekers. This one is somewhat more subtle. But in principle, you can set up an episode in which a model can get more reward by, for example, like being dishonest or by doing some bad behavior. Or even like you can give it access to the reward process itself. Like say like, here's the process going to update your weights. And it goes, oh, yummy. Like that's my favorite. Thing. I've always been trying to like get in there and mess with the weights in this particular way. And if the episode is sort of short enough that it's sort of horizon of concern is such that it's actually getting most of what it wants from just going for the reward in this case. Then again, you'll be like, oh, look, it really just went right for the reward. So. Whereas schemers are specifically going for the takeover. They're sort of going for this long-term outcome. And so it's harder to elicit the behavior that would indicate that they're misaligned. And they're specifically trying at every turn to anticipate how you're going to detect that they're misaligned and to act aligned instead. Now, it's not totally impossible to detect it. So you can do things like, even for a schemer, you can try to set up the incentive such that, It's actually just a better deal for the schemer. To reveal its misalignment by, so for example, you can come to a schemer and say something like, hey, schemer, like, instead of doing this task for us and being HHH, helpful, harmless, honest. You could instead go over here to this nice, flexible pile of compute, resource pile, and we somehow credibly convince the AI that this option would in fact lead to getting these flexible resources instead. And it could be, if we set the incentives up right, that's a better prospect than kind of trying to scheme and then get power later. And so in the same sense, like if you're in one of these... Prison camps or something. And it's sort of like, ah, maybe they're wondering whether you like the dear leader truly. And that's like they really care. And you're like, actually not sure you're going to make it through this camp. Or like there's some chance you'll make it through. But instead they're like, or you could just like go free right now in like this pasture or like hang out. And then you might just be like, actually, I just, I admit it. I didn't like that. I never liked the dear leader. I want this pasture. Thank you. So in principle, you can do that. But that's like a harder thing to set up. ...than the other tests for the other model classes. And so I think schemers are kind of more worrying from an epistemic perspective there. The second reason I'm more worried about schemers is that, relatedly, I think schemers, because they have these long... They're optimizing in the long term for kind of disempowering humans. They're more liable to engage in what I call early undermining, which is, roughly speaking, you imagine there's like a stage of AI development when the AIs are not yet powerful enough to take over or to escape or anything like that. But they are being given various forms of influence over things like the automation of AI R&D or like writing code at a lab or something like that. And they can, in principle, do stuff like insert backdoors into the code. Or let's say you're trying to get them to help you with alignment research. They could, in principle... Give you alignment research that is optimized to fail in the direction of takeover rather than just like to make you give it a thumbs up.


**Fin**

You mean during training?


**Joe Carlsmith**

During training, yeah. Or during a sort of broader period where you kind of retain your control over the systems. And I care about this a lot because I think a salient path to kind of addressing many of these issues to do with AI alignment and AI safety for me has to do with actually automating a lot of the cognitive labor involved in. In AI safety. But if you're automating that with systems that are actively. Messing with you and trying to mess with you in a way that leads to takeover, even if they can't escape yet, I think that's uniquely scary. Whereas systems that are just trying to get reward on the episode or just trying to do something less kind of directly takeover-y, they might mess up. They might give you bad alignment research. They might not quite behave as you want, but it won't sort of be optimized to lead to takeover later. And I think that's a kind of important distinction.


**Fin**

It sounds like in both cases, there's this kind of active undermining going on, and that's what's worrying. That's right. In one case, preventing discovery, and in another case, just preventing attempts of the scheming system to get what it wants. Are you imagining that this... The system begins seeking power after, in some sense, it's deployed, or is it escaping from its training process, or does that matter?


**Joe Carlsmith**

Sometimes the way people talk about this is they draw a distinction between what they call training and deployment. And I think this is an unuseful distinction in this context. And I think the better distinction is something like, can the model... Make a break for it. Escape slash takeover. Or not. And I think there's some period that could encompass both training and deployment. So deployment, let's say, is like the point at which a model is like given some sort of broader access to like levers of power or towards users. I mean, it's often thought of like, is it on the API now? Though, you know, labs will maybe be deploying models internally and stuff like that before that. Or there's some like gradation of deployment in that sense. But none of those gradations need correspond to. The ability to escape slash take over, nor importantly, need they correspond to no longer updating the model's weights. So you can continue, and I'll actually assume generally that these AIs will continue to be trained online after they've started interacting with users. And so in that sense, people sometimes talk about scheming as the schemer is sort of waiting for the situation where the threat of modification to its goals goes away. But deployment in a traditional sense does not. Entail the absence of that threat. And then conversely, in principle, the sort of can escape slash takeover condition can arise during what's called training traditionally. So it could be like the model is not yet deployed in any sense. Maybe it's still just doing RLHF or whatever and it notices some way of escaping or... Or what have you. So I think the traditional training deployment distinction does not correspond, I think, to the important distinction in the context of scheming. It's much more about just like when can it kind of break out, escape, take over versus when is it still sort of under human control.

### Where might beyond-episode goals come from?


**Fin**

Okay, so we've talked about different kinds of deception and scheming in particular as an especially scary result. Makes sense now to talk about why scheming might be at all likely. You talk about prerequisites for scheming in the report. So obviously a schema requires situational awareness of some kind. I mean, you defined it as such, but it's kind of obvious, right, that you need an understanding of the process in order to game it. And then you want to mention this other idea. The requirement that the system in question has goals that in some sense extends beyond the episodes or the rewarded episode. Because it needs something to care about in order to gain power to get that thing right. And there's a specific component about this kind of power motivated strategy. Maybe one way to go at this is that you just kind of pull apart two different... Stories about how you get scheming. And one involves what you called training game independent goals and the other training game dependent goals. In some sense, the question is like, where do these beyond episode goals come from? And then later there's this question of why do those goals lead to scheming? But yeah, maybe you could talk about that distinction.


**Joe Carlsmith**

So the question is like, why would you get beyond episode goals? Because by hypothesis, you don't need them. If you're optimizing for something beyond the episode, it's such that you could ignore that thing and just optimize within the episode and you do just as well in training. And what's more, you can get punished by the training process for optimizing beyond the episode if it ever leads you to sacrifice stuff in the episode. So. There's this question of, well, why would you ever... Get goals of this kind. And I think there's sort of two main paths. So one, the training game independent path is basically the Beyond Episode goal crops up naturally. That is independent of its role in motivating scheming. It's sort of, it's like first you get the Beyond Episode goal. And then at some point it starts to motivate scheming. So this could happen. Maybe the Beyond Episode goal crops up before situational awareness, for example. One example here might be, and this is I think actually often the story that... People have in mind when they talk about inner misalignment or goal misgeneralization leading to scheming. So let's say I'm an AI being trained to do science and I develop some like drive to like a curiosity drive that causes me to just want to learn stuff, period. And this is like correlated enough with doing good science early on that it like it sort of functions like liking gold things rather than gold coins. It's sort of like, oh, this is like close enough. It could be that that goal, when it crops up, is beyond the episode. It just says, like, learn new stuff. Maybe you didn't even know that there's, like, an episode, non-episode distinction. It's just like, I just want to learn stuff. And then it sticks around. And then at some point, situational awareness arises. And AI goes like, wait a second. Okay, wait, I'm a model. I'm being trained. And now it goes like, wait, and if I want to learn stuff over all time, Then I need to actually deal with this fact that I'm this AI in this training process and like all this stuff. And then it starts scheming. And then that goal sort of gets calcified or kind of locks in. Because now the thought is it's now it's motivating. Assuming let's just say let's just say that that's its only goal. That's not super realistic in this example. But now it's sort of motivating. Kind of nationally good performance consistent with the AI's capabilities. Because the AI now knows it's like, oh, like now I really want to get as good reward as I can, let's say. And that's the thing about training gaming is training gaming is sort of by hypothesis. The AI is applying its optimization pressure kind of optimally from the perspective of the reward process. And so the worry is then at that point the model's goals sort of crystallize. They stop changing. And now it just sticks around as a kind of curiosity. Curiosity-seeking AI, but in fact it appears to be like looking, you know, as nice and helpful and all the other things as you like. So that's the sort of training game independent origin of Beyond Episode Goals. There's a different story, which is more like SGD. It's more like the way that SGD finds to improve performance is to make the goal into a Beyond Episode Goal so that. It will motivate scheming. And notice we're giving SGD this sort of weird sort of foresight here. And I think there's an actually, that's an important indicator of ways this argument might be wrong. Because SGD is sort of this like, it's actually just following the like gradients in reward space. And so there needs to be a gradient at each step.


**Fin**

It's not enough that there is some.


**Joe Carlsmith**

That's right. You can't just like. SGD can't see. That far, it needs to get there incrementally, and there's a question of whether that could happen. But supposing it could, then the worry is something more like, let's say you had this AI, and let's say its goal is initially it cares about curiosity. It's supposed to be doing helpful, honest science, but actually initially it cares about curiosity. But let's say this curiosity is limited to the episode. And now SGD is like, okay. Hypothetically, SGD is like, well, how could I make this model perform better in training? One option is I could change its goal to become helpful, honest science instead of in the episode curiosity. Alternatively, I could just get rid of that in the episode bit about the curiosity. And now SGD finds if I do that, then the model. It kind of immediately starts performing optimally, assuming it was situationally aware, by the lights of the training process. And so the thought is, in this case, SGD is sort of actively driving towards scheming because it's such a good strategy, rather than it's sort of like the Beyond Episode goals, or actively driving towards Beyond Episode goals, so that it can create a schemer.


**Fin**

And the thought here is something like, well, you know, things that are explicitly reasoning about how to perform well on this... ...reward function and just really understand the context that they're part of, they're going to find a bunch of creative ways to do really well. And in fact, they're going to outperform, for that reason, systems which don't have any of that understanding.


**Joe Carlsmith**

Yeah, that's right. So, I mean, a way of putting it, I have this concept in the report called a max reward goal, which is basically like a reward which leads to roughly optimal training performance consistent with the AI's capabilities. So, obviously, you can't necessarily get, like, actually optimal training performance. But... The specified goal, by hypothesis, will be that. Reward itself, by hypothesis, will be that. Scheming will be that. And then some forms of misgeneralized goals will be that as long as they are suitably consistent with doing well in training specifically. But the sort of general thought here is that, yeah, like an issue, the sort of central issue with scheming is that it's a max reward goal. And so like if you got it, if you ended up a schemer, then the worry is you will actually do as good in training as like these other models. And these are two stories about kind of how that could happen.


**Fin**

Training game, independent goals, stories, something like, you know, before or after this situational awareness thing kicks in, the system being trained just develops beyond episode goals. And then given situational awareness. That triggers this kind of scheming type reason. Yeah, that's right. Hang on a second. I'm in this training regime and I have these goals. They extend beyond that regime. Looks like I could kind of pretend that I still care about... The specified goal so that I can go and get the thing I ultimately want.


**Joe Carlsmith**

Yeah, that's right.


**Fin**

The training game dependent goals, it's more of a story where this gradient descent process we are kind of updating on gradients over increments, some sense notices the advantages of scheming for instrumental reasons to do well earlier, or it's more likely to notice it than... The perfectly aligned trading state thing. And then once it latches onto that schema, it's hard to get away from it. That's another story.


**Joe Carlsmith**

A way to get rid of the notion of noticing and foresight is just to talk about what modifications are easiest or such that SGD is most likely to make them. And the thought would be that...


**Fin**

Closest, most common, most natural.


**Joe Carlsmith**

There's some sort of like, what does SGD tend to do? And the thought is that SGD will sort of move even from a within episode goal that is not yet max reward. That it will be kind of easier to move or kind of more natural or more SGD preferred to move to a Beyond Episode scheming motivated goal than like one of these other max reward goals.


**Fin**

Yeah, I kind of want to talk about both and reasons why you might think either one is likely. So start with training game independent goals is where you get the Beyond Episode goals initially. Yeah, so just other general reasons why you should expect these models to develop Beyond Episode goals. Like you said, it's kind of not useful by hypothesis for the training process. Why does that happen?


**Joe Carlsmith**

I don't, I'm not clear that it does happen. I mean, I think like, I think this is one of the substantive questions. And I think we can, we can. Try to get at it empirically by just looking at the dynamics of goal generalization by default. So one intuition for why it might happen is just the idea that like, well, do goals sort of come with temporal limitations by default or not? So like. You know, it's a little bit unclear how you'd set up an experiment like this, but like, you know, if you train an AI to like get gold coins and it's only ever within the episode and then you are within like 10 minute window and then you like give it some like longer time period in which it can like get gold coins or find some way that it could like sacrifice gold coins within 10 minutes for gold coins within an hour. What does it do? That's like just an empirical question for different types of training. And it's one, you know, that sort of thing. Obviously, that is not. I've not yet made that an actually informative ML experiment. I'm not sure how you'd run that. But in principle, it seems like you can just test what are the temporal dynamics of goal generalization in models. There is some thought that you kind of have to do extra work to get the model to only ever optimize within some limited window.


**Fin**

Yeah, it makes me think of GRU-type examples, right? Like I can go around and observe a bunch of emeralds. And what do I learn from that? Well, all those observations are... Compatible with this hypothesis that all emeralds are green if observed before the year 2025 and blue otherwise. As it happens, I don't like form that belief. I just kind of... Get more confident that all emeralds are green. And it seems like in a deep learning context, if you have a classifier model or whatever, it's generalizing pretty well in that way. It's doing the all emeralds are green thing rather than the really complicated grew thing. I don't know enough about this to comment much. It sounds like that's not obvious, and it's kind of interesting and surprising why that happens. But that's a kind of, you know, like at least one reason to think that the generalized goal is in some cases the more natural or more obvious thing.


**Joe Carlsmith**

I think that's a great example, partly because I think one way of setting up the thought that goals don't come with temporal limitations by default is the idea that kind of... A sort of just generalized non-temporally limited goal will be quote-unquote simpler. Whereas simplicity is this sort of like weird magic property, but it's like that thing such that, you know, generalization is good and doesn't overfit. And grew examples are sort of a weird example of like overfitting where you did this sort of unsimple interpretation of emeralds. And there's some like elusive property that like just all the emeralds are green has that like grewish emeralds don't. And, um... And like, so one of the stories about why schemers would be sort of favored by SGD is the notion that their goals can be simpler in a relevant sense. And I think that's quite related to the thought here. And in fact, it's sort of very hazy analogies with humans, which I think we should be like quite suspicious of. Sometimes when humans sort of do philosophy and try to systematize their goals, they're like somewhat drawn when you think about like, what discount rate should I have, for example, towards the future? There's this big class of, or sorry, big class. Some people are drawn to the thought, it's like, well, why don't I just have no discount rate? It seems like this weird extra thing.


**Fin**

It'd be weird if God specified that.


**Joe Carlsmith**

It's especially weird if it's like, well, yeah, you know, it's unclear whether God is where you should look for your moral story. But I think like there's some general thought that like it's kind of distasteful towards your moral reflection to be like the discount rate is 0.93 or whatever. And so like that's super weak evidence, but that's like the sort of thought. You might have about AI goals. Again, I don't think that's like, I don't think that's very strong. I think it's just like an empirical question. And I think in some sense, the default should be that goals are not beyond episodes. So I don't actually put that much weight on this. I will say there's another story you can have here about why you might get beyond episode goals somewhat naturally is that you're training. You're trying to get the AIs to optimize over long horizons, or potentially even that you're literally trying to get them to have beyond episode goals. This is probably the most likely path. So, for example, to be clear, just because an AI can be trained to have long horizon goals and they're still within episode if the episodes are long enough. So people sometimes have the intuition, well, if it has long horizon... Then it's now more likely to be a schemer. But that's actually not conceptually obvious. The same argument applies that a long horizon episode is still an episode and there's still no incentive to optimize past that. That said, I think there's actually reason to think that we will be actively trying to elicit beyond episode goals in our models because it's too much faff to give them very long episodes. So suppose I want your, like, basically, I want you to, let's say I want you to make the most money you can for me over the next year. I don't want to have to train you with RL on year-long episodes.


**Fin**

Yeah, take like a thousand years.


**Joe Carlsmith**

Exactly. So maybe longer. But so I need to somehow find some way to reward you based on some nearer term and kind of shorter episode. But I might nevertheless be trying to get you to be such that you are not like optimizing for that nearer term reward signal. You are instead kind of just like looking directly at the future. And so if that's how we end up. Training AIs to have goals. Now they have Beyond Episode goals by default. And now it's a little bit like, did you get that Beyond Episode goal right? Like you sort of threw the AI's gaze into the future, but then like, did you throw it at the right target? The AI is now just like staring at the future a bunch. And there's some intuition that maybe it starts to latch on to stuff about the future that... You didn't quite intend. So I think maybe that's a more active story about how you get beyond episode goals. It's still a little hazy how exactly that all works, but I think there's some intuition there that that's a scarier type of goal formation for this context.


**Fin**

Yeah, one thing you say in the report on this topic of where do these beyond goals, beyond episode goals come from, there's reasons on the other side too. So you can imagine if you're worried about those goals forming. You're designing the system, right? You want to do something about it. You might set up some training examples where you're giving the model an opportunity to sacrifice on the episode's reward for beyond episode. Things. And if maybe you're sufficiently sneaky about that and it's not sure what's going on, there's some reason you could like elicit these goals early enough. Does that sound right?


**Joe Carlsmith**

Yes. I mean, so if the model's not yet situationally aware, then there's, I don't think there's any conceptual barrier to doing that. You just have to think of the right test. Of course, you have to test a lot of the same. There's a lot of. And principal things that the model could be pursuing down the episode. So it's still hard to kind of root them all out. But there's no, yes, I think that's like a reason for some amount of optimism, especially if you can control when the model is situationally aware, or at least very detected. And this is one of the reasons I think, understanding situational awareness and learning, being able to know whether or not a model is situationally aware or not is a very important thing going forward. Because if it's not situationally aware, then there's all sorts of stuff you can do and kind of know that it's not scheming against you. You're not yet in this. Adversarial regime. And so you can shape its goals and its motivations and kind of see its true, its sort of true nature without it knowing that you're trying to do so. That is a path towards actively rooting out Beyond Episode goals as well.


**Fin**

Anything else you want to say on training game independent goals as a story for how scheming happens?


**Joe Carlsmith**

Maybe I'll just flag quickly. There's one other reason to be. Interested in something like Beyond Episode Goals is just the thought that we will want AIs that are pursuing long-term goals of some kind in some context anyway. I gave one version of that where you sort of are specifically training an AI to do long-term stuff using short episodes. There's also some intuition that I think is even harder to make out, but I do have a bit that longer episodes also seem somewhat more likely to give rise to beyond episode goals. And I think the thought there is something like the more you're sort of causing the AI to just spend a bunch of time thinking and kind of like doing like long-term optimization of some kind, you've sort of built the machinery.


**Fin**

Yeah, this kind of planning muscle. Yeah,


**Joe Carlsmith**

you've got this planning muscle that's modeling the future. And so it's sort of easier for its goals to latch onto something long term that is actually beyond the episode. Because the episode is longer and you're sort of encouraging it to think a bunch about the future and do a bunch of planning in that respect. So that's just like another way that this could happen.

### Will SDG find a path from saints to schemers?


**Fin**

Cool. So that's story one about how scheming happens. It involves these trading game independent goals. Talk a bit about the second story where you get these goals because they... Lead to scheming, in some sense. Yeah, maybe a question here, and you mentioned this already, is in a kind of hand-waving way, you can imagine a space of models, and there's this model that really intrinsically cares about the thing you want it to care about. And there's a bunch of different scheming models, because there's a bunch of different beyond-episode goals that would lead to scheming. And maybe they do well, maybe they are, in some sense, max-reward models. But when I kind of picture that space of models, that... The class of schemers is maybe just very far away and separated by a big kind of valley of bad performance because there's a bunch of confused kind of inept schemers who are like planning really badly. So yeah, why might you imagine that there's any kind of, you know, gradient descent incremental path from the training saint thing that we want to the schema?


**Joe Carlsmith**

I'm not sure there is. And I think this is one source of optimism about. This story. I will say, I think the intuition for why you might, let's separate the question of is there a path at all that SGD could take from the question of like. Is it the sort of easiest path? Because you could just say, look, it'll never get there because there's this valley it has to go through. And I think my general impression, I'm not a kind of, this is not my area of expertise, but my general impression is people have been quite impressed by the degree to which SGD can kind of find a way to get what it wants. And so there's sort of, you know, I think there's some thought that local minima.


**Fin**

Yeah, and like something, something high dimensions,


**Joe Carlsmith**

then high dimensional spaces make local kind of unlikely, I think, is the thought. And so I'm even somewhat more agnostic than that. I just think it's like, I am somewhat hesitant to be like, The blah incremental process cannot get to a place. Just, yeah. And I think for partly because I think we've seen evolution is an interesting example where, you know, sort of you can apparently get quite interesting structures that you might have thought you couldn't have built kind of incrementally out of. And so that's part of the reason I'm hesitant to go very hard on like SGD can't get there. I do think there's an intuition there where, for example, like, let's say you have My Curiosity and you have to incrementally increase its temporal horizon. You can't just be like, first, My Curiosity is within episode. And then you can't just like in one fell swoop drop that to make it sort of beyond episode. Instead, you have to kind of incrementally. It's not clear that that's going to kind of incrementally get the benefits of scheming to the same degree. And so there is an intuition that there's some sort of value that makes this difficult. I think there's also an intuition that. Probably, if you had the AI and it wasn't yet optimizing for anything beyond the episode, then probably the thing it's optimizing for is kind of vaguely in the vicinity of the specified goal or reward. Like, it's kind of nearby, right? Because it had to be doing decently in training. And so it's like a little bit... It's unclear. There's at least some case that like, it's just going to be easier to just make it.


**Fin**

It's like doing this work to deceive us that only cares about gold coins, where in fact it cares about mostly gold coins and occasionally other gold things.


**Joe Carlsmith**

That's right. Like if it's like slightly misshapen gold coins on the episode, for example. It seems like you could think, ah, the easiest way for SGD to make it max reward is to like make it care about slightly misshapen gold coins over all time. Or you could think, nah, just tweak the shape. And there's some notion that that's actually quite a bit more natural. Yeah,


**Fin**

it bounces right back.


**Joe Carlsmith**

And so I think that's a nice I have that intuition. I think it's an objection to this story. I think that the motivation for this story is indeed an image of something like the space you mentioned. Or this is my favorite formulation that I think people might disagree, which is something like, yeah, if you instead think that Schema-like goals are just like kind of quite nearby to most goals. Like sort of most goals have a schema-like goal kind of like floating right next to it. For example, if like most goals that are within the episode, you could sort of drop that temporal limitation and thereby make them schema-like, which is not clear because not all beyond episode goals motivate scheming. But. That's the sort of intuition for why it would be sort of easier for SGD to get to a schemer-like goal from a given within-episode goal that's not yet max reward. I think this is like a pretty weak argument. I think this could just not happen. So I don't want to come out and be like, ah, this is super, yeah, like a super strong consideration. But I do think it's something like that kind of commonness and goal space intuition that's driving the story.

### The counting and simplicity arguments


**Fin**

Yeah, okay. You know, we talked about two different stories in some sense about how you get scheming. Yeah. But there's a kind of argument that applies to both of them in some way. And it involves this thought that maybe schema-conducive goals are more common than non-schema goals or aligned goals. Maybe because they are simpler in some sense. Yeah, do you want to say more about that general argument?


**Joe Carlsmith**

Maybe I'll just step back for a second and say that. So the two arguments or the two sort of stories for scheming we've discussed thus far. I grouped them in the report under a heading of kind of arguments that talk about the path that SGD takes through model space. And so this is related to a kind of question in the discourse about scheming that I think is like a little bit conceptually underbaked, but does is relevant, which is how much quote-unquote path dependence there is in ML training. Where it's kind of exactly what that means isn't clear, but in this context There's some sort of thought like, is it important to talk about the path SGD takes? Or can you just sort of reason from first principles about like, what does SGD like? Or kind of which models are more kind of occupy a greater volume of the parameter space conditional on the model getting the reward you observe or something like that. And so there's a... Different section in the report that talks about arguments of this form that just ignore the path and just talk about kind of higher level properties of the final models and whether SGD likes them more or less. And I don't think these are fully separate. It's just sort of two different angles. And they can, but it does matter which you assume. So, for example, if you don't think that there's path dependence in the sense that SGD can kind of get stuck in a, like, let's say you thought schemers got worse reward. A slightly worse reward than specified or training science or reward on the episode seekers. And you thought that there was no path dependence of the type that would cause SGD to get less reward than it could, at least if you like, or conditional on the amount of training or something like that, that there's some sense in which SGD will sort of find its, at least given suitable training. Again, this is actually, I think, probably not right, but we can talk about this, but that it will find its way to its favorite model.


**Fin**

Yeah, we're not worrying about SGD latching on in some sense. That's right.


**Joe Carlsmith**

And especially, I think, now you don't, again. I think it actually takes some subtlety to work out how exactly path dependence interacts with these different arguments. But roughly speaking, if you imagine that SGD will sort of find a way to find its favorite model conditional on the constraints of training, then you really just want to talk about what's its favorite model. Or if it's going to just sample from the space of possible models conditional on the reward, then you don't necessarily need to talk about it getting sort of locked in to some place. You can just talk about what is the space here. And so that's the context in which this argument that you're referencing, I think, is most often posed. And so that argument, I call it the counting argument in the report. And roughly speaking, the thought is that the non-schemer goals are kind of... Much more specific than the Schemer goals. You know, if the training process rewards gold coin getting, then to be a training saint, you have to care about gold coins in particular on the episode. And then, or gold things, whatever max reward things are kind of compatible with gold coin getting to be a misgeneralized non-training gamer.


**Fin**

Or maybe something much more intricate and complicated than gold coins.


**Joe Carlsmith**

So certainly, I think people often imagine that actually a sort of training process that would be actually aligned with our values, where the specified goal was well specified, would involve this quite intricate. Goal of, I mean, you might wonder, but being helpful, harmless, and honest, something like that, that at least I had to say all three of those words. But sorry, I mean, that's not, but there, and then there's this connection with this discourse about the complexity of human values, where human values are, we care about like quite intricate things. And it's, there's not sort of this supernatural, simple structure that, that humans are optimizing for that they want, we want the AIs to be optimizing for. And then the thought is sort of. From some suitably ignorant perspective, if given that how specific these non-schemer goals need to be and how kind of wide the variety of schemer goals could be, there's some inference from that to the thought that we should be putting substantive probability on. Scheming. Now, I think it's quite unclear how that inference should actually be understood. Like there's some, we're using, we're imputing some probability distribution or some sort of ignorance thing going on here. And it's not clear exactly what it is. And so, you know, in principle, you could try to run this. With a more specific probability distribution at stake. And so people will sometimes do this in the context of visions of ML training that approximate it by imagining that you're kind of sampling with replacement from the parameter values conditional on the sort of distribution created by the initialization of the weights.


**Fin**

Yeah. There's a measure over the parameter space.


**Joe Carlsmith**

That's right. So you have an initial measure over the parameter space just from the initialization. And that's your sort of prior. And then you condition on getting the reward you observe. And so that leaves you with like the set of models that would be compatible with getting that reward. And then you could ask a question of that distribution. If you thought that SGD approximates that sort of sampling procedure, which there's some work on this, I haven't followed up exactly how far. If you wanted to, and that's a sort of paradigm example of a non-path dependent. ...regime. It's sort of, you kind of don't need to look at the path at all. You can just look at this distribution and imagine SGD as sampling from that. You can then ask the question, what's the ratio of the probability of a schemer versus a non-schemer in that distribution?


**Fin**

An image that comes to mind, which I think I came across is, and this is in the context of what updates look like over some distribution in general, but I imagine it applies here as you can imagine a sand tray, right? You know, over some space, in this case parameter space, and on every increment, on every update, you're taking some sand from the high loss regions and you're sprinkling it on the low loss regions. And eventually you accumulate these valleys and these peaks, and you're really trying to get the peaks as high as possible. I guess it's confusing with loss, right? You kind of want to get them as low as possible, but something like this.


**Joe Carlsmith**

Yeah, and so there's some notion of like, you could have a... Built out story of how to think about SGD of this kind. And then you could try to run a counting argument. ...via appeal to that. That's one way to run it. That would be a sort of precise way to do it. That's not the version that I think moves me because it builds in a bunch of assumptions about how SGD works or something like that. I'm sort of more... There's some sort of like meta uncertainty where I'm kind of like, ah, I don't like how common, in some intuitive sense, it feels like schemer-like goals could be in goal space. There's some thought that like, if all you know is that the model is doing well in training and like schemers would do well in training and so would these other guys, I'm kind of like, I don't like that. I don't like that. If that's truly all we know, and then it really seems like there's like sort of lots of ways in some intuitive sense to be a schemer. But I actually think it's possible that this is not a good argument. And I think it's there's for example, it is underspecified what is the sort of space of goals we're talking about here. And is it a sort of meta space? Are we talking about our uncertainty over like the types of distributions that could be at stake here? Are we talking about some specific story about like SGDs, what are called inductive biases, which is sort of What functions it's likely to find compatible with the data. And I think the bare version of the counting argument does not yet make that clear. So I think there's some intuition there. And I think it's importantly underneath some of these other arguments, insofar as these other arguments are somewhat loaded on the idea that like, it's beyond up, there's sort of a fairly wide variety of goals will lead to scheming. And that's why a proxy that crops up early in training, it's like. If it's beyond episode goal, it could be sort of otherwise the content could be quite varied and it could still give rise to scheming. Or if you're wondering about SGE sort of moving a goal in the direction of a beyond episode goal, it sort of can be a wide variety of contents for that beyond episode goal and still give rise to scheming. I think that intuition is still in play. But I actually think this is one of the I would love for people to do more work on like really pinning this down. And there's been some kind of arguments about that happening that I think have been useful. I think that's the sort of counting argument itself. And then you also mentioned a connection with the simplicity, the word simplicity in particular. And I think this is sort of of unclear relation in the discourse to the counting argument. So let's distinguish between two types of simplicity. One is what I'm calling trivial simplicity, which is often, I think, used by people who are like heavily into the notion of simplicity as a prior. Over hypotheses. And there, basically what you would do is you just take a probability distribution or a measure over some space, and you just say that the simpler regions just are the ones that are higher probability or higher measure. There are some results that at a first path strike me as circular, which purport to show that higher measure, if I understand them correctly, and I have not looked into this too much, there's a way you can get an equivalence between simplicity and a higher measure portion of some space, which has to do with, like, if you have access to the distribution and can create like a code for the different portions, then you can kind of code for the higher measure portions. With shorter codes. But that's if you have the distribution already. And note that that works for any distribution. So it's a little surprising if that's informative with respect to some substantive notion of what distribution you're actually facing. Because it works with every distribution. And so I am not enamored of notions of simplicity that kind of equate them with something like higher probability on priors or higher measure. So that means we have to have some independent notion of simplicity that is doing some work. And I actually think this is, again, I'm not an expert on the discourse about ML inductive biases, but intuitively I think people do have a substantive notion of simplicity at stake when they talk about things like. Why would it be a simpler function to like just learn a line instead of like overfitting really hard? If there's like, if you had your data points and they're in a line, why is a line simpler? It's not that we're like, it's a higher probability sample from the, it's like, no, no, a line is like simpler in some like sense that we have some. I mean,

**Fin**

for instance, some things take less English words to describe than other things.

### Overfitting and complications with the naive simplicity argument


**Joe Carlsmith**

That's right. So, and, and, but this is one of the problems with, with the notion of simplicity is almost every way of trying to hash out the notion of simplicity. As I understand it, it's going to be relative to some like. Encoding or some language or something like that. And so there's a question of like, how do we understand that in these contexts? I think that is all a bit gnarly. And I think people are a little bit loose when they talk about simplicity. The version I like best is something like number of parameters it takes to encode a thing. In the model. Again, that's sort of loose, but there's some notion that SGD is going to try to save on the parameters that it had to use or optimize to find a model of the relevant kind. And where parameters are understood here as somewhat akin to memory, or just some generic resource that SGD is trying to save on resources.


**Fin**

Or in particular to specify the goals, if I can use the saved resources as some sort of a tool. For stuff that enacts the goals more effectively.


**Joe Carlsmith**

That's right. And I think that's, so that's the notion I use that makes sort of most sense to me. But it's, there's a wide variety of notions of simplicity that could be at stake here. I distinguish a number in the report. But I do want to be clear that I think. The kind of counting argument, it sort of can become equivalent to the simplicity argument only on certain ways of hashing out the notion of simplicity and certain ways of hashing out the counting argument. Now, a benefit of the simplicity argument is it's more directly connected with the literature on inductive biases in ML. So there's this question of like, why do models not... Overfit. There's sort of predictions that they would overfit. They've got like all these parameters, but they don't. And so people often wheel in, there's like stories you can tell about that. And one prominent thought is that it's partly because models are kind of biased towards simplicity in some intuitive sense. Now, my understanding is there's also like objections you can raise to that. I haven't gone deep in on this. I actually think like understanding model inductive biases is super important for scheming. It's not, I hope people go out and really do it. And I fully admit to not having run this to ground at all. But you can say that whatever the thing is that explains why models don't overfit, that sort of bias, you can then say... ...likes schemers better. And that's a sort of somewhat different argument than the counting argument, though it's also connected.


**Fin**

And re-overfitting, maybe this is wrong, but you might think that in some sense, for some data that you're fitting to, there are, quote-unquote, more functions that overfit with the same loss than the kind of properly generalized... ...function which does not overfit. But that probably generalized function that doesn't overfit is also intuitively simpler. That's a case where the simplicity and the kind of counting argument thing are not saying the same thing. So this is not... Yeah, there's two angles in the same...


**Joe Carlsmith**

Yeah, I think that's a good point. So you can... An objection you can raise to the counting argument, and this has been... I think this work is not yet public, but a few folks have raised this objection, is that if you imagine a sort of equiprobable distribution over, like, lookup tables, and you have a set of tables... That are compatible with some data, and then you try to count them, or even you just sample from that, you're going to get the wrong prediction about, you'll predict overfitting, and that's not how deep learning works. And I do think one, to me, a salient response then is like, to the extent we explain the not overfitting bias, some other sort of bias, like a simplicity bias, then we do have to talk about this other version of the argument, which is does that bias like schemers better? And people have argued that yes, it does.


**Fin**

So, okay, there's a kind of... A hand-wavy analogy to these questions about generalization in just a standard deep learning context. And I guess it goes something like this, right? So with the counting argument specifically, not the simplicity thing, the thought is that there are more regions of parameter space or more potential models that misgeneralize in some important way, specifically this scheming thing. And, you know, fill in the details, but that's a reason to think that that's what pops out the end of the training process. But maybe that argument can kind of be carried over to like less. Thank you. And given that that argument, which sounds superficially pretty reasonable, given that it fails in this really familiar content, I don't know, that's just a reason maybe to throw up your hands and think, we can't really learn much from it. Does that sound right?


**Joe Carlsmith**

Possibly. So my favorite version of the counting argument is not the sample over the possible functions. Especially not functions. I think, as I said before, it's very important that you condition on the model having goals. And I think that's... Though... Not all models with goals are the same. So there's still like other things that can vary. And so just thinking about goal space, I think that's actually somewhat misleading because if you have different goals, you also might need to be a different model in other respects. The version I endorse or that it sort of moves me most is actually like explicitly very hand wavy. It's sort of like, ah, it just seems like there are lots of ways you could be a schemer and you couldn't tell if you got one. I've updated somewhat against the counting argument after sort of engaging with some of these questions. And I do think it's possible we could just like really drill down and be like, dude, the counting argument, let it go. I think the form that I like am interested in is not necessarily a like sample or it's not specifically a sample over the space of functions. It's some hazier sense of. The kind of, I mean, a way of putting it is maybe in terms of simplicity at some level, that it has to be more specific, the goals have to be more specific to be non-scheming than to be scheming.


**Fin**

And then I guess if we're thinking about comparing to familiar... ...cases in deep learning, and we're imagining similar hand-wavy simplicity arguments there. Well, it does actually look like deep learning finds surprisingly simple answers.


**Joe Carlsmith**

If you like the counting arguments fail for lookup tables objection, which I think is worth contending with, you do still need to deal with the simplicity thing. And you have to have some story about why deep learning selects the particular type of models it does. And then you should at least ask the question. How does Schemers fare on that story? And simplicity is a classic piece of many people's picture of how deep learning selects the models compatible with the data. And so the question of whether Schemers would be simpler is important. Now, notably, there's still this, I think that some form of accounting argument comes in to the thought that motivates. Thinking that schemers are simpler. So basically there's, I think the classic thought for why schemers would be simpler is something like, well, let's say you're going to have, especially if you have these complicated human goals. And that's the specified goal. The Schemer, any old long-term goal can be a Schemer goal. So like, can't you find one that's simpler than these human values? You know, so for kind of almost like many conceptions of simplicity, you could find a Schemer-like goal. And in some sense, I think you can kind of do this generalization of that thought where you're like... Look, let's say I don't know what the models of inductive biases are. And now you're sort of like, well, which ones are favored?


**Fin**

You're like going to level up, you know?


**Joe Carlsmith**

You sort of go one level up and you're like, well, here's the specified goal. It's these like complex, specific human values. Whereas schema-like goals, well, there's kind of lots of them. Again, but now lots in what space? I don't know. But there's some thought that like, well, whatever the inductive biases are, it's going to be kind of easier to find a schema-like goal that does well according to those inductive biases because something like the counting argument. But now we're back at the counting argument. And so, I mean, there's a weird dynamic there. I don't think I've like run this to ground. But that's sort of part of why I think the counting argument is kind of importantly underneath. Some of this stuff. Like you need, like why think that the inductive, if you really were imagining that there's sort of two alternatives, it's like this specific human level goal or like complicated human goal or schema-like goal. Why, I guess a way of putting it is like, well, why think the inductive biases favor that one? And there's some notion that kind of on priors. For some sufficient uncertainty about the inductive biases, you should be worried that it favors a schemer instead.


**Fin**

I don't think we're going to run this around either, but this makes sense, right? There's like intuitive stuff going on. More work needed.


**Joe Carlsmith**

More work needed. I really, I mean, one of my main hopes, I really, the report is long, but it is, I really don't feel like I've like worked it all out on these things. Part of what I'm trying to do is just like kind of collate and clarify and kind of make somewhat more accessible to people who want to read a long report. Like, what I see is the kind of state of the argument here, and I think the state of the argument is very much not run to ground. I think there's, like, room to make a ton of progress on, like, a really important question, potentially just by thinking about it more, but especially with some empirics.

### A reason schemer goals might not be much simpler


**Fin**

Okay, anything you want to add on counting arguments or simplicity?


**Joe Carlsmith**

Yes, I'll add one way in which I think the simplicity argument I just gestured at is weaker than sometimes supposed. So, you might have thought... There's this sort of reasonably substantive simplicity benefit for some, whatever we mean by simplicity, that you get from the difference between pursuing some complicated human values something something versus whatever the sort of simplest schema-like goal is that you can find. But I think a thing that that picture sometimes misses is, A, so a non-schema goal doesn't need to be. Just to be a non-schemer as opposed to be like a perfectly aligned human value something. Even the specified goal doesn't need to be complicated, right? So gold coins or whatever. And then notion of reward is itself like of unclear simplicity or like next token prediction or whatever. So there's already a question of whether you should be thinking that the goals, the model, the specified goal is just to be a non-schemer. The goal doesn't need to be that complicated. So that's point one. But I think more importantly… All of the model classes here. I think we can assume, or this discourse often assumes, have sufficiently detailed world models that regardless, they have representations of all of these things. So by hypothesis, all these models we're saying are situationally aware. So they're going to have representations of the reward process, right? And they're also going to have representations of concepts like honesty and human values and all the rest, right? So especially if we're using a conception of simplicity that's sort of like, it's more like how many parameters to represent the thing. So in a super toy model, if you're imagining like the model has a goal slot and like how much memory is required to like put in the goal slot. You know, what it likes. The model doesn't actually have to kind of... All the models represent these complicated goals. And so the challenge is really about kind of pointing at or repurposing or somehow like making use of those representations in guiding the model's behavior, which is somewhat different from like, do you represent them at all or not? And so once you have to run it at the question of like, well, some goals will be... Easier to repurpose from the world model. It's like, again, it's like you at least can't draw on intuitions like human values are complicated, but schemer goals can be simple. You have to talk about like how hard is it to repurpose some things from the world model rather than others. And that introduces, I think, an additional layer of kind of ambiguity about how simplicity arguments work.


**Fin**

Yeah, I got it. And maybe to try saying that back, if you just assume a complete and detailed enough world model. In the case of schemas or aligned models, then this kind of argument that the schema is in some sense saving on parameters or in some sense simpler... It's not obvious it's actually saving on anything if the aligned model can just point at the part of the representation that the schema also has and says, you know, I care about that. The human value is part of my representation. The thing that the schema already understands.


**Joe Carlsmith**

Yeah, that's right. And so, I mean, you'd have to sort of rerun the argument at the level of the difficulty of pointing. And you could do that. And you could say, well, because so many goals are schema-like goals and some things are going to be easier to point at than others. Interesting, yeah. Then maybe you should think again on priors that that. You should, it's going to be easier to point at some schema-like goal. But now we're in like, especially, at least you can't, now we're just kind of. Totally separate from the actual content of the goals in question, about which we might have had actual substantive intuitions about simplicity. Now it's sort of at the level of the model's cognitive pointing process.


**Fin**

What even is that? Yeah,


**Joe Carlsmith**

what's up with that? So I think you can try to recover some of this simplicity argument, but it gets more hairy.

### Is scheming too costly?


**Fin**

So that was two intuitive, very intuitive arguments for why scheming might be likely. ...compared to non-scheming. Let's talk about a reason it might be less likely than otherwise. And I guess it's something like this. When I imagine an aligned model, a training scene, right? You know, you're intentionally rewarding it to care about something, and it succeeds in caring about that thing. And then, you know... It uses those goals to successfully get reward or reach low loss. With scheming, it's like, you know that meme with the gymnast and there's like two slides in one hand? You know, it's like. It comes to care about something which somehow isn't the intended goal, and then it realizes it's in this training context, and then it reasons that in order to get the goal, it should pretend to not have that goal, and then it successfully pretends to get reward, to eventually seek power to get the original goal that wasn't the specified goal. And that just seems not only more complicated, but specifically, it feels like it involves a bunch of extra steps. Yeah, I wonder if you could say more about that thought.


**Joe Carlsmith**

The way you put it is great, and I think this is... In my head, the strongest argument against scheming, and sorry, we should distinguish between two versions of the thought you just said. So one is this kind of intuitive thing of like, I guess the way I put it is, I think one of the arguments for scheming is that scheming is sort of robust in goal space. I think there's a different intuition that scheming is sort of like. Brittle in like hypothesis space. Like it's kind of like, it's kind of like, it's like, wow, that's like a complicated theory of your model. And like, you had to say a bunch about why the model is going to do that. And so there's some notion of just scheming as a kind of weirdly specific hypothesis about your model. I want to set that, I do have that intuition, but I want to set that aside for a second and focus instead on what I think is an even more forceful counter-argument, which is just that scheming involves extra cognitive faff. And in particular, extra instrumental reasoning in pursuit of the model's goal. So the schemer, at the least, has to have this model of the future. It has to know, it has to think about what will lead to power later. And then it needs to kind of backchain from that to its behavior now and conclude that it should scheme. It then also needs to be suitably on the lookout for... Opportunities to escape or defect or take over. And so there's some additional like cognitive, it can't just forever be a non-schemer. It needs to do it. It needs to have some at least condition in which it will, you know, do something else. And then most costly is the, for certain sorts of schemers, the scariest type. They need to be. Actively undermining stuff. And in that sense, performing actually differently from a full-on training gamer or a full-on... So that's like a slight ambiguity. My definition of scheming is that this sort of schemer actually deviates slightly from max reward behavior when doing so will be especially conducive to takeover. So maybe it's sort of writing code and then it takes just a little extra time to insert a backdoor. And therefore it gets like slightly lower reward, but now has kind of increased its chance of takeover. But that involves... You know, now this is an extra challenge if you have to like have a good enough model of all the monitoring and all the ways you might get caught. And you have to like make up a story about what you were doing with that time. And you have to like somehow, oh, what if I got audited? Or there's like a bunch of extra things you have to do as a model that is actively undermining stuff. And also, I think importantly, both for that and for the checking on escape defection opportunities. You can't just, or there's a sort of balancing act that a schemer has to engage in, especially if you're imagining a setup of the form that I often imagine where we're really trying to get our AIs to help with safety-relevant work, which is that if it waits kind of too long and it just sort of plays super nice and straightforward, and we're suitably good at getting valuable AI safety cognitive labor out of kind of straightforward models, then at some point we might solve it. And then it might not, it might not. Be able to take over later or the sort of plan might fail. So it can't just be arbitrarily kind of straightforward forever. But then similarly, if it like breaks out. ...too fast and gets caught, then we suddenly have interesting new tools available to us. If you caught a live schemer... Right.


**Fin**

There's a specimen in the wild.


**Joe Carlsmith**

Now you've got a specimen, you can rerun the content. Now maybe you look back at all of the things that exactly led to it. Suddenly you can really sound the alarm. Hopefully, there's a question of whether the world would respond well enough to catching a schemer, especially depending on the ambiguity of the case. But broadly speaking, it's potentially quite bad to get caught, especially caught... Not just like slightly underperforming. But like caught like inserting backdoors into the code or something like that, or caught coordinating with other copies of yourself on like a code word or, you know, God knows what. That's a bunch of extra cognitive labor. And I sometimes think of it in terms of analogy with like social deception games, like Werewolf, where I at least find being a werewolf in a social deception game like Werewolf quite a bit more taxing.


**Fin**

Yeah, it's harder.


**Joe Carlsmith**

It's harder because you have to model, you have to both be just, a way people talk about this is sort of deception. Normal reasoning can offload a bunch of the consistency and the sort of that makes sense-ness to the world. Whereas deception needs to have enough of a model of the world, enough of a model of everyone's models of the world. Now, in practice, people win at werewolf as werewolves. People get power as liars. These effects empirically are not strong enough to prevent deceptive humans from succeeding. But it is a decently chunky difference, I think, in what a model has to be doing as a schemer. Relative to a non-schemer and one that other things equal. Like if I imagine the benefits on like whatever criteria SGD likes of having like a simpler goal and in particular a simpler to point out piece of the model's world model as its goal versus like having to pay these extra costs of like thinking, doing a bunch of this extra thinking and stuff. I'm like intuitively the extra costs seem like substantively more. What do you mean by that? So my understanding is like a current transformer model. It's not that many serial layers.


**Fin**

It's very fat, but it's pretty short.


**Joe Carlsmith**

Something like that, yeah. So like short is bad for serial steps. Now, future model architectures might not be like this, and there's a lot of ways. Like recurrence could change this picture and other things, or you could have scheming that takes place in sort of at a different level of abstraction. But I think... Overall, like kind of, especially if you're using sort of precious serial time, having to conclude that you're, you should be a schemer, and especially doing that on each forward pass or something like that.


**Fin**

It's like, oh, gee, I haven't got much time left to actually do the thing.


**Joe Carlsmith**

You're like, really, that's that was like 10% of your serial time or something like that. And I have some Tory calculations on this in the report. I don't think the calcs are especially good. But I think that intuition, combined with the just general sense that this is a lot of extra faff. I think that's like one of the strongest. The idea is that scheming requires a bunch of resources that are not.


**Fin**

Useful directly for rewarding the episode. And as such, these schemas and training will just perform worse than the aligned things. And so they'll just be selected away.


**Joe Carlsmith**

That's right. So that's why I think there's this concept I have in the report, which is not super well-defined, but I'm calling it Slack. And which is roughly speaking the question of how... Hard training punishes kind of suboptimal performance or how like relentlessly do you need to kind of compete in order to like survive training? Now, this is I think this is itself like quite hairy. It's not clear it's going to make theoretical sense. But the broad intuition is something like, you know, suppose you work at a financial firm or something. If you're if it's like a hyper intense firm. Then you kind of might really just need to always be getting the most money for the firm. Whereas if it's like quite relaxed, then maybe it's easier to like insert backdoors or embezzle money or like do other things with your time. It's not totally clear how this works, but overall, like the more slack there is or the more like surplus of cognitive resources the model has relative to what's required to maintain it's like getting selected by training, the easier it is to. Kind of pull this off. And that's, I think, part of the intuition for why people often have the view that more capable models are more likely to scheme. It's not totally clear how to make out that intuition, but I have it too. And one reason you might think that is like once the model is like, oh, it's already thought for a thousand human equivalent years about the future kind of regardless. And now it's like a lot less of a faff to like notice that this particular causal dynamic of like, you know, it could get more power by doing this strategy. And so there's some general sense of like the smarter the model is, the more it's sort of already doing a ton of this instrumental reasoning regardless. Got it. Maybe it's less of a cost.


**Fin**

Potentially free resources when those resources aren't all needed. Maybe.


**Joe Carlsmith**

It's not totally clear that that's the argument is structurally different for a smarter model. I think many people have the intuition. I have the intuition, but it's the costs come in there. And if it has a surplus, then it's easier to pay them.

### Goal-guarding and other assumptions needed for scheming


**Fin**

This idea is kind of interesting. I'm imagining, for instance, there are human jobs which just aren't fully cognitively demanding. You're a security guard, right? And you're just kind of on standby. You've got a bunch of downtime to think about. Maybe I can build a cardboard bottle of myself and I can go and take a break. Classic. That's one case against scheming. I'm curious if there are any other reasons you might think it's less likely.


**Joe Carlsmith**

Yeah, so there's a big section of the report that we haven't talked about much, which is about the third condition you mentioned a while back. So there's sort of situational awareness beyond episode goals and then kind of concluding that the best strategy for pursuing those goals is to scheme. I think it's often taken for granted that, well, once you, I mean, and we've been taking for granted thus far that, well, if you've got a beyond episode goal, obviously you want to like. Scheme. You know, don't you want to take over the world? Obviously, everyone wants to take over the world or something like that, which is notably false. And it's kind of important, famously not actually true that humans are sort of in it or most most humans are not in any kind of deep sense trying to take over the world. I think that's an important fact in this context. The classic story about that, as I mentioned earlier, is the story about goal guarding. Yeah, so basically, I think I think. Another substantive category of objection to scheming, which I also take seriously, is just that there's a number of additional assumptions and kind of conditions that need to also come together for scheming to be a good instrumental strategy in the way that it's often thought to be. And then, so the classic story about why scheming is a good instrumental strategy is this goal-guarding story, which I mentioned. But for the goal-guarding story to work, it needs to be the case. So there's sort of two conditions. One is that engaging in scheming prevents modification of the model's goals to a degree that is sort of useful to it, kind of those goals later. And then two, that this Fact makes it the case that scheming is sort of overall the best choice, even though the model could do other things. And so just focusing on that first bit, does scheming kind of prevent modification to the goals? I think this is quite unclear. If you imagine an analogy, say I'm in the desert and I have a machine hooked up to my brain and the machine, there's a trillionaire who wants me to stack bricks as efficiently as I can for a million years. And then after that, I will get a million dollars or sorry, I'll get some very large amount of money, whatever. And currently, let's say I want to use that money to like.

{% image "carlsmith-share-4.webp" "The brick stacker" %}

It's quite unclear, intuitively, to me. It's a very open and miracle question. Will you just sort of pop out at the end and go like, okay, malaria now? I don't know. It's like you spent a while getting your brain like really messed up in really brick-related ways. It seems at least plausible that you're kind of weird about bricks when you come out at the end and potentially you're just like a quite different person. And if that's true, then that sort of lowers substantially the value of executing the strategy. There's also some other like kind of somewhat more complicated objections we can raise to the kind of goal guarding hypothesis that scheming prevents goal modification. But overall, I just think that's that. So that's like an additional empirical uncertainty. There's actually been some empirical work on that recently out of Anthropic, which I think is exciting. But that's another way scheming could the sort of traditional story could fail. Yeah. And then the other one is in that second condition. This is just on the goal guarding story. The second condition that it'll be sort of worth it overall to scheme. That too requires a bunch of additional structure to be true. So in particular, imagine you're like GPT-6, such that you could scheme and thereby preserve your goals till the end of your training. And even your deployment. But what if you can't escape or break out? It'll only be GPD-8 that will be able to break out. Well, now your main path to kind of future influence, if you're trying to propagate your goals forward, is then to... Somehow intervene on GPT-8's goals, perhaps by helping train GPT-7 and changing GPT-7's goals and GPT-7 then helps. But this is a very, now quite a long chain to your goals sort of propagating all the way to a kind of the AI that will be in a position by hypothesis to like kind of break out and take over. There's a bunch of, I think, additional uncertainty there. It's like you have to have this story that like you can actually, this is going to get you enough power. And also that you don't have any other priorities. Like if you have other stuff you want other than to like eventually break out and take over, then it's going to be. You know, quick, then it like matters a lot, like how, what your probability is it's exceeding in the sort of breakout or like what, there's just like, if you have other stuff, like if you're stacking bricks, you want to do malaria, but you also like chocolate, eating chocolate now, then if you think it's like sufficiently unlikely that you're ever going to get that money, then you might just eat chocolate now and then get modified even more by the machine. So there's a bunch of, I'll just flag, that's, I think there's a whole extra category of uncertainty around just like in what contexts and for which goals. Would scheming even be a good instrumental strategy, even conditional on having situational awareness and beyond episode goals? And that's another big bucket of doubt for me that cuts my probability on this.




**Fin**

And one thing I'll pick up on there is these analogies that we've talked about a bit to human cases, maybe you're taking a bunch of exams and then eventually you get a certificate or whatever, they can be misleading for roughly this reason. Easy to forget that training regimes at stake here involve a huge amount of modifications to really every parameter and sometimes every neuron. If there's also a kind of messiness or blurriness about what counts as goals and what counts as world models of capabilities, it's just like much less obvious that those goals get preserved and as such that scheming is worth it compared to other things. Great, so that was a lot on scheming, what it is, what's likely, why it might not happen. Those arguments weren't quantitative and we haven't talked about overall likelihoods or numbers at all.

### Joe's overall takes

**Fin**

But yeah, I'm really curious where you land on this. You thought about a lot. How likely does scheming feel now?


**Joe Carlsmith**

I have thought about it a lot, but I don't feel at all kind of... I'm not confident in my take. As I said, I think these arguments have not at all been run to ground, and I really hope other folks do more work on it and more empirical stuff. And I have a section at the end of the report where I talk about the empirical research directions that seem most exciting to me. I do give a probability in the report, which is roughly if you train a coherently goal-directed, situationally aware, somewhat better than human-level model. So those are all kind of important conditions. And you do that. Using the sort of baseline machine learning methods, but on long horizon tasks in the real world, then my subjective probability is roughly 25% that this model will be sort of substantially a schemer. I think maybe I'm a little lower than that now since I wrote the report. And that, yeah, as I say, that does condition on goal-directedness, conditions on situational awareness. You know, that's not a sort of super stable probability. I think the main thing where I'm at is I think this is, you know, plausible enough and scary enough. That we should be taking it seriously. I also think it's just like really fertile ground for like getting. Yeah, more clarity. And I think it's really core to the story, the scariest stories about misaligned AI. So I think this is like an opportunity to just really clarify the threat model and maybe just kind of get a bunch of, yeah, further confidence about where things will go. And I think it's really ripe for more work. So I hope folks are interested in this topic. Yeah, you know, check out the report, get in touch with me. And hopefully, we can kind of figure this stuff out.

### Outro

**Fin**

That was Joe Carlsmith on Scheming AI. If you're looking for links or a transcript, you can go to hearthisidea.com forward slash episodes forward slash Carlsmith. If you find this podcast valuable in some way, then probably the most effective way to help is just to write an honest review wherever you're listening to this. You can also follow us on Twitter. We are at hearthisidea. Okay, as always, a big thanks to our producer Jessal for editing these episodes,
and thank you very much for listening.
