# 01_Basics
The first project is simple. Read through each script and run it on the Tessel using the [CLI](https://github.com/tessel/t1-docs/blob/master/cli.md), e.g:
```sh
# install dependencies before running sketches
npm install

tessel run 01_Start.js
```
**Note**: that `tessel run` runs the script while the tessel is connected to your computer (allowing for interactive output via the terminal), while `tessel push` deploys your code. To explore the CLI, try `tessel --help`

### Dependencies
- [delay-ms](https://github.com/thelostspore/delay-ms)

### Troubleshooting
Make sure the `tessel` command is available in your shell:
```sh
# check your node version, tessel v1 only works with 0.10 and 0.12
# install one of those versions or better yet, use nvm
node -v

# If this command does not exist, run `npm install -g tessel`
# or refer to the Tessel installation docs: http://start.tessel.io/install
tessel --help

```
