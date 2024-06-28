# Prototype

It should not be used in production


# Modify Components

- clone project
- start story book `npm run storybook`
- modify the components in code
- watch changes
- commit and push changes



# Usage in other projects

Add dependency to package.json

```json
"dependencies": {
		"storybook": "git+https://github.com/tuxfy/storybook.git"
},
```

Install dependency

```json
npm install
```

Use the components in your react app

```
import { Button } from 'storybook'
```
