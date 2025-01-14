import { useState,useRef,useEffect } from "react"

export const Textarea = () => {
    const [textarea, setTextarea] = useState("")
    const textareaRef = useRef <HTMLTextAreaElement>(null)
    useEffect(() =>{
    const inputTextarea = textareaRef.current;
        if (inputTextarea) {
            inputTextarea.style.height="auto"
            inputTextarea.style.height=`${inputTextarea.scrollHeight}px`
        }
    },[textarea])

  return (
    <div className="w-full mx-auto">
      <textarea
        ref={textareaRef}
        value={textarea}
        onChange={(e) => setTextarea(e.target.value)}
        className="w-full p-4 text-lg border border-gray-300 rounded-md resize-none overflow-hidden"
        
      />
    </div>
  )
}
