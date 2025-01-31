import {
  MapPin,
  Users,
  Globe,
  Facebook,
  Twitter,
  Instagram
} from "lucide-react";



const ProfileSection = (): JSX.Element => {
  return (
    <div className={`fixed lg:static h-full overflow-hidden z-30 transition-transform duration-300 transform right-0`}>

      <div className=" flex flex-col rounded-xl bg-white">
        <div className="p-8 text-center border-b mt-14 lg:mt-0 rounded-tl-3xl">
          <h2 className="text-xl font-bold text-gray-800 mb-6">About</h2>
          <img
            src="https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Round&facialHairType=BeardMedium&facialHairColor=Platinum&clotheType=ShirtScoopNeck&clotheColor=Gray02&eyeType=Squint&eyebrowType=Default&mouthType=Default&skinColor=Tanned"
            alt="Alec Thompson"
            className="w-24 h-24 rounded-full mx-auto mb-4 ring-4 ring-white"
          />
          <h3 className="text-xl font-bold text-gray-800">Alec Thompson</h3>
          <p className="text-gray-500 mt-1">Full Stack Developer</p>
        </div>

        <div className="flex-1 overflow-y-auto p-6 max-h-[calc(93vh-260px)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <MapPin className="text-gray-500 mr-3 text-lg" />
                <span className="font-medium text-gray-700">Location</span>
                <span className="ml-auto text-gray-600">Bangladesh</span>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <Users className="text-gray-500 mr-3 text-lg" />
                <span className="font-medium text-gray-700">Members since</span>
                <span className="ml-auto text-gray-600">Oct 2021</span>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <Globe className="text-gray-500 mr-3 text-lg" />
                <span className="font-medium text-gray-700">Language</span>
                <span className="ml-auto text-gray-600">English</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                <Facebook className="mr-3 text-lg" />
                <span className="font-medium text-gray-700">Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                <Twitter className="mr-3 text-lg" />
                <span className="font-medium text-gray-700">Twitter</span>
              </a>
              <a
                href="#"
                className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                <Instagram className="mr-3 text-lg" />
                <span className="font-medium text-gray-700">Instagram</span>
              </a>
            </div>

            <div>
              <h4 className="text-gray-500 font-medium mb-4">
                Shared documents
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
                {[1, 2].map(i =>
                  <div
                    key={i}
                    className="bg-gray-100 rounded-2xl aspect-video hover:bg-gray-200 transition-colors cursor-pointer shadow-sm"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;









<div className="space-y-8">
<div className="space-y-4">
  <div className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
    <MapPin className="text-gray-500 mr-3 text-lg" />
    <span className="font-medium text-gray-700">Location</span>
    <span className="ml-auto text-gray-600">Bangladesh</span>
  </div>
  <div className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
    <Users className="text-gray-500 mr-3 text-lg" />
    <span className="font-medium text-gray-700">Members since</span>
    <span className="ml-auto text-gray-600">Oct 2021</span>
  </div>
  <div className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
    <Globe className="text-gray-500 mr-3 text-lg" />
    <span className="font-medium text-gray-700">Language</span>
    <span className="ml-auto text-gray-600">English</span>
  </div>
</div>

<div className="space-y-3">
  <a
    href="#"
    className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
  >
    <Facebook className="mr-3 text-lg" />
    <span className="font-medium text-gray-700">Facebook</span>
  </a>
  <a
    href="#"
    className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
  >
    <Twitter className="mr-3 text-lg" />
    <span className="font-medium text-gray-700">Twitter</span>
  </a>
  <a
    href="#"
    className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
  >
    <Instagram className="mr-3 text-lg" />
    <span className="font-medium text-gray-700">Instagram</span>
  </a>
</div>

<div>
  <h4 className="text-gray-500 font-medium mb-4">
    Shared documents
  </h4>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
    {[1, 2].map(i =>
      <div
        key={i}
        className="bg-gray-100 rounded-2xl aspect-video hover:bg-gray-200 transition-colors cursor-pointer shadow-sm"
      />
    )}
  </div>
</div>
</div>