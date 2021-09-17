<html>
<style>
html,div,body{
    background-color:#1a1a1a;
    font-family: 'IBM Plex Sans', sans-serif;
}
.content h2,h3,h4
{
    font-family: 'IBM Plex Sans', sans-serif;
    background-color:#1a1a1a;
}
.content h2,p{
    color:#fff;
    font-family: 'IBM Plex Sans', sans-serif;
}
.content p{
  font-family: 'IBM Plex Sans', sans-serif;  
  font:15px;
  color: #fff;
}
pre{
    background-color:#d9dbde;
    color:#000;
    font-family: 'IBM Plex Sans', sans-serif;
    font:12px;
}
.content h4{
    color:#fff;
}
.content h6{
    font-family: 'IBM Plex Sans', sans-serif;
    background-color:#1a1a1a;
    color:#fff;
}
.content h3{
    font-family: 'IBM Plex Sans', sans-serif;
    color: #2a67f5;
    background-color:#1a1a1a;
}
ul, ol,b{ 
    font-family: 'IBM Plex Sans', sans-serif;
    color: #fff;
}
#ul1{
  font-family: 'IBM Plex Sans', sans-serif;
    color: #fff;
}
.button.is-dark.is-medium {
  font-family: 'IBM Plex Sans', sans-serif;
  background-color: #1a1a1a;
  border-color: white;
  color: #fff;
}
.button.is-dark.is-medium:hover {
  font-family: 'IBM Plex Sans', sans-serif;
  background-color: #2a67f5;
  border-color: white;
  color: #fff;
}
.title.is-3{
  font-family: 'IBM Plex Sans', sans-serif;
  color:#fff;
}
.subtitle.is-4{
    font-family: 'IBM Plex Sans', sans-serif;
    color:#fff;
}

</style>
<body style="font-family: 'IBM Plex Sans', sans-serif;background-color:#1a1a1a;">
<div style="font-family: 'IBM Plex Sans', sans-serif;background-color:#1a1a1a;">
<h2 class="title is-3 ">Bot app for IBM® Devloper Playground</h2>
<h3>Intended Audience IBMers, Business Partners, and IBM clients via seller. </h3>
<p>Try out the Sample Application</p>

<li>Get App Code</li><br/>
<a class="button is-dark is-medium" title="Get App Code" href="didact://?commandId=vscode.didact.sendNamedTerminalAString&text=nodejs%20terminal$$git%20clone%20https://github.com/nupurnegi/bot_app.git">Get App code</a><br><br>

<h3>Goto app/server/boot/02-load-users.js<br/>
Uncomment the line createDefaultUsers(); at line(8)<br/>
And save the file</h3>
<br/>
<h3>Rename .env.example in app folder to .env<br/>
Add your cloudant URL in .env file<br/>
And save the file</h3>

<br/><li> Start server side app</li><br/>
<a class="button is-dark is-medium" title="Start Server" href="didact://?commandId=vscode.didact.sendNamedTerminalAString&text=nodejs%20terminal$$cd%20bot_app/app;npm%20install;npm%20start;">Start Server</a><br/><br/>

<h3>Copy the URL generated<br/><br/>
Add it to client/src/environments/environment.ts at line(11 & 13)<br/>
Add save the file<br/><br/>
Add the URL to client/src/assets/env.js at line(6 & 7)<br/>
Add save the file<br/><br/>
Add the URL to post.js at line(51)<br/>
Add save the file</h3>

<h3>Go back to app/server/boot/02-load-users.js<br/>
Comment the line createDefaultUsers(); line(8)<br/>
And save the file</h3>

<br/><li> Build Client side app</li><br/>
<a class="button is-dark is-medium" title="Build Client" href="didact://?commandId=vscode.didact.sendNamedTerminalAString&text=nodejs%20terminal1$$cd%20bot_app/client;npm%20install;npm%20install%20-g%20@angular/cli;ng%20build;">Build Client</a><br/><br/>

<br/><li> Start Client side app</li><br/>
<a class="button is-dark is-medium" title="Start Client" href="didact://?commandId=vscode.didact.sendNamedTerminalAString&text=nodejs%20terminal1$$ng%20serve">Start Client</a><br/><br/>

<br/><li> Send Mapping</li><br/>
<a class="button is-dark is-medium" title="Send Mapping" href="didact://?commandId=vscode.didact.sendNamedTerminalAString&text=nodejs%20terminal2$$cd%20bot_app;npm%20install%20axios;node%20post.js">Send Mapping</a><br/><br/>

</ol>
<br/>

</div>
</body>
</html>
