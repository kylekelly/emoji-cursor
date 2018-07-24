//Generate png favicon from Emoji - source:https://koddsson.com/posts/emoji-favicon/
const favicon = document.querySelector("link[rel=icon]");

if (favicon) {
  const emoji = favicon.getAttribute("data-emoji");

  if (emoji) {
    const canvas = document.createElement("canvas");
    canvas.height = 64;
    canvas.width = 64;

    const ctx = canvas.getContext("2d");
    ctx.font = "64px serif";
    ctx.fillText(emoji, 0, 64);

    favicon.href = canvas.toDataURL();
  }
}

//Vue.JS app controls Emoji Cursor form and output.
		var app = new Vue({
			el: '#app',
			data: {
				message: 'Hello Vue',
				selectedEmoji: '😀',
				emojis: [
					'😀',
					'👍',
					'🤔',
					'👉',
					'🙌',
					'‍😱',
					'❗',
					'❤️',
					'💩',
					'🤖',
					'👨‍💻',
					'‍👩🏻‍💻',
					'🔥',
					'🍀',
					'‍🌎',
					'🌈',
					'💦',
					'🍺',
					'🥊',
					'🌟',
					'🎮',
					'🏁',
					'💵',
					'💯',
					'🇨🇦',
					'🚀'
				],
				range: 40
			},
			computed: {
				css: function() {
					let font_size = (this.range * 0.6).toFixed(0);
					let width = this.range;
					let height = (this.range * 1.2).toFixed(0);
					let y = (this.range * 1.1).toFixed(0);
					let css_string = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='${width}' height='${height}' viewport='0 0 100 100' style='fill:black;font-size:${font_size}px;'><text y='50%'>${this.selectedEmoji}</text></svg>") 16 0,auto`;
					return css_string
        },
        cssCursor: function() {
          return 'cursor:'+this.css+';';
        },
				styleObject: function() {
					return {
						cursor: this.css
					}
				}
			},
			methods: {
				copyCss: function (event) {
					var tester = document.querySelector('.preview__tester');
					tester.focus();
					tester.select();
					try {
						var success = document.execCommand('copy');
						var message = success ? 'yes' : 'no';
						console.log('CSS copied to clipboard: ' + message);
					} catch (err) {
						console.log('Unable to copy', err);
					}
				}
			}
		});