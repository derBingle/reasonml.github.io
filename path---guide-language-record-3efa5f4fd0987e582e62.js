webpackJsonp([21],{"./node_modules/json-loader/index.js!./.cache/json/guide-language-record.json":function(e,a){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:20}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:10}}}},{node:{relativePath:"guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extra Goodies",order:30}}}},{node:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Global Installation",order:10}}}},{node:{relativePath:"guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:0}}}},{node:{relativePath:"guide/editor-tools/supported-editors.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:20}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:4}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/language/array.md",childMarkdownRemark:{frontmatter:{title:"Array",order:90}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/language/conditionals.md",childMarkdownRemark:{frontmatter:{title:"Conditionals",order:110}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring & Pattern Matching",order:130}}}},{node:{relativePath:"guide/language/externals.md",childMarkdownRemark:{frontmatter:{title:"Externals",order:170}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:1}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/javascript/syntax-cheetsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax cheetsheet",order:1}}}},{node:{relativePath:"guide/language/list.md",childMarkdownRemark:{frontmatter:{title:"List",order:80}}}},{node:{relativePath:"guide/language/modules.md",childMarkdownRemark:{frontmatter:{title:"Modules",order:180}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/language/types.md",childMarkdownRemark:{frontmatter:{title:"Types!",order:120}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant",order:70}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/functions.md",childMarkdownRemark:{frontmatter:{title:"Functions",order:100}}}},{node:{relativePath:"guide/language/let-bindings.md",childMarkdownRemark:{frontmatter:{title:"Let Bindings",order:10}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:5}}}}]},file:{relativePath:"guide/language/record.md",childMarkdownRemark:{html:'<p>Records are a set of named values. They resemble "objects" but are</p>\n<ul>\n<li>lighter</li>\n<li>immutable by default</li>\n<li>fixed in field names and types</li>\n<li>veeeery fast</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> person = {age: int, name: string}; <span class="hljs-comment">/* type */</span>\n<span class="hljs-keyword">let</span> me = {age: <span class="hljs-number">30</span>, name: <span class="hljs-string">"Jordan"</span>}; <span class="hljs-comment">/* value */</span>\nprint_string me.name; <span class="hljs-comment">/* field access */</span></code></pre>\n      </div>\n<p><strong>Note</strong>: Records must have a type definition.</p>\n<p>New records can be created from old records with the <code>...</code> spread operator. The\noriginal record isn\'t mutated.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> meNextYear = {...me, age: me.age + <span class="hljs-number">1</span>};</code></pre>\n      </div>\n<p><strong>Note</strong>: spread cannot add new fields.</p>\n<h3 id="syntax-shorthand-sugar"><a href="#syntax-shorthand-sugar" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Syntax shorthand (sugar)</h3>\n<p>To reduce redundancy, we provide <strong>punning</strong> for a record\'s types and values. You can use it when the name of a record field matches the name of its value/type.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> horsePower = {power: int, metric: bool};\n\n<span class="hljs-keyword">let</span> metric = <span class="hljs-literal">true</span>;\n<span class="hljs-keyword">let</span> someHorsePower = {power: <span class="hljs-number">10</span>, metric};\n<span class="hljs-comment">/* same as the value {power: 10, metric: metric}; */</span>\n\n<span class="hljs-keyword">type</span> car = {name: string, horsePower};\n<span class="hljs-comment">/* same as the type {name: string, horsePower: horsePower}; */</span></code></pre>\n      </div>\n<p><strong>Note</strong>: there\'s no punning for a single record field! <code>{foo}</code> doesn\'t do what you expect (it\'s a block that returns the value <code>foo</code>).</p>\n<h3 id="mutable-fields"><a href="#mutable-fields" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mutable Fields</h3>\n<p>Record fields can optionally be mutable. This allows you to update those fields in-place with the <code>=</code> operator.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> person = {\n  name: string,\n  <span class="hljs-keyword">mutable</span> age: int\n};\n<span class="hljs-keyword">let</span> me = {name: <span class="hljs-string">"Jordan"</span>, age: <span class="hljs-number">30</span>};\nme.age = me.age + <span class="hljs-number">1</span>; <span class="hljs-comment">/* alter `me`. Happy birthday! */</span></code></pre>\n      </div>',frontmatter:{title:"Record"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/language/record.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-language-record-3efa5f4fd0987e582e62.js.map