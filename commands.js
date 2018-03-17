//terminal by maki https://maki.cat/
var commands = {
	"help": {
		desc: "Shows this page",
		action: function(c) {
			c.print("Here are the commands you can use:");
			for (var i=0; i<Object.keys(commands).length; i++) {
				let key = Object.keys(commands)[i];
				if (commands[key].hidden) continue;
				let usage = (commands[key].usage)? " "+commands[key].usage.trim(): "";
				let desc = (commands[key].desc)? commands[key].desc.trim(): "";
				c.print("    "+key+usage+": "+commands[key].desc);
			}
		}
	},
	"echo": {
		desc: "Echo message to the user",
		usage: "(msg)",
		action: function(c) {
			if (!c.msg.trim()) {
				c.print("You didnt specify a message! Try \"echo (msg)\"");
				return;
			}

			c.print(c.msg);
		}
	},
	"clear": {
		desc: "Clears the terminal",
		action: function(c) {
			c.clear();
		}
	},
	"rainbow": {
		desc: "Toggles rainbow mode",
		action: function(c) {
			rainbowToggle();
			if (!rainbowColorActive) {
				c.print("rainbow mode off :(")
			}
			else {
				c.print("COLORS!!!")
			}
		}
	},
	"color": {
		desc: "Change the color",
		usage: "(0-360)",
		action: function(c) {
			hueDegree = c.msg;
			hueCommand();
			c.print("color set to "+c.msg+" degrees")
		}
	},
	"hello": {
		hidden: true,
		action: function(c) {
			c.print("hi! :)")
		}
	},
	"same": {
		hidden: true,
		action: function(c) {
			c.print("same")
		}
	},
	"playall": {
		desc: "Plays all animations",
		action: function(c) {
			akarin(); tomato(); door();
			c.print("I hope you're not wearing headphones")

		}
	}
}

var terminal = new Term({
	id: "term",
	motd: "Type \"help\" for a list of commands.",
	error: "Command not found! Try \"help\"",
	cmds: (function() {
		let obj = {};
		for (var i=0; i<Object.keys(commands).length; i++) {
			let key = Object.keys(commands)[i];
			obj[key] = commands[key].action;
		}; return obj;	
	})()
});

terminal.spawn();