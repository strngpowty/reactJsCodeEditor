import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as CodeMirror } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

export default function Editor( props ) {
    const {language, displayName, value, onChange } = props

    const [open,setOpen] = useState(true)

    function handleChange( editor, data, value){
        onChange(value)
    }

    return (
        <div className={`editorPane ${open ? '' : 'collapsed'}`}>
            <div className="editorName">
                {displayName}
                <button onClick = {() => setOpen(open => !open)} className='exColBtn' type="button"> 
                    <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            < CodeMirror
                value={value}
                onBeforeChange={handleChange}
                className="codeMirrorWrapper"
                options={
                    {
                        lineWrapping: true,
                        lint: true,
                        mode: language,
                        theme: 'material',
                        lineNumbers: true
                    }
                }
            />
        </div>
    );
}
