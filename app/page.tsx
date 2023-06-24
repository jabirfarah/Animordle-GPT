'use client'
 
import { useChat, UseChatOptions } from 'ai/react'
import Header from './components/header'
export default function Chat() {

  const { messages, input, handleInputChange, handleSubmit } = useChat()
  
  return (
    <>
      <Header />
      <div className=' '>
        <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
        
          {messages.map(m => (
            <div key={m.id}>
              {m.role === 'user' ? 'User: ' : 'AI: '}
              {m.content}
            </div>
          ))}
      
          <form onSubmit={handleSubmit} className=''>
            <label className=''>
              Say something...
              <input
                className="fixed w-full  max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2"
                value={input}
                onChange={handleInputChange}
                placeholder='Say something...'
              />
            </label>
            <button className='' type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  )
}