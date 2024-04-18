
import { useEffect } from 'react';
import { Avatar } from '@mui/material';
import { MessageList } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import { useGetChatListByUserId } from '../../../../../hooks/experts/useGetChatListByUserId';

export default function CaChatView() {
  const { data, isLoading, isError } = useGetChatListByUserId(16, 10);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data || !data.data.chatList) return <div>Error fetching data</div>;

  // Custom itemRenderer to render each message with avatar
  const customItemRenderer = (message) => (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      {message.position === 'left' && (
        <Avatar alt={message.title} src={message.image} style={{ marginRight: '8px'}} />
      )}
      <div style={{ flex: 1 }}>{message.chat_message}</div> 
      {message.position === 'right' && (
        <Avatar alt={message.title} src={message.image} style={{ marginLeft: '8px' }} />
      )}
    </div>
  );

  return (
    <div style={{ height: '400px', overflowY: 'auto' }}>
      <MessageList
        className='message-list'
        dataSource={data?.data?.chatList.map((message) => ({
          position: message.from_user_id === 16 ? 'left' : 'right',
          text: message.chat_message, 
          avatar: `https://example.com/avatar${message.from_user_id === 16 ? '1' : '2'}.png`
        }))} 
        itemRenderer={customItemRenderer}
      />
    </div>
  );
}
