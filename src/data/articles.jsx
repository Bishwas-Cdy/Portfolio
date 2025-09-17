import React from "react";

function article_1() {
	return {
		date: "17 Sep 2025",
		title: "I Made This Page to Fill Up the Map on Homepage",
		description:
			"Yes, this exists purely so my homepage map isn't sad and empty. You're reading this, which probably means either you're curious or have way too much free time. Either way, welcome to my attempt at pretending I'm globally influential.",
		keywords: [
			"Homepage Map",
			"Filler Content",
			"Sarcastic Coding",
			"Random Dots",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph"></div>
					{/* <img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/> */}
					<p>
						Somewhere on this map is a dot that represents me. Maybe it's real, maybe it's fake, maybe it's a portal to another dimension I accidentally opened while debugging Python at 3 AM. Honestly, I don't even remember putting half of these pins here, and some of them might be ghosts, cursed, or tiny protest signs against my existence. Each pin is a monument to my questionable sense of importance, a subtle cry for attention, and a reminder that yes, I made this page purely so you'd see more colors on a homepage. Empty spaces are sad, lonely, and emotionally manipulative, and my ego demands vibrant chaos.
						<br/>
						<br/>
						Click around if you want. Each location has a story, none of which are remotely interesting, most of which I made up while questioning every life choice that led me to web development. Maybe there's a story about a cat that walked across my keyboard and accidentally deployed a live server. Maybe there's a tale of an ancient coffee stain that somehow became a symbol of lost productivity. Maybe there's nothing. Probably nothing. That's peak coder energy, creating chaos, pretending it matters, documenting meaningless dots, and hoping someone notices before they die of boredom.
						<br/>
						<br/>
						Stare at the pins. Contemplate the fleeting nature of internet attention, the absurdity of mapping nothing, and the undeniable fact that you, dear reader, are now part of my experiment in existential trolling. Every color, every misaligned dot, every hover effect you see is a calculated act of subtle chaos. Or maybe it's just random. I honestly cannot remember.
						<br/>
						<br/>
						Feel free to get lost. Zoom in, zoom out, click a dot, regret your decisions. Somewhere on this map there's a secret dot that I claim is a representation of my childhood imaginary friend who now contributes to open-source projects without compensation. Maybe it's there. Maybe it isn't. The uncertainty is part of the experience.
						<br/>
						<br/>
						Congratulations, you've officially wasted your precious brain cycles reading this masterpiece of nonsense. I curated this with love, sarcasm, nihilism, a hint of panic, and approximately seventeen cups of coffee that were entirely unrelated to productivity. If you ever feel empty, hopeless, or just curious about the absurdity of life, come back to this page and stare at the map. Maybe the dots will talk to you. Maybe they'll judge you. Maybe they'll send you emails. Actually, probably not.
						<br/>
						<br/>
						In summary, this page exists, the map exists, the pins exist, and I exist, sort of. Welcome to chaos, welcome to nonsense, welcome to the ultimate filler content experience where you learn nothing, enjoy nothing, and yet somehow feel entertained by my questionable sense of humor. Go ahead, click some dots, question reality, and know that somewhere, somehow, a Vibe Coder is laughing at your existential despair while sipping coffee and ignoring his own responsibilities.
					</p>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "16 Sep 2025",
		title: "Why Humans Even Started Coding",
		description:
			"A deep dive into why anyone thought typing random symbols into a machine could possibly do anything useful. Spoiler: it doesn't.",
		style: ``,
		keywords: [
			"Why Humans Even Started Coding",
			"Coding is Nonsense",
			"Variables Hate You",
			"Algorithms Judging Life Choices",
		],
		body: (
			<React.Fragment>
				<div>
					<p>
						Why did humans even start coding? Honestly, nobody knows. Someone probably spilled coffee on a keyboard, pressed a few keys, and decided, yes, this is a good idea. And now here we are, generations later, pretending that writing loops, functions, and mysterious error messages is meaningful.
						<br/>
						<br/>
						Coding is just a socially acceptable way to talk to your computer in a language it will hate, make mistakes about, and then mock you with red text. Every 'successful build' is a lie. Every algorithm is secretly laughing at your life choices. Variables don't care about you. Loops are just cruel traps that repeat your failures indefinitely. Comments in code are for people who need to feel like their suffering has a purpose.
						<br/>
						<br/>
						Frameworks, libraries, APIs, fancy words humans invented to make chaos look like structure. You think you're building something useful? Ha. You're just organizing your existential despair in functions and classes that will inevitably break for no reason. Stack Overflow is the only true place where misery, false hope, and desperate copy-paste solutions converge.
						<br/>
						<br/>
						Coding tutorials exist to convince you that anyone can do it while secretly reminding you that you are not them. The entire programming ecosystem is basically a pyramid scheme of frustration: you struggle, debug, and Google endlessly, and in return you get… slightly less frustration, maybe. IDEs are just judgmental text editors with delusions of grandeur, and syntax highlighting is a cruel joke that pretends your errors are color-coded for clarity.
						<br/>
						<br/>
						At the end of the day, coding is pure nonsense, an elaborate performance art where humans dance around bugs, worship syntax, and pretend errors are learning experiences. Every project is a monument to wasted time, every commit a cry for validation, and every merge conflict a tiny apocalypse. So congrats, if you're still here, you've officially signed up for a lifetime of typing meaningless characters into a machine that doesn't care about you. Welcome to the Dao of Bullshitting: Coding Edition.
					</p>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
