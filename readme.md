#tipunov.com web site sources.

Building of project is managed with **grunt**.

## How to start (*nix)
* `git clone https://github.com/atipunov/tipunov.com.git`
* `cd YOUR_PROJECT_DIRECTORY`
* `chmod +x install-deps.sh`
* `chmod +x install-env.sh`
* `sh ./install-env.sh` *Requires root access*, if you have gulp installed, skip it.
* `sh ./install-deps.sh` *Should work without root access.*
* `gulp` - Should run do some work on building examples.

## Implemented grunt commands
* `gulp watch` - watch scss and live compile to css.
* `grunt clean` - remove all build results.
* `grunt build` - build project(clean,  then compile less and js).

## List of dependencies(npm)
* gulp
* a lot of gulp plugins
* angular
* angular-route
