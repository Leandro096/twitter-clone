import { useEffect, useRef } from 'react'
import data from '@emoji-mart/data'

function Picker(props = {}) {
  const ref = useRef()

  useEffect(() => {
    import('emoji-mart').then((EmojiMart) => {
      new EmojiMart.Picker({ ...addEmoji, data, ref })
      const addEmoji = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
      };
    })
  }, [])

  return <div ref={ref}></div>
}

export default Picker;