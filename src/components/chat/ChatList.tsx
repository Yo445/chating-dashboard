import { Search, MoreHorizontal, } from 'lucide-react';



const users = [
  { id: 1, name: 'Kathryn Murphy', message: "Hey! there I'm...", time: '12:20 pm', avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesarSidePart&accessoriesType=Sunglasses&hatColor=PastelGreen&hairColor=Platinum&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=Hoodie&clotheColor=PastelRed&eyeType=EyeRoll&eyebrowType=UpDownNatural&mouthType=Tongue&skinColor=DarkBrown' },
  { id: 2, name: 'Felecia Rower', message: "Hey! there I'm...", time: '12:20 pm', avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Round&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=PastelOrange&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=ScreamOpen&skinColor=Tanned' },
  { id: 3, name: 'Aileen Chavez', message: "Hey! there I'm...", time: '12:20 pm', avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Sunglasses&hairColor=Blonde&facialHairType=MoustacheMagnum&facialHairColor=BlondeGolden&clotheType=ShirtCrewNeck&clotheColor=Blue02&eyeType=Surprised&eyebrowType=RaisedExcitedNatural&mouthType=Twinkle&skinColor=Light' },
  { id: 4, name: 'Alec Thompson', message: "Hey! there I'm...", time: '12:20 pm', avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Round&facialHairType=BeardMedium&facialHairColor=Platinum&clotheType=ShirtScoopNeck&clotheColor=Gray02&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Tanned' },
  { id: 5, name: 'Murphy Aileen', message: "Hey! there I'm...", time: '12:20 pm', avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=PastelYellow&hairColor=BlondeGolden&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Heather&graphicType=Bat&eyeType=WinkWacky&eyebrowType=SadConcernedNatural&mouthType=Tongue&skinColor=Brown'},
  { id: 5, name: 'Murphy Aileen', message: "Hey! there I'm...", time: '12:20 pm', avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=PastelYellow&hairColor=BlondeGolden&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Heather&graphicType=Bat&eyeType=WinkWacky&eyebrowType=SadConcernedNatural&mouthType=Tongue&skinColor=Brown'},
  { id: 5, name: 'Murphy Aileen', message: "Hey! there I'm...", time: '12:20 pm', avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=PastelYellow&hairColor=BlondeGolden&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Heather&graphicType=Bat&eyeType=WinkWacky&eyebrowType=SadConcernedNatural&mouthType=Tongue&skinColor=Brown'},
  { id: 5, name: 'Murphy Aileen', message: "Hey! there I'm...", time: '12:20 pm', avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=PastelYellow&hairColor=BlondeGolden&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Heather&graphicType=Bat&eyeType=WinkWacky&eyebrowType=SadConcernedNatural&mouthType=Tongue&skinColor=Brown'},
  { id: 5, name: 'Murphy Aileen', message: "Hey! there I'm...", time: '12:20 pm', avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=PastelYellow&hairColor=BlondeGolden&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Heather&graphicType=Bat&eyeType=WinkWacky&eyebrowType=SadConcernedNatural&mouthType=Tongue&skinColor=Brown'},
  { id: 5, name: 'Murphy Aileen', message: "Hey! there I'm...", time: '12:20 pm', avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=PastelYellow&hairColor=BlondeGolden&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Heather&graphicType=Bat&eyeType=WinkWacky&eyebrowType=SadConcernedNatural&mouthType=Tongue&skinColor=Brown'},
  { id: 5, name: 'Murphy Aileen', message: "Hey! there I'm...", time: '12:20 pm', avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=PastelYellow&hairColor=BlondeGolden&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Heather&graphicType=Bat&eyeType=WinkWacky&eyebrowType=SadConcernedNatural&mouthType=Tongue&skinColor=Brown'},
  { id: 5, name: 'Murphy Aileen', message: "Hey! there I'm...", time: '12:20 pm', avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=PastelYellow&hairColor=BlondeGolden&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Heather&graphicType=Bat&eyeType=WinkWacky&eyebrowType=SadConcernedNatural&mouthType=Tongue&skinColor=Brown'},
  { id: 5, name: 'Murphy Aileen', message: "Hey! there I'm...", time: '12:20 pm', avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=PastelYellow&hairColor=BlondeGolden&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Heather&graphicType=Bat&eyeType=WinkWacky&eyebrowType=SadConcernedNatural&mouthType=Tongue&skinColor=Brown'},
  { id: 5, name: 'Murphy Aileen', message: "Hey! there I'm...", time: '12:20 pm', avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=PastelYellow&hairColor=BlondeGolden&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Heather&graphicType=Bat&eyeType=WinkWacky&eyebrowType=SadConcernedNatural&mouthType=Tongue&skinColor=Brown'},
  { id: 5, name: 'Murphy Aileen', message: "Hey! there I'm...", time: '12:20 pm', avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=PastelYellow&hairColor=BlondeGolden&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Heather&graphicType=Bat&eyeType=WinkWacky&eyebrowType=SadConcernedNatural&mouthType=Tongue&skinColor=Brown'},
  { id: 5, name: 'Murphy Aileen', message: "Hey! there I'm...", time: '12:20 pm', avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=PastelYellow&hairColor=BlondeGolden&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Heather&graphicType=Bat&eyeType=WinkWacky&eyebrowType=SadConcernedNatural&mouthType=Tongue&skinColor=Brown'},
];

const ChatList = (): JSX.Element => {
  return (
    <div className="fixed lg:static bg-white h-full rounded-md overflow-hidden z-30 transition-transform duration-300 transform flex flex-col">
      <div className="p-6 border-b mt-14 lg:mt-0 rounded-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <img
              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=Hoodie&clotheColor=Red&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Pale"
              alt="Profile"
              className="w-12 h-12 rounded-full ring-2 ring-white shadow-md"
            />
            <div className="ml-3">
              <div className="font-semibold text-gray-800">Jane Cooper</div>
              <div className="text-sm text-green-500 font-medium">Available</div>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <MoreHorizontal className="text-gray-500" size={20} />
          </button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
          />
        </div>
      </div>
      
      {/* Scrollable user list */}
      <div className="flex-1 overflow-y-auto max-h-[calc(90vh-10rem)]"> {/* Adjust based on your layout */}
  {users.map((user) => (
    <div key={user.id} className="p-4 hover:bg-gray-200 cursor-pointer transition-colors border-b">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-12 h-12 rounded-full ring-2 ring-white shadow-sm"
        />
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="font-semibold text-gray-800">{user.name}</div>
            <div className="text-sm text-gray-500">{user.time}</div>
          </div>
          <div className="text-sm text-gray-500">{user.message}</div>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};



export default ChatList;
