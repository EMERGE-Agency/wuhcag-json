Web Content Accessibility Guidelines (WCAG) 2.0 JSON
===============

The WCAG 2.0 guidelines in JSON format. This special release of the WCAG Guidelines in JSON format has been supplemented with content from the [Wuhcag.com checklist](https://www.wuhcag.com/wcag-checklist/) courtesy of [Luke McGrath](https://www.wuhcag.com/about/).

You will find the JSON file in `dist/wcag.json` along with a minified version here `dist/wcag.min.json`

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
		wuhcag_related:
			- "..."
```
