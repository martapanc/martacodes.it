A **Figma** plugin that turns a YAML or JSON file into an Instagram carousel, laid out with the components already in
the Figma file – so the design stays in Figma and the writing stays in a text editor.

Slides come in four types – text, list, quote and stat – and the plugin does the tedious fitting work a designer would
otherwise do by hand. Body text steps its font size down until it clears the slide's bottom margin, scaling
proportionally so inline bold and italic ranges survive. When a slide can't fit even at the minimum readable size, it's
split: paragraphs are packed greedily into as few slides as possible, with the title continued, and each candidate is
measured in a real instance in the real frame, since that's the only reliable way to know what fits. Slide counters fill
themselves in, list slides use Figma's own list formatting so wrapped items hang-indent properly, and a preview panel
shows every slide before anything touches the document, outlining the ones that will shrink or split.

Built with **TypeScript** against the Figma plugin API, with no network access at all.
