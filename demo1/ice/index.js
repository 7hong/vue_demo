import Vue from 'vue'

import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
//Vue.use(VueCodemirror)

new Vue({
    components:{codemirror},
    el: '#root',
    template:  `<div>
    <codemirror v-model="code" :options="cmOption"></codemirror>
    </div>
    `,
    data(){
        return {
            code :"这是代码",
            cmOption: {
                tabSize: 4,
                styleActiveLine: false,
                lineNumbers: true,
                styleSelectedText: false,
                line: true,
                foldGutter: true,
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
                mode: 'text/javascript',
                // hint.js options
                hintOptions:{
                  // 当匹配只有一项的时候是否自动补全
                  completeSingle: false
                },
                //快捷键 可提供三种模式 sublime、emacs、vim
                keyMap: "sublime",
                matchBrackets: true,
                showCursorWhenSelecting: true,
                theme: "monokai",
                extraKeys: { "Ctrl": "autocomplete" }
              }
        }
    },
    mounted() {
        setTimeout(() => {
          this.styleSelectedText =  true,
          this.cmOption.styleActiveLine = true
        }, 1800)
      }
})