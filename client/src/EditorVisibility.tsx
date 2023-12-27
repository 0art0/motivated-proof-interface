import * as React from 'react'
import { faDedent, faIndent } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EditorVisibilityToggle:React.FC<{editorVisible:boolean, setEditorVisible:(value: React.SetStateAction<boolean>) => void}> =
  ({editorVisible, setEditorVisible}) => {
    return <span className="nav-link" onClick={(ev) => {
        console.log("Toggling editor view ...")
        setEditorVisible(!editorVisible) }}>
      <FontAwesomeIcon icon={editorVisible ? faDedent : faIndent } />
      {editorVisible ? " Hide editor " : " Show editor "}
    </span>
  }

export default EditorVisibilityToggle
