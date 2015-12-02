WUHCAG-JSON - Web Content Accessibility Guidelines (WCAG) 2.0
===============

This project is based on the wonderful web accessibility content found at [www.wuhcag.com](http://www.wuhcag.com) and written by Luke McGrath in combination with the work from the [W3C's WCAG 2.0 Guidelines](http://www.w3.org/TR/WCAG20/).

## Mission
We wanted to get the WCAG 2.0 guidelines into JSON format. We also love the work Luke McGrath did by "translating" the guidelines into content that is easier to understand so we thought it would be cool to combine the two and make them available to the world.

## JSON File
You will find the [JSON file](https://github.com/EmergeInteractive/wuhcag-json/blob/master/dist/wcag.json) in `dist/wcag.json` along with a minified version here `dist/wcag.min.json`. The file contains all of the W3C WCAG 2.0 guidelines along with custom content from Luke McGrath's [Accessibility Checklist](https://www.wuhcag.com/wcag-checklist/).

## Contributing
The project is [Grunt](http://gruntjs.com/)-based and leverages YAML partial files that are converted to JSON format and then compressed into a single file.

You should only edit `/src/*.yml` files. When ready to build run the `grunt build` command. If you get errors double check your YAML formatting. Be sure to only use **spaces** in the .yml files and NOT tabs.

### Setup
`npm install` will setup the required modules
`grunt build` will build the JSON files.

### Build
`grunt build` This task will read all YAML files and convert them

## Yaml outline:
``` yaml
guidelines:
	1.1.1:
		id: "..."
		title: "..."
		description: "..."
		uri: "http://www.w3.org/TR/WCAG20/#text-equiv-all"
		techniques:
			- "..."
		wuhcag_summary: "..."
		wuhcag_detail: |
			...
		wuhcag_tips: |
		  ...
		wuchcag_exceptions: |
		  ...
		wuhcag_related:
			- "..."
```

This project is based on the wonderful web accessibility content found at <a href="http://www.wuhcag.com">www.wuhcag.com</a> and written by Luke McGrath.

This project is licensed under a <a href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.
