import React from "react";
import { Editor, EditorState, RichUtils } from 'draft-js'
import { stateToHTML } from "draft-js-export-html";
import { stateFromHTML } from 'draft-js-import-html';
import { BlockStyleControls } from "./BlockStyleControls";
import { InlineStyleControls } from "./InlineStyleControls";
import './RichText.css'

export default function RichTextEditor({ setRichContent, defaultValue }) {
    const [editorState, setEditorState] = React.useState(() => EditorState.createWithContent(stateFromHTML(defaultValue)))

    React.useEffect(() => {
        setEditorState(() => EditorState.createWithContent(stateFromHTML(defaultValue)))
    }, [defaultValue])

    const focusRef = React.useRef(null);

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
        setRichContent(stateToHTML(editorState.getCurrentContent()))
    }

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
            onEditorStateChange(newState);
            return 'handled';
        }

        return 'not-handled';
    }

    const onTab = (e) => {
        const maxDepth = 4;
        onEditorStateChange(RichUtils.onTab(e, editorState, maxDepth));
    }

    const toggleBlockType = (blockType) => {
        onEditorStateChange(
            RichUtils.toggleBlockType(
                editorState,
                blockType
            )
        );
    }

    const toggleInlineStyle = (inlineStyle) => {
        onEditorStateChange(
            RichUtils.toggleInlineStyle(
                editorState,
                inlineStyle
            )
        );
    }

    const focus = () => {
        if (focusRef.current)
            focusRef.current.focus()
    }

    const styleMap = {
        CODE: {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
            fontSize: 16,
            padding: 2,
        },
    };

    const getBlockStyle = (block) => {
        if (block.getType() === 'blockquote')
            return 'RichEditor-blockquote'
        return ''
    }

    let className = 'RichEditor-editor';
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
            className += ' RichEditor-hidePlaceholder';
        }
    }

    return (
        <div className="RichEditor-root">
            <BlockStyleControls
                editorState={editorState}
                onToggle={toggleBlockType}
            />
            <InlineStyleControls
                editorState={editorState}
                onToggle={toggleInlineStyle}
            />
            <div className={className} onClick={focus} role="presentation">
                <Editor
                    blockStyleFn={getBlockStyle}
                    customStyleMap={styleMap}
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    onChange={onEditorStateChange}
                    onTab={onTab}
                    ref={focusRef}
                    spellCheck
                />
            </div>
        </div>
    )
}