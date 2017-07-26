webpackJsonp([277],{"./node_modules/json-loader/index.js!./.cache/json/api-genlex-html.json":function(e,n){e.exports={data:{file:{relativePath:"api/Genlex.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Gc.html" title="Gc">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Hashtbl.html" title="Hashtbl">Next</a>\n</div>\n<h1>Module <a href="type_Genlex.html">Genlex</a></h1>\n\n<pre><span class="keyword">module</span> Genlex: sig .. end</pre><div class="info module top">\nA generic lexical analyzer.\n<p>\n\n   This module implements a simple &apos;standard&apos; lexical analyzer, presented\n   as a function from character streams to token streams. It implements\n   roughly the lexical conventions of OCaml, but is parameterized by the\n   set of keywords of your language.\n</p><p>\n\n   Example: a lexer suitable for a desk calculator is obtained by\n   </p><pre class="codepre">     let lexer = make_lexer [&quot;+&quot;;&quot;-&quot;;&quot;*&quot;;&quot;/&quot;;&quot;let&quot;;&quot;=&quot;; &quot;(&quot;; &quot;)&quot;]  </pre>\n<p>\n\n   The associated parser would be a function from <code class="code">token stream</code>\n   to, for instance, <code class="code">int</code>, and would have rules such as:\n</p><p>\n\n   </p><pre class="codepre">           let rec parse_expr = parser\n             | [&lt; n1 = parse_atom; n2 = parse_remainder n1 &gt;] -&gt; n2\n           and parse_atom = parser\n             | [&lt; &apos;Int n &gt;] -&gt; n\n             | [&lt; &apos;Kwd &quot;(&quot;; n = parse_expr; &apos;Kwd &quot;)&quot; &gt;] -&gt; n\n           and parse_remainder n1 = parser\n             | [&lt; &apos;Kwd &quot;+&quot;; n2 = parse_expr &gt;] -&gt; n1+n2\n             | [&lt; &gt;] -&gt; n1\n   </pre>\n<p>\n\n   One should notice that the use of the <code class="code">parser</code> keyword and associated\n   notation for streams are only available through camlp4 extensions. This\n   means that one has to preprocess its sources <i>e. g.</i> by using the\n   <code class="code">&quot;-pp&quot;</code> command-line switch of the compilers.<br>\n</p></div>\n<hr width="100%">\n\n<pre><span class="keyword">type</span> token = </pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Kwd of string</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Ident of string</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Int of int</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Float of float</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>String of string</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>|</code></td>\n<td align="left" valign="top">\n<code>Char of char</code></td>\n\n</tr></tbody></table>\n\n<div class="info ">\nThe type of tokens. The lexical classes are: <code class="code">Int</code> and <code class="code">Float</code>\n   for integer and floating-point numbers; <code class="code">String</code> for\n   string literals, enclosed in double quotes; <code class="code">Char</code> for\n   character literals, enclosed in single quotes; <code class="code">Ident</code> for\n   identifiers (either sequences of letters, digits, underscores\n   and quotes, or sequences of &apos;operator characters&apos; such as\n   <code class="code">+</code>, <code class="code">*</code>, etc); and <code class="code">Kwd</code> for keywords (either identifiers or\n   single &apos;special characters&apos; such as <code class="code">(</code>, <code class="code">}</code>, etc).<br>\n</div>\n\n\n<pre><span class="keyword">let</span> make_lexer: list string =&gt; Stream.t char =&gt; Stream.t token;\n</pre><div class="info ">\nConstruct the lexer function. The first argument is the list of\n   keywords. An identifier <code class="code">s</code> is returned as <code class="code">Kwd s</code> if <code class="code">s</code>\n   belongs to this list, and as <code class="code">Ident s</code> otherwise.\n   A special character <code class="code">s</code> is returned as <code class="code">Kwd s</code> if <code class="code">s</code>\n   belongs to this list, and cause a lexical error (exception\n   <code class="code">Stream.Error</code> with the offending lexeme as its parameter) otherwise.\n   Blanks and newlines are skipped. Comments delimited by <code class="code">(*</code> and <code class="code">*)</code>\n   are skipped as well, and can be nested. A <code class="code">Stream.Failure</code> exception\n   is raised if end of stream is unexpectedly reached.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Genlex.html"}}}});
//# sourceMappingURL=path---api-genlex-html-a328c0920610c8db6d46.js.map