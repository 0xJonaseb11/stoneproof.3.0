"use client";

import Image from "next/image";
import Link from "next/link";
import { normalize } from "viem/ens";
import { useAccount, useEnsAvatar } from "wagmi";
import { BlockieAvatar } from "~~/components/scaffold-eth";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { address: connectedAddress } = useAccount();
  const ensAvatarResult = useEnsAvatar({
    name: normalize("wevm.eth"),
  });

  return (
    <main className="w-full max-w-4xl mx-auto sm:px-0 px-3">
      <div className="py-5 flex justify-between">
        <Link href={`/dashboard`} className="sm:block hidden">
          <Image src={`/logo_dark.svg`} alt="Stoneproof" width={160} height={52} />
        </Link>
        <Link href={`/dashboard`} className="sm:hidden block">
          <Image src={`/logo_small.svg`} alt="Stoneproof" width={50} height={40} />
        </Link>
        <div>
          <Link href={`/account`}>
            <BlockieAvatar address={connectedAddress || ""} size={36} ensImage={ensAvatarResult.data} />
          </Link>
        </div>
      </div>
      {children}
    </main>
  );
}
