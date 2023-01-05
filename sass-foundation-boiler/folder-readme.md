# Sass foundation boiler folder
I dont follow the  usual folder scss vs js folder separation. As I find it quite annoying. Most of my practice, the JS from foundation is just one file... of one line! No need its own folder. While the scss quickly get very nested. So I reduce the scss nesting already by one level.

## File structure
- app.scss: where all the SCSS imports happen. Values can be commented out to limit the size of the compiled dist. It can be a time saver. 
- app.js: where all the JS imports happen. Same idea as app.scss.
- _settings.scss: as proposed in Foundation 6 to override the default values of styling by assigning other values to existing foundation SASS variables. There are 100s of variables in there. In the repo are the original values and varibales and should be kept so.
- index.html: to open in a light weight live server directly from Vs code to view the website.
- gruntfile.js: to compile sass code and foundation into a CSS files to style the html - CSS goes in dist folder that is ingored by git.
- src/_mixins.scss: to play with functions including breakpoints.
- src/_UI_components.scss: to play with

## Javascript
This is meant mostly for CSS restyling work. Should JS be played around with, first thing should be to check... if they properly load on the index.html file and the right files are there for what is intended.
    Probably wrong and should be ../
    <script src="node_modules/jquery/dist/jquery.js"></script>
    <script src="node_modules/what-input/dist/what-input.js"></script>
    <script src="node_modules/foundation-sites/dist/js/foundation.js"></script>
    Probably right
    <script src="app.js"></script>

