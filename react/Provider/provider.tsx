import React, { FC, useState } from 'react'

import Context from '../Context/context'

const Provider: FC = (props) => {
  const [button, setButton] = useState(1)
  const [name, setName] = useState('')
  const [html, setHtml] = useState('')
  const [file, setFile] = useState({ files: null, result: null })
  const [text, setText] = useState('')

  function chooseFile(files: any) {
    setFile({ ...file, ...{ result: files } })
  }

  return (
    <Context.Provider
      value={{
        button,
        setButton,
        name,
        setName,
        html,
        setHtml,
        chooseFile,
        file,
        text,
        setText,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default Provider
