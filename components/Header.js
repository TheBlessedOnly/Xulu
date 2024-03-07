import {BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchCircleIcon, UserIcon} from "@heroicons/react/solid"
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() { 
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className=" flex flex-grow justify-evenly max-w-xl ">
            <HeaderItem title="HOME" Icon={HomeIcon} />
            <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
            <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
            <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
            <HeaderItem title="SEARCH" Icon={SearchCircleIcon} />
            <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div> 
        <div>
            <Image src="https://links.papareact.com/qd3"
            className="object-contain"
             width={80} height={30}
            />
        </div>
    </header>

  )
}

export default Header