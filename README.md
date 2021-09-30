# Deploy a Social Link App at Netlify

Create a React site that saves useful links (title,url) in a JSON file, displays them on a page, and fetchs links from other similar sites.

## Instructions

### Make a site that displays useful links:

- create-react-app
- create JSON file called `data/links.json` of links you find useful with the following format:

```json
[
	{
		"title": "ttttttttttttttttttttttttt",
		"url": "https://uuuuuuuuuuuuuuuuuuuu"
	},
	{
		"title": "ttttttttttttttttttttttttt",
		"url": "https://uuuuuuuuuuuuuuuuuuuu"
	},
	{
		"title": "ttttttttttttttttttttttttt",
		"url": "https://uuuuuuuuuuuuuuuuuuuu"
  }
]
```

- display links on your site

### Create a repository and fetch from GitHub JSON file:

- create a public repository, e.g. `fbwd01links<yourname>`
- push you code to this repository
- at GitHub, copy **raw link** of the JSON file (begins with `https://raw.githubusercontent.com/`) and then change your code so that you fetch the links data from this URL instead of importing the links from your local JSON file
	- test the fetch by changing the online data
	- (note that it updates after ca. 5 minutes)

### Create a Netlify site:

- publish your repository to Netlify
- change the name of the Netlify site to the same name as your repository, e.g. `fbwd01links<yourname>`
        - test to see that it works the same way

### Create feeds:

- make JSON file called `data/feeds.json` with one item which contains your name and the URL to your links JSON file (you will add more feeds of other people soon):

```json
[
	{
		"name": "<yourname>",
		"linksUrl": "https://raw.githubusercontent.com/.../links.json"
	}
]
```

- import the above feeds file
- instead of fetching your links JSON file directly, loop through your feeds (currently only one: yours) and fetch the `linksUrl`
        - also add your feed name to each of the links which you display
- update your JSX view to display the feed name next to each link
- push an test your site at Netlify

### Share and feeds of others:

- when your site works at Netlify, post your `linksUrl` in our Slack general channel
- as you see others post theri `linksUrl` to Slack, add them to your feeds file so that you display their links as well



# netliyfy-api
# netliyfy-api
# linksSharingAmmar
