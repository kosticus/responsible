export function MessageItem({ client_id, user_id, id, text, time, }) {
  return (
    <div className="MessageInfoItem clear">
    {
      client_id === user_id
        ? <div className="outgoing">{ time } { text }</div>
        : <div className="incoming">{ time } { text }</div>
    }
    </div>
  );
};
