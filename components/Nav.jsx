"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signout, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);
  useEffect(() => {
    //sign in using google and next-auth
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);
 
  return (
    <nav className=" mb-1 pt-3  w-full">
      <div className=" flex justify-between ">
        <Link href="/" className="flex-between  object-contain">
          <Image
            src="/assets/images/logo.svg"
            width={30}
            height={30}
            className="flex gap-2"
          />
          <p className="logo_text">CentePrompt</p>
        </Link>
        <div className="sm:hidden flex">
          {session?.user ? (
            <div className="flex gap-6 md:gap-5">
              <Link href="/create-prompt" className="black_btn">
                Create Post
              </Link>
              <button type="button" className="outline_btn"
              onClick={()=>{
                signout()
              }}
              >
                Sign Out
              </button>
              <Link href="/profile">
                <Image
                  src={session?.user?.image}
                  className="rounded-full"
                  width={37}
                  height={37}
                  alt="profile"
                />
              </Link>
            </div>
          ) : (
            <>
              {
                //map through provider state,which has google auth provider
                providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      key={provider?.name}
                      onClick={() => signIn(provider?.id)} //call signout with provider id
                      className="black_btn"
                    >
                      
                      Sign in
                    </button>
                  ))
              }
            </>
          )}
        </div>
        {console.log(session?.user)}
        {console.log(providers)}
        {/* mobile nav */}
        <Link href="/create-prompt" className="mt-5 w-0.25 black_btn">
                  Create Prompt
                </Link>
        {session?.user ? (
          <div className="hidden sm:flex relative">
            <Image
              src={session?.user?.image}
              width={30}
              height={30}
              className="flex gap-2 rounded"
              onClick={() => {
                setToggleDropDown((prev) => !prev);
              }}
            />

            {toggleDropDown && (
              <div className="dropdown">
                <Link href="/profile" className="profile">
                  My profile
                </Link>

                <Link href="/create-prompt" className="profile">
                  Create Prompt
                </Link>

                <button
                  type="button"
                  className="mt-5 w-full black_btn"
                  onClick={() => {
                    setToggleDropDown(false);
                    signout();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {
              //map through provider state,which has google auth provider
              providers &&
                Object.values(providers).map((provider) => (
                  <button
                    key={provider?.name}
                    onClick={() => signIn(provider?.id)} //call signout with provider id
                    className="black_btn"
                  >
                    {" "}
                    Sign in
                  </button>
                ))
            }
          </>
        )}
      </div>
    </nav>
  );
};
export default Nav;
