import ProfileCard from './ProfileCard';

const UserProfile = () => {
  const profiles = [
    {
      name: 'John Doe',
      imageSrc: '../../../../public/assets/person.png',
      location: 'New York',
      patientId: 'P12345',
      phone: '+1 123 456 7890',
      age: 30,
      bloodGroup: 'O+',
    },
    {
      name: 'Jane Smith',
      imageSrc: '../../../../public/assets/person.png',
      location: 'Los Angeles',
      patientId: 'P67890',
      phone: '+1 234 567 8901',
      age: 25,
      bloodGroup: 'AB-',
    },
    {
      name: 'Jane Smith',
      imageSrc: '../../../../public/assets/person.png',
      location: 'Los Angeles',
      patientId: 'P67890',
      phone: '+1 234 567 8901',
      age: 25,
      bloodGroup: 'AB-',
    },
    {
      name: 'Jane Smith',
      imageSrc: '../../../../public/assets/person.png',
      location: 'Los Angeles',
      patientId: 'P67890',
      phone: '+1 234 567 8901',
      age: 25,
      bloodGroup: 'AB-',
    },
  ];

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          imageSrc={profile.imageSrc}
          location={profile.location}
          patientId={profile.patientId}
          phone={profile.phone}
          age={profile.age}
          bloodGroup={profile.bloodGroup}
        />
      ))}
    </div>
  );
};

export default UserProfile;
