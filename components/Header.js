import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
function Header() {
  const router = useRouter();
  const searchRefInput = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchRefInput.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.co.uz/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
          alt="google"
          width={120}
          height={40}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />

        <form
          className="flex border flex-grow border-gray-200 rounded-full 
        shadow-lg px-6 py-3 ml-10 mr-5 max-w-3xl items-center"
        >
          <input
            type="text"
            className="flex-grow w-full focus:outline-none"
            ref={searchRefInput}
          />
          <XIcon
            className="cursor-pointer to-gray-500 h-7 sm:mr-3 transition duration-100 transform hover:scale-125"
            onClick={() => (searchRefInput.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 " />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url={
            "https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320166578424287581.png"
          }
        />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
