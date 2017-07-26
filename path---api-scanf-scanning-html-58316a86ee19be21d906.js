webpackJsonp([208],{"./node_modules/json-loader/index.js!./.cache/json/api-scanf-scanning-html.json":function(n,e){n.exports={data:{file:{relativePath:"api/Scanf.Scanning.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar">&#xA0;<a class="up" href="Scanf.html" title="Scanf">Up</a>\n&#xA0;</div>\n<h1>Module <a href="type_Scanf.Scanning.html">Scanf.Scanning</a></h1>\n\n<pre><span class="keyword">module</span> Scanning: sig .. end</pre><hr width="100%">\n\n<pre><span class="keyword">type</span> in_channel;\n</pre>\n<div class="info ">\nThe notion of input channel for the <code class="code">Scanf</code> module:\n   those channels provide all the machinery necessary to read from a given\n   <code class="code">Pervasives.in_channel</code> value.\n   A <code class="code">Scanf.Scanning.in_channel</code> value is also called a <i>formatted input\n   channel</i> or equivalently a <i>scanning buffer</i>.\n   The type <code class="code">scanbuf</code> below is an alias for <code class="code">in_channel</code>.<br>\n<b>Since</b> 3.12.0<br>\n</div>\n\n\n<pre><span class="keyword">type</span> scanbuf = in_channel;\n</pre>\n<div class="info ">\nThe type of scanning buffers. A scanning buffer is the source from which a\n    formatted input function gets characters. The scanning buffer holds the\n    current state of the scan, plus a function to get the next char from the\n    input, and a token buffer to store the string matched so far.\n<p>\n\n    Note: a scanning action may often require to examine one character in\n    advance; when this &apos;lookahead&apos; character does not belong to the token\n    read, it is stored back in the scanning buffer and becomes the next\n    character yet to be read.<br>\n</p></div>\n\n\n<pre><span class="keyword">let</span> stdin: in_channel;\n</pre><div class="info ">\nThe standard input notion for the <code class="code">Scanf</code> module.\n    <code class="code">Scanning.stdin</code> is the formatted input channel attached to\n    <code class="code">Pervasives.stdin</code>.\n<p>\n\n    Note: in the interactive system, when input is read from <code class="code">stdin</code>, the\n    newline character that triggers the evaluation is incorporated in the\n    input; thus, the scanning specifications must properly skip this\n    additional newline character (for instance, simply add a <code class="code">&apos;\\n&apos;</code> as the\n    last character of the format string).<br>\n<b>Since</b> 3.12.0<br>\n</p></div>\n\n<pre><span class="keyword">type</span> file_name = string;\n</pre>\n<div class="info ">\nA convenient alias to designate a file name.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n\n\n<pre><span class="keyword">let</span> open_in: file_name =&gt; in_channel;\n</pre><div class="info ">\n<code class="code">Scanning.open_in fname</code> returns a formatted input channel for bufferized\n    reading in text mode from file <code class="code">fname</code>.\n<p>\n\n    Note:\n    <code class="code">open_in</code> returns a formatted input channel that efficiently reads\n    characters in large chunks; in contrast, <code class="code">from_channel</code> below returns\n    formatted input channels that must read one character at a time, leading\n    to a much slower scanning rate.<br>\n<b>Since</b> 3.12.0<br>\n</p></div>\n\n<pre><span class="keyword">let</span> open_in_bin: file_name =&gt; in_channel;\n</pre><div class="info ">\n<code class="code">Scanning.open_in_bin fname</code> returns a formatted input channel for\n    bufferized reading in binary mode from file <code class="code">fname</code>.<br>\n<b>Since</b> 3.12.0<br>\n</div>\n\n<pre><span class="keyword">let</span> close_in: in_channel =&gt; unit;\n</pre><div class="info ">\nCloses the <code class="code">Pervasives.in_channel</code> associated with the given\n  <code class="code">Scanning.in_channel</code> formatted input channel.<br>\n<b>Since</b> 3.12.0<br>\n</div>\n\n<pre><span class="keyword">let</span> from_file: file_name =&gt; in_channel;\n</pre><div class="info ">\nAn alias for <code class="code">open_in</code> above.<br>\n</div>\n\n<pre><span class="keyword">let</span> from_file_bin: string =&gt; in_channel;\n</pre><div class="info ">\nAn alias for <code class="code">open_in_bin</code> above.<br>\n</div>\n\n<pre><span class="keyword">let</span> from_string: string =&gt; in_channel;\n</pre><div class="info ">\n<code class="code">Scanning.from_string s</code> returns a formatted input channel which reads\n    from the given string.\n    Reading starts from the first character in the string.\n    The end-of-input condition is set when the end of the string is reached.<br>\n</div>\n\n<pre><span class="keyword">let</span> from_function: (unit =&gt; char) =&gt; in_channel;\n</pre><div class="info ">\n<code class="code">Scanning.from_function f</code> returns a formatted input channel with the\n    given function as its reading method.\n<p>\n\n    When scanning needs one more character, the given function is called.\n</p><p>\n\n    When the function has no more character to provide, it <em>must</em> signal an\n    end-of-input condition by raising the exception <code class="code">End_of_file</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> from_channel: Pervasives.in_channel =&gt; in_channel;\n</pre><div class="info ">\n<code class="code">Scanning.from_channel ic</code> returns a formatted input channel which reads\n    from the regular input channel <code class="code">ic</code> argument, starting at the current\n    reading position.<br>\n</div>\n\n<pre><span class="keyword">let</span> end_of_input: in_channel =&gt; bool;\n</pre><div class="info ">\n<code class="code">Scanning.end_of_input ic</code> tests the end-of-input condition of the given\n    formatted input channel.<br>\n</div>\n\n<pre><span class="keyword">let</span> beginning_of_input: in_channel =&gt; bool;\n</pre><div class="info ">\n<code class="code">Scanning.beginning_of_input ic</code> tests the beginning of input condition of\n    the given formatted input channel.<br>\n</div>\n\n<pre><span class="keyword">let</span> name_of_input: in_channel =&gt; string;\n</pre><div class="info ">\n<code class="code">Scanning.name_of_input ic</code> returns the name of the character source\n    for the formatted input channel <code class="code">ic</code>.<br>\n<b>Since</b> 3.09.0<br>\n</div>\n\n<pre><span class="keyword">let</span> stdib: in_channel;\n</pre><div class="info ">\nA deprecated alias for <code class="code">Scanning.stdin</code>, the scanning buffer reading from\n    <code class="code">Pervasives.stdin</code>.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Scanf.Scanning.html"}}}});
//# sourceMappingURL=path---api-scanf-scanning-html-58316a86ee19be21d906.js.map