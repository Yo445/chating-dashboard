import { User, Mail, Phone, Bell, Lock, HelpCircle, LogOut } from 'lucide-react';

const ProfileSection = () => {
  const menuItems = [
    { icon: Bell, label: 'Notifications', badge: 3 },
    { icon: Lock, label: 'Privacy' },
    { icon: HelpCircle, label: 'Help & Support' },
    { icon: LogOut, label: 'Log Out', danger: true },
  ];

  return (
    <div className="h-full bg-white rounded-xl border-l flex flex-col ">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-gray-800">Profile</h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-6">
          <div className="flex flex-col items-center">
          <img
            src="https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Round&facialHairType=BeardMedium&facialHairColor=Platinum&clotheType=ShirtScoopNeck&clotheColor=Gray02&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Tanned"
            alt="Alec Thompson"
            className="w-24 h-24 rounded-full mx-auto mb-4 ring-4 ring-white"
          />
            <h3 className="text-xl font-semibold text-gray-900">John Doe</h3>
            <p className="text-sm text-green-500 font-medium">Online</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <User className="w-5 h-5 text-gray-500" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Username</p>
                <p className="font-medium text-gray-900">@johndoe</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Mail className="w-5 h-5 text-gray-500" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-900">john@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Phone className="w-5 h-5 text-gray-500" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-gray-900">+1 234 567 890</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  item.danger
                    ? 'text-red-600 hover:bg-red-50'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;