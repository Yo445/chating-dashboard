import { Phone, Video, MoreHorizontal, Paperclip, Smile, Send } from 'lucide-react';

const ChatArea = (): JSX.Element => {
  return (
    <div className="flex-1 flex flex-col h-full rounded-lg overflow-hidden mt-14 lg:mt-0">
      {/* Header */}
      <div className="flex items-center justify-between p-4 lg:p-6 bg-gray-200 border-b shadow-sm">
        <div className="flex items-center">
          <img
            src="https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Round&facialHairType=BeardMedium&facialHairColor=Platinum&clotheType=ShirtScoopNeck&clotheColor=Gray02&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Tanned"
            alt="Alec Thompson"
            className="w-12 h-12 rounded-full ring-2 ring-white shadow-md"
          />
          <div className="ml-4">
            <div className="font-semibold text-gray-800">Alec Thompson</div>
            <div className="text-sm text-green-500 font-medium">Active now</div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="p-3 hover:bg-gray-100 rounded-xl transition-colors hidden sm:block">
            <Phone className="text-gray-600" size={20} />
          </button>
          <button className="p-3 hover:bg-gray-100 rounded-xl transition-colors hidden sm:block">
            <Video className="text-gray-600" size={20} />
          </button>
          <button className="p-3 hover:bg-gray-100 rounded-xl transition-colors">
            <MoreHorizontal className="text-gray-600" size={20} />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 lg:p-6 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-end">
            <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none p-4 max-w-md shadow-md">
              <p>Hey! How are you?</p>
              <span className="text-xs text-blue-100 block mt-2">4:46 pm</span>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <img
              src="https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Round&facialHairType=BeardMedium&facialHairColor=Platinum&clotheType=ShirtScoopNeck&clotheColor=Gray02&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Tanned"
              alt="Alec"
              className="w-10 h-10 rounded-full ring-2 ring-white shadow-md mt-1"
            />
            <div className="bg-white rounded-2xl rounded-tl-none p-4 max-w-md shadow-md">
              <p>Good, I will book the meeting room for you.</p>
              <span className="text-xs text-gray-400 block mt-2">12:20 pm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 lg:p-6 bg-white border-t">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center bg-gray-50 rounded-2xl p-3 shadow-sm">
            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <Paperclip className="text-gray-500" size={20} />
            </button>
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-transparent outline-none px-4 py-1 text-sm sm:text-base"
            />
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                <Smile className="text-gray-500" size={20} />
              </button>
              <button className="p-2 hover:bg-blue-100 rounded-xl transition-colors">
                <Send className="text-blue-600" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
