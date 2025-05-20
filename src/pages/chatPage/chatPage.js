import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/chatPage/chatPage.css';

const dummyRooms = [
  {
    id: 1,
    name: '찢어진 정장',
    owner: '김철수',
    image: '/product.png',
    status: '대여 가능',
    scheduleDate: '',
    schedulePlace: '',
    messages: [
      {
        id: 1,
        user: '상대',
        text: '네, 판매 중입니다.',
        time: '2025-05-02T13:24:00',
        isMe: false
      },
      {
        id: 2,
        user: '나',
        text: '내일 직거래 가능할까요?',
        time: '2025-05-03T13:25:00',
        isMe: true
      }
    ]
  }
];

function ChatPage() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState(dummyRooms);
  const [currentRoomId, setCurrentRoomId] = useState(1);
  const [messages, setMessages] = useState(dummyRooms[0].messages);
  const [input, setInput] = useState('');
  const [files, setFiles] = useState([]);
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [scheduleDate, setScheduleDate] = useState('');
  const [schedulePlace, setSchedulePlace] = useState('');
  const fileRef = useRef();
  const scrollRef = useRef();

  const currentRoom = rooms.find(r => r.id === currentRoomId);

  useEffect(() => {
    const updatedRoom = rooms.find(r => r.id === currentRoomId);
    if (updatedRoom) setMessages(updatedRoom.messages);
  }, [currentRoomId, rooms]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const formatDateLabel = (isoString) => {
    const date = new Date(isoString);
    return `${date.getFullYear()}년 ${String(date.getMonth() + 1).padStart(2, '0')}월 ${String(date.getDate()).padStart(2, '0')}일`;
  };

  const formatTime = (isoString) => {
    const date = new Date(isoString);
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const isAM = hours < 12;
    const formattedHour = hours % 12 || 12;
    return `${isAM ? '오전' : '오후'} ${formattedHour}:${minutes}`;
  };

  const shouldShowDate = (current, previous) => {
    const currDate = new Date(current).toDateString();
    const prevDate = previous ? new Date(previous).toDateString() : null;
    return currDate !== prevDate;
  };

  const handleSend = () => {
    if (!input.trim() && files.length === 0) return;

    const now = new Date();
    const newMessages = [];

    if (input.trim()) {
      newMessages.push({
        id: messages.length + newMessages.length + 1,
        user: '나',
        text: input,
        image: null,
        time: now.toISOString(),
        isMe: true
      });
    }

    if (files.length) {
      newMessages.push(
        ...files.map((f, i) => ({
          id: messages.length + newMessages.length + i + 1,
          user: '나',
          text: null,
          image: URL.createObjectURL(f),
          time: now.toISOString(),
          isMe: true
        }))
      );
    }

    const updatedRooms = rooms.map(room =>
      room.id === currentRoomId
        ? { ...room, messages: [...room.messages, ...newMessages] }
        : room
    );

    setRooms(updatedRooms);
    setMessages(prev => [...prev, ...newMessages]);
    setInput('');
    setFiles([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    const now = new Date();
    const statusMessage = {
      id: messages.length + 1,
      user: '시스템',
      text: `"${currentRoom.name}"의 상태가 "${newStatus}"(으)로 변경되었습니다.`,
      time: now.toISOString(),
      isMe: false
    };

    const updatedRooms = rooms.map(room =>
      room.id === currentRoomId
        ? { ...room, status: newStatus, messages: [...room.messages, statusMessage] }
        : room
    );

    setRooms(updatedRooms);
    setMessages(updatedRooms.find(r => r.id === currentRoomId).messages);
  };

  const handleScheduleSubmit = () => {
    if (!scheduleDate || !schedulePlace) {
      alert('날짜와 장소를 입력하세요.');
      return;
    }

    const now = new Date();
    const encodedPlace = encodeURIComponent(schedulePlace);
    const mapUrl = `https://www.google.com/maps?q=${encodedPlace}&output=embed`;
    const formattedDateTime = scheduleDate.replace('T', ' ').slice(0, 16);

    const scheduleMessage = {
      id: messages.length + 1,
      user: '나',
      map: mapUrl,
      scheduleDateTime: formattedDateTime,
      schedulePlace: schedulePlace,
      time: now.toISOString(),
      isMe: true
    };

    const systemMessage = {
      id: messages.length + 2,
      user: '시스템',
      text: `"${currentRoom.name}"의 상태가 "예약중"으로 자동 변경되었습니다.`,
      time: now.toISOString(),
      isMe: false
    };

    const updatedRooms = rooms.map(room =>
      room.id === currentRoomId
        ? {
            ...room,
            messages: [...room.messages, scheduleMessage, systemMessage],
            scheduleDate,
            schedulePlace,
            status: '예약중'
          }
        : room
    );

    setRooms(updatedRooms);
    setMessages(updatedRooms.find(r => r.id === currentRoomId).messages);
    setShowScheduleForm(false);
    setScheduleDate('');
    setSchedulePlace('');
  };

  const handleScheduleDelete = () => {
    const now = new Date();
    const systemMessages = [
      {
        id: messages.length + 1,
        user: '시스템',
        text: '일정이 삭제되었습니다.',
        time: now.toISOString(),
        isMe: false
      },
      {
        id: messages.length + 2,
        user: '시스템',
        text: `"${currentRoom.name}"의 상태가 "대여 가능"으로 자동 변경되었습니다.`,
        time: now.toISOString(),
        isMe: false
      }
    ];

    const updatedRooms = rooms.map(room =>
      room.id === currentRoomId
        ? {
            ...room,
            messages: [...room.messages.filter(msg => !msg.map), ...systemMessages],
            scheduleDate: '',
            schedulePlace: '',
            status: '대여 가능'
          }
        : room
    );

    setRooms(updatedRooms);
    setMessages(updatedRooms.find(r => r.id === currentRoomId).messages);
  };

  return (
    <div className="chatpage-container">
      {/* 좌측 채팅방 목록 */}
      <div className="chat-sidebar">
        <div className="main-logo" onClick={() => navigate('/mainpage')}>
          <span className="black">SPOT</span><span className="light animated">LIGHT</span>
        </div>
        {rooms.map(room => (
          <div key={room.id} className={`chat-room ${room.id === currentRoomId ? 'active' : ''}`}
            onClick={() => setCurrentRoomId(room.id)}>
            <strong>{room.owner}</strong><br />
            {room.name}<br />
            상태: {room.status}
          </div>
        ))}
      </div>

      {/* 우측 채팅창 */}
      <div className="chat-main">
        <div className="chat-header">
          <img src={currentRoom.image} alt="상품" className="product-img" />
          <div className="chat-info">
            <div className="owner">{currentRoom.owner}</div>
            <div className="title">{currentRoom.name}</div>
            {currentRoom.scheduleDate && currentRoom.schedulePlace && (
              <div className="schedule">
                📅 {currentRoom.scheduleDate.replace('T', ' ').slice(0, 16)} · 📍 {currentRoom.schedulePlace}
                <button onClick={handleScheduleDelete}>❌ 삭제</button>
              </div>
            )}
          </div>
          <div className="status-buttons">
            {['대여 가능', '대여중', '예약중', '대여완료'].map(status => (
              <button key={status}
                onClick={() => handleStatusChange({ target: { value: status } })}
                className={currentRoom.status === status ? 'active' : ''}>
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={msg.id}>
              {shouldShowDate(msg.time, idx > 0 ? messages[idx - 1].time : null) && (
                <div className="date-label">{formatDateLabel(msg.time)}</div>
              )}
              <div className={`message ${msg.isMe ? 'me' : 'other'}`}>
                {msg.text && (
                  <>
                    {msg.user === '시스템' && msg.text.includes('상태가') ? (
                      <div className="system-status">{msg.text}</div>
                    ) : (
                      <>
                        <div className="text">{msg.text}</div>
                        <div className="timestamp">{formatTime(msg.time)}</div>
                      </>
                    )}
                  </>
                )}
                {msg.image && <img src={msg.image} alt="첨부" className="image" />}
                {msg.map && (
                  <div className="map-container">
                    <iframe title="지도" src={msg.map} allowFullScreen loading="lazy" />
                    <div className="map-info">📅 {msg.scheduleDateTime} · 📍 {msg.schedulePlace}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={scrollRef} />
        </div>

        {showScheduleForm && (
          <div className="schedule-form">
            <input type="datetime-local" value={scheduleDate} onChange={(e) => setScheduleDate(e.target.value)} />
            <input type="text" value={schedulePlace} placeholder="장소 입력" onChange={(e) => setSchedulePlace(e.target.value)} />
            <button onClick={handleScheduleSubmit}>등록</button>
          </div>
        )}

        <div className="chat-input">
          <button onClick={() => setShowScheduleForm(prev => !prev)}>📅</button>
          <input type="text" value={input} placeholder="메시지 입력" onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} />
          <button onClick={() => fileRef.current.click()}>📷</button>
          <input type="file" ref={fileRef} style={{ display: 'none' }} multiple
            onChange={(e) => {
              const selected = Array.from(e.target.files);
              if (selected.length) setFiles(selected);
              fileRef.current.value = null;
            }} />
          <button onClick={handleSend}>전송</button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;