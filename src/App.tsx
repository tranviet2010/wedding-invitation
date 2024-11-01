import React, { useState } from 'react';
import './style.css';

interface InvitationProps {
  names: string;
  guestName: string;
  address: string;
  time: string;
  date: string;
  message: string;
}

const EditableText: React.FC<{ value: string; onChange: (value: string) => void; className: string }> = ({ value, onChange, className }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleBlur = () => {
    setIsEditing(false);
    onChange(inputValue);
  };

  return isEditing ? (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={(e) => e.key === 'Enter' && handleBlur()}
      autoFocus
      className={`hidden-input ${className}`} // Apply class for custom styling
    />
  ) : (
    <span onClick={() => setIsEditing(true)} className={`editable-text ${className}`}>
      {value}
    </span>
  );
};

const WeddingInvitation: React.FC = () => {
  const [invitation, setInvitation] = useState<InvitationProps>({
    names: 'Eric Nguyễn & Thảo My',
    guestName: 'Hiếu',
    address: '370 Đường 02 tháng 9, Quận Hải Châu, Đà Nẵng',
    time: '07:30 AM',
    date: 'Thứ 6, ngày 10/02/2023',
    message: 'Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi!',
  });

  const handleChange = (field: keyof InvitationProps) => (value: string) => {
    setInvitation((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="invitation-card">
      <h2>Wedding Invitation</h2>
      <p>Save The Date</p>
      <EditableText value={invitation.names} onChange={handleChange('names')} className="names" />
      <p>TRÂN TRỌNG KÍNH MỜI</p>
      <EditableText value={invitation.guestName} onChange={handleChange('guestName')} className="guest-name" />
      <p>Đến dự buổi tiệc chung vui cùng gia đình chúng tôi tại</p>
      <EditableText value={invitation.address} onChange={handleChange('address')} className="address" />
      <p>VÀO LÚC <EditableText value={invitation.time} onChange={handleChange('time')} className="time" /></p>
      <p>THỨ, <EditableText value={invitation.date} onChange={handleChange('date')} className="date" /></p>
      <EditableText value={invitation.message} onChange={handleChange('message')} className="message" />
    </div>
  );
};

export default WeddingInvitation;



// get image : https://in.pinterest.com/pin/8303580557954048/

// goc: https://my-eric.iwedding.info/invitation/670be5c974eaa55233012798?v=1730300358140&fbclid=IwY2xjawGRT1pleHRuA2FlbQIxMAABHcZXU0v6kk7mUwKJ8Y7G_iRGS3bv8SB2VRBtPI__hhc5vnrx9f5rFriZaQ_aem_T9jz4qBVkJgNwp7Q8WassA