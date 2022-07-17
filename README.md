# gx
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/container-technology/gx/Deploy)
[![Discord](https://img.shields.io/discord/932647002368516118)](https://discord.gg/JqM8hm88st)

Seamlessly integrate a *saying hi in #general functionality* into any project

### API
Complete [API Documentation](https://container-technology.github.io/gx/)

### Usage

`npm install @containertechnology/gx --save` or `yarn add @containertechnology/gx`

```
import gx from '@containertechnology/gx';

const TIMEZONE = 'America/Vancouver';

const time = new Date();
const hi = gx(time, TIMEZONE);

console.log(hi);
```

